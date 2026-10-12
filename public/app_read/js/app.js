// ============================================================
// ZELTAVIA Read — Motor de las 3 Ventanas Sincronizadas
// Soporte Instantáneo para Pegar Texto Propio + Offline Total
// ============================================================

(function () {
  // Integración de Phrasal Verbs en diccionarios y bandas locales
  if (typeof PHRASAL_VERBS_DATA !== 'undefined') {
    if (typeof FREQUENCY_BANDS !== 'undefined') {
      FREQUENCY_BANDS["phrasal"] = PHRASAL_VERBS_DATA.map(pv => ({
        en: pv.en,
        es: pv.translations.es
      }));
    }
    if (typeof DICTIONARY_DATA !== 'undefined') {
      PHRASAL_VERBS_DATA.forEach(pv => {
        DICTIONARY_DATA[pv.en.toLowerCase()] = pv.translations.es;
      });
    }
  }

  // Estado de la aplicación
  let currentStoryId = 1;
  let currentBandId = null;
  let isPlaying = false;
  let isPaused = false;
  let currentItemIndex = 0;
  let readingItems = [];      // Frases u oraciones en inglés
  let itemOffsets = [];       // Posiciones [start, end] en textInput.value
  let translationsMap = [];   // Traducciones al español alineadas 1 a 1
  let speechRate = 1.0;
  let isTranslationActive = true;
  let selectedWordInfo = null;

  // Voces TTS
  let availableVoices = [];
  let selectedVoice = null;

  // Caché de traducciones online
  const onlineTranslationsCache = {};

  // Referencias DOM
  const btnPlay = document.getElementById('btnPlay');
  const btnPause = document.getElementById('btnPause');
  const btnStop = document.getElementById('btnStop');
  const playBtnLabel = document.getElementById('playBtnLabel');
  const speedSlider = document.getElementById('speedSlider');
  const speedValueLabel = document.getElementById('speedValueLabel');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const voiceSelect = document.getElementById('voiceSelect');
  const voiceCountBadge = document.getElementById('voiceCountBadge');

  // Ventana 1
  const textInput = document.getElementById('textInput');
  const textStats = document.getElementById('textStats');
  const btnApplyText = document.getElementById('btnApplyText');
  const btnClearText = document.getElementById('btnClearText');
  const btnPasteText = document.getElementById('btnPasteText');
  const btnPasteTextFooter = document.getElementById('btnPasteTextFooter');
  const storyPills = document.querySelectorAll('.story-pill');
  const bandPills = document.querySelectorAll('.band-pill');

  // Ventana 2
  const readingViewport = document.getElementById('readingViewport');
  const readingProgress = document.getElementById('readingProgress');
  const speakingStatusChip = document.getElementById('speakingStatusChip');

  // Ventana 3
  const translationViewport = document.getElementById('translationViewport');
  const translationSourceLabel = document.getElementById('translationSourceLabel');
  const translationSourceBadge = document.getElementById('translationSourceBadge');
  const btnToggleTranslation = document.getElementById('btnToggleTranslation');
  const toggleTranslationText = document.getElementById('toggleTranslationText');
  const btnListenWord = document.getElementById('btnListenWord');

  // ============================================================
  // 1. GESTIÓN DE VOCES SINTETIZADAS (Forzar siempre inglés nativo)
  // ============================================================
  function isEnglishVoice(v) {
    if (!v) return false;
    const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
    const name = (v.name || '').toLowerCase();
    return lang.startsWith('en') || 
           lang.includes('en-') || 
           name.includes('english') || 
           name.includes('david') || 
           name.includes('zira') || 
           name.includes('mark') || 
           name.includes('george') || 
           name.includes('susan') || 
           name.includes('hazel') || 
           name.includes('natural') || 
           name.includes('google us') || 
           name.includes('google uk');
  }

  function getBestEnglishVoice() {
    if (!('speechSynthesis' in window)) return null;
    const allVoices = window.speechSynthesis.getVoices() || [];
    if (!allVoices.length) return null;

    const enVoices = allVoices.filter(isEnglishVoice);
    if (!enVoices.length) {
      const fallback = allVoices.find(v => (v.lang || '').toLowerCase().includes('en'));
      return fallback || allVoices[0];
    }

    const naturalVoice = enVoices.find(v => v.name.includes('Natural') || v.name.includes('Google'));
    if (naturalVoice) return naturalVoice;

    const usVoice = enVoices.find(v => (v.lang || '').toLowerCase().startsWith('en-us') || v.name.includes('David') || v.name.includes('Zira'));
    if (usVoice) return usVoice;

    const gbVoice = enVoices.find(v => (v.lang || '').toLowerCase().startsWith('en-gb'));
    if (gbVoice) return gbVoice;

    return enVoices[0];
  }

  function populateVoiceList() {
    if (!('speechSynthesis' in window)) {
      if (voiceCountBadge) voiceCountBadge.innerText = 'No soportado';
      return;
    }

    const allVoices = window.speechSynthesis.getVoices() || [];
    availableVoices = allVoices.filter(isEnglishVoice);

    if (!availableVoices.length && allVoices.length > 0) {
      const fallback = allVoices.find(v => (v.lang || '').toLowerCase().includes('en'));
      if (fallback) availableVoices = [fallback];
    }

    if (!availableVoices.length) {
      if (voiceCountBadge) voiceCountBadge.innerText = 'Cargando inglés...';
      if (voiceSelect) voiceSelect.innerHTML = '<option value="">Detectando voz en inglés (TTS)...</option>';
      return;
    }

    if (voiceCountBadge) voiceCountBadge.innerText = `${availableVoices.length} voces en inglés`;
    if (voiceSelect) {
      voiceSelect.innerHTML = '';

      availableVoices.sort((a, b) => {
        const aIsNatural = a.name.includes('Natural') || a.name.includes('Google');
        const bIsNatural = b.name.includes('Natural') || b.name.includes('Google');
        if (aIsNatural && !bIsNatural) return -1;
        if (!aIsNatural && bIsNatural) return 1;
        return a.name.localeCompare(b.name);
      });

      availableVoices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name;
        const isNatural = voice.name.includes('Natural') ? ' ⭐ (Natural)' : '';
        option.textContent = `${voice.name} (${voice.lang})${isNatural}`;
        voiceSelect.appendChild(option);
      });

      const savedVoiceName = localStorage.getItem('zeltavia_preferred_voice_name') || localStorage.getItem('zeltavia_preferred_voice');
      let defaultVoice = savedVoiceName ? availableVoices.find(v => v.name === savedVoiceName) : null;
      if (!defaultVoice) {
        defaultVoice = getBestEnglishVoice();
      }

      if (defaultVoice) {
        voiceSelect.value = defaultVoice.name;
        selectedVoice = defaultVoice;
        localStorage.setItem('zeltavia_preferred_voice_name', defaultVoice.name);
        localStorage.setItem('zeltavia_preferred_voice', defaultVoice.name);
      }
    }
  }

  if ('speechSynthesis' in window) {
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    // Poller para Windows/Tauri donde getVoices() es asíncrono y puede tardar unos ms
    let retryAttempts = 0;
    const voicePoller = setInterval(() => {
      retryAttempts++;
      populateVoiceList();
      if ((availableVoices && availableVoices.length > 0) || retryAttempts > 30) {
        clearInterval(voicePoller);
      }
    }, 150);
  }

  if (voiceSelect) {
    voiceSelect.addEventListener('change', function () {
      const chosenName = this.value;
      selectedVoice = availableVoices.find(v => v.name === chosenName) || null;
      if (selectedVoice) {
        localStorage.setItem('zeltavia_preferred_voice_name', selectedVoice.name);
        localStorage.setItem('zeltavia_preferred_voice', selectedVoice.name);
      }
    });
  }

  // ============================================================
  // 2. UTILIDADES Y PROCESAMIENTO
  // ============================================================
  function cleanWord(str) {
    if (!str) return '';
    return str.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, '').trim().toLowerCase();
  }

  function isSingleWordList(text) {
    if (!text) return false;
    const lines = text.trim().split(/\r?\n+/).filter(l => l.trim().length > 0);
    if (!lines.length) return false;
    const sample = lines.slice(0, 20);
    // Admite hasta 4 palabras por renglón para incluir verbos compuestos (Phrasal Verbs como "look forward to")
    const shortLines = sample.filter(l => l.trim().split(/\s+/).length <= 4);
    return shortLines.length >= (sample.length * 0.7);
  }

  function splitIntoSentences(text) {
    if (!text || !text.trim()) return [];
    const matches = text.match(/[^.!?\r\n]+(?:[.!?]+|\r?\n|$)/g) || [text];
    return matches.map(s => s.trim()).filter(s => s.length > 0);
  }

  // Calcula exactamente los fragmentos y sus posiciones dentro de textInput
  function computeItemsAndOffsets(fullText) {
    const items = [];
    const offsets = [];

    if (!fullText || !fullText.trim()) {
      return { items, offsets, isWords: false };
    }

    const isWords = isSingleWordList(fullText);

    if (isWords) {
      const regex = /[^\r\n]+/g;
      let match;
      while ((match = regex.exec(fullText)) !== null) {
        const itemStr = match[0].trim();
        if (itemStr) {
          const start = match.index + match[0].indexOf(itemStr);
          const end = start + itemStr.length;
          items.push(itemStr);
          offsets.push({ start, end });
        }
      }
    } else {
      const regex = /[^.!?\r\n]+(?:[.!?]+|\r?\n|$)/g;
      let match;
      while ((match = regex.exec(fullText)) !== null) {
        const itemStr = match[0].trim();
        if (itemStr) {
          const start = match.index + match[0].indexOf(itemStr);
          const end = start + itemStr.length;
          items.push(itemStr);
          offsets.push({ start, end });
        }
      }
    }

    if (!items.length && fullText.trim()) {
      items.push(fullText.trim());
      offsets.push({ start: 0, end: fullText.length });
    }

    return { items, offsets, isWords };
  }

  // ============================================================
  // 3. CARGA DE CUENTOS (Fases 1 a 6)
  // ============================================================
  function loadStory(storyNum) {
    currentStoryId = storyNum;
    currentBandId = null;

    storyPills.forEach(p => {
      p.classList.toggle('active', parseInt(p.getAttribute('data-story'), 10) === storyNum);
    });
    bandPills.forEach(p => p.classList.remove('active'));

    const story = TEXTS_DATA.stories[storyNum] || TEXTS_DATA.stories[1];

    const alignedItems = [];
    const alignedTranslations = [];
    const paragraphTexts = [];

    story.paragraphs.forEach(p => {
      const enS = splitIntoSentences(p.en);
      const esS = splitIntoSentences(p.es);

      paragraphTexts.push(p.en);

      enS.forEach((sentenceEn, sIdx) => {
        alignedItems.push(sentenceEn);
        let sentenceEs = "";
        if (sIdx < esS.length) {
          sentenceEs = esS[sIdx];
        } else {
          sentenceEs = esS[esS.length - 1] || p.es;
        }
        alignedTranslations.push(sentenceEs);
      });
    });

    const fullEnglishText = paragraphTexts.join("\n\n");
    textInput.value = fullEnglishText;
    translationsMap = alignedTranslations;

    setSourceBadgeUI('local', `Traducción de Fase ${story.phase}: "${story.title}" (Modo Local Offline)`);
    syncTextStats();
    buildInteractiveReading(alignedItems, translationsMap, fullEnglishText, false);
  }

  // ============================================================
  // 4. CARGA DE BANDAS DE VOCABULARIO (Bandas 1 a 5)
  // ============================================================
  function loadBand(bandNum) {
    currentBandId = bandNum;
    currentStoryId = null;

    bandPills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-band') === String(bandNum));
    });
    storyPills.forEach(p => p.classList.remove('active'));

    let words = [];
    if (bandNum === 'phrasal' && typeof PHRASAL_VERBS_DATA !== 'undefined') {
      words = PHRASAL_VERBS_DATA.map(pv => ({ en: pv.en, es: pv.translations.es }));
    } else if (typeof FREQUENCY_BANDS !== 'undefined' && FREQUENCY_BANDS[bandNum]) {
      words = FREQUENCY_BANDS[bandNum];
    } else if (typeof TEXTS_DATA !== 'undefined' && TEXTS_DATA.bands[bandNum]) {
      words = TEXTS_DATA.bands[bandNum].words;
    }

    const alignedWords = words.map(w => w.en);
    const alignedTranslations = words.map(w => w.es);
    const fullText = alignedWords.join("\n");

    textInput.value = fullText;
    translationsMap = alignedTranslations;

    if (bandNum === 'phrasal') {
      setSourceBadgeUI('local', `Phrasal Verbs — 200 verbos esenciales (Modo Local Offline)`);
    } else {
      setSourceBadgeUI('local', `Vocabulario Banda ${bandNum} — 1.000 palabras (Modo Local Offline)`);
    }
    syncTextStats();
    buildInteractiveReading(alignedWords, alignedTranslations, fullText, true);
  }

  function syncTextStats() {
    const text = textInput.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = text.length;
    textStats.innerText = `${words} palabras · ${chars} caracteres`;
  }

  // ============================================================
  // 5. CARGA Y PROCESAMIENTO DE TEXTO PROPIO (PEGAR O ESCRIBIR)
  // ============================================================
  async function applyCustomText(text) {
    selectedWordInfo = null;

    if (!text || !text.trim()) {
      readingItems = [];
      itemOffsets = [];
      translationsMap = [];
      readingViewport.innerHTML = '<p style="color: #94a3b8; font-style: italic;">Pega o escribe cualquier texto en inglés aquí para leerlo...</p>';
      translationViewport.innerHTML = '<p style="color: #94a3b8; font-style: italic;">Esperando texto...</p>';
      translationSourceLabel.innerText = "Traducción alineada al español";
      setSourceBadgeUI('local', 'Esperando texto');
      syncTextStats();
      updateProgressUI();
      return;
    }

    // Desactivar pills de cuentos y bandas
    storyPills.forEach(p => p.classList.remove('active'));
    bandPills.forEach(p => p.classList.remove('active'));
    currentStoryId = null;
    currentBandId = null;

    const parsed = computeItemsAndOffsets(text);
    readingItems = parsed.items;
    itemOffsets = parsed.offsets;

    // 1. Traducción inicial ultrarrápida desde el diccionario local offline y bandas
    translationsMap = readingItems.map(item => {
      const clean = cleanWord(item);
      if (parsed.isWords || !item.includes(' ')) {
        if (typeof DICTIONARY_DATA !== 'undefined' && DICTIONARY_DATA[clean]) {
          return DICTIONARY_DATA[clean];
        }
        if (typeof FREQUENCY_BANDS !== 'undefined') {
          for (const bKey in FREQUENCY_BANDS) {
            const found = FREQUENCY_BANDS[bKey].find(w => cleanWord(w.en) === clean);
            if (found && found.es) return found.es;
          }
        }
      }
      return "";
    });

    // 2. ACTUALIZACIÓN INMEDIATA DE VENTANA 2 (0 ms de espera)
    buildInteractiveReading(readingItems, translationsMap, text, parsed.isWords);

    // 3. Resolución de traducciones (diccionario local o API de traducción)
    resolveTranslationsForCustom(readingItems, text, parsed.isWords);
  }

  // ============================================================
  // MOTOR DE TRADUCCIÓN RESILIENTE MULTICAPA (ONLINE & OFFLINE)
  // ============================================================
  const COMMON_EXPRESSIONS = {
    'hi': 'Hola',
    'hello': 'Hola',
    'hi how are you': 'Hola, ¿cómo estás?',
    'hello how are you': 'Hola, ¿cómo estás?',
    'how are you': '¿Cómo estás?',
    'how are you doing': '¿Cómo te va?',
    'how is it going': '¿Cómo va todo?',
    'i am fine': 'Estoy bien',
    'i am good': 'Estoy bien',
    'i am doing well': 'Me va bien',
    'good morning': 'Buenos días',
    'good afternoon': 'Buenas tardes',
    'good evening': 'Buenas noches',
    'good night': 'Buenas noches',
    'thank you': 'Gracias',
    'thank you very much': 'Muchas gracias',
    'thanks': 'Gracias',
    'you are welcome': 'De nada',
    'please': 'Por favor',
    'see you soon': 'Hasta pronto',
    'see you later': 'Hasta luego',
    'what is your name': '¿Cómo te llamas?',
    'my name is': 'Mi nombre es',
    'nice to meet you': 'Encantado de conocerte',
    'i love you': 'Te quiero',
    'excuse me': 'Disculpe / Con permiso',
    'i am sorry': 'Lo siento',
    'sorry': 'Perdón',
    'yes': 'Sí',
    'no': 'No',
    'maybe': 'Tal vez',
    'have a nice day': 'Que tengas un buen día',
    'welcome': 'Bienvenido/a'
  };

  function withTimeout(promise, ms, fallbackValue = null) {
    return Promise.race([
      promise,
      new Promise(resolve => setTimeout(() => resolve(fallbackValue), ms))
    ]);
  }

  function offlineTranslateSentence(sentenceText) {
    if (!sentenceText || !sentenceText.trim()) return '';
    const cleanRaw = sentenceText.trim();
    const cleanLower = cleanRaw.toLowerCase().replace(/^[0-9]+[.)\s]+/, '').replace(/[¿?¡!.,;:]/g, '').trim();

    if (COMMON_EXPRESSIONS[cleanLower]) {
      return COMMON_EXPRESSIONS[cleanLower];
    }

    // Intento con diccionario de palabras frecuentes
    const tokens = cleanRaw.split(/(\s+|[.,!?;:])/);
    const translatedTokens = tokens.map(token => {
      if (/^\s+$/.test(token) || /^[.,!?;:]$/.test(token)) {
        return token;
      }
      const c = cleanWord(token);
      if (typeof DICTIONARY_DATA !== 'undefined' && DICTIONARY_DATA[c]) {
        return DICTIONARY_DATA[c].split(',')[0].trim();
      }
      return token;
    });

    const result = translatedTokens.join('').trim();
    return result || cleanRaw;
  }

  async function translateTextDirect(cleanText) {
    if (!cleanText || !cleanText.trim()) return '';
    const textToTranslate = cleanText.trim();

    // 1. Memoria caché de sesión local
    if (onlineTranslationsCache[textToTranslate]) {
      return onlineTranslationsCache[textToTranslate];
    }

    // 2. Expresiones frecuentes conocidas
    const lower = textToTranslate.toLowerCase().replace(/[.!?]/g, '').trim();
    if (COMMON_EXPRESSIONS[lower]) {
      onlineTranslationsCache[textToTranslate] = COMMON_EXPRESSIONS[lower];
      return COMMON_EXPRESSIONS[lower];
    }

    // 3. Consulta directa ultrarrápida a Google Translate (~50ms)
    try {
      const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(textToTranslate)}`;
      const gRes = await withTimeout(fetch(gUrl), 1800);
      if (gRes && gRes.ok) {
        const gData = await gRes.json();
        if (gData && Array.isArray(gData[0])) {
          const tr = gData[0].map(c => c[0] || '').join('').trim();
          if (tr) {
            onlineTranslationsCache[textToTranslate] = tr;
            return tr;
          }
        }
      }
    } catch (e) {}

    // 4. Respaldo a proxy del servidor (/api/translate)
    try {
      const pUrl = `/api/translate?text=${encodeURIComponent(textToTranslate)}`;
      const pRes = await withTimeout(fetch(pUrl, {
        headers: { 'Accept': 'application/json' }
      }), 2000);
      if (pRes && pRes.ok) {
        const pData = await pRes.json();
        if (pData && pData.translation && pData.translation.trim()) {
          const tr = pData.translation.trim();
          onlineTranslationsCache[textToTranslate] = tr;
          return tr;
        }
      }
    } catch (e) {}

    // 5. Respaldo a MyMemory API pública
    try {
      const mUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|es`;
      const mRes = await withTimeout(fetch(mUrl), 2000);
      if (mRes && mRes.ok) {
        const mData = await mRes.json();
        if (mData && mData.responseData && mData.responseData.translatedText) {
          const tr = mData.responseData.translatedText.trim();
          if (tr && !tr.includes('MYMEMORY WARNING:')) {
            onlineTranslationsCache[textToTranslate] = tr;
            return tr;
          }
        }
      }
    } catch (e) {}

    // 6. Respaldo offline garantizado
    const offlineFallback = offlineTranslateSentence(textToTranslate);
    return offlineFallback || textToTranslate;
  }

  let activeTranslationJobId = 0;

  async function resolveTranslationsForCustom(items, fullText, isWordList) {
    if (!items || !items.length) return;

    const currentJobId = ++activeTranslationJobId;
    let usedOnline = false;
    const newTranslations = new Array(items.length).fill('');
    const unmappedIndices = [];

    // Paso A: Resolución preliminar ultrarrápida (caché, expresiones y diccionario)
    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].trim();
      const lower = itemText.toLowerCase().replace(/[.!?]/g, '').trim();

      if (onlineTranslationsCache[itemText]) {
        newTranslations[i] = onlineTranslationsCache[itemText];
        usedOnline = true;
      } else if (COMMON_EXPRESSIONS[lower]) {
        newTranslations[i] = COMMON_EXPRESSIONS[lower];
      } else if (isWordList || !itemText.includes(' ')) {
        const c = cleanWord(itemText);
        if (typeof DICTIONARY_DATA !== 'undefined' && DICTIONARY_DATA[c]) {
          newTranslations[i] = DICTIONARY_DATA[c];
        }
      }

      if (!newTranslations[i]) {
        // Pre-rellenar inmediatamente con traducción offline palabra por palabra
        // para que Ventana 3 NUNCA se quede en blanco ni muestre inglés
        newTranslations[i] = offlineTranslateSentence(itemText);
        unmappedIndices.push(i);
      }
    }

    // Renderizar inmediatamente la traducción local (0 ms de espera)
    translationsMap = [...newTranslations];
    renderAllTranslationsInWindow3();
    updateActiveTranslationHighlight(currentItemIndex);

    // Si todo ya estaba en caché o coincidió exactamente, finalizar
    if (unmappedIndices.length === 0) {
      setSourceBadgeUI(usedOnline ? 'google' : 'local', usedOnline ? "Traducido con Google Translate (Online)" : "Traducido con corpus local (Offline)");
      return;
    }

    // Indicar que estamos mejorando la traducción con Google Translate online
    setSourceBadgeUI('translating', 'Traduciendo con Google Translate...');

    try {
      const sentencesToTranslate = unmappedIndices.map(idx => items[idx]);

      // 1. Intento por lote rápido vía Google Translate directo (un solo viaje de red)
      let batchSuccess = false;
      try {
        const combined = sentencesToTranslate.join('\n');
        const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(combined)}`;
        const gRes = await withTimeout(fetch(gUrl), 2000);
        if (gRes && gRes.ok) {
          const gData = await gRes.json();
          if (gData && Array.isArray(gData[0])) {
            const fullTr = gData[0].map(c => c[0] || '').join('');
            const lines = fullTr.split('\n');
            if (lines.length === sentencesToTranslate.length) {
              unmappedIndices.forEach((origIdx, batchIdx) => {
                const tr = lines[batchIdx].trim();
                if (tr) {
                  newTranslations[origIdx] = tr;
                  onlineTranslationsCache[items[origIdx]] = tr;
                  usedOnline = true;
                }
              });
              batchSuccess = true;
            }
          }
        }
      } catch (e) {}

      // 2. Si el lote no tradujo todo, procesar concurrentemente cada oración pendiente
      if (!batchSuccess) {
        const stillPending = unmappedIndices.filter(idx => !onlineTranslationsCache[items[idx]]);
        if (stillPending.length > 0) {
          await Promise.all(stillPending.map(async (origIdx) => {
            const itemText = items[origIdx];
            const tr = await translateTextDirect(itemText);
            if (tr && tr.trim() && tr.trim() !== itemText.trim()) {
              newTranslations[origIdx] = tr.trim();
              onlineTranslationsCache[itemText] = tr.trim();
              usedOnline = true;
            }
          }));
        }
      }
    } catch (err) {
      console.warn("Aviso en traducción:", err);
    } finally {
      // Si el usuario ya comenzó otra traducción, descartar esta ejecución obsoleta
      if (currentJobId !== activeTranslationJobId) return;

      // Asegurar que cada renglón tenga una traducción en español válida
      for (let i = 0; i < items.length; i++) {
        if (!newTranslations[i] || !newTranslations[i].trim()) {
          newTranslations[i] = offlineTranslateSentence(items[i]);
        }
      }

      translationsMap = newTranslations;
      setSourceBadgeUI(
        usedOnline ? 'google' : 'local',
        usedOnline ? "Traducido con Google Translate (Online)" : "Traducido con corpus local (Offline)"
      );
      renderAllTranslationsInWindow3();
      updateActiveTranslationHighlight(currentItemIndex);
    }
  }

  // ============================================================
  // 6. CONSTRUCCIÓN DE LA LECTURA INTERACTIVA (Ventana 2)
  // ============================================================
  function buildInteractiveReading(items, translations, fullText, isWordList = false) {
    stopPlayback();
    readingItems = items;
    translationsMap = translations;

    // Calcular o refrescar los offsets
    if (!itemOffsets.length || itemOffsets.length !== items.length) {
      itemOffsets = [];
      let searchStart = 0;
      items.forEach(item => {
        const idx = fullText.indexOf(item, searchStart);
        if (idx !== -1) {
          itemOffsets.push({ start: idx, end: idx + item.length });
          searchStart = idx + item.length;
        } else {
          itemOffsets.push({ start: 0, end: item.length });
        }
      });
    }

    readingViewport.innerHTML = '';

    if (!readingItems.length) {
      readingViewport.innerHTML = '<p style="color: #94a3b8; font-style: italic;">No hay texto cargado. Pega o escribe texto en la Ventana 1.</p>';
      translationViewport.innerHTML = '<p style="color: #94a3b8; font-style: italic;">Esperando texto...</p>';
      return;
    }

    readingItems.forEach((itemText, idx) => {
      const itemSpan = document.createElement('span');
      itemSpan.className = 'reading-sentence';
      itemSpan.setAttribute('data-sidx', idx);

      itemSpan.addEventListener('click', function (e) {
        if (e.target === itemSpan) {
          syncFromWindow2(idx);
        }
      });

      if (isWordList || !itemText.includes(' ')) {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'interactive-word';
        wordSpan.setAttribute('data-word', itemText);
        wordSpan.setAttribute('data-sidx', idx);
        wordSpan.innerText = itemText;

        wordSpan.addEventListener('click', function (e) {
          e.stopPropagation();
          syncFromWindow2(idx, itemText, wordSpan);
        });

        wordSpan.addEventListener('dblclick', function (e) {
          e.stopPropagation();
          speakSingleWord(itemText);
        });

        itemSpan.appendChild(wordSpan);
        itemSpan.appendChild(document.createTextNode('  '));
      } else {
        const tokens = itemText.split(/(\s+)/);
        tokens.forEach(token => {
          if (/^\s+$/.test(token)) {
            itemSpan.appendChild(document.createTextNode(token));
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'interactive-word';
            wordSpan.setAttribute('data-word', token);
            wordSpan.setAttribute('data-sidx', idx);
            wordSpan.innerText = token;

            wordSpan.addEventListener('click', function (e) {
              e.stopPropagation();
              syncFromWindow2(idx, token, wordSpan);
            });

            wordSpan.addEventListener('dblclick', function (e) {
              e.stopPropagation();
              speakSingleWord(token);
            });

            itemSpan.appendChild(wordSpan);
          }
        });
        itemSpan.appendChild(document.createTextNode(' '));
      }

      readingViewport.appendChild(itemSpan);
    });

    currentItemIndex = 0;
    updateProgressUI();
    renderAllTranslationsInWindow3();
  }

  // ============================================================
  // 7. SINCRONIZACIÓN BIDIRECCIONAL COMPLETA (Ventana 1 <-> 2 <-> 3)
  // ============================================================
  function syncFromWindow2(idx, clickedWord = null, wordEl = null) {
    currentItemIndex = idx;

    highlightItemInWindow2(idx);
    highlightItemInWindow1(idx);

    if (clickedWord && wordEl) {
      document.querySelectorAll('.interactive-word').forEach(w => w.classList.remove('selected-word'));
      wordEl.classList.add('selected-word');
      selectWord(clickedWord, idx);
    } else {
      selectedWordInfo = null;
      updateActiveTranslationHighlight(idx);
    }

    if (isPlaying && !isPaused) {
      playItemAt(currentItemIndex);
    }

    updateProgressUI();
  }

  function syncFromWindow1() {
    if (!readingItems.length || !itemOffsets.length) return;

    const cursorPos = textInput.selectionStart;
    let foundIdx = 0;
    for (let i = 0; i < itemOffsets.length; i++) {
      const offset = itemOffsets[i];
      if (cursorPos >= offset.start && cursorPos <= offset.end) {
        foundIdx = i;
        break;
      }
      if (cursorPos < offset.start) {
        foundIdx = Math.max(0, i - 1);
        break;
      }
      if (i === itemOffsets.length - 1) {
        foundIdx = i;
      }
    }

    currentItemIndex = foundIdx;
    selectedWordInfo = null;

    highlightItemInWindow2(foundIdx);
    updateActiveTranslationHighlight(foundIdx);
    updateProgressUI();

    if (isPlaying && !isPaused) {
      playItemAt(currentItemIndex);
    }
  }

  textInput.addEventListener('click', syncFromWindow1);
  textInput.addEventListener('keyup', function (e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(e.key)) {
      syncFromWindow1();
    }
  });

  // Escuchar cuando el usuario pega texto directamente (Ctrl+V o click derecho)
  textInput.addEventListener('paste', function (e) {
    let pastedText = '';
    if (e.clipboardData && e.clipboardData.getData) {
      pastedText = e.clipboardData.getData('text/plain');
    }
    setTimeout(() => {
      syncTextStats();
      const currentVal = textInput.value;
      const textToUse = currentVal || pastedText;
      if (textToUse && textToUse.trim()) {
        applyCustomText(textToUse);
        showToast("Texto pegado y lector sincronizado");
      }
    }, 20);
  });

  // Temporizador para escritura manual
  let typingTimer = null;
  textInput.addEventListener('input', function () {
    syncTextStats();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      // Si el texto difiere del actual procesado, auto-actualizar
      if (textInput.value.trim() && textInput.value !== readingItems.join(' ')) {
        applyCustomText(textInput.value);
      }
    }, 600);
  });

  function highlightItemInWindow2(idx) {
    document.querySelectorAll('.reading-sentence').forEach(el => {
      el.classList.remove('active-sentence');
    });

    const activeEl = document.querySelector(`.reading-sentence[data-sidx="${idx}"]`);
    if (activeEl) {
      activeEl.classList.add('active-sentence');
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function highlightItemInWindow1(idx) {
    // Si el usuario está interactuando o escribiendo en textInput, no interrumpir su selección
    if (document.activeElement === textInput) {
      return;
    }
    if (itemOffsets[idx]) {
      const offset = itemOffsets[idx];
      textInput.setSelectionRange(offset.start, offset.end);
      const totalChars = textInput.value.length;
      if (totalChars > 0) {
        const ratio = offset.start / totalChars;
        textInput.scrollTop = ratio * (textInput.scrollHeight - textInput.clientHeight);
      }
    }
  }

  // ============================================================
  // 8. TRADUCCIÓN SINCRONIZADA EN VENTANA 3
  // ============================================================
  function setSourceBadgeUI(source, labelText) {
    if (source === 'local') {
      translationSourceBadge.className = 'source-mode-badge badge-offline';
      translationSourceBadge.innerHTML = '⚡ Modo Local (Offline)';
    } else if (source === 'translating') {
      translationSourceBadge.className = 'source-mode-badge badge-translating';
      translationSourceBadge.innerHTML = '⌛ Traduciendo con Google Translate...';
    } else {
      translationSourceBadge.className = 'source-mode-badge badge-online';
      translationSourceBadge.innerHTML = '🌐 Google Translate (Online)';
    }
    if (labelText) {
      translationSourceLabel.innerText = labelText;
    }
  }

  function renderAllTranslationsInWindow3() {
    btnListenWord.style.display = 'none';

    if (!isTranslationActive) {
      translationViewport.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #94a3b8;">
          <p>La traducción sincronizada está oculta.</p>
          <span style="font-size: 0.8rem;">Pulsa "Traducción Visible" en la cabecera para mostrarla.</span>
        </div>
      `;
      return;
    }

    if (!translationsMap.length) {
      translationViewport.innerHTML = '<p style="color: #94a3b8; font-style: italic;">Esperando texto...</p>';
      return;
    }

    let html = '<div class="translations-list">';
    translationsMap.forEach((trText, idx) => {
      const isActive = (idx === currentItemIndex);
      html += `
        <div class="translation-line ${isActive ? 'active-translation' : ''}" data-tidx="${idx}">
          <span class="t-number">${idx + 1}.</span>
          <span class="t-text">${trText || readingItems[idx] || ''}</span>
        </div>
      `;
    });
    html += '</div>';

    translationViewport.innerHTML = html;

    translationViewport.querySelectorAll('.translation-line').forEach(el => {
      el.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-tidx'), 10);
        syncFromWindow2(idx);
      });
    });

    scrollToActiveTranslation();
  }

  function clearWordSelection() {
    selectedWordInfo = null;
    document.querySelectorAll('.interactive-word.selected-word').forEach(w => {
      w.classList.remove('selected-word');
    });
  }

  function updateActiveTranslationHighlight(idx) {
    if (!isTranslationActive) return;

    // Si la lectura continua está en marcha, limpiar la palabra fija para que Ventana 3 siga el audio en tiempo real
    if (isPlaying && !isPaused) {
      clearWordSelection();
    }

    if (selectedWordInfo) {
      renderWordTranslationCard(selectedWordInfo);
      return;
    }

    // Asegurar que la lista completa de traducciones esté visible (si se estaba mostrando una tarjeta)
    if (!translationViewport.querySelector('.translations-list')) {
      renderAllTranslationsInWindow3();
    }

    document.querySelectorAll('.translation-line').forEach(el => {
      el.classList.remove('active-translation');
    });

    const activeEl = translationViewport.querySelector(`.translation-line[data-tidx="${idx}"]`);
    if (activeEl) {
      activeEl.classList.add('active-translation');
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      renderAllTranslationsInWindow3();
    }
  }

  function scrollToActiveTranslation() {
    const activeEl = translationViewport.querySelector(`.translation-line[data-tidx="${currentItemIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ============================================================
  // 9. PALABRA MARCADA (Tarjeta con Diccionario y Contexto)
  // ============================================================
  async function selectWord(rawWord, sIdx) {
    const clean = cleanWord(rawWord);
    let meaning = "";
    let source = "local";

    const currentSentence = (readingItems[sIdx] || "").trim();
    const isSingleWordList = currentSentence.split(/\s+/).length === 1 && cleanWord(currentSentence) === clean;

    // 1. Si estamos en modo lista donde cada fila es solo 1 palabra, podemos usar la traducción alineada
    if (isSingleWordList && translationsMap && translationsMap[sIdx] && translationsMap[sIdx].trim()) {
      meaning = translationsMap[sIdx];
    }
    // 2. Buscar en el diccionario local offline la palabra exacta
    else if (typeof DICTIONARY_DATA !== 'undefined' && DICTIONARY_DATA[clean]) {
      meaning = DICTIONARY_DATA[clean];
    }
    // 3. Buscar en phrasal verbs
    else if (typeof PHRASAL_VERBS_DATA !== 'undefined') {
      const pvFound = PHRASAL_VERBS_DATA.find(pv => cleanWord(pv.en) === clean);
      if (pvFound) meaning = pvFound.translations.es;
    }
    
    // 4. Buscar en bandas de frecuencia
    if (!meaning && typeof FREQUENCY_BANDS !== 'undefined') {
      for (const bKey in FREQUENCY_BANDS) {
        const found = FREQUENCY_BANDS[bKey].find(w => cleanWord(w.en) === clean);
        if (found && found.es) {
          meaning = found.es;
          break;
        }
      }
    }

    let isDynamicFetch = false;
    // 5. Si no está en el diccionario offline, traducir SOLO esta palabra individual (nunca la frase entera)
    if (!meaning) {
      meaning = "Traduciendo término...";
      isDynamicFetch = true;
    }

    const context = readingItems[sIdx] || "";
    const sentenceTranslation = translationsMap[sIdx] || "";

    selectedWordInfo = {
      word: rawWord,
      clean,
      meaning,
      context,
      sentenceTranslation,
      source,
      sIdx
    };

    if (isTranslationActive) {
      renderWordTranslationCard(selectedWordInfo);
    }

    if (isDynamicFetch) {
      try {
        translateTextDirect(clean)
          .then(tr => {
            if (tr && selectedWordInfo && selectedWordInfo.clean === clean) {
              selectedWordInfo.meaning = tr;
              selectedWordInfo.source = 'google';
              if (isTranslationActive) {
                renderWordTranslationCard(selectedWordInfo);
              }
            } else if (selectedWordInfo && selectedWordInfo.clean === clean) {
              selectedWordInfo.meaning = "Término en inglés (Doble clic para pronunciar)";
              if (isTranslationActive) renderWordTranslationCard(selectedWordInfo);
            }
          })
          .catch(() => {
            if (selectedWordInfo && selectedWordInfo.clean === clean) {
              selectedWordInfo.meaning = "Término en inglés (Doble clic para pronunciar)";
              if (isTranslationActive) renderWordTranslationCard(selectedWordInfo);
            }
          });
      } catch (e) {}
    }
  }

  function renderWordTranslationCard(info) {
    setSourceBadgeUI(info.source, "Traducción desde diccionario offline local");
    btnListenWord.style.display = 'inline-block';

    translationViewport.innerHTML = `
      <div class="word-translation-card animate-fadeIn">
        <div class="word-translation-header">
          <div>
            <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--accent-cyan); font-weight: 800;">Palabra Marcada</span>
            <div class="word-term">${info.clean}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button id="btnCardListen" class="ctrl-btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
              🔊 Escuchar
            </button>
            <button id="btnCloseWordCard" class="btn-card-close" title="Volver a la traducción continua del texto">
              ✕
            </button>
          </div>
        </div>

        <div class="word-meaning">= ${info.meaning}</div>

        ${info.sentenceTranslation ? `
          <div class="active-sentence-box">
            <strong>Traducción de la frase completa (#${info.sIdx + 1}):</strong>
            ${info.sentenceTranslation}
          </div>
        ` : ''}

        ${info.context && info.context !== info.clean ? `
          <div class="word-context-box">
            <strong>Contexto en inglés:</strong> "${info.context}"
          </div>
        ` : ''}
      </div>
    `;

    document.getElementById('btnCardListen').addEventListener('click', () => {
      speakSingleWord(info.clean);
    });

    document.getElementById('btnCloseWordCard').addEventListener('click', () => {
      clearWordSelection();
      renderAllTranslationsInWindow3();
      updateActiveTranslationHighlight(currentItemIndex);
    });

    btnListenWord.onclick = () => {
      speakSingleWord(info.clean);
    };
  }

  function speakSingleWord(word) {
    const cleaned = cleanWord(word);
    if (!cleaned || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(cleaned);
    utter.lang = 'en-US';
    utter.rate = speechRate;
    
    // Garantizar que siempre se use una voz en inglés nativo
    if (!selectedVoice || !isEnglishVoice(selectedVoice)) {
      selectedVoice = getBestEnglishVoice();
    }
    if (selectedVoice) {
      utter.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utter);

    speakingStatusChip.innerText = `Pronunciando: "${cleaned}"`;
    speakingStatusChip.className = 'status-chip speaking';

    utter.onend = () => {
      speakingStatusChip.innerText = isPlaying ? "Reproduciendo..." : "Listo";
      if (!isPlaying) speakingStatusChip.className = 'status-chip';
    };
  }

  function updateProgressUI() {
    const total = readingItems.length;
    const current = Math.min(currentItemIndex + 1, total);
    const pct = total > 0 ? Math.round((current / total) * 100) : 0;
    readingProgress.innerText = `Elemento ${current} de ${total} · Progreso: ${pct}%`;
  }

  // ============================================================
  // 10. REPRODUCCIÓN, PAUSA Y DETENCIÓN DE AUDIO
  // ============================================================
  function startPlayback() {
    if (!('speechSynthesis' in window)) {
      alert("Tu navegador no soporta síntesis de voz Web Speech.");
      return;
    }

    // Si no hay elementos cargados pero hay texto en el input, cargarlo de inmediato
    if (!readingItems.length && textInput.value.trim()) {
      applyCustomText(textInput.value);
    }

    if (!readingItems.length) {
      textInput.focus();
      return;
    }

    clearWordSelection();

    if (isPaused) {
      isPaused = false;
      isPlaying = true;
      window.speechSynthesis.resume();
      playBtnLabel.innerText = "Reproduciendo";
      speakingStatusChip.innerText = "Reproduciendo...";
      speakingStatusChip.className = "status-chip speaking";
      updateActiveTranslationHighlight(currentItemIndex);
      return;
    }

    isPlaying = true;
    isPaused = false;
    playBtnLabel.innerText = "Reproduciendo";
    speakingStatusChip.innerText = "Reproduciendo...";
    speakingStatusChip.className = "status-chip speaking";

    playItemAt(currentItemIndex);
  }

  function playItemAt(index) {
    if (!isPlaying || index >= readingItems.length) {
      stopPlayback();
      return;
    }

    currentItemIndex = index;

    // Al avanzar la lectura continua, quitar la selección fija de palabra
    clearWordSelection();

    highlightItemInWindow2(index);
    highlightItemInWindow1(index);
    updateActiveTranslationHighlight(index);
    updateProgressUI();

    window.speechSynthesis.cancel();
    const itemText = readingItems[index];
    const utter = new SpeechSynthesisUtterance(itemText);
    utter.lang = 'en-US';
    utter.rate = speechRate;
    
    // Garantizar que siempre se use una voz en inglés nativo
    if (!selectedVoice || !isEnglishVoice(selectedVoice)) {
      selectedVoice = getBestEnglishVoice();
    }
    if (selectedVoice) {
      utter.voice = selectedVoice;
    }

    utter.onend = function () {
      if (isPlaying && !isPaused) {
        if (currentItemIndex + 1 < readingItems.length) {
          playItemAt(currentItemIndex + 1);
        } else {
          stopPlayback();
        }
      }
    };

    utter.onerror = function () {
      stopPlayback();
    };

    window.speechSynthesis.speak(utter);
  }

  function pausePlayback() {
    if (!isPlaying) return;
    isPlaying = false;
    isPaused = true;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    playBtnLabel.innerText = "Reanudar";
    speakingStatusChip.innerText = "En pausa";
    speakingStatusChip.className = "status-chip";
  }

  function stopPlayback() {
    isPlaying = false;
    isPaused = false;
    currentItemIndex = 0;
    playBtnLabel.innerText = "Reproducir";
    speakingStatusChip.innerText = "Listo";
    speakingStatusChip.className = "status-chip";

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    clearWordSelection();
    document.querySelectorAll('.reading-sentence').forEach(el => el.classList.remove('active-sentence'));
    updateActiveTranslationHighlight(0);
    updateProgressUI();
  }

  // ============================================================
  // 11. EVENT LISTENERS
  // ============================================================
  btnPlay.addEventListener('click', startPlayback);
  btnPause.addEventListener('click', pausePlayback);
  btnStop.addEventListener('click', stopPlayback);

  function setSpeed(rate) {
    speechRate = Math.max(0.1, Math.min(1.5, parseFloat(rate)));
    speedSlider.value = speechRate;
    speedValueLabel.innerText = `${speechRate.toFixed(2)}x`;

    presetButtons.forEach(btn => {
      const val = parseFloat(btn.getAttribute('data-val'));
      btn.classList.toggle('active', Math.abs(val - speechRate) < 0.04);
    });

    if (isPlaying && !isPaused) {
      playItemAt(currentItemIndex);
    }
  }

  speedSlider.addEventListener('input', function () {
    setSpeed(this.value);
  });

  presetButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      setSpeed(this.getAttribute('data-val'));
    });
  });

  btnToggleTranslation.addEventListener('click', function () {
    isTranslationActive = !isTranslationActive;
    if (isTranslationActive) {
      this.classList.add('active');
      toggleTranslationText.innerText = "Traducción Visible";
    } else {
      this.classList.remove('active');
      toggleTranslationText.innerText = "Traducción Oculta";
    }
    renderAllTranslationsInWindow3();
  });

  // Función Toast de notificación visual
  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  // Pegar desde el portapapeles con un clic
  async function handlePasteFromClipboard() {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const clipText = await navigator.clipboard.readText();
        if (clipText && clipText.trim()) {
          textInput.value = clipText;
          syncTextStats();
          applyCustomText(clipText);
          showToast("Texto pegado y lector sincronizado correctamente");
          return;
        }
      }
    } catch (err) {
      console.warn("No se pudo leer el portapapeles directamente:", err);
    }
    textInput.focus();
    textInput.select();
    showToast("Pulsa Ctrl+V para pegar el texto copiado");
  }

  if (btnPasteText) {
    btnPasteText.addEventListener('click', handlePasteFromClipboard);
  }
  if (btnPasteTextFooter) {
    btnPasteTextFooter.addEventListener('click', handlePasteFromClipboard);
  }

  // Botón "Actualizar Lector ➔"
  btnApplyText.addEventListener('click', function () {
    selectedWordInfo = null;
    applyCustomText(textInput.value);
    showToast("Lector actualizado con el texto");
  });

  btnClearText.addEventListener('click', function () {
    textInput.value = '';
    selectedWordInfo = null;
    syncTextStats();
    applyCustomText('');
  });

  storyPills.forEach(pill => {
    pill.addEventListener('click', function () {
      const sId = parseInt(this.getAttribute('data-story'), 10);
      loadStory(sId);
    });
  });

  bandPills.forEach(pill => {
    pill.addEventListener('click', function () {
      const bId = this.getAttribute('data-band');
      loadBand(bId);
    });
  });

  window.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (isPlaying) {
        pausePlayback();
      } else {
        startPlayback();
      }
    }
  });

  function initURLParams() {
    const params = new URLSearchParams(window.location.search);
    const storyParam = params.get('story');
    const phaseParam = params.get('phase');
    const bandParam = params.get('band');
    const textParam = params.get('text');
    const modeParam = params.get('mode');

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
        backBtn.title = "Cerrar esta ventana";
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

    if (bandParam) {
      loadBand(bandParam);
    } else if (storyParam) {
      const num = parseInt(storyParam.replace(/[^0-9]/g, ''), 10) || 1;
      loadStory(num);
    } else if (phaseParam) {
      loadStory(parseInt(phaseParam, 10) || 1);
    } else if (textParam) {
      textInput.value = decodeURIComponent(textParam);
      syncTextStats();
      applyCustomText(textInput.value);
    } else {
      loadStory(1);
    }
  }

  initURLParams();
})();
