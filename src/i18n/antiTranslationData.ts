import { InterfaceLanguage } from './interfaceTranslations';
import { AntiTranslationError } from '../types/course';

export const ANTI_TRANSLATION_TRANSLATIONS: Record<InterfaceLanguage, AntiTranslationError[]> = {
  es: [
    {
      typicalError: "Rains / Is dark (sin sujeto)",
      correctForm: "It rains / It is dark",
      explanation: "En inglés el pronombre formal 'it' es obligatorio para verbos meteorológicos o impersonales. La frase no puede empezar sin sujeto.",
      phaseId: 1
    },
    {
      typicalError: "People is",
      correctForm: "People are",
      explanation: "'People' es sustantivo plural en inglés (las personas) y siempre concuerda con 'are / were / have'.",
      phaseId: 1
    },
    {
      typicalError: "I have 20 years",
      correctForm: "I am 20 (years old)",
      explanation: "La edad no se posee; es un atributo temporal del estado del ser, por tanto se expresa con el verbo 'To Be'.",
      phaseId: 2
    },
    {
      typicalError: "He didn't wanted / Did you heard?",
      correctForm: "He didn't want / Did you hear?",
      explanation: "El auxiliar 'did' ya transporta el tiempo pretérito; el verbo principal debe conservar su forma base sin desinencia.",
      phaseId: 2
    },
    {
      typicalError: "He must goes / You should to read",
      correctForm: "He must go / You should read",
      explanation: "Los verbos modales nunca añaden -s en tercera persona y van acompañados de infinitivo sin la preposición 'to'.",
      phaseId: 3
    },
    {
      typicalError: "If it will rain / If you will come",
      correctForm: "If it rains / If you come",
      explanation: "En la prótasis del primer condicional (tras 'if'), el inglés utiliza presente de indicativo con valor de futuro.",
      phaseId: 3
    },
    {
      typicalError: "I have made that (acción genérica)",
      correctForm: "I have done that",
      explanation: "'Do' rige tareas, actividades indefinidas y deberes; 'Make' se destina a fabricar, crear o adoptar decisiones.",
      phaseId: 4
    },
    {
      typicalError: "I have visited Paris in 2019",
      correctForm: "I visited Paris in 2019",
      explanation: "Si se precisa un año, mes o fecha concreta cerrada en el pasado, la regla impone Past Simple, nunca Present Perfect.",
      phaseId: 4
    },
    {
      typicalError: "If I was (en registro formal / cuidado)",
      correctForm: "If I were",
      explanation: "El modo subjuntivo irreal en el segundo condicional adopta 'were' para todas las personas gramaticales.",
      phaseId: 5
    },
    {
      typicalError: "He said me",
      correctForm: "He told me / He said to me",
      explanation: "'Tell' exige el pronombre de persona inmediatamente sin preposición (tell me); 'Say' introduce directamente lo dicho.",
      phaseId: 6
    }
  ],
  en: [
    {
      typicalError: "Rains / Is dark (missing subject)",
      correctForm: "It rains / It is dark",
      explanation: "English requires a dummy pronoun 'it' for weather and impersonal expressions. Sentences cannot omit the subject pronoun.",
      phaseId: 1
    },
    {
      typicalError: "People is",
      correctForm: "People are",
      explanation: "'People' is treated as a plural count noun in English and strictly agrees with 'are / were / have'.",
      phaseId: 1
    },
    {
      typicalError: "I have 20 years",
      correctForm: "I am 20 (years old)",
      explanation: "Age is conceptualized as an ongoing state of being rather than a possession; it always uses the verb 'To Be'.",
      phaseId: 2
    },
    {
      typicalError: "He didn't wanted / Did you heard?",
      correctForm: "He didn't want / Did you hear?",
      explanation: "The auxiliary 'did' already carries the past tense mark; the main lexical verb must remain in bare infinitive form.",
      phaseId: 2
    },
    {
      typicalError: "He must goes / You should to read",
      correctForm: "He must go / You should read",
      explanation: "Modal auxiliaries never take a 3rd person -s ending and are followed by a bare infinitive without 'to'.",
      phaseId: 3
    },
    {
      typicalError: "If it will rain / If you will come",
      correctForm: "If it rains / If you come",
      explanation: "In first conditional 'if' clauses, English uses the simple present to express future contingencies (no 'will' after if).",
      phaseId: 3
    },
    {
      typicalError: "I have made that (generic action)",
      correctForm: "I have done that",
      explanation: "'Do' governs general tasks, activities, and duties; 'Make' is reserved for creating, manufacturing, or decision-making.",
      phaseId: 4
    },
    {
      typicalError: "I have visited Paris in 2019",
      correctForm: "I visited Paris in 2019",
      explanation: "When a finished past time anchor is stated (a specific year, yesterday, ago), the Past Simple is mandatory, not Present Perfect.",
      phaseId: 4
    },
    {
      typicalError: "If I was (in formal / standard style)",
      correctForm: "If I were",
      explanation: "The hypothetical subjunctive in second conditionals traditionally uses 'were' for all persons (If I were you).",
      phaseId: 5
    },
    {
      typicalError: "He said me",
      correctForm: "He told me / He said to me",
      explanation: "'Tell' requires an immediate personal object without a preposition (tell me); 'Say' introduces the quoted or reported content.",
      phaseId: 6
    }
  ],
  fr: [
    {
      typicalError: "Rains / Is dark (sujet manquant)",
      correctForm: "It rains / It is dark",
      explanation: "En anglais, le pronom impersonnel 'it' est obligatoire pour la météo et les verbes impersonnels. La phrase ne peut commencer sans sujet.",
      phaseId: 1
    },
    {
      typicalError: "People is",
      correctForm: "People are",
      explanation: "'People' (les gens) est un pluriel en anglais et s'accorde systématiquement avec 'are / were / have'.",
      phaseId: 1
    },
    {
      typicalError: "I have 20 years",
      correctForm: "I am 20 (years old)",
      explanation: "L'âge n'est pas possédé comme en français ; c'est un état d'être exprimé exclusivement avec le verbe 'To Be'.",
      phaseId: 2
    },
    {
      typicalError: "He didn't wanted / Did you heard?",
      correctForm: "He didn't want / Did you hear?",
      explanation: "L'auxiliaire 'did' porte déjà la marque du passé ; le verbe principal doit impérativement rester à l'infinitif sans -ed.",
      phaseId: 2
    },
    {
      typicalError: "He must goes / You should to read",
      correctForm: "He must go / You should read",
      explanation: "Les verbes modaux ne prennent jamais de -s à la 3e personne et sont suivis d'un infinitif sans 'to'.",
      phaseId: 3
    },
    {
      typicalError: "If it will rain / If you will come",
      correctForm: "If it rains / If you come",
      explanation: "Dans la proposition conditionnelle introduite par 'if', l'anglais emploie le présent simple et jamais 'will'.",
      phaseId: 3
    },
    {
      typicalError: "I have made that (action générale)",
      correctForm: "I have done that",
      explanation: "'Do' s'emploie pour les tâches, obligations et actions vagues ; 'Make' pour la fabrication, création et décisions.",
      phaseId: 4
    },
    {
      typicalError: "I have visited Paris in 2019",
      correctForm: "I visited Paris in 2019",
      explanation: "Dès qu'une date ou période révolue précise est mentionnée (in 2019), le Past Simple est obligatoire.",
      phaseId: 4
    },
    {
      typicalError: "If I was (en registre soutenu)",
      correctForm: "If I were",
      explanation: "Le subjonctif irréel dans le 2e conditionnel adopte 'were' pour toutes les personnes grammaticales (If I were you).",
      phaseId: 5
    },
    {
      typicalError: "He said me",
      correctForm: "He told me / He said to me",
      explanation: "'Tell' exige un complément de personne direct sans préposition (tell me) ; 'Say' introduit directement le propos.",
      phaseId: 6
    }
  ],
  de: [
    {
      typicalError: "Rains / Is dark (fehlendes Subjekt)",
      correctForm: "It rains / It is dark",
      explanation: "Im Englischen ist das unpersönliche Pronomen 'it' für Wetter und Zustände Pflicht. Sätze dürfen kein leeres Subjekt haben.",
      phaseId: 1
    },
    {
      typicalError: "People is",
      correctForm: "People are",
      explanation: "'People' (Leute/Menschen) ist im Englischen ein Pluralwort und verlangt immer 'are / were / have'.",
      phaseId: 1
    },
    {
      typicalError: "I have 20 years",
      correctForm: "I am 20 (years old)",
      explanation: "Das Alter wird im Englischen nicht besessen, sondern als Seinszustand verstanden: immer mit 'To Be'.",
      phaseId: 2
    },
    {
      typicalError: "He didn't wanted / Did you heard?",
      correctForm: "He didn't want / Did you hear?",
      explanation: "Das Hilfsverb 'did' trägt bereits die Vergangenheitsform; das Vollverb muss im reinen Infinitiv bleiben.",
      phaseId: 2
    },
    {
      typicalError: "He must goes / You should to read",
      correctForm: "He must go / You should read",
      explanation: "Modalverben erhalten nie ein 3.-Person-s und werden direkt mit dem Infinitiv ohne 'to' verbunden.",
      phaseId: 3
    },
    {
      typicalError: "If it will rain / If you will come",
      correctForm: "If it rains / If you come",
      explanation: "Im 'If'-Nebensatz des 1. Konditionals verwendet das Englische das Simple Present, niemals 'will'.",
      phaseId: 3
    },
    {
      typicalError: "I have made that (allgemeine Handlung)",
      correctForm: "I have done that",
      explanation: "'Do' steht für Handlungen, Pflichten und allgemeine Aufgaben; 'Make' für Erschaffen, Herstellen oder Entschlüsse.",
      phaseId: 4
    },
    {
      typicalError: "I have visited Paris in 2019",
      correctForm: "I visited Paris in 2019",
      explanation: "Bei genauer abgeschlossener Zeitangabe (Jahr, gestern) ist das Past Simple zwingend vorgeschrieben.",
      phaseId: 4
    },
    {
      typicalError: "If I was (im formalen Standard)",
      correctForm: "If I were",
      explanation: "Im irrealen Konjunktiv (2. Konditional) gilt standardsprachlich 'were' für alle Personen (If I were you).",
      phaseId: 5
    },
    {
      typicalError: "He said me",
      correctForm: "He told me / He said to me",
      explanation: "'Tell' verlangt die angesprochene Person direkt ohne Präposition (tell me); 'Say' leitet die Aussage direkt ein.",
      phaseId: 6
    }
  ]
};
