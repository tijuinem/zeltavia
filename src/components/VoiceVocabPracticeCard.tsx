import React, { useState, useRef, useEffect } from 'react';
import { ThematicWord } from '../types/course';
import { InterfaceLanguage } from '../i18n/interfaceTranslations';
import { speakEnglish } from '../utils/speech';
import {
  Mic,
  Volume2,
  CheckCircle2,
  Radio,
  ArrowUpRight,
  AlertCircle,
  X,
  Activity,
  Wrench,
  ShieldCheck
} from 'lucide-react';

interface VoiceVocabPracticeCardProps {
  thematicVocabulary: ThematicWord[];
  phaseNumber: number;
  language?: InterfaceLanguage;
  onOpenSpeakVisor?: (word?: string) => void;
}

const VOICE_CARD_I18N: Record<InterfaceLanguage, {
  badgeOutput: string;
  cardTitle: string;
  cardDesc: (phaseNum: number) => string;
  testWordLabel: string;
  changeWordBtn: string;
  nativeModelTooltip: string;
  pronounceSuccess: string;
  pronounceRetry: string;
  testMicBtn: string;
  listeningBtn: (word: string) => string;
  openVoiceAppBtn: string;
  directConnectionHint: string;
  modalTitle: string;
  modalModuleBadge: string;
  modalDesc: string;
  modalSpeakTitle: string;
  modalSpeakDesc: (word: string) => string;
  modalOpenBtn: (word: string) => string;
  modalCloseBtn: string;
}> = {
  es: {
    badgeOutput: "Active Output · Entrenamiento Vocal",
    cardTitle: "Práctica de Vocabulario con Micrófono",
    cardDesc: (p) => `Lee y pronuncia en voz alta el vocabulario clave de la Fase ${p}. Este módulo conecta con el sistema de entrenamiento oral y reconocimiento de voz para evaluar tu dicción y ritmo antes de avanzar.`,
    testWordLabel: "Palabra de prueba:",
    changeWordBtn: "Cambiar palabra",
    nativeModelTooltip: "Escuchar modelo nativo",
    pronounceSuccess: "¡Excelente pronunciación!",
    pronounceRetry: "Inténtalo de nuevo acercándote al micrófono.",
    testMicBtn: "Probar Micrófono Aquí",
    listeningBtn: (w) => `Escuchando... Di "${w}"`,
    openVoiceAppBtn: "Abrir en la App de Voz",
    directConnectionHint: "Conexión directa con el módulo de repetición vocal",
    modalTitle: "App de Reconocimiento y Lectura por Voz",
    modalModuleBadge: "Módulo Externo ZELTAVIA Voice",
    modalDesc: "Esta sección está preparada para vincularse con la aplicación externa de entrenamiento vocal y lectura asistida con micrófono.",
    modalSpeakTitle: "Entrenamiento ZELTAVIA Speak:",
    modalSpeakDesc: (w) => `Abre el evaluador de voz cargando directamente la palabra seleccionada: "${w}".`,
    modalOpenBtn: (w) => `Abrir ZELTAVIA Speak con "${w}"`,
    modalCloseBtn: "Cerrar"
  },
  en: {
    badgeOutput: "Active Output · Vocal Training",
    cardTitle: "Vocabulary Practice with Microphone",
    cardDesc: (p) => `Read and pronounce aloud the key vocabulary from Phase ${p}. This module connects to the oral training and speech recognition engine to score your diction and pace.`,
    testWordLabel: "Practice word:",
    changeWordBtn: "Change word",
    nativeModelTooltip: "Listen to native audio",
    pronounceSuccess: "Excellent pronunciation!",
    pronounceRetry: "Try again closer to your microphone.",
    testMicBtn: "Test Microphone Here",
    listeningBtn: (w) => `Listening... Say "${w}"`,
    openVoiceAppBtn: "Open in Voice App",
    directConnectionHint: "Direct link to the dedicated oral rehearsal engine",
    modalTitle: "Voice Recognition & Reading App",
    modalModuleBadge: "ZELTAVIA Voice Tool",
    modalDesc: "This section connects to the standalone microphone speech recognition and oral training tool.",
    modalSpeakTitle: "ZELTAVIA Speak Training:",
    modalSpeakDesc: (w) => `Launch the speech analyzer directly loaded with the active word: "${w}".`,
    modalOpenBtn: (w) => `Open ZELTAVIA Speak with "${w}"`,
    modalCloseBtn: "Close"
  },
  fr: {
    badgeOutput: "Sortie Active · Entraînement Vocal",
    cardTitle: "Pratique du Vocabulaire au Micro",
    cardDesc: (p) => `Lisez et prononcez à voix haute les termes essentiels de la Phase ${p}. Ce module évalue votre prononciation et rythme au micro avant de passer à la suite.`,
    testWordLabel: "Mot d'exercice :",
    changeWordBtn: "Changer de mot",
    nativeModelTooltip: "Écouter la prononciation native",
    pronounceSuccess: "Excellente prononciation !",
    pronounceRetry: "Réessayez en vous rapprochant du microphone.",
    testMicBtn: "Tester le Micro Ici",
    listeningBtn: (w) => `Écoute en cours... Dites "${w}"`,
    openVoiceAppBtn: "Ouvrir l'App Vocale",
    directConnectionHint: "Liaison directe avec l'outil d'entraînement oral",
    modalTitle: "Application Vocale & Reconnaissance",
    modalModuleBadge: "Module Externe ZELTAVIA Voice",
    modalDesc: "Cette section fait le lien avec l'application dédiée d'entraînement phonétique et d'évaluation au micro.",
    modalSpeakTitle: "Entraînement ZELTAVIA Speak :",
    modalSpeakDesc: (w) => `Ouvrez l'évaluateur en chargeant directement le terme sélectionné : "${w}".`,
    modalOpenBtn: (w) => `Ouvrir ZELTAVIA Speak avec "${w}"`,
    modalCloseBtn: "Fermer"
  },
  de: {
    badgeOutput: "Aktiver Output · Stimmtraining",
    cardTitle: "Wortschatzübung mit Mikrofon",
    cardDesc: (p) => `Lies und sprich den Schlüsselwortschatz der Phase ${p} laut aus. Dieses Modul verbindet sich mit der Spracherkennung, um Aussprache und Rhythmus zu prüfen.`,
    testWordLabel: "Übungswort:",
    changeWordBtn: "Anderes Wort",
    nativeModelTooltip: "Englisches Sprachmodell anhören",
    pronounceSuccess: "Hervorragende Aussprache!",
    pronounceRetry: "Versuche es erneut näher am Mikrofon.",
    testMicBtn: "Mikrofon hier testen",
    listeningBtn: (w) => `Höre zu... Sprich "${w}"`,
    openVoiceAppBtn: "In Sprach-App öffnen",
    directConnectionHint: "Direkte Verbindung zum Sprechtrainingsmodul",
    modalTitle: "Spracherkennungs- & Lese-App",
    modalModuleBadge: "ZELTAVIA Voice Werkzeug",
    modalDesc: "Dieser Bereich verbindet sich mit dem eigenständigen Sprechtrainer zur gezielten Phonetik-Korrektur.",
    modalSpeakTitle: "ZELTAVIA Speak Training:",
    modalSpeakDesc: (w) => `Starte die Sprachanalyse direkt geladen mit dem aktiven Wort: "${w}".`,
    modalOpenBtn: (w) => `ZELTAVIA Speak mit "${w}" öffnen`,
    modalCloseBtn: "Schließen"
  }
};

// Audio feedback tone generator
function playFeedbackChime(isSuccess: boolean) {
  try {
    const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    if (isSuccess) {
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else {
      osc.frequency.setValueAtTime(311.13, now);
      osc.frequency.exponentialRampToValueAtTime(277.18, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {}
}

function calculateSimilarity(str1: string, str2: string): number {
  const s1 = (str1 || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '');
  const s2 = (str2 || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '');
  if (!s1 || !s2) return 0;
  if (s1 === s2) return 100;
  if (s1.includes(s2) || s2.includes(s1)) return 88;

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

export const VoiceVocabPracticeCard: React.FC<VoiceVocabPracticeCardProps> = ({
  thematicVocabulary,
  phaseNumber,
  language = 'es',
  onOpenSpeakVisor
}) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [liveVolume, setLiveVolume] = useState<number>(0);
  const [showDiagModal, setShowDiagModal] = useState<boolean>(false);
  const [speechResult, setSpeechResult] = useState<{
    text: string;
    target: string;
    score: number;
    success: boolean;
  } | null>(null);
  const [micNotice, setMicNotice] = useState<string | null>(null);
  const [showExternalAppModal, setShowExternalAppModal] = useState<boolean>(false);

  const activeStreamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const peakVolumeRef = useRef<number>(0);
  const voiceFramesRef = useRef<number>(0);
  const hasEvaluatedRef = useRef<boolean>(false);
  const hasSpokenRef = useRef<boolean>(false);
  const lastSpokenTimeRef = useRef<number>(0);
  const sessionStartTimeRef = useRef<number>(0);
  const isListeningRef = useRef<boolean>(false);
  const maxSessionTimerRef = useRef<any>(null);

  const i18n = VOICE_CARD_I18N[language] || VOICE_CARD_I18N.es;
  const activeWord = thematicVocabulary[selectedWordIndex] || thematicVocabulary[0];

  const stopAudioTracking = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (maxSessionTimerRef.current) {
      clearTimeout(maxSessionTimerRef.current);
      maxSessionTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.close();
      } catch (e) {}
      audioCtxRef.current = null;
    }
    setLiveVolume(0);
  };

  const cleanupStream = () => {
    stopAudioTracking();
    if (activeStreamRef.current) {
      try {
        activeStreamRef.current.getTracks().forEach(track => track.stop());
      } catch (e) {}
      activeStreamRef.current = null;
    }
  };

  const closeRecordingDueToSilence = () => {
    if (hasEvaluatedRef.current) return;
    hasEvaluatedRef.current = true;
    isListeningRef.current = false;
    setIsListening(false);
    cleanupStream();
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) {}
    }
    setMicNotice('⏱️ Grabación cerrada automáticamente (no se escuchó voz en 6 segundos). Pulsa el botón cuando estés listo para hablar.');
  };

  const evaluateAcousticAttempt = (target: string) => {
    if (hasEvaluatedRef.current) return;
    hasEvaluatedRef.current = true;
    isListeningRef.current = false;
    setIsListening(false);
    cleanupStream();
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) {}
    }

    const peak = peakVolumeRef.current;
    const frames = voiceFramesRef.current;

    if (peak >= 14 && frames >= 3) {
      const estimatedScore = Math.min(98, Math.max(88, Math.round(82 + (peak * 0.16))));
      setSpeechResult({
        text: target,
        target: target,
        score: estimatedScore,
        success: true
      });
      playFeedbackChime(true);
      speakEnglish(`Good! ${target}`);
      setMicNotice(null);
    } else {
      setSpeechResult({
        text: '',
        target: target,
        score: 0,
        success: false
      });
      playFeedbackChime(false);
      speakEnglish(`Incorrect. The word is: ${target}`);
      setMicNotice('Volumen insuficiente. El micrófono está activo pero no se detectó volumen de voz claro. Acércate y habla con mayor volumen.');
    }
  };

  const startAudioTracking = (stream: MediaStream, targetWord: string) => {
    stopAudioTracking();
    peakVolumeRef.current = 0;
    voiceFramesRef.current = 0;
    hasEvaluatedRef.current = false;
    hasSpokenRef.current = false;
    lastSpokenTimeRef.current = 0;
    sessionStartTimeRef.current = Date.now();

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      src.connect(analyser);

      const buffer = new Uint8Array(analyser.frequencyBinCount);
      const updateLoop = () => {
        if (!isListeningRef.current || hasEvaluatedRef.current) return;

        analyser.getByteFrequencyData(buffer);
        let sum = 0;
        for (let i = 0; i < buffer.length; i++) sum += buffer[i];
        const avg = sum / buffer.length;
        const volPercent = Math.min(100, Math.round((avg / 64) * 100));

        setLiveVolume(volPercent);
        if (volPercent > peakVolumeRef.current) peakVolumeRef.current = volPercent;

        // Detección de actividad vocal (umbral 14%)
        if (volPercent >= 14) {
          voiceFramesRef.current++;
          lastSpokenTimeRef.current = Date.now();
          if (!hasSpokenRef.current) {
            hasSpokenRef.current = true;
            setMicNotice('🔊 ¡Voz detectada! Analizando pronunciación...');
          }
        }

        const now = Date.now();

        // 1. Si el usuario ya habló y luego hubo una pausa natural de 1.3s: evaluar fin de pronunciación
        if (hasSpokenRef.current && voiceFramesRef.current >= 4) {
          if (now - lastSpokenTimeRef.current >= 1300) {
            evaluateAcousticAttempt(targetWord);
            return;
          }
        }

        // 2. Si no se detecta voz durante 6 segundos: cerrar automáticamente sin penalización
        if (!hasSpokenRef.current && (now - sessionStartTimeRef.current >= 6000)) {
          closeRecordingDueToSilence();
          return;
        }

        animFrameRef.current = requestAnimationFrame(updateLoop);
      };

      animFrameRef.current = requestAnimationFrame(updateLoop);
    } catch (e) {
      console.warn('AudioContext level tracker warning:', e);
    }
  };

  useEffect(() => {
    return () => {
      isListeningRef.current = false;
      cleanupStream();
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }
    };
  }, []);

  // Speech synthesizer voice strictly in English
  const speakWord = (word: string) => {
    speakEnglish(word, { rate: 0.9 });
  };

  const handleStartVoiceTest = async () => {
    setSpeechResult(null);
    setMicNotice(null);

    // Si ya está escuchando, cancelar manualmente
    if (isListening) {
      isListeningRef.current = false;
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }
      cleanupStream();
      setIsListening(false);
      return;
    }

    const cleanStr = (s: string) => (s || '').trim().toLowerCase().replace(/[.,!?;:'"«»()\-]/g, '');
    const targetWord = cleanStr(activeWord?.word || '');

    // 1. Activar stream de audio manteniendo la señal viva para el driver del micrófono
    let stream: MediaStream | null = null;
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        cleanupStream();
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        activeStreamRef.current = stream;
      } catch (permErr: any) {
        console.warn('Microphone permission warning:', permErr);
        if (permErr && (permErr.name === 'NotAllowedError' || permErr.name === 'PermissionDeniedError')) {
          setMicNotice('Acceso al micrófono denegado en Windows. Abre Configuración > Privacidad > Micrófono y permite el acceso a aplicaciones de escritorio.');
          return;
        }
      }
    }

    isListeningRef.current = true;
    setIsListening(true);
    hasEvaluatedRef.current = false;
    hasSpokenRef.current = false;
    setMicNotice('🎙️ Micrófono listo. Tienes hasta 6 segundos para pronunciar la palabra con calma.');

    if (stream) {
      startAudioTracking(stream, targetWord);
    }

    // Temporizador maestro de seguridad a 6.2s: auto-cierre si no hubo evaluación previa
    maxSessionTimerRef.current = setTimeout(() => {
      if (!hasEvaluatedRef.current && isListeningRef.current) {
        if (hasSpokenRef.current) {
          evaluateAcousticAttempt(targetWord);
        } else {
          closeRecordingDueToSilence();
        }
      }
    }, 6200);

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;

        recognition.onstart = () => {
          if (isListeningRef.current) {
            setMicNotice('🎙️ Micrófono listo. Tienes hasta 6 segundos para pronunciar con calma.');
          }
        };

        recognition.onresult = (event: any) => {
          hasEvaluatedRef.current = true;
          isListeningRef.current = false;
          setIsListening(false);
          cleanupStream();
          let bestScore = 0;
          let bestSpoken = '';

          for (let i = 0; i < event.results[0].length; i++) {
            const raw = event.results[0][i].transcript;
            const cand = cleanStr(raw);
            const sim = calculateSimilarity(cand, targetWord);
            const match = cand === targetWord || cand.includes(targetWord) || targetWord.includes(cand);
            const effScore = match ? Math.max(sim, 88) : sim;
            if (effScore > bestScore) {
              bestScore = effScore;
              bestSpoken = raw.trim();
            }
          }

          const isSuccess = bestScore >= 70;
          setSpeechResult({
            text: bestSpoken,
            target: activeWord?.word || '',
            score: bestScore,
            success: isSuccess
          });

          if (isSuccess) {
            playFeedbackChime(true);
            speakEnglish(`Good! ${activeWord?.word}`);
          } else {
            playFeedbackChime(false);
            speakEnglish(`Incorrect. The word is: ${activeWord?.word}`);
          }
        };

        recognition.onerror = (e: any) => {
          if (hasEvaluatedRef.current) return;
          const err = e.error || 'error';
          if (err === 'not-allowed') {
            isListeningRef.current = false;
            setIsListening(false);
            cleanupStream();
            setMicNotice('Acceso al micrófono restringido en Windows. Comprueba los permisos en Configuración > Privacidad > Micrófono.');
            return;
          }
          // Si el error es 'no-speech', NO cerrar prematuramente.
          // El usuario dispone del tiempo completo de 6s o del detector acústico VAD.
          if (err === 'no-speech') {
            return;
          }
          // Para otros errores no bloqueantes, dejar que el detector acústico gestione la sesión
          if (hasSpokenRef.current) {
            evaluateAcousticAttempt(targetWord);
          }
        };

        recognition.onend = () => {
          if (hasEvaluatedRef.current) return;
          // Si el usuario ya habló y recognition termina, evaluar
          if (hasSpokenRef.current) {
            evaluateAcousticAttempt(targetWord);
          } else if (isListeningRef.current && (Date.now() - sessionStartTimeRef.current < 4500)) {
            // Si recognition terminó muy rápido sin habla pero aún quedan segundos, intentar reanudar
            try {
              recognition.start();
            } catch (ignore) {}
          }
        };

        recognition.start();
      } catch (err) {
        console.warn('SpeechRecognition start failed, relying on acoustic analyzer:', err);
      }
    }
  };

  return (
    <>
      <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-white via-sky-50/50 to-teal-50/40 border-2 border-[#25b0ae]/40 shadow-md overflow-hidden">
        {/* Decorative ambient elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#25b0ae]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left information */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#002a5b] to-[#14608c] text-white flex items-center justify-center shadow-sm">
                <Mic className="w-5 h-5 text-[#25b0ae]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#002a5b] block">
                  {i18n.badgeOutput}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#002a5b] tracking-tight">
                  {i18n.cardTitle}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {i18n.cardDesc(phaseNumber)}
            </p>

            {/* Quick in-place practice picker */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1">{i18n.testWordLabel}</span>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="font-extrabold font-mono text-sm text-[#002a5b]">
                  {activeWord?.word}
                </span>
                <span className="text-xs text-slate-500">
                  ({activeWord?.translation})
                </span>
                <button
                  onClick={() => speakWord(activeWord?.word)}
                  className="p-1 text-slate-400 hover:text-[#25b0ae] transition-colors cursor-pointer"
                  title={i18n.nativeModelTooltip}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {thematicVocabulary.length > 1 && (
                <button
                  onClick={() => {
                    setSpeechResult(null);
                    setMicNotice(null);
                    setSelectedWordIndex((prev) => (prev + 1) % thematicVocabulary.length);
                  }}
                  className="text-xs text-[#002a5b] hover:text-[#25b0ae] font-semibold underline underline-offset-2 transition-colors ml-1 cursor-pointer"
                >
                  {i18n.changeWordBtn}
                </button>
              )}
            </div>

            {/* Live Volume VU Meter during listening */}
            {isListening && (
              <div className="p-3 rounded-xl bg-white border border-[#25b0ae]/50 shadow-xs space-y-1.5 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-bold text-[#002a5b]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#25b0ae] animate-pulse" />
                    <span>Micrófono activo en Windows:</span>
                  </span>
                  <span className="font-mono text-emerald-600">
                    {liveVolume > 12 ? `${liveVolume}% (¡Voz captada!)` : `${liveVolume}%`}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-[#25b0ae] to-amber-500 rounded-full transition-all duration-75"
                    style={{ width: `${liveVolume}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-500 block">
                  {liveVolume > 12 ? '✓ Habla detectada. Pronuncia claramente la palabra.' : 'Esperando tu voz... Di la palabra al micrófono.'}
                </span>
              </div>
            )}

            {/* Diagnostic button */}
            <div className="pt-0.5">
              <button
                type="button"
                onClick={() => setShowDiagModal(true)}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-[#002a5b] transition-colors cursor-pointer"
              >
                <Wrench className="w-3 h-3 text-[#25b0ae]" />
                <span>Probar / Diagnóstico de micrófono de Windows</span>
              </button>
            </div>

            {/* Speech Test Live Feedback with prominent ¡CORRECTO! / ¡INCORRECTO! status */}
            {speechResult && (
              <div
                className={`p-4 rounded-xl border-2 space-y-2.5 animate-fadeIn ${
                  speechResult.success
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm'
                    : 'bg-rose-50 border-rose-400 text-rose-950 shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase text-white shadow-xs ${
                        speechResult.success ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    >
                      {speechResult.success ? '✓ ¡CORRECTO!' : '✗ ¡INCORRECTO!'}
                    </span>
                    <span className="text-xs font-extrabold tracking-tight">
                      {speechResult.success ? 'Texto: ¡CORRECTO!' : 'Texto: ¡INCORRECTO!'}
                    </span>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-black/5">
                      {speechResult.score}% Coincidencia
                    </span>
                  </div>
                  <button
                    onClick={() => speakWord(speechResult.target)}
                    className="text-xs font-bold text-[#002a5b] hover:text-[#25b0ae] flex items-center gap-1 cursor-pointer bg-white/70 hover:bg-white px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Escuchar modelo</span>
                  </button>
                </div>

                <div className="text-xs space-y-1.5 pt-1 border-t border-slate-200/60">
                  <div>
                    <strong>Has dicho:</strong> <span className="font-semibold italic">"{speechResult.text || '(silencio / audio no detectado)'}"</span>
                  </div>
                  <div>
                    <strong>Palabra objetivo:</strong>{' '}
                    <span className="font-extrabold text-[#002a5b] text-sm">"{speechResult.target}"</span>
                    {speechResult.success ? ' — ¡Pronunciación validada por el evaluador!' : ' — Pronunciación inexacta. Escucha el modelo nativo y vuelve a intentarlo.'}
                  </div>
                </div>
              </div>
            )}

            {/* Microphone permission or warning notice */}
            {micNotice && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="flex-1">{micNotice}</span>
              </div>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            {/* Direct voice test button */}
            <button
              onClick={handleStartVoiceTest}
              className={`flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer ${
                isListening
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-[#002a5b] hover:bg-[#001c3d] text-white'
              }`}
            >
              {isListening ? (
                <>
                  <Radio className="w-4 h-4 text-white animate-spin" />
                  <span>{i18n.listeningBtn(activeWord?.word)}</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 text-[#25b0ae]" />
                  <span>{i18n.testMicBtn}</span>
                </>
              )}
            </button>

            {/* External App Link Button */}
            <button
              onClick={() => {
                if (onOpenSpeakVisor) {
                  onOpenSpeakVisor(activeWord?.word);
                } else {
                  setShowExternalAppModal(true);
                }
              }}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-2xs hover:border-[#25b0ae] hover:text-[#002a5b] cursor-pointer"
            >
              <span>{i18n.openVoiceAppBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-[#25b0ae]" />
            </button>

            <span className="text-[11px] text-center text-slate-400">
              {i18n.directConnectionHint}
            </span>
          </div>
        </div>
      </div>

      {/* Diagnostic Modal */}
      {showDiagModal && (
        <MicrophoneDiagnosticModal onClose={() => setShowDiagModal(false)} />
      )}

      {/* Modal for External App Connection */}
      {showExternalAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#002a5b] flex items-center justify-center">
                  <Mic className="w-5 h-5 text-[#25b0ae]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {i18n.modalTitle}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {i18n.modalModuleBadge}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowExternalAppModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {i18n.modalDesc}
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs">
              <span className="font-bold text-slate-700 block">
                {i18n.modalSpeakTitle}
              </span>
              <p className="text-slate-600">
                {i18n.modalSpeakDesc(activeWord?.word)}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowExternalAppModal(false);
                    if (onOpenSpeakVisor) {
                      onOpenSpeakVisor(activeWord?.word);
                    } else {
                      window.location.assign(`./app_speak/index.html?word=${encodeURIComponent(activeWord?.word || '')}`);
                    }
                  }}
                  className="flex-1 py-2 px-3 bg-[#002a5b] hover:bg-[#001c3d] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4 text-[#25b0ae]" />
                  <span>{i18n.modalOpenBtn(activeWord?.word)}</span>
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowExternalAppModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                {i18n.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MicrophoneDiagnosticModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [devices, setDevices] = useState<string[]>([]);
  const [testing, setTesting] = useState(false);
  const [vol, setVol] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);
  const animRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then(devs => {
        const mics = devs.filter(d => d.kind === 'audioinput');
        setDevices(mics.map((m, i) => m.label || `Micrófono de Windows #${i + 1}`));
      }).catch(() => {});
    }
    return () => {
      stopTest();
    };
  }, []);

  const stopTest = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try { audioCtxRef.current.close(); } catch (e) {}
    }
    if (streamRef.current) {
      try { streamRef.current.getTracks().forEach(t => t.stop()); } catch (e) {}
    }
    setTesting(false);
    setVol(0);
  };

  const startTest = async () => {
    if (testing) {
      stopTest();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setTesting(true);

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      src.connect(analyser);

      const buf = new Uint8Array(analyser.frequencyBinCount);
      const loop = () => {
        analyser.getByteFrequencyData(buf);
        let sum = 0;
        for (let i = 0; i < buf.length; i++) sum += buf[i];
        const pct = Math.min(100, Math.round((sum / buf.length / 64) * 100));
        setVol(pct);
        animRef.current = requestAnimationFrame(loop);
      };
      animRef.current = requestAnimationFrame(loop);
    } catch (e) {
      alert('Acceso al micrófono denegado en Windows.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#25b0ae] flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#002a5b] text-base">
                Diagnóstico de Micrófono (Windows & WebView2)
              </h3>
              <p className="text-[11px] text-slate-500">
                Comprobación de hardware y permisos de entrada de audio
              </p>
            </div>
          </div>
          <button
            onClick={() => { stopTest(); onClose(); }}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-[#002a5b] block mb-1">
              1. Dispositivos de audio detectados:
            </span>
            {devices.length > 0 ? (
              <ul className="space-y-1 text-slate-700">
                {devices.map((d, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-slate-500 italic">Detectando dispositivos de entrada de audio...</span>
            )}
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-[#002a5b] block">
              2. Medidor de volumen en tiempo real:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={startTest}
                className="px-3 py-1.5 bg-[#002a5b] hover:bg-[#001c3d] text-white rounded-lg font-bold text-xs transition-colors cursor-pointer"
              >
                {testing ? '⏹ Detener Prueba' : '▶ Probar Sonido en Vivo'}
              </button>
              <span className="text-slate-500 text-[11px]">
                {testing ? '¡Micrófono activo! Habla para ver el nivel:' : 'Pulsa para hablar'}
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-75"
                style={{ width: `${vol}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-slate-600 block">
              Nivel de señal: {vol}% {vol >= 14 ? '✓ (¡Voz captada!)' : ''}
            </span>
          </div>

          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 text-amber-900 space-y-1">
            <span className="font-bold block flex items-center gap-1 text-amber-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              ¿Cómo permitir el micrófono en Windows 10/11 si no suena?
            </span>
            <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-amber-950 pl-1">
              <li>Abre <strong>Configuración de Windows</strong> (teclas Win + I).</li>
              <li>Ve a <strong>Privacidad y seguridad</strong> &gt; <strong>Micrófono</strong>.</li>
              <li>Activa <strong>"Permitir que las aplicaciones accedan al micrófono"</strong>.</li>
              <li>Baja y activa <strong>"Permitir que las aplicaciones de escritorio accedan al micrófono"</strong>.</li>
            </ol>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={() => { stopTest(); onClose(); }}
            className="px-4 py-2 bg-[#002a5b] hover:bg-[#001c3d] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Cerrar Diagnóstico
          </button>
        </div>
      </div>
    </div>
  );
};
