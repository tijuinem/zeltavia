import React, { useState } from 'react';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';
import { ANTI_TRANSLATION_TRANSLATIONS } from '../i18n/antiTranslationData';
import { speakEnglish } from '../utils/speech';
import {
  ShieldAlert,
  Volume2,
  CheckCircle,
  XCircle,
  HelpCircle,
  Sparkles,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

interface AntiTranslationViewProps {
  language?: InterfaceLanguage;
}

export const AntiTranslationView: React.FC<AntiTranslationViewProps> = ({ language = 'es' }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'practice'>('table');
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const t = INTERFACE_TRANSLATIONS[language];
  const tableData = ANTI_TRANSLATION_TRANSLATIONS[language] || ANTI_TRANSLATION_TRANSLATIONS.es;

  const currentQuizItem = tableData[currentQuizIndex];

  const handleSelectOption = (opt: string) => {
    if (revealed) return;
    setSelectedOption(opt);
    setRevealed(true);
    if (opt === currentQuizItem.correctForm) {
      setScore(prev => prev + 1);
      speakEnglish(opt);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setRevealed(false);
    if (currentQuizIndex < tableData.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setCurrentQuizIndex(0);
    }
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setRevealed(false);
    setCurrentQuizIndex(0);
    setScore(0);
  };

  return (
    <div className="w-full space-y-10 pb-16 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="text-[#002a5b]">Módulo Lingüístico</span>
              <span>·</span>
              <span className="text-[#25b0ae]">Deshispanización Consolidada</span>
              <span>·</span>
              <span>Las 6 Fases</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002a5b] tracking-tight">
              Filtro Anti-Traducción: Repaso Final Consolidado
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Los errores sistemáticos que comete un hispanohablante al proyectar literalmente la sintaxis del español en el inglés. Dominar estos 10 puntos elimina el 90% de los fallos estructurales comunes.
            </p>
          </div>

          {/* Toggle between Table and Practice Mode */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveTab('table')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'table'
                  ? 'bg-white text-[#002a5b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tabla Maestra
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'practice'
                  ? 'bg-white text-[#002a5b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Test Interactivo
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'table' ? (
        /* Consolidated Table */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h2 className="text-lg font-bold text-slate-900">
                Matriz de Errores Típicos vs. Forma Correcta
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              10 Puntos Clave
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[11px] font-bold">
                <tr>
                  <th className="py-3 px-4 sm:px-6">{language === 'es' ? 'Error Típico (Interferencia)' : language === 'en' ? 'Common Interference Error' : language === 'fr' ? 'Erreur Typique' : 'Typischer Fehler'}</th>
                  <th className="py-3 px-4 sm:px-6">{language === 'es' ? 'Forma Correcta (Inglés Real)' : language === 'en' ? 'Correct Natural English' : language === 'fr' ? 'Forme Correcte (Anglais Réel)' : 'Korrekte Form (Echtes Englisch)'}</th>
                  <th className="py-3 px-4 sm:px-6 hidden md:table-cell">{t.phaseLabel}</th>
                  <th className="py-3 px-4 sm:px-6">{language === 'es' ? 'Explicación Lingüística' : language === 'en' ? 'Linguistic Explanation' : language === 'fr' ? 'Explication Linguistique' : 'Linguistische Erklärung'}</th>
                  <th className="py-3 px-3 text-right">Audio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-rose-50 border border-rose-100 text-rose-800 font-semibold font-mono text-xs">
                        ✗ {item.typicalError}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-900 font-bold font-mono text-xs">
                        ✓ {item.correctForm}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 hidden md:table-cell font-mono text-slate-500 text-xs">
                      {t.phaseLabel} {item.phaseId}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs leading-relaxed max-w-sm">
                      {item.explanation}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        onClick={() => speakEnglish(item.correctForm)}
                        className="p-1.5 rounded-lg bg-slate-100 text-[#002a5b] hover:bg-slate-200 transition-colors cursor-pointer"
                        title="Listen"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Interactive Practice Quiz */
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">
                {language === 'es' ? 'Pregunta' : language === 'en' ? 'Question' : language === 'fr' ? 'Question' : 'Frage'} {currentQuizIndex + 1} {t.phaseOfTotal.replace('6', String(tableData.length))}
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {language === 'es' ? '¿Cuál es la forma correcta en inglés?' : language === 'en' ? 'Which is the correct English form?' : language === 'fr' ? 'Quelle est la forme anglaise correcte ?' : 'Was ist die korrekte englische Form?'}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#002a5b] bg-sky-50 px-2.5 py-1 rounded-md">
                {language === 'es' ? 'Aciertos' : language === 'en' ? 'Score' : language === 'fr' ? 'Score' : 'Punkte'}: {score}
              </span>
              <button
                onClick={handleResetQuiz}
                className="p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer"
                title="Reset"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">
              {language === 'es' ? 'Situación de interferencia común:' : language === 'en' ? 'Common interference pitfall:' : language === 'fr' ? 'Piège courant d\'interférence :' : 'Typische Interferenzfalle:'}
            </span>
            <p className="text-base text-slate-800 font-medium">
              {language === 'es' ? 'Alguien dice por traducción literal:' : language === 'en' ? 'Someone incorrectly says by literal translation:' : language === 'fr' ? 'Quelqu\'un dit par traduction littérale :' : 'Jemand sagt durch wörtliche Übersetzung:'}
            </p>
            <div className="text-lg font-bold font-mono text-rose-800 bg-rose-50/70 p-3 rounded-lg border border-rose-200/80">
              "{currentQuizItem.typicalError}"
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {[currentQuizItem.correctForm, currentQuizItem.typicalError].map((opt, optIdx) => {
              const isCorrect = opt === currentQuizItem.correctForm;
              const isSelected = selectedOption === opt;

              let btnClass = 'bg-white border-slate-200 hover:border-[#25b0ae] text-slate-800';
              if (revealed) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnClass = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={revealed}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between text-sm sm:text-base transition-all font-mono ${btnClass}`}
                >
                  <span>{opt}</span>
                  {revealed && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                  {revealed && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-[#002a5b] space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#25b0ae]" />
                <span className="font-bold">Principio Zeltavia:</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                {currentQuizItem.explanation}
              </p>
            </div>
          )}

          {revealed && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuiz}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#002a5b] hover:bg-[#001c3d] text-white font-bold text-sm rounded-xl transition-all shadow-sm"
              >
                <span>Siguiente Caso</span>
                <ArrowRight className="w-4 h-4 text-[#25b0ae]" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
