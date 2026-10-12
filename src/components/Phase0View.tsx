import React from 'react';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';
import { PHASE_0_TRANSLATIONS } from '../i18n/phase0Translations';
import { speakEnglish } from '../utils/speech';
import {
  ArrowRight,
  Volume2,
  Sparkles,
  Compass,
  AlertCircle,
  Zap,
  Repeat,
  Layers,
  Users
} from 'lucide-react';

interface Phase0ViewProps {
  language?: InterfaceLanguage;
  onGoToPhase1: () => void;
}

export const Phase0View: React.FC<Phase0ViewProps> = ({ language = 'es', onGoToPhase1 }) => {
  const t = INTERFACE_TRANSLATIONS[language];
  const p0 = PHASE_0_TRANSLATIONS[language] || PHASE_0_TRANSLATIONS.es;

  return (
    <div className="w-full space-y-10 pb-16 animate-fadeIn">
      {/* 1. Header of the Phase - Exactly matching PhaseView styling */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#25b0ae]/10 via-[#002a5b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-[#002a5b] font-bold">{t.phaseLabel} 0 {t.phaseOfTotal}</span>
              <span>·</span>
              <span className="text-[#25b0ae] bg-[#25b0ae]/10 px-2 py-0.5 rounded-md font-mono">
                {p0.badge}
              </span>
              <span>·</span>
              <span>{p0.readingTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002a5b] tracking-tight">
              {p0.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {p0.description}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Requisitos Previos y Fundamento de la Ficha Previa */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-[#002a5b]" />
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              {t.phasePrereqTitle} (0/6)
            </h2>
          </div>
          <p className="text-sm text-slate-700 font-medium mb-3 leading-relaxed">
            {p0.subtitle}
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae] mt-1.5 shrink-0" />
              <span><strong>{p0.pronounsTitle}:</strong> {p0.pronounsSubtitle}</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae] mt-1.5 shrink-0" />
              <span><strong>{p0.toBeTitle}:</strong> {p0.toBeSubtitle}</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae] mt-1.5 shrink-0" />
              <span><strong>{p0.sRuleTitle}:</strong> {p0.sRule.rule}</span>
            </li>
          </ul>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>{t.phaseSlaGoal}</span>
          <span className="font-mono text-[#002a5b] font-medium">Banda 0 / Prereq</span>
        </div>
      </div>

      {/* 3. Bloque 1: Pronombres Sujeto */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <Users className="w-6 h-6 text-[#25b0ae]" />
            <div>
              <h2 className="text-xl font-extrabold text-[#002a5b] tracking-tight">
                1. {p0.pronounsTitle}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'es' ? 'Haz clic sobre cualquier pronombre para escuchar su pronunciación nativa de referencia.' : language === 'en' ? 'Click on any pronoun to hear its authentic native English pronunciation.' : language === 'fr' ? 'Cliquez sur n\'importe quel pronom pour écouter sa prononciation native.' : 'Klicke auf ein Pronomen, um die native Aussprache anzuhören.'}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-md border border-rose-100">
            {language === 'es' ? 'Regla de oro: Nunca se omiten en inglés' : language === 'en' ? 'Golden Rule: Never omitted in English' : language === 'fr' ? 'Règle d\'or : Jamais omis en anglais' : 'Goldene Regel: Im Englischen nie weggelassen'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {p0.pronouns.map((p, idx) => (
            <div
              key={idx}
              onClick={() => speakEnglish(p.en)}
              className="p-4 rounded-xl border border-slate-200 hover:border-[#25b0ae] bg-slate-50/50 hover:bg-sky-50/40 cursor-pointer transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold text-[#002a5b] font-mono group-hover:text-[#25b0ae] transition-colors">
                  {p.en}
                </span>
                <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-[#25b0ae] transition-colors" />
              </div>
              <div className="mt-3">
                <span className="text-xs font-bold text-slate-800 block">{p.meaning}</span>
                <span className="text-[11px] text-slate-500 block mt-0.5">{p.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bloque 2: El Verbo "To Be" en Presente y Contracciones */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
          <Layers className="w-6 h-6 text-[#25b0ae]" />
          <div>
            <h2 className="text-xl font-extrabold text-[#002a5b] tracking-tight">
              2. {p0.toBeTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {p0.toBeSubtitle}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px] bg-slate-50/80">
                <th className="py-3 px-4 rounded-l-lg">{language === 'es' ? 'Sujeto' : language === 'en' ? 'Subject' : language === 'fr' ? 'Sujet' : 'Subjekt'}</th>
                <th className="py-3 px-4">{language === 'es' ? 'Forma Completa' : language === 'en' ? 'Full Form' : language === 'fr' ? 'Forme Complète' : 'Vollform'}</th>
                <th className="py-3 px-4">{language === 'es' ? 'Contracción Habitual' : language === 'en' ? 'Contraction' : language === 'fr' ? 'Contraction' : 'Kurzform'}</th>
                <th className="py-3 px-4">{language === 'es' ? 'Ejemplo Mínimo' : language === 'en' ? 'Example' : language === 'fr' ? 'Exemple' : 'Beispiel'}</th>
                <th className="py-3 px-4 text-right rounded-r-lg">Audio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {p0.toBe.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#002a5b]">{row.subject}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-700">{row.full}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#25b0ae]">{row.contraction}</td>
                  <td className="py-3.5 px-4 text-slate-700">{row.example}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => speakEnglish(row.example)}
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#002a5b] hover:bg-slate-200 transition-colors cursor-pointer"
                      title="Listen"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Bloque 3: La Regla de la -S en 3ª Persona Singular */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
          <Zap className="w-6 h-6 text-[#25b0ae]" />
          <div>
            <h2 className="text-xl font-extrabold text-[#002a5b] tracking-tight">
              3. {p0.sRuleTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {p0.sRule.rule}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {p0.sRule.examples.map((ex, eIdx) => (
            <div
              key={eIdx}
              onClick={() => speakEnglish(ex.thirdPerson)}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#25b0ae] hover:bg-sky-50/30 cursor-pointer transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>{ex.base}</span>
                <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25b0ae] transition-colors" />
              </div>
              <span className="text-base font-bold text-[#002a5b] block font-mono">
                → {ex.thirdPerson}
              </span>
              {ex.note && (
                <span className="text-[11px] text-slate-500 block mt-1">
                  {ex.note}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 bg-sky-50/80 border border-sky-100 rounded-xl text-xs sm:text-sm text-[#002a5b] flex items-start gap-2.5">
          <Sparkles className="w-5 h-5 text-[#25b0ae] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{language === 'es' ? 'Regla de oro:' : language === 'en' ? 'Golden Rule:' : language === 'fr' ? 'Règle d\'or :' : 'Goldene Regel:'}</strong> {p0.sRule.goldenRule}
          </p>
        </div>
      </div>

      {/* 6. Repaso Cumplido y Avance a Fase 1 */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#25b0ae] uppercase tracking-wider">
            <Repeat className="w-4 h-4" />
            <span>ZELTAVIA · {language === 'es' ? 'Siguiente Paso' : language === 'en' ? 'Next Step' : language === 'fr' ? 'Étape Suivante' : 'Nächster Schritt'}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white">{t.phaseLabel} 1:</strong> {language === 'es' ? 'El Esqueleto del Idioma (Top 1–1.000 palabras más frecuentes + Cuento "A Normal Day").' : language === 'en' ? 'The Language Skeleton (Top 1–1,000 words + Graded Story "A Normal Day").' : language === 'fr' ? 'Le Squelette de la Langue (Top 1–1 000 mots + Récit "A Normal Day").' : 'Das Sprachgerüst (Top 1–1.000 Wörter + Story "A Normal Day").'}
          </p>
          <p className="text-xs text-slate-400">
            {language === 'es' ? 'Con esta ficha leída en 2 minutos ya estás listo para iniciar el primer cuento de la Fase 1.' : language === 'en' ? 'With this 2-minute sheet completed, you are fully prepared for the Phase 1 story.' : language === 'fr' ? 'Cette lecture rapide de 2 minutes vous prépare parfaitement pour la Phase 1.' : 'Nach dieser 2-minütigen Übersicht bist du bereit für die Geschichte in Phase 1.'}
          </p>
        </div>

        <button
          onClick={onGoToPhase1}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#002a5b] hover:bg-[#003875] border border-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0 shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
        >
          <span>{p0.ctaStartPhase1}</span>
          <ArrowRight className="w-4 h-4 text-[#25b0ae]" />
        </button>
      </div>
    </div>
  );
};

