import React, { useState, useEffect, useRef } from 'react';
import { StoryData } from '../types/course';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';
import { getBestEnglishVoice } from '../utils/speech';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  BookOpen,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Mic,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';

interface StoryReaderModalProps {
  story: StoryData;
  phaseTitle: string;
  language?: InterfaceLanguage;
  onClose: () => void;
  onGoToAhaRules: () => void;
}

export const StoryReaderModal: React.FC<StoryReaderModalProps> = ({
  story,
  phaseTitle,
  language = 'es',
  onClose,
  onGoToAhaRules
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState<number | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<{ word: string; translation?: string } | null>(null);
  const [shadowingActive, setShadowingActive] = useState<boolean>(false);
  const [completedParagraphs, setCompletedParagraphs] = useState<number[]>([]);
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isCancelledRef = useRef<boolean>(false);
  const t = INTERFACE_TRANSLATIONS[language];

  useEffect(() => {
    // Stop any ongoing speech when modal mounts or changes story
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [story.id]);

  const speakText = (text: string, onEndCallback?: () => void) => {
    if (!('speechSynthesis' in window)) {
      console.warn("La síntesis de voz nativa no está disponible en este entorno.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;

    // Pick an English voice strictly
    const englishVoice = getBestEnglishVoice();
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onend = () => {
      if (onEndCallback && !isCancelledRef.current) {
        onEndCallback();
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const playFullStory = (startIndex = 0) => {
    isCancelledRef.current = false;
    setIsPlaying(true);
    setCurrentParagraphIndex(startIndex);

    let idx = startIndex;

    const playNext = () => {
      if (isCancelledRef.current || idx >= story.paragraphs.length) {
        setIsPlaying(false);
        setCurrentParagraphIndex(null);
        return;
      }

      setCurrentParagraphIndex(idx);
      setCompletedParagraphs(prev => prev.includes(idx) ? prev : [...prev, idx]);

      speakText(story.paragraphs[idx], () => {
        idx++;
        if (idx < story.paragraphs.length && !isCancelledRef.current) {
          playNext();
        } else {
          setIsPlaying(false);
          setCurrentParagraphIndex(null);
        }
      });
    };

    playNext();
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      isCancelledRef.current = true;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      playFullStory(currentParagraphIndex !== null ? currentParagraphIndex : 0);
    }
  };

  const handleStop = () => {
    isCancelledRef.current = true;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentParagraphIndex(null);
  };

  const handleSpeakSingleParagraph = (index: number) => {
    isCancelledRef.current = true;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setCurrentParagraphIndex(index);
    setIsPlaying(true);

    speakText(story.paragraphs[index], () => {
      setIsPlaying(false);
      setCompletedParagraphs(prev => prev.includes(index) ? prev : [...prev, index]);
    });
  };

  const handleSpeakKeySentence = (sentence: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    speakText(sentence);
  };

  const handleWordClick = async (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (cleanWord.length > 0) {
      // 1. Pronunciar exclusivamente la palabra individual seleccionada
      speakText(cleanWord);

      setSelectedWord({ word: cleanWord, translation: 'Traduciendo...' });

      // 2. Traducir únicamente esta palabra individual (nunca la frase o párrafo)
      try {
        const res = await fetch(`/api/translate?text=${encodeURIComponent(cleanWord)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.translation) {
            setSelectedWord({ word: cleanWord, translation: data.translation.trim() });
            return;
          }
        }
      } catch (err) {}

      // Si falla o está offline, mantener la palabra visible
      setSelectedWord(prev => prev && prev.word === cleanWord ? { ...prev, translation: cleanWord } : prev);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div
        className={`bg-white w-full rounded-2xl shadow-2xl flex flex-col border border-slate-200 transition-all duration-300 ${
          isFullscreen ? 'max-w-7xl h-[95vh]' : 'max-w-4xl max-h-[90vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-[#002a5b] text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Volver"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#25b0ae]">
                  Lector Inmersivo ZELTAVIA
                </span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white/80 font-medium">
                  {phaseTitle}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#25b0ae]" />
                {story.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:flex"
              title={isFullscreen ? 'Reducir' : 'Pantalla Completa'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Player Control Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-4 py-2 bg-[#002a5b] hover:bg-[#001c3d] text-white font-semibold text-sm rounded-xl shadow-sm transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" /> {t.storyReaderPause}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" /> {t.storyReaderPlay}
                </>
              )}
            </button>

            <button
              onClick={handleStop}
              disabled={!isPlaying && currentParagraphIndex === null}
              className="p-2 text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              title={t.storyReaderStop}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

            {/* Speed Presets */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 text-xs">
              <span className="text-slate-500 px-1 font-medium hidden md:inline">{t.storyReaderSpeed}</span>
              {[0.75, 0.95, 1.15].map(rate => (
                <button
                  key={rate}
                  onClick={() => setSpeechRate(rate)}
                  className={`px-2 py-1 rounded font-mono font-medium transition-colors cursor-pointer ${
                    speechRate === rate
                      ? 'bg-[#25b0ae] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {rate === 0.75 ? '0.75x' : rate === 0.95 ? '1.0x' : '1.2x'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <button
              onClick={() => setShadowingActive(!shadowingActive)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                shadowingActive
                  ? 'bg-amber-50 border-amber-200 text-amber-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-amber-600" />
              <span>{shadowingActive ? t.storyReaderShadowingActive : t.storyReaderShadowingAvailable}</span>
            </button>

            <div className="hidden lg:flex items-center gap-2 text-slate-500">
              <span className="font-mono">{story.tokensCount} words</span>
              <span>·</span>
              <span className="text-[#002a5b] font-semibold">{story.lexicalCoverage}</span>
            </div>
          </div>
        </div>

        {/* Story Reading Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8 space-y-5 bg-white selection:bg-[#25b0ae]/20">
          {/* Pedagogic Noticing Banner */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-sm text-[#002a5b] flex items-start gap-3">
            <Volume2 className="w-5 h-5 text-[#25b0ae] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{t.storyReaderNoticingBanner}</p>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {t.storyReaderNoticingText}
              </p>
            </div>
          </div>

          {/* Floating Selected Word Translation Card */}
          {selectedWord && (
            <div className="sticky top-0 z-30 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-teal-50 to-white border-2 border-[#25b0ae] shadow-md flex items-center justify-between gap-4 animate-fadeIn">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#25b0ae] bg-[#25b0ae]/15 px-2 py-0.5 rounded-md font-mono">
                  Palabra individual
                </span>
                <span className="text-base sm:text-lg font-black text-[#002a5b]">
                  {selectedWord.word}
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-700">
                  = {selectedWord.translation}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => speakText(selectedWord.word)}
                  className="px-3 py-1.5 rounded-xl bg-[#002a5b] hover:bg-[#001c3d] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  title="Escuchar pronunciación de la palabra"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#25b0ae]" />
                  <span>Escuchar</span>
                </button>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
                  title="Cerrar traducción de palabra"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-800">
            {story.paragraphs.map((paragraph, pIdx) => {
              const isActive = currentParagraphIndex === pIdx;
              const isCompleted = completedParagraphs.includes(pIdx);

              return (
                <div
                  key={pIdx}
                  onClick={() => handleSpeakSingleParagraph(pIdx)}
                  className={`group relative p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-50/90 border-[#25b0ae] shadow-xs'
                      : isCompleted
                      ? 'bg-slate-50/50 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                      : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeakSingleParagraph(pIdx);
                      }}
                      className={`mt-1 p-1 rounded-full shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#25b0ae] text-white'
                          : 'bg-slate-100 text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-200'
                      }`}
                      title="Escuchar párrafo"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>

                    <p className="flex-1 font-normal tracking-normal text-slate-800">
                      {paragraph.split(' ').map((w, wIdx) => (
                        <span
                          key={wIdx}
                          onClick={(e) => handleWordClick(w, e)}
                          className="hover:text-[#002a5b] hover:underline hover:decoration-[#25b0ae] hover:decoration-2 transition-colors inline-block mr-1.5"
                        >
                          {w}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shadowing Special Section */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Mic className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-base">
                {t.storyReaderShadowingSection}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {t.storyReaderShadowingHint}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {story.keySentencesForShadowing.map((sentence, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSpeakKeySentence(sentence)}
                  className="flex items-start gap-2.5 p-3 text-left rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 transition-all text-xs sm:text-sm group cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800 group-hover:text-slate-900">
                    "{sentence}"
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-b-2xl">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#25b0ae]" />
            <span>{language === 'es' ? '¿Has terminado de leer y escuchar el cuento?' : language === 'en' ? 'Finished reading and listening to the story?' : language === 'fr' ? 'Avez-vous terminé la lecture et l\'écoute ?' : 'Geschichte zu Ende gelesen und gehört?'}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {t.close}
            </button>
            <button
              onClick={() => {
                onClose();
                onGoToAhaRules();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#002a5b] to-[#125883] hover:to-[#002a5b] text-white font-semibold text-sm rounded-xl shadow-md transition-all hover:scale-[1.01] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#25b0ae]" />
              <span>{t.phaseAhaRulesTitle}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
