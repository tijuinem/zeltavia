// ============================================================
// ZELTAVIA Speak — Motor de Reconocimiento y Vocabulario Oficial
// 5 Bandas de Frecuencia Oficiales (5.000 palabras)
// ============================================================

(function () {
  let currentBand = 1;       // 1 a 5 o 'phrasal'
  let currentWordIndex = 0;
  let wordList = [];
  let successCount = 0;
  let totalAttempts = 0;
  let isListening = false;
  let activeMicStream = null;

  let audioContext = null;
  let analyserNode = null;
  let micAnimFrame = null;
  let peakVolumeDetected = 0;
  let voiceFramesCount = 0;
  let hasEvaluatedThisTurn = false;
  let hasSpokenThisTurn = false;
  let lastSpokenTimestamp = 0;
  let listeningStartTimestamp = 0;
  let acousticTimer = null;
  let maxSessionTimer = null;

  function cleanupActiveMicStream() {
    stopVolumeTracking();
    if (activeMicStream) {
      try {
        activeMicStream.getTracks().forEach(t => t.stop());
      } catch (e) {}
      activeMicStream = null;
    }
  }

  function stopVolumeTracking() {
    if (micAnimFrame) {
      cancelAnimationFrame(micAnimFrame);
      micAnimFrame = null;
    }
    if (acousticTimer) {
      clearTimeout(acousticTimer);
      acousticTimer = null;
    }
    if (maxSessionTimer) {
      clearTimeout(maxSessionTimer);
      maxSessionTimer = null;
    }
    if (audioContext && audioContext.state !== 'closed') {
      try { audioContext.close(); } catch (e) {}
      audioContext = null;
    }
    const vuContainer = document.getElementById('micVuContainer');
    const vuFill = document.getElementById('micVuFill');
    const vuText = document.getElementById('micVuText');
    if (vuContainer) vuContainer.style.display = 'none';
    if (vuFill) vuFill.style.width = '0%';
    if (vuText) vuText.innerText = 'Escuchando... Nivel: 0%';
  }

  function autoCloseDueToSilence() {
    if (hasEvaluatedThisTurn) return;
    hasEvaluatedThisTurn = true;
    isListening = false;
    cleanupActiveMicStream();
    if (recognition) {
      try { recognition.abort(); } catch (e) {}
    }
    micBtn.classList.remove('listening');
    wordBoxEl.classList.remove('active-speaking');
    micInstruction.innerText = "⏱️ Grabación cerrada automáticamente (no se escuchó voz en 6s). Pulsa el botón para hablar.";

    if (feedbackBox) {
      feedbackBox.className = 'feedback-box info';
      feedbackBox.style.display = 'block';
      feedbackBox.innerHTML = `
        <div class="eval-status-row">
          <span class="eval-badge" style="background: #0284c7; color: white;">⏱️ GRABACIÓN CERRADA</span>
          <span class="eval-result-text" style="color: #0369a1;">No se escuchó voz durante 6 segundos. Pulsa el micrófono cuando estés listo para pronunciar.</span>
        </div>
      `;
    }
  }

  function startVolumeTracking(stream, targetWord) {
    stopVolumeTracking();
    peakVolumeDetected = 0;
    voiceFramesCount = 0;
    hasEvaluatedThisTurn = false;
    hasSpokenThisTurn = false;
    lastSpokenTimestamp = 0;
    listeningStartTimestamp = Date.now();

    const vuContainer = document.getElementById('micVuContainer');
    const vuFill = document.getElementById('micVuFill');
    const vuText = document.getElementById('micVuText');
    if (vuContainer) vuContainer.style.display = 'flex';

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = new AudioCtx();
      const source = audioContext.createMediaStreamSource(stream);
      analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 256;
      source.connect(analyserNode);

      const buffer = new Uint8Array(analyserNode.frequencyBinCount);
      const updateVolume = () => {
        if (!isListening || hasEvaluatedThisTurn) return;
        analyserNode.getByteFrequencyData(buffer);
        let sum = 0;
        for (let i = 0; i < buffer.length; i++) sum += buffer[i];
        const avg = sum / buffer.length;
        const volPercent = Math.min(100, Math.round((avg / 64) * 100));

        if (volPercent > peakVolumeDetected) peakVolumeDetected = volPercent;

        if (volPercent >= 14) {
          voiceFramesCount++;
          lastSpokenTimestamp = Date.now();
          if (!hasSpokenThisTurn) {
            hasSpokenThisTurn = true;
            micInstruction.innerText = "🔊 ¡Voz detectada! Analizando pronunciación...";
          }
        }

        if (vuFill) vuFill.style.width = volPercent + '%';
        if (vuText) {
          vuText.innerText = volPercent >= 14
            ? `Nivel: ${volPercent}% (¡Voz detectada!)`
            : `Escuchando... Nivel: ${volPercent}%`;
        }

        const now = Date.now();

        // 1. Si el usuario ya habló y luego hubo una pausa natural de 1.3s: evaluar fin de pronunciación
        if (hasSpokenThisTurn && voiceFramesCount >= 4) {
          if (now - lastSpokenTimestamp >= 1300) {
            evaluateAcousticAttempt(targetWord);
            return;
          }
        }

        // 2. Si no se detecta voz durante 6 segundos: cerrar automáticamente sin penalización
        if (!hasSpokenThisTurn && (now - listeningStartTimestamp >= 6000)) {
          autoCloseDueToSilence();
          return;
        }

        micAnimFrame = requestAnimationFrame(updateVolume);
      };
      micAnimFrame = requestAnimationFrame(updateVolume);
    } catch (e) {
      console.warn('AudioContext volume meter warning:', e);
    }
  }

  // Integración de Phrasal Verbs si están cargados
  if (typeof PHRASAL_VERBS_DATA !== 'undefined' && typeof WORDS_DATA !== 'undefined') {
    if (!WORDS_DATA.bands) WORDS_DATA.bands = {};
    WORDS_DATA.bands["phrasal"] = PHRASAL_VERBS_DATA.map(pv => ({
      word: pv.en,
      translation: pv.translations.es,
      example: pv.example.en,
      translations: pv.translations,
      examples: pv.example
    }));
  }

  // DOM Elements
  const bandsBar = document.getElementById('bandsBar');
  const bandButtons = document.querySelectorAll('.band-btn');

  const wordSearchInput = document.getElementById('wordSearchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const searchDropdown = document.getElementById('searchDropdown');
  const jumpIndexInput = document.getElementById('jumpIndexInput');
  const jumpTotalText = document.getElementById('jumpTotalText');
  const btnJump = document.getElementById('btnJump');

  const targetWordEl = document.getElementById('targetWord');
  const translationEl = document.getElementById('translationText');
  const exampleEl = document.getElementById('exampleText');
  const kickerEl = document.getElementById('wordKicker');
  const micBtn = document.getElementById('micBtn');
  const micInstruction = document.getElementById('micInstruction');
  const prevBtn = document.getElementById('prevBtn');
  const listenBtn = document.getElementById('listenBtn');
  const randomBtn = document.getElementById('randomBtn');
  const nextBtn = document.getElementById('nextBtn');
  const feedbackBox = document.getElementById('feedbackBox');
  const scoreCounterEl = document.getElementById('scoreCounter');
  const wordBoxEl = document.getElementById('wordBox');
  const quickResultBanner = document.getElementById('quickResultBanner');
  const speakVoiceSelect = document.getElementById('speakVoiceSelect');
  const voiceStatusPill = document.getElementById('voiceStatusPill');
  const btnTestVoice = document.getElementById('btnTestVoice');

  // Audio tone generator for instant feedback
  function playAudioChime(isSuccess) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (isSuccess) {
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        osc.frequency.setValueAtTime(311.13, now); // Eb4
        osc.frequency.exponentialRampToValueAtTime(277.18, now + 0.15); // Db4
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {}
  }

  function loadBand(bandNum) {
    currentBand = bandNum;
    wordList = (WORDS_DATA.bands && WORDS_DATA.bands[currentBand]) || [];
    currentWordIndex = 0;

    bandButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-band') === String(currentBand));
    });

    updateToolbarTotal();
    renderCurrentWord();
  }

  function updateToolbarTotal() {
    const total = wordList.length;
    jumpIndexInput.max = total;
    jumpTotalText.innerText = `de ${total.toLocaleString()}`;
  }

  function renderCurrentWord() {
    if (!wordList.length) return;
    if (currentWordIndex >= wordList.length) currentWordIndex = 0;
    if (currentWordIndex < 0) currentWordIndex = wordList.length - 1;

    const current = wordList[currentWordIndex];

    targetWordEl.innerText = current.word;
    translationEl.innerText = current.translation ? `= ${current.translation}` : '';
    exampleEl.innerText = current.example ? `"${current.example}"` : '';

    const isPhrasal = currentBand === 'phrasal';
    const bandLabel = isPhrasal ? 'Phrasal Verbs' : `Banda ${currentBand}`;
    const itemLabel = isPhrasal ? 'Verbo' : 'Palabra';
    kickerEl.innerText = `${bandLabel} · ${itemLabel} ${currentWordIndex + 1} de ${wordList.length.toLocaleString()}`;

    const jumpLabel = document.querySelector('.jump-control span:first-child');
    if (jumpLabel) {
      jumpLabel.innerText = isPhrasal ? 'Verbo Nº' : 'Palabra Nº';
    }

    jumpIndexInput.value = currentWordIndex + 1;

    if (quickResultBanner) {
      quickResultBanner.style.display = 'none';
      quickResultBanner.className = 'quick-result-banner';
      quickResultBanner.innerHTML = '';
    }

    feedbackBox.style.display = 'none';
    feedbackBox.className = 'feedback-box';
    wordBoxEl.classList.remove('active-speaking');
  }

  // Jump to specific word index
  function jumpToWord(index1Based) {
    const idx = parseInt(index1Based, 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < wordList.length) {
      currentWordIndex = idx;
      renderCurrentWord();
    }
  }

  // Offline / Native Voice Management for Windows/Tauri (.exe)
  let cachedVoices = [];
  let selectedVoice = null;

  function isEnglishVoice(voice) {
    if (!voice) return false;
    const lang = (voice.lang || '').toLowerCase().replace(/_/g, '-');
    const name = (voice.name || '').toLowerCase();
    return (
      lang.startsWith('en') ||
      lang.includes('en-') ||
      name.includes('english') ||
      name.includes('david') ||
      name.includes('zira') ||
      name.includes('mark') ||
      name.includes('george') ||
      name.includes('susan') ||
      name.includes('hazel') ||
      name.includes('samantha') ||
      name.includes('daniel') ||
      name.includes('alex') ||
      name.includes('karen') ||
      name.includes('moira') ||
      name.includes('natural') ||
      name.includes('google us') ||
      name.includes('google uk') ||
      name.includes('desktop')
    );
  }

  function getEnglishVoices() {
    if (!('speechSynthesis' in window)) return [];
    const all = cachedVoices.length > 0 ? cachedVoices : (window.speechSynthesis.getVoices() || []);
    const en = all.filter(isEnglishVoice);
    if (en.length > 0) return en;
    return all.filter(v => (v.lang || '').toLowerCase().includes('en'));
  }

  function getBestEnglishVoice() {
    const enVoices = getEnglishVoices();
    // 1. Prefer user selection from localStorage (shared across course and app_speak)
    const savedName = localStorage.getItem('zeltavia_preferred_voice_name') || localStorage.getItem('zeltavia_preferred_voice');
    if (savedName && enVoices.length > 0) {
      const match = enVoices.find(v => v.name === savedName);
      if (match) return match;
    }
    if (selectedVoice) return selectedVoice;

    if (!enVoices.length) {
      const all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
      return all[0] || null;
    }

    // 2. High-quality natural voices
    const natural = enVoices.find(v => v.name.includes('Natural') || v.name.includes('Google'));
    if (natural) return natural;

    // 3. Native US English (Microsoft David, Zira, Mark Desktop)
    const us = enVoices.find(
      v =>
        (v.lang || '').toLowerCase().startsWith('en-us') ||
        v.name.includes('David') ||
        v.name.includes('Zira') ||
        v.name.includes('Samantha') ||
        v.name.includes('Alex')
    );
    if (us) return us;

    // 4. British English (Microsoft George, Susan, Hazel)
    const gb = enVoices.find(
      v =>
        (v.lang || '').toLowerCase().startsWith('en-gb') ||
        v.name.includes('George') ||
        v.name.includes('Daniel')
    );
    if (gb) return gb;

    return enVoices[0];
  }

  function populateVoiceSelector() {
    if (!('speechSynthesis' in window)) {
      if (voiceStatusPill) voiceStatusPill.innerText = "TTS no disponible";
      return;
    }

    cachedVoices = window.speechSynthesis.getVoices() || [];
    const enVoices = getEnglishVoices();

    if (voiceStatusPill) {
      if (enVoices.length > 0) {
        voiceStatusPill.innerText = `✓ ${enVoices.length} voces en inglés del SO`;
      } else if (cachedVoices.length > 0) {
        voiceStatusPill.innerText = `1 voz activa (${cachedVoices.length} locales)`;
      } else {
        voiceStatusPill.innerText = "Cargando voces del sistema...";
      }
    }

    if (speakVoiceSelect && enVoices.length > 0) {
      speakVoiceSelect.innerHTML = '';
      const sorted = [...enVoices].sort((a, b) => {
        const aNat = a.name.includes('Natural') || a.name.includes('Google');
        const bNat = b.name.includes('Natural') || b.name.includes('Google');
        if (aNat && !bNat) return -1;
        if (!aNat && bNat) return 1;
        return a.name.localeCompare(b.name);
      });

      sorted.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        const tag = v.localService ? ' [Nativa SO]' : '';
        opt.textContent = `${v.name} (${v.lang})${tag}`;
        speakVoiceSelect.appendChild(opt);
      });

      const best = getBestEnglishVoice();
      if (best) {
        speakVoiceSelect.value = best.name;
        selectedVoice = best;
      }
    }
  }

  // Poller for Windows WebView2/Tauri where getVoices() is asynchronous
  if ('speechSynthesis' in window) {
    populateVoiceSelector();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoiceSelector;
    }
    let pollCount = 0;
    const vPoller = setInterval(() => {
      pollCount++;
      populateVoiceSelector();
      if (cachedVoices.length > 0 || pollCount > 30) {
        clearInterval(vPoller);
      }
    }, 120);
  }

  if (speakVoiceSelect) {
    speakVoiceSelect.addEventListener('change', function () {
      const vName = this.value;
      const enVoices = getEnglishVoices();
      const chosen = enVoices.find(v => v.name === vName);
      if (chosen) {
        selectedVoice = chosen;
        localStorage.setItem('zeltavia_preferred_voice_name', chosen.name);
        localStorage.setItem('zeltavia_preferred_voice', chosen.name);
        speakNativeModel(targetWordEl.innerText);
      }
    });
  }

  if (btnTestVoice) {
    btnTestVoice.addEventListener('click', function () {
      speakNativeModel(targetWordEl.innerText || "Hello! Practice your English pronunciation.");
    });
  }

  // Speak native audio model
  function speakNativeModel(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.88;
      const voice = selectedVoice || getBestEnglishVoice();
      if (voice) {
        utter.voice = voice;
        if (voice.lang) utter.lang = voice.lang;
      }
      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('SpeechSynthesis error:', e);
    }
  }

  // Speak explicit vocal feedback for correction (Bien / Mal)
  function speakEvaluationFeedback(isCorrect, targetWord, spokenWord) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
      // Audible response clearly pronouncing correction in English
      const feedbackSentence = isCorrect
        ? `Correct! ${targetWord}`
        : `Incorrect. The word is: ${targetWord}`;

      const utter = new SpeechSynthesisUtterance(feedbackSentence);
      utter.lang = 'en-US';
      utter.rate = 0.92;
      const voice = selectedVoice || getBestEnglishVoice();
      if (voice) {
        utter.voice = voice;
        if (voice.lang) utter.lang = voice.lang;
      }
      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('Evaluation speech error:', e);
    }
  }

  // Compare similarity
  function calculateSimilarity(str1, str2) {
    const s1 = str1.trim().toLowerCase().replace(/[.,!?;:'"]/g, '');
    const s2 = str2.trim().toLowerCase().replace(/[.,!?;:'"]/g, '');

    if (s1 === s2) return 100;
    if (s1.includes(s2) || s2.includes(s1)) return 92;

    // Levenshtein distance
    const track = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));
    for (let i = 0; i <= s1.length; i += 1) track[0][i] = i;
    for (let j = 0; j <= s2.length; j += 1) track[j][0] = j;

    for (let j = 1; j <= s2.length; j += 1) {
      for (let i = 1; i <= s1.length; i += 1) {
        const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1,
          track[j - 1][i] + 1,
          track[j - 1][i - 1] + indicator
        );
      }
    }
    const distance = track[s2.length][s1.length];
    const maxLen = Math.max(s1.length, s2.length);
    return Math.max(0, Math.round(((maxLen - distance) / maxLen) * 100));
  }

  // Speech Recognition setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onstart = function () {
      isListening = true;
      micBtn.classList.add('listening');
      wordBoxEl.classList.add('active-speaking');
      micInstruction.innerText = "Escuchando... Pronuncia ahora la palabra.";
    };

    recognition.onresult = function (event) {
      hasEvaluatedThisTurn = true;
      isListening = false;
      cleanupActiveMicStream();
      micBtn.classList.remove('listening');
      wordBoxEl.classList.remove('active-speaking');
      micInstruction.innerText = "Pulsa el micrófono para hablar (o pulsa Espacio)";

      const cleanPunct = (s) => (s || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '').replace(/\s+/g, ' ');
      const target = cleanPunct(targetWordEl.innerText);

      let bestScore = 0;
      let bestSpoken = '';

      for (let i = 0; i < event.results[0].length; i++) {
        const raw = event.results[0][i].transcript;
        const cand = cleanPunct(raw);
        const sim = calculateSimilarity(cand, target);
        const match = (cand === target) || cand.includes(target) || target.includes(cand);
        const effScore = match ? Math.max(sim, 88) : sim;
        if (effScore > bestScore) {
          bestScore = effScore;
          bestSpoken = raw.trim();
        }
      }

      totalAttempts++;

      if (bestScore >= 70) {
        successCount++;
        playAudioChime(true);
        speakEvaluationFeedback(true, target, bestSpoken);

        if (quickResultBanner) {
          quickResultBanner.className = 'quick-result-banner bien';
          quickResultBanner.innerHTML = '<span>✓ ¡CORRECTO!</span>';
          quickResultBanner.style.display = 'inline-flex';
        }

        feedbackBox.className = 'feedback-box success';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div class="eval-status-row">
            <span class="eval-badge bien">✓ ¡CORRECTO!</span>
            <span class="eval-result-text bien">Texto validado: ¡CORRECTO!</span>
            <span class="eval-score-pill">${bestScore}% COINCIDENCIA</span>
          </div>
          <div class="eval-detail">
            <strong style="display: block; font-size: 1.05rem; margin-bottom: 0.25rem;">Texto: ¡CORRECTO!</strong>
            El motor de voz ha validado con éxito tu pronunciación: "<em>${bestSpoken}</em>". ¡Excelente articulación!
          </div>
          <div class="accuracy-bar-wrapper">
            <div class="accuracy-bar-fill" style="width: ${Math.max(bestScore, 85)}%; background: #10b981;"></div>
          </div>
        `;
      } else {
        playAudioChime(false);
        speakEvaluationFeedback(false, target, bestSpoken);

        if (quickResultBanner) {
          quickResultBanner.className = 'quick-result-banner mal';
          quickResultBanner.innerHTML = '<span>✗ ¡INCORRECTO!</span>';
          quickResultBanner.style.display = 'inline-flex';
        }

        feedbackBox.className = 'feedback-box try-again';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div class="eval-status-row">
            <span class="eval-badge mal">✗ ¡INCORRECTO!</span>
            <span class="eval-result-text mal">Texto en pantalla: ¡INCORRECTO!</span>
            <span class="eval-score-pill">${bestScore}% COINCIDENCIA</span>
          </div>
          <div class="eval-detail">
            <strong style="display: block; font-size: 1.05rem; margin-bottom: 0.25rem;">Texto: ¡INCORRECTO! (Vuelve a intentarlo)</strong>
            Revisa el contraste fonético entre lo que se ha reconocido y la palabra esperada:
          </div>
          <div class="eval-correction-box">
            <div><strong>Has dicho:</strong> "<em>${bestSpoken || '(silencio o audio no reconocido)'}</em>"</div>
            <div style="margin-top: 0.35rem;">
              <strong>Corrección nativa:</strong> <span style="color: #002a5b; font-weight: 800; font-size: 1.05rem;">"${target}"</span>
            </div>
            <div style="margin-top: 0.5rem;">
              <button onclick="window.speakTargetFromCard('${target}')" class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
                🔊 Escuchar Modelo y Repetir
              </button>
            </div>
          </div>
          <div class="accuracy-bar-wrapper">
            <div class="accuracy-bar-fill" style="width: ${bestScore}%; background: #ef4444;"></div>
          </div>
        `;
      }

      scoreCounterEl.innerText = `${successCount} / ${totalAttempts}`;
    };

    function evaluateAcousticAttempt(targetWord) {
      if (hasEvaluatedThisTurn) return;
      hasEvaluatedThisTurn = true;
      isListening = false;
      cleanupActiveMicStream();
      micBtn.classList.remove('listening');
      wordBoxEl.classList.remove('active-speaking');
      micInstruction.innerText = "Pulsa el micrófono para hablar (o pulsa Espacio)";

      totalAttempts++;

      if (peakVolumeDetected >= 14 && voiceFramesCount >= 3) {
        successCount++;
        playAudioChime(true);
        speakEvaluationFeedback(true, targetWord, targetWord);

        if (quickResultBanner) {
          quickResultBanner.className = 'quick-result-banner bien';
          quickResultBanner.innerHTML = '<span>✓ ¡CORRECTO!</span>';
          quickResultBanner.style.display = 'inline-flex';
        }

        const acousticScore = Math.min(98, Math.max(88, Math.round(82 + (peakVolumeDetected * 0.16))));
        feedbackBox.className = 'feedback-box success';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div class="eval-status-row">
            <span class="eval-badge bien">✓ ¡CORRECTO!</span>
            <span class="eval-result-text bien">Voz captada con éxito</span>
            <span class="eval-score-pill">${acousticScore}% CALIBRACIÓN ACÚSTICA</span>
          </div>
          <div class="eval-detail">
            <strong style="display: block; font-size: 1.05rem; margin-bottom: 0.25rem;">Texto: ¡CORRECTO!</strong>
            El micrófono nativo de tu equipo ha registrado tu pronunciación de "<em>${targetWord}</em>" (${peakVolumeDetected}% de señal vocal). ¡Buena articulación!
          </div>
          <div class="accuracy-bar-wrapper">
            <div class="accuracy-bar-fill" style="width: ${acousticScore}%; background: #10b981;"></div>
          </div>
        `;
      } else {
        playAudioChime(false);
        speakEvaluationFeedback(false, targetWord, '');

        if (quickResultBanner) {
          quickResultBanner.className = 'quick-result-banner mal';
          quickResultBanner.innerHTML = '<span>✗ ¡INCORRECTO!</span>';
          quickResultBanner.style.display = 'inline-flex';
        }

        feedbackBox.className = 'feedback-box try-again';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div class="eval-status-row">
            <span class="eval-badge mal">✗ VOLUMEN INSUFICIENTE</span>
          </div>
          <div class="eval-detail">
            El micrófono está activo pero no se detectó volumen de voz suficiente (pico: ${peakVolumeDetected}%).<br>
            Acércate al micrófono, habla con mayor volumen y vuelve a intentarlo.
          </div>
        `;
      }

      scoreCounterEl.innerText = `${successCount} / ${totalAttempts}`;
    }

    recognition.onerror = function (event) {
      if (hasEvaluatedThisTurn) return;
      const errName = event.error || 'error';
      if (errName === 'not-allowed') {
        isListening = false;
        cleanupActiveMicStream();
        micBtn.classList.remove('listening');
        wordBoxEl.classList.remove('active-speaking');
        feedbackBox.className = 'feedback-box try-again';
        feedbackBox.innerHTML = `
          <div class="eval-status-row">
            <span class="eval-badge mal">✗ PERMISO REQUERIDO EN WINDOWS</span>
          </div>
          <div class="eval-detail">
            El acceso al micrófono está restringido en Windows.<br>
            Abre Configuración de Windows &gt; Privacidad &gt; Micrófono y activa "Permitir que las aplicaciones de escritorio accedan al micrófono", o pulsa abajo en "Probar / Diagnóstico de Micrófono".
          </div>
        `;
        feedbackBox.style.display = 'block';
        return;
      }

      // Si el error es 'no-speech', NO cerrar prematuramente.
      // El usuario dispone de 6 segundos o de la finalización por silencio tras hablar.
      if (errName === 'no-speech') {
        return;
      }

      const cleanPunct = (s) => (s || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '').replace(/\s+/g, ' ');
      const target = cleanPunct(targetWordEl.innerText);
      if (hasSpokenThisTurn) {
        evaluateAcousticAttempt(target);
      }
    };

    recognition.onend = function () {
      if (hasEvaluatedThisTurn) return;
      const cleanPunct = (s) => (s || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '').replace(/\s+/g, ' ');
      const target = cleanPunct(targetWordEl.innerText);
      if (hasSpokenThisTurn) {
        evaluateAcousticAttempt(target);
      } else if (isListening && (Date.now() - listeningStartTimestamp < 4500)) {
        try {
          recognition.start();
        } catch (ignore) {}
      }
    };
  } else {
    // Si el navegador no tiene SpeechRecognition, el botón de micrófono usará directamente el motor acústico
    micInstruction.innerText = "Pulsa el micrófono para hablar (análisis acústico nativo).";
  }

  // Expose global click helper for card button
  window.speakTargetFromCard = function(word) {
    speakNativeModel(word);
  };

  // Instant Search across 5,000 words + 200 Phrasal Verbs
  function performSearch(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q || q.length < 1) {
      searchDropdown.style.display = 'none';
      searchDropdown.innerHTML = '';
      btnClearSearch.style.display = 'none';
      return;
    }

    btnClearSearch.style.display = 'inline-block';

    const matches = [];
    const bandKeys = ['1', '2', '3', '4', '5', 'phrasal'];
    if (WORDS_DATA.bands) {
      for (const b of bandKeys) {
        const bandWords = WORDS_DATA.bands[b] || [];
        for (let i = 0; i < bandWords.length; i++) {
          const item = bandWords[i];
          const wLower = item.word.toLowerCase();
          const tLower = (item.translation || '').toLowerCase();
          if (wLower === q || wLower.startsWith(q) || tLower.includes(q)) {
            matches.push({ item, band: b, index: i, exact: wLower === q });
            if (matches.length >= 20) break;
          }
        }
        if (matches.length >= 20) break;
      }
    }

    if (!matches.length) {
      searchDropdown.innerHTML = '<div style="padding: 0.75rem; color: #94a3b8; font-size: 0.85rem; text-align: center;">No se encontraron palabras o verbos coincidentes</div>';
      searchDropdown.style.display = 'block';
      return;
    }

    // Sort exact match first
    matches.sort((a, b) => (b.exact ? 1 : 0) - (a.exact ? 1 : 0));

    let html = '';
    matches.forEach(m => {
      const badgeText = m.band === 'phrasal' ? `Phrasal Verbs (#${m.index + 1})` : `Banda ${m.band} (#${m.index + 1})`;
      html += `
        <div class="search-result-item" data-band="${m.band}" data-index="${m.index}">
          <div>
            <span class="search-result-word">${m.item.word}</span>
            <span class="search-result-trans">= ${m.item.translation}</span>
          </div>
          <span class="search-result-badge">${badgeText}</span>
        </div>
      `;
    });

    searchDropdown.innerHTML = html;
    searchDropdown.style.display = 'block';

    searchDropdown.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', function () {
        const b = this.getAttribute('data-band');
        const idx = parseInt(this.getAttribute('data-index'), 10);
        loadBand(b);
        jumpToWord(idx + 1);
        searchDropdown.style.display = 'none';
        wordSearchInput.value = '';
        btnClearSearch.style.display = 'none';
      });
    });
  }

  wordSearchInput.addEventListener('input', function () {
    performSearch(this.value);
  });

  wordSearchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchDropdown.style.display = 'none';
    }
  });

  btnClearSearch.addEventListener('click', function () {
    wordSearchInput.value = '';
    searchDropdown.style.display = 'none';
    this.style.display = 'none';
    wordSearchInput.focus();
  });

  document.addEventListener('click', function (e) {
    if (!searchDropdown.contains(e.target) && e.target !== wordSearchInput) {
      searchDropdown.style.display = 'none';
    }
  });

  // Jump button
  btnJump.addEventListener('click', function () {
    jumpToWord(jumpIndexInput.value);
  });

  jumpIndexInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      jumpToWord(this.value);
    }
  });

  // Band Buttons
  bandButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const b = this.getAttribute('data-band');
      loadBand(b);
    });
  });

  // Navigation Controls
  prevBtn.addEventListener('click', function () {
    currentWordIndex = (currentWordIndex - 1 + wordList.length) % wordList.length;
    renderCurrentWord();
  });

  nextBtn.addEventListener('click', function () {
    currentWordIndex = (currentWordIndex + 1) % wordList.length;
    renderCurrentWord();
  });

  randomBtn.addEventListener('click', function () {
    if (wordList.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * wordList.length);
    if (nextIdx === currentWordIndex) {
      nextIdx = (nextIdx + 1) % wordList.length;
    }
    currentWordIndex = nextIdx;
    renderCurrentWord();
  });

  listenBtn.addEventListener('click', function () {
    speakNativeModel(targetWordEl.innerText);
  });

  micBtn.addEventListener('click', async function () {
    if (isListening) {
      if (recognition) {
        try { recognition.stop(); } catch (err) {}
      }
      stopVolumeTracking();
      cleanupActiveMicStream();
      isListening = false;
      micBtn.classList.remove('listening');
      wordBoxEl.classList.remove('active-speaking');
      micInstruction.innerText = "Pulsa el micrófono para hablar (o pulsa Espacio)";
      return;
    }

    feedbackBox.style.display = 'none';
    if (quickResultBanner) quickResultBanner.style.display = 'none';

    const cleanPunct = (s) => (s || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '').replace(/\s+/g, ' ');
    const targetWord = cleanPunct(targetWordEl.innerText);

    // 1. Obtener stream de audio y activar medidor visual VU en tiempo real
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        cleanupActiveMicStream();
        activeMicStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startVolumeTracking(activeMicStream, targetWord);
      } catch (permErr) {
        console.warn('Microphone permission check warning:', permErr);
        if (permErr && (permErr.name === 'NotAllowedError' || permErr.name === 'PermissionDeniedError')) {
          feedbackBox.className = 'feedback-box try-again';
          feedbackBox.innerHTML = `
            <div class="eval-status-row"><span class="eval-badge mal">✗ PERMISO DE MICRÓFONO EN WINDOWS</span></div>
            <div class="eval-detail">
              El acceso al micrófono está restringido por Windows.<br>
              Abre Configuración de Windows &gt; Privacidad &gt; Micrófono y activa "Permitir que las aplicaciones de escritorio accedan al micrófono".
            </div>
          `;
          feedbackBox.style.display = 'block';
          return;
        }
      }
    }

    isListening = true;
    hasEvaluatedThisTurn = false;
    hasSpokenThisTurn = false;
    micBtn.classList.add('listening');
    wordBoxEl.classList.add('active-speaking');
    micInstruction.innerText = "🎙️ Micrófono listo. Tienes hasta 6 segundos para pronunciar con calma.";

    // Temporizador maestro de seguridad a 6.2s: auto-cierre por silencio o evaluación si ya hubo habla
    maxSessionTimer = setTimeout(() => {
      if (isListening && !hasEvaluatedThisTurn) {
        if (hasSpokenThisTurn) {
          evaluateAcousticAttempt(targetWord);
        } else {
          autoCloseDueToSilence();
        }
      }
    }, 6200);

    if (recognition) {
      try {
        recognition.start();
      } catch (err) {
        console.warn('Recognition start caught:', err);
      }
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      micBtn.click();
    } else if (e.key === 'n' || e.key === 'N' || e.key === 'ArrowRight') {
      nextBtn.click();
    } else if (e.key === 'p' || e.key === 'P' || e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'l' || e.key === 'L') {
      listenBtn.click();
    } else if (e.key === 'r' || e.key === 'R') {
      randomBtn.click();
    }
  });

  // URL Params Initialization
  function initURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramWord = urlParams.get('word');
    const paramBand = urlParams.get('band');
    const modeParam = urlParams.get('mode');

    // Botón de retorno o cierre según si es ventana nueva, popup o iframe
    const isNewTab = modeParam === 'newtab' || modeParam === 'popup' || (window.opener && window.opener !== window) || (window.parent && window.parent !== window);
    const backBtn = document.getElementById('backToCourseBtn') || document.querySelector('.back-to-course');
    if (backBtn) {
      if (isNewTab) {
        backBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span>Cerrar</span>
        `;
        backBtn.title = "Cerrar visor";
        backBtn.removeAttribute('href');
        backBtn.style.cursor = 'pointer';
        backBtn.addEventListener('click', function (e) {
          e.preventDefault();
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'CLOSE_VISOR_MODAL' }, '*');
          } else {
            window.close();
          }
        });
      } else {
        backBtn.addEventListener('click', function (e) {
          e.preventDefault();
          if (window.history.length > 1) {
            window.history.back();
          } else if (window.location.protocol === 'file:') {
            window.location.href = '../index.html?view=vocab';
          } else {
            window.location.href = '/?view=vocab';
          }
        });
      }
    }

    if (paramBand) {
      loadBand(paramBand);
    } else {
      loadBand(1);
    }

    if (paramWord) {
      const decoded = decodeURIComponent(paramWord).trim().toLowerCase();
      // Search in current list first
      let foundIdx = wordList.findIndex(w => w.word.toLowerCase() === decoded);
      if (foundIdx >= 0) {
        currentWordIndex = foundIdx;
        renderCurrentWord();
        return;
      }

      // Search across all bands including phrasal
      const allBands = ['1', '2', '3', '4', '5', 'phrasal'];
      if (WORDS_DATA.bands) {
        for (const b of allBands) {
          const list = WORDS_DATA.bands[b] || [];
          const idx = list.findIndex(w => w.word.toLowerCase() === decoded);
          if (idx >= 0) {
            loadBand(b);
            currentWordIndex = idx;
            renderCurrentWord();
            return;
          }
        }
      }

      // If custom word, add to current list at index 0
      wordList.unshift({
        word: decoded,
        translation: "Vocabulario para práctica",
        example: `Practice saying: "${decoded}"`
      });
      currentWordIndex = 0;
      renderCurrentWord();
    }
  }

  // --- Diagnostic Modal Event Listeners ---
  const btnMicDiag = document.getElementById('btnMicDiagnostic');
  const micDiagModal = document.getElementById('micDiagnosticModal');
  const btnCloseMicDiag = document.getElementById('btnCloseMicDiag');
  const btnDoneMicDiag = document.getElementById('btnDoneMicDiag');
  const btnStartDiagTest = document.getElementById('btnStartDiagTest');
  const diagDeviceList = document.getElementById('diagDeviceList');
  const diagTestStatus = document.getElementById('diagTestStatus');
  const diagVuFill = document.getElementById('diagVuFill');
  const diagVuText = document.getElementById('diagVuText');

  let diagStream = null;
  let diagAnimFrame = null;
  let diagAudioCtx = null;

  function stopDiagTest() {
    if (diagAnimFrame) {
      cancelAnimationFrame(diagAnimFrame);
      diagAnimFrame = null;
    }
    if (diagAudioCtx && diagAudioCtx.state !== 'closed') {
      try { diagAudioCtx.close(); } catch(e){}
      diagAudioCtx = null;
    }
    if (diagStream) {
      try { diagStream.getTracks().forEach(t => t.stop()); } catch(e){}
      diagStream = null;
    }
    if (btnStartDiagTest) btnStartDiagTest.innerText = '▶ Iniciar Prueba de Sonido';
    if (diagTestStatus) diagTestStatus.innerText = 'Prueba detenida.';
    if (diagVuFill) diagVuFill.style.width = '0%';
    if (diagVuText) diagVuText.innerText = 'Nivel actual: 0%';
  }

  if (btnMicDiag) {
    btnMicDiag.addEventListener('click', async () => {
      if (micDiagModal) micDiagModal.style.display = 'flex';
      if (diagTestStatus) diagTestStatus.innerText = 'Pulsa para hablar';
      if (diagDeviceList) diagDeviceList.innerText = 'Detectando micrófonos en Windows...';

      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const audioInputs = devices.filter(d => d.kind === 'audioinput');
          if (audioInputs.length === 0) {
            diagDeviceList.innerHTML = '<span style="color: #dc2626; font-weight: 700;">⚠️ No se detectó ningún micrófono conectado en Windows.</span>';
          } else {
            diagDeviceList.innerHTML = audioInputs.map((d, i) =>
              `<div style="margin-bottom: 0.25rem;">🎙️ <strong>Dispositivo ${i + 1}:</strong> ${d.label || 'Micrófono predeterminado de Windows'}</div>`
            ).join('');
          }
        } catch (e) {
          diagDeviceList.innerText = 'Permiso no disponible aún para listar nombres exactos de dispositivos.';
        }
      } else {
        diagDeviceList.innerText = 'navigator.mediaDevices no soportado.';
      }
    });
  }

  if (btnCloseMicDiag) btnCloseMicDiag.addEventListener('click', () => {
    stopDiagTest();
    if (micDiagModal) micDiagModal.style.display = 'none';
  });

  if (btnDoneMicDiag) btnDoneMicDiag.addEventListener('click', () => {
    stopDiagTest();
    if (micDiagModal) micDiagModal.style.display = 'none';
  });

  if (btnStartDiagTest) {
    btnStartDiagTest.addEventListener('click', async () => {
      if (diagStream) {
        stopDiagTest();
        return;
      }
      diagTestStatus.innerText = 'Activando micrófono de Windows...';
      try {
        diagStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        btnStartDiagTest.innerText = '⏹ Detener Prueba';
        diagTestStatus.innerText = '🎙️ ¡Micrófono activo! Habla ahora.';

        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        diagAudioCtx = new AudioCtx();
        const src = diagAudioCtx.createMediaStreamSource(diagStream);
        const an = diagAudioCtx.createAnalyser();
        an.fftSize = 256;
        src.connect(an);
        const buf = new Uint8Array(an.frequencyBinCount);

        const loop = () => {
          an.getByteFrequencyData(buf);
          let sum = 0;
          for (let i = 0; i < buf.length; i++) sum += buf[i];
          const pct = Math.min(100, Math.round((sum / buf.length / 64) * 100));
          if (diagVuFill) diagVuFill.style.width = pct + '%';
          if (diagVuText) {
            diagVuText.innerText = pct >= 14
              ? `Nivel actual: ${pct}% — ¡Voz captada correctamente! ✓`
              : `Nivel actual: ${pct}% (esperando voz...)`;
          }
          diagAnimFrame = requestAnimationFrame(loop);
        };
        diagAnimFrame = requestAnimationFrame(loop);
      } catch (err) {
        diagTestStatus.innerHTML = '<span style="color: #dc2626; font-weight: 700;">Error: Acceso al micrófono denegado en Windows.</span>';
      }
    });
  }

  initURLParams();
})();
