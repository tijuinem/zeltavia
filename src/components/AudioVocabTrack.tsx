import React, { useState } from 'react';
import { InterfaceLanguage } from '../i18n/interfaceTranslations';
import { VOCAB_TRACK_STRINGS, LOCALIZED_VOCAB_BANDS } from '../i18n/vocabTrackTranslations';
import { speakEnglish } from '../utils/speech';
import {
  Headphones,
  Volume2,
  Sparkles,
  ArrowRight,
  Eye,
  RotateCw,
  BookOpen,
  Mic,
  ArrowUpRight
} from 'lucide-react';

interface AudioVocabTrackProps {
  language?: InterfaceLanguage;
  onOpenVisor?: (type: 'read' | 'speak', customUrl?: string) => void;
}

export const AudioVocabTrack: React.FC<AudioVocabTrackProps> = ({
  language = 'es',
  onOpenVisor
}) => {
  const [selectedBandIndex, setSelectedBandIndex] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [showMeaning, setShowMeaning] = useState<boolean>(false);

  const t = VOCAB_TRACK_STRINGS[language] || VOCAB_TRACK_STRINGS.es;
  const bands = LOCALIZED_VOCAB_BANDS[language] || LOCALIZED_VOCAB_BANDS.es;
  const currentBand = bands[selectedBandIndex] || bands[0];
  const currentWord = currentBand.sampleWords[activeWordIndex] || currentBand.sampleWords[0];

  const handleNextWord = () => {
    setShowMeaning(false);
    setActiveWordIndex(prev => (prev + 1) % currentBand.sampleWords.length);
  };

  const handleSelectBand = (idx: number) => {
    setSelectedBandIndex(idx);
    setActiveWordIndex(0);
    setShowMeaning(false);
  };

  return (
    <div className="w-full space-y-10 pb-16 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="text-[#002a5b]">{t.badgeCategory}</span>
              <span>·</span>
              <span className="text-[#25b0ae]">{t.badgeFocus}</span>
              <span>·</span>
              <span>{t.badgeLaw}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002a5b] tracking-tight">
              {t.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-3 shrink-0">
            <Headphones className="w-8 h-8 text-[#002a5b]" />
            <div>
              <span className="text-xs text-slate-500 font-medium block">{t.coverageLabel}</span>
              <span className="text-base font-extrabold text-[#002a5b] font-mono">
                {t.coverageValue}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Aplicaciones Modulares Zeltavia: READ y SPEAK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* App Read Card */}
        <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#25b0ae] shadow-xs flex flex-col justify-between transition-all group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002a5b] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#25b0ae]" />
              </div>
              <span className="text-[11px] font-bold text-[#002a5b] bg-slate-100 px-2.5 py-1 rounded-md">
                {t.readBadge}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#002a5b]">
              {t.readTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.readDescription}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => onOpenVisor ? onOpenVisor('read') : window.location.assign('./app_read/index.html')}
              className="flex-1 py-2 px-3 bg-[#002a5b] hover:bg-[#001c3d] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <span>{t.readBtnOpen}</span>
            </button>
            <button
              onClick={() => onOpenVisor ? onOpenVisor('read') : window.location.assign('./app_read/index.html')}
              className="p-2 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl transition-colors cursor-pointer"
              title="Abrir en ventana de sistema integrada"
            >
              <ArrowUpRight className="w-4 h-4 text-[#25b0ae]" />
            </button>
          </div>
        </div>

        {/* App Speak Card */}
        <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#25b0ae] shadow-xs flex flex-col justify-between transition-all group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002a5b] flex items-center justify-center">
                <Mic className="w-5 h-5 text-[#25b0ae]" />
              </div>
              <span className="text-[11px] font-bold text-[#002a5b] bg-slate-100 px-2.5 py-1 rounded-md">
                {t.speakBadge}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#002a5b]">
              {t.speakTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.speakDescription}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => onOpenVisor ? onOpenVisor('speak') : window.location.assign('./app_speak/index.html')}
              className="flex-1 py-2 px-3 bg-[#002a5b] hover:bg-[#001c3d] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <span>{t.speakBtnOpen}</span>
            </button>
            <button
              onClick={() => onOpenVisor ? onOpenVisor('speak') : window.location.assign('./app_speak/index.html')}
              className="p-2 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl transition-colors cursor-pointer"
              title="Abrir en ventana de sistema integrada"
            >
              <ArrowUpRight className="w-4 h-4 text-[#25b0ae]" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Interactive Sample Words Trainer */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#002a5b] tracking-tight">
            {t.trainerTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.trainerSubtitle}
          </p>
        </div>

        {/* Band Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {bands.map((b, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectBand(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedBandIndex === idx
                  ? 'bg-[#002a5b] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {b.band}
            </button>
          ))}
        </div>

        {/* Word Card */}
        {currentWord && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#002a5b] tracking-tight">
                  {currentWord.en}
                </span>
                <button
                  onClick={() => speakEnglish(currentWord.en)}
                  className="p-2.5 rounded-full bg-[#002a5b] text-white hover:bg-[#001c3d] shadow-sm transition-all cursor-pointer"
                  title={t.listenBtn}
                >
                  <Volume2 className="w-5 h-5 text-[#25b0ae]" />
                </button>
              </div>

              {showMeaning ? (
                <p className="text-sm sm:text-base font-semibold text-emerald-700 animate-fadeIn">
                  {currentWord.trans}
                </p>
              ) : (
                <button
                  onClick={() => setShowMeaning(true)}
                  className="text-xs font-semibold text-[#002a5b] hover:text-[#25b0ae] flex items-center gap-1.5 cursor-pointer underline underline-offset-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.showMeaningBtn}</span>
                </button>
              )}

              <div className="pt-2 text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                <span className="font-semibold text-slate-500">{t.exampleSentenceLabel}</span>
                <span className="italic text-slate-800">"{currentWord.ex}"</span>
                <button
                  onClick={() => speakEnglish(currentWord.ex)}
                  className="p-1 rounded-md text-slate-400 hover:text-[#002a5b] transition-colors cursor-pointer"
                  title={t.listenBtn}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleNextWord}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-[#25b0ae] text-slate-700 hover:text-[#002a5b] font-bold text-xs shadow-xs transition-all cursor-pointer shrink-0"
            >
              <RotateCw className="w-4 h-4 text-[#25b0ae]" />
              <span>{t.nextWordBtn}</span>
            </button>
          </div>
        )}
      </div>

      {/* 5. Explicación de la Integración de Apps con las 6 Fases */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#25b0ae]" />
          <h2 className="text-lg sm:text-xl font-bold text-[#002a5b] tracking-tight">
            {t.integrationTitle}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t.integrationSummary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002a5b] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#25b0ae]" />
              {t.pillar1Title}
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002a5b] flex items-center gap-2">
              <Mic className="w-4 h-4 text-[#25b0ae]" />
              {t.pillar2Title}
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
