import React from 'react';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';
import { THEORY_TRANSLATIONS } from '../i18n/theoryTranslations';
import {
  Brain,
  Layers,
  BookCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Headphones,
  Compass,
  Cpu,
  GraduationCap
} from 'lucide-react';

interface TheoryIntroViewProps {
  language?: InterfaceLanguage;
  onStartCourse: () => void;
}

export const TheoryIntroView: React.FC<TheoryIntroViewProps> = ({ language = 'es', onStartCourse }) => {
  const t = INTERFACE_TRANSLATIONS[language];
  const theoryInfo = THEORY_TRANSLATIONS[language] || THEORY_TRANSLATIONS.es;

  return (
    <div className="w-full space-y-10 pb-16 animate-fadeIn">
      {/* 1. Hero Theory Intro */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#25b0ae]/10 via-[#002a5b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="text-[#002a5b]">{t.theoryPillarsBadge}</span>
            <span>·</span>
            <span>SLA (Second Language Acquisition)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#002a5b] tracking-tight">
            {theoryInfo.title}
          </h1>
          <p className="text-lg font-semibold text-slate-700">
            {theoryInfo.subtitle}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {theoryInfo.summary}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onStartCourse}
              className="flex items-center gap-2 px-6 py-3 bg-[#002a5b] hover:bg-[#001c3d] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{t.theoryStartBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#25b0ae]" />
            </button>
          </div>
        </div>
      </div>

      {/* El Acrónimo ZELTAVIA */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-1">
            <Brain className="w-6 h-6 text-[#25b0ae]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002a5b] tracking-tight">
              {language === 'es' ? 'Qué es el Método ZELTAVIA: Los 8 Componentes' : language === 'en' ? 'What is the ZELTAVIA Method: The 8 Core Components' : language === 'fr' ? 'La Méthode ZELTAVIA : Les 8 Composantes Clés' : 'Die ZELTAVIA-Methode: Die 8 Kernkomponenten'}
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            {language === 'es' ? 'El nombre ZELTAVIA sintetiza los ocho pilares científicos que articulan cada una de las fases del curso.' : language === 'en' ? 'The ZELTAVIA acronym encapsulates the eight empirical scientific pillars structuring each phase.' : language === 'fr' ? 'Le nom ZELTAVIA synthétise les huit piliers scientifiques articulant chaque phase.' : 'Der Name ZELTAVIA fasst die acht wissenschaftlichen Säulen jeder Kursphase zusammen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {theoryInfo.acronymComponents.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#25b0ae] transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#002a5b] group-hover:bg-[#25b0ae] text-white font-mono font-extrabold text-lg flex items-center justify-center shrink-0 transition-colors shadow-xs">
                {item.letter}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.what}
                </p>
                <span className="text-[11px] font-mono text-slate-400 block pt-1">
                  Base: {item.science}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Por qué Funciona: La Base Científica */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-1">
            <GraduationCap className="w-6 h-6 text-[#002a5b]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002a5b] tracking-tight">
              {language === 'es' ? 'Por qué Funciona: La Evidencia en Adquisición de Lenguas' : language === 'en' ? 'Why it Works: Second Language Acquisition Evidence' : language === 'fr' ? 'Pourquoi cela Fonctionne : Preuves en Acquisition des Langues' : 'Warum es funktioniert: Erkenntnisse der Spracherwerbsforschung'}
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            {language === 'es' ? 'ZELTAVIA integra operativamente seis principios empíricos validados en lingüística aplicada.' : language === 'en' ? 'ZELTAVIA seamlessly integrates six empirically validated principles in applied linguistics.' : language === 'fr' ? 'ZELTAVIA intègre six principes empiriques validés en linguistique appliquée.' : 'ZELTAVIA verbindet sechs empirisch geprüfte Prinzipien der angewandten Linguistik.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {theoryInfo.scientificPillars.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50/90 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="w-6 h-6 rounded-md bg-[#25b0ae]/15 text-[#002a5b] font-bold text-xs flex items-center justify-center">
                  0{pIdx + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arquitectura del Método: Las Dos Pistas */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-1">
            <Layers className="w-6 h-6 text-[#25b0ae]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002a5b] tracking-tight">
              {language === 'es' ? 'Arquitectura del Método: Dos Pistas Paralelas' : language === 'en' ? 'Method Architecture: Dual Parallel Tracks' : language === 'fr' ? 'Architecture de la Méthode : Deux Pistes Parallèles' : 'Methodenarchitektur: Zwei parallele Lernspuren'}
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            {language === 'es' ? 'El sistema desacopla el reconocimiento fonológico léxico del ensamblaje gramatical para evitar sobrecarga cognitiva.' : language === 'en' ? 'The curriculum separates lexical auditory recognition from syntax construction to prevent cognitive bottlenecking.' : language === 'fr' ? 'Le système dissocie la reconnaissance auditive lexicale de la syntaxe pour éviter la surcharge cognitive.' : 'Das System trennt das auditive Worterkennen von der Satzgrammatik zur Vermeidung kognitiver Überlastung.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#002a5b] font-bold">
                <Headphones className="w-5 h-5 text-[#25b0ae]" />
                <span>{language === 'es' ? 'Pista de Vocabulario (Auditivo Puro)' : language === 'en' ? 'Vocabulary Track (Pure Auditory)' : language === 'fr' ? 'Piste Vocabulaire (Auditif Pur)' : 'Wortschatzspur (Reines Hören)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {theoryInfo.architecture.vocabTrack}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#002a5b] font-bold">
                <BookCheck className="w-5 h-5 text-[#25b0ae]" />
                <span>{language === 'es' ? 'Pista Gramatical (Las 6 Fases)' : language === 'en' ? 'Grammar Track (The 6 Phases)' : language === 'fr' ? 'Piste Grammaticale (Les 6 Phases)' : 'Grammatikspur (Die 6 Phasen)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {theoryInfo.architecture.grammarTrack}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo se Usa el Método & Alcance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cómo se usa */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-[#002a5b]" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                {t.theoryHowToUseTitle}
              </h2>
            </div>

            <ol className="space-y-3">
              {theoryInfo.usageSteps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-[#002a5b] text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {sIdx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Alcance del Método */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                {language === 'es' ? 'Alcance del Método: Qué Cubre y Qué No' : language === 'en' ? 'Method Scope: What it Covers & What it Excludes' : language === 'fr' ? 'Portée de la Méthode : Ce qui est Couvert' : 'Umfang der Methode: Was abgedeckt wird'}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              {theoryInfo.scopeNotice}
            </p>

            <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'es' ? 'Cubre: Las ~5.000 palabras de mayor frecuencia y fluidez comunicativa natural.' : language === 'en' ? 'Covers: The top ~5,000 words and natural communicative conversational fluency.' : language === 'fr' ? 'Couvre : Les ~5 000 mots les plus fréquents et l\'aisance conversationnelle.' : 'Deckt ab: Die ca. 5.000 häufigsten Wörter und natürliche Gesprächsflüssigkeit.'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="w-4 h-4 text-center font-bold shrink-0">✗</span>
                <span>{language === 'es' ? 'Excluye: Jerga legal, subjuntivo literario arcaico y vocabulario de ultra-nicho.' : language === 'en' ? 'Excludes: Ultra-formal legal jargon, archaic literary subjunctive, and ultra-niche terms.' : language === 'fr' ? 'Exclut : Jargon juridique hyper-formel, subjonctif littéraire archaïque.' : 'Schließt aus: Juristisches Fachvokabular und veralteten literarischen Konjunktiv.'}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onStartCourse}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#002a5b] hover:bg-[#001c3d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
            >
              <span>{t.theoryStartBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#25b0ae]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

