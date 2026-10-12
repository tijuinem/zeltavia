import React, { useState } from 'react';
import { PhaseData } from '../types/course';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';
import { VoiceVocabPracticeCard } from './VoiceVocabPracticeCard';
import { speakEnglish } from '../utils/speech';
import {
  Volume2,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Headphones,
  ShieldAlert,
  Repeat,
  Layers,
  ChevronDown,
  ChevronUp,
  Compass,
  Zap,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';

interface PhaseViewProps {
  phase: PhaseData;
  language?: InterfaceLanguage;
  onOpenStory: (storyId: string) => void;
  onOpenStandaloneReader?: (storyId: string) => void;
  onOpenSpeakVisor?: (word?: string) => void;
  onSelectNextPhase?: () => void;
}

export const PhaseView: React.FC<PhaseViewProps> = ({
  phase,
  language = 'es',
  onOpenStory,
  onOpenStandaloneReader,
  onOpenSpeakVisor,
  onSelectNextPhase
}) => {
  const [activeAhaIndex, setActiveAhaIndex] = useState<number | null>(0);
  const t = INTERFACE_TRANSLATIONS[language];

  return (
    <div className="space-y-10 pb-16 animate-fadeIn">
      {/* 1. Header of the Phase */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#25b0ae]/10 via-[#002a5b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-[#002a5b] font-bold">{t.phaseLabel} {phase.number} {t.phaseOfTotal}</span>
              <span>·</span>
              <span className="text-[#25b0ae] bg-[#25b0ae]/10 px-2 py-0.5 rounded-md font-mono">
                {phase.frequencyBand}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002a5b] tracking-tight">
              {phase.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {phase.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Requisitos Previos y Corrección a la Ficha */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-[#002a5b]" />
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              {t.phasePrereqTitle}
            </h2>
          </div>
          <p className="text-sm text-slate-700 font-medium mb-3 leading-relaxed">
            {phase.prerequisites.summary}
          </p>
          <ul className="space-y-2">
            {phase.prerequisites.details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>{t.phaseSlaGoal}</span>
          <span className="font-mono text-[#002a5b] font-medium">Banda Zipf i+1</span>
        </div>
      </div>

      {/* 3. TARJETA DE ACCESO AL CUENTO */}
      <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#002a5b] via-[#003875] to-[#001733] text-white shadow-xl border border-sky-900/40 overflow-hidden group">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#25b0ae]/20 blur-3xl pointer-events-none group-hover:bg-[#25b0ae]/30 transition-all duration-700" />
        <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#25b0ae] text-[#002a5b] flex items-center justify-center shadow-md">
                <Headphones className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#25b0ae] block">
                  {t.phaseStoryTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  "{phase.storyMeta.title}"
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              {language === 'es' ? 'En ZELTAVIA el texto no se disecciona en crudo aquí. Primero se experimenta la historia completa a través del lector auditivo interactivo con voz sintetizada (TTS) en inglés. Así tu mente detecta los patrones antes de analizarlos.' : language === 'en' ? 'In ZELTAVIA, stories are experienced through the interactive immersion reader with synchronized native English audio before studying grammar rules.' : language === 'fr' ? 'Dans ZELTAVIA, le récit est d\'abord écouté en immersion avec la voix de synthèse en anglais avant d\'aborder l\'analyse des règles.' : 'In ZELTAVIA wird die Geschichte zuerst im interaktiven Lesemodus mit englischer Sprachausgabe gehört, bevor Regeln analysiert werden.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25b0ae]" />
                {language === 'es' ? 'Audio TTS nativo en inglés' : language === 'en' ? 'Native English TTS Audio' : language === 'fr' ? 'Audio TTS natif en anglais' : 'Natives englisches TTS-Audio'}
              </span>
              <span>·</span>
              <span>{phase.storyMeta.estimatedReadTime}</span>
              <span>·</span>
              <span>Shadowing</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button
              onClick={() => onOpenStory(phase.storyMeta.id)}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25b0ae] hover:bg-[#1fa09e] text-[#002a5b] font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-cyan-500/20 cursor-pointer"
            >
              <Headphones className="w-5 h-5 fill-current" />
              <span>{t.phaseOpenStoryBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (onOpenStandaloneReader) {
                  onOpenStandaloneReader(phase.storyMeta.id);
                } else {
                  onOpenStory(phase.storyMeta.id);
                }
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-all border border-white/20 cursor-pointer"
              title="Abrir lector dual en ventana de sistema integrada"
            >
              <span>{t.phaseOpenStandaloneReader}</span>
              <BookOpen className="w-3.5 h-3.5 text-[#25b0ae]" />
            </button>

            <p className="text-[11px] text-center text-slate-400">
              {t.phaseStoryHint}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Micro-reglas "Aha" */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="border-b border-slate-100 pb-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-[#25b0ae]" />
              <div>
                <h2 className="text-xl font-extrabold text-[#002a5b] tracking-tight">
                  {t.phaseAhaRulesTitle} ({phase.ahaRules.length})
                </h2>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block mt-0.5">
                  {t.phaseAhaRulesSubtitle}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 max-w-sm text-right hidden sm:block">
              {language === 'es' ? 'Nombran un patrón lingüístico que tu oído y vista ya acaban de percibir en la historia.' : language === 'en' ? 'Naming linguistic patterns you have already perceived in the story.' : language === 'fr' ? 'Formalise les structures déjà entendues dans l\'histoire.' : 'Benennt Muster, die du in der Geschichte bereits wahrgenommen hast.'}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {phase.ahaRules.map((rule, rIdx) => {
            const isExpanded = activeAhaIndex === rIdx;
            return (
              <div
                key={rIdx}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-[#002a5b] bg-slate-50/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setActiveAhaIndex(isExpanded ? null : rIdx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isExpanded
                          ? 'bg-[#002a5b] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {rule.number}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      {rule.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200/60 text-sm text-slate-700 space-y-3 animate-fadeIn">
                    <p className="leading-relaxed">{rule.description}</p>

                    {rule.examples.length > 0 && (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 space-y-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          {language === 'es' ? 'Evidencias en la historia:' : language === 'en' ? 'Evidence in the story:' : language === 'fr' ? 'Exemples dans le récit :' : 'Belege in der Geschichte:'}
                        </span>
                        <div className="space-y-1.5">
                          {rule.examples.map((ex, exIdx) => (
                            <div
                              key={exIdx}
                              className="flex items-center justify-between text-xs sm:text-sm text-slate-800 bg-slate-50 px-3 py-1.5 rounded-lg"
                            >
                              <span className="font-medium">"{ex}"</span>
                              <button
                                onClick={() => speakEnglish(ex)}
                                className="text-slate-400 hover:text-[#002a5b] p-1 rounded-md transition-colors cursor-pointer"
                                title="Listen"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {rule.keyInsight && (
                      <div className="flex items-start gap-2 text-xs text-[#002a5b] bg-sky-50/80 p-2.5 rounded-lg border border-sky-100">
                        <Zap className="w-4 h-4 text-[#25b0ae] shrink-0 mt-0.5" />
                        <span>
                          <strong>Insight:</strong> {rule.keyInsight}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Chunks de esta Fase & 7. Filtro Anti-Traducción */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chunks */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-[#002a5b]" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                {t.phaseChunksTitle}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {t.phaseChunksSubtitle}
            </p>

            <div className="space-y-2.5">
              {phase.chunks.map((chunk, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3 hover:border-[#25b0ae] transition-colors"
                >
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">
                      "{chunk.phrase}"
                    </span>
                    <span className="text-xs text-slate-600">
                      {chunk.meaning}
                    </span>
                    {chunk.note && (
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        · {chunk.note}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => speakEnglish(chunk.phrase)}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-[#002a5b] hover:text-[#25b0ae] hover:border-[#25b0ae] transition-colors shrink-0 shadow-2xs cursor-pointer"
                    title="Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filtro Anti-Traducción */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                {t.phaseAntiTranslationTitle}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {language === 'es' ? 'Los errores más comunes provocados por la interferencia directa.' : language === 'en' ? 'Most common errors caused by mother tongue interference.' : language === 'fr' ? 'Les erreurs les plus fréquentes dues aux interférences directes.' : 'Häufige Fehler durch muttersprachliche Interferenz.'}
            </p>

            <div className="space-y-3">
              {phase.antiTranslation.map((item, aIdx) => (
                <div key={aIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800">{item.rule}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-800">
                      <span className="font-semibold block text-[10px] text-rose-500 uppercase">
                        {language === 'es' ? 'Error Típico ✗' : language === 'en' ? 'Common Error ✗' : language === 'fr' ? 'Erreur Typique ✗' : 'Typischer Fehler ✗'}
                      </span>
                      <span className="line-through">{item.wrong}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                      <span className="font-semibold block text-[10px] text-emerald-600 uppercase">
                        {language === 'es' ? 'Forma Correcta ✓' : language === 'en' ? 'Correct Form ✓' : language === 'fr' ? 'Forme Correcte ✓' : 'Richtig ✓'}
                      </span>
                      <span className="font-bold">{item.right}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                    <strong>{language === 'es' ? 'Razón:' : language === 'en' ? 'Reason:' : language === 'fr' ? 'Raison :' : 'Grund:'}</strong> {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Práctica de Vocabulario con Micrófono */}
      <VoiceVocabPracticeCard
        thematicVocabulary={phase.thematicVocabulary}
        phaseNumber={phase.number}
        language={language}
        onOpenSpeakVisor={onOpenSpeakVisor}
      />

      {/* Repaso Cumplido y Repaso Obligatorio para la Siguiente Fase */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#25b0ae] uppercase tracking-wider">
            <Repeat className="w-4 h-4" />
            <span>{t.phaseRecyclingTitle}</span>
          </div>

          {phase.repasoCumplido && (
            <p className="text-xs text-slate-300">
              <strong className="text-white">{language === 'es' ? 'Reciclado cumplido:' : language === 'en' ? 'Recycled knowledge:' : language === 'fr' ? 'Acquis réinvestis :' : 'Bereits gefestigt:'}</strong> {phase.repasoCumplido}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white">{language === 'es' ? 'Repaso obligatorio para la siguiente fase:' : language === 'en' ? 'Mandatory review for next phase:' : language === 'fr' ? 'Révision clé pour la phase suivante :' : 'Wiederholung für die nächste Phase:'}</strong>{' '}
            {phase.repasoObligatorio}
          </p>
        </div>

        {onSelectNextPhase && (
          <button
            onClick={onSelectNextPhase}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#002a5b] hover:bg-[#003875] border border-sky-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shrink-0 cursor-pointer"
          >
            <span>{t.phaseNextPhaseBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#25b0ae]" />
          </button>
        )}
      </div>
    </div>
  );
};

