import React from 'react';
import { InterfaceLanguage } from '../i18n/interfaceTranslations';
import { COURSE_SUMMARY_TRANSLATIONS } from '../i18n/courseSummaryTranslations';
import { X, CheckCircle2, BookmarkCheck, ArrowRight } from 'lucide-react';

interface CourseSummaryModalProps {
  language?: InterfaceLanguage;
  onClose: () => void;
  onSelectPhase: (phaseNum: number) => void;
}

const MODAL_I18N: Record<InterfaceLanguage, {
  badge: string;
  title: string;
  description: string;
  verifiedTitle: string;
  verifiedDesc: string;
  understoodBtn: string;
}> = {
  es: {
    badge: "Síntesis Metodológica",
    title: "Las 6 Fases en una Sola Línea",
    description: "El currículum gramatical completo del Método ZELTAVIA verificado con datos reales. Cada fase resuelve un hito comunicativo específico:",
    verifiedTitle: "Currículum Cerrado y Verificado:",
    verifiedDesc: "Cobertura léxica real garantizada entre 98.3% y 100% sobre el corpus de alta frecuencia (listas Zeltavia).",
    understoodBtn: "Entendido"
  },
  en: {
    badge: "Methodological Synthesis",
    title: "The 6 Phases in a Single Line",
    description: "The complete grammatical curriculum of the ZELTAVIA Method verified with authentic data. Each phase tackles a specific communicative milestone:",
    verifiedTitle: "Closed and Verified Curriculum:",
    verifiedDesc: "Real lexical coverage guaranteed between 98.3% and 100% over the high-frequency corpus (Zeltavia lists).",
    understoodBtn: "Understood"
  },
  fr: {
    badge: "Synthèse Méthodologique",
    title: "Les 6 Phases en une Seule Ligne",
    description: "Le programme grammatical complet de la Méthode ZELTAVIA vérifié avec des données réelles. Chaque phase répond à un objectif communicatif précis :",
    verifiedTitle: "Programme Clôturé et Vérifié :",
    verifiedDesc: "Couverture lexicale réelle garantie entre 98,3% et 100% sur le corpus haute fréquence (listes Zeltavia).",
    understoodBtn: "Compris"
  },
  de: {
    badge: "Methodische Synthese",
    title: "Die 6 Phasen in einer einzigen Zeile",
    description: "Das vollständige grammatikalische Curriculum der ZELTAVIA-Methode, fundiert mit echten Daten. Jede Phase löst einen spezifischen kommunikativen Meilenstein:",
    verifiedTitle: "Abgeschlossenes & Geprüftes Curriculum:",
    verifiedDesc: "Echte lexikalische Abdeckung garantiert zwischen 98,3% und 100% über das Hochfrequenz-Korpus (Zeltavia-Listen).",
    understoodBtn: "Verstanden"
  }
};

export const CourseSummaryModal: React.FC<CourseSummaryModalProps> = ({
  language = 'es',
  onClose,
  onSelectPhase
}) => {
  const i18n = MODAL_I18N[language] || MODAL_I18N.es;
  const summaryLines = COURSE_SUMMARY_TRANSLATIONS[language] || COURSE_SUMMARY_TRANSLATIONS.es;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-[#002a5b] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookmarkCheck className="w-6 h-6 text-[#25b0ae]" />
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#25b0ae]">
                {i18n.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {i18n.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {i18n.description}
          </p>

          <div className="space-y-3">
            {summaryLines.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectPhase(idx === 0 ? 1 : idx + 1);
                  onClose();
                }}
                className="p-4 rounded-2xl border border-slate-200 hover:border-[#25b0ae] bg-slate-50/60 hover:bg-white cursor-pointer transition-all flex items-start justify-between gap-3 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#002a5b] bg-[#002a5b]/10 px-2 py-0.5 rounded-md font-mono">
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#25b0ae] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              <strong>{i18n.verifiedTitle}</strong> {i18n.verifiedDesc}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-5 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#002a5b] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#001c3d] transition-colors cursor-pointer"
          >
            {i18n.understoodBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
