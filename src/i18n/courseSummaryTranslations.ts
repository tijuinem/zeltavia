import { InterfaceLanguage } from './interfaceTranslations';

export interface CourseSummaryItem {
  phase: string;
  summary: string;
}

export const COURSE_SUMMARY_TRANSLATIONS: Record<InterfaceLanguage, CourseSummaryItem[]> = {
  es: [
    { phase: "Fase 0-1", summary: "El esqueleto: sujeto fijo obligatorio, to be, presente simple vs continuo, do/does auxiliar." },
    { phase: "Fase 2", summary: "Narrar el pasado: regular con -ed, irregulares de uso, did universal, pasado continuo y used to." },
    { phase: "Fase 3", summary: "Decidir sobre el futuro: escala de modales invariables, 3 futuros bien delimitados, primer condicional." },
    { phase: "Fase 4", summary: "Conectar experiencias: present perfect y conexión viva, participios, verb patterns y phrasal verbs." },
    { phase: "Fase 5", summary: "Cambiar el foco: pasado perfecto cronológico, would formal, voz pasiva, estilo indirecto y condicionales 2º/3º." },
    { phase: "Fase 6", summary: "Matices finales: cleft sentences de relieve (it/what), inversiones enfáticas, puntuación con coma y deshispanización." }
  ],
  en: [
    { phase: "Phase 0-1", summary: "The skeleton: mandatory subject, to be, simple vs continuous present, auxiliary do/does." },
    { phase: "Phase 2", summary: "Narrating the past: regular -ed, high-frequency irregulars, universal did, past continuous & used to." },
    { phase: "Phase 3", summary: "Deciding the future: invariant modal scale, 3 clearly delineated futures, first conditional." },
    { phase: "Phase 4", summary: "Connecting experiences: present perfect & present relevance, participles, verb patterns & phrasal verbs." },
    { phase: "Phase 5", summary: "Shifting the focus: chronological past perfect, formal would, passive voice, reported speech & 2nd/3rd conditionals." },
    { phase: "Phase 6", summary: "Nuance & emphasis: cleft focus sentences (it/what), emphatic inversions, natural comma rhythm & native pacing." }
  ],
  fr: [
    { phase: "Phase 0-1", summary: "Le squelette : sujet obligatoire, verbe to be, présent simple vs continu, auxiliaire do/does." },
    { phase: "Phase 2", summary: "Raconter le passé : verbes réguliers en -ed, irréguliers fréquents, did universel, passé continu et used to." },
    { phase: "Phase 3", summary: "Projections et futurs : échelle des modaux invariables, 3 futurs délimités, premier conditionnel." },
    { phase: "Phase 4", summary: "Relier les expériences : present perfect et impact présent, participes, verbes prépositionnels et phrasal verbs." },
    { phase: "Phase 5", summary: "Changer la perspective : past perfect chronologique, would formel, voix passive, discours indirect et conditionnels 2 & 3." },
    { phase: "Phase 6", summary: "Nuances et style : structures clivées d'emphase (it/what), inversions soutenues, rythme et ponctuation naturelle." }
  ],
  de: [
    { phase: "Phase 0-1", summary: "Das Gerüst: zwingendes Subjekt, to be, Simple vs Continuous Present, Hilfsverb do/does." },
    { phase: "Phase 2", summary: "Vergangenheit erzählen: reguläres -ed, häufige Unregelmäßige, universelles did, Past Continuous und used to." },
    { phase: "Phase 3", summary: "Zukunft & Absichten: Skala unveränderlicher Modale, 3 abgegrenzte Zukunftsformen, First Conditional." },
    { phase: "Phase 4", summary: "Erfahrungen verknüpfen: Present Perfect mit Gegenwartsbezug, Partizipien, Verb-Patterns und Phrasal Verbs." },
    { phase: "Phase 5", summary: "Fokus verschieben: chronologisches Past Perfect, formelles would, Passiv, indirekte Rede & 2./3. Konditional." },
    { phase: "Phase 6", summary: "Feinschliff & Betonung: Hervorhebende Spaltsätze (it/what), emphatische Inversionen und natürlicher Satzrhythmus." }
  ]
};
