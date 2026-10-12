import { InterfaceLanguage } from './interfaceTranslations';

export interface Phase0DataStructure {
  title: string;
  subtitle: string;
  badge: string;
  readingTime: string;
  description: string;
  pronounsTitle: string;
  pronounsSubtitle: string;
  pronouns: {
    en: string;
    meaning: string;
    tip: string;
  }[];
  toBeTitle: string;
  toBeSubtitle: string;
  toBe: {
    subject: string;
    full: string;
    contraction: string;
    example: string;
  }[];
  sRuleTitle: string;
  sRule: {
    rule: string;
    examples: {
      base: string;
      thirdPerson: string;
      note?: string;
    }[];
    goldenRule: string;
  };
  ctaStartPhase1: string;
}

export const PHASE_0_TRANSLATIONS: Record<InterfaceLanguage, Phase0DataStructure> = {
  es: {
    title: "Fase 0 — Antes de la Primera Historia",
    subtitle: "Ficha de Referencia Rápida (Lectura de 2 minutos)",
    badge: "Prerrequisito Inmediato",
    readingTime: "Lectura de 2 minutos",
    description: "No es una fase de gramática tradicional: es la ficha de referencia indispensable. Es el 'i' mínimo necesario para que el primer cuento se entienda como un patrón reconocible y no como ruido arbitrario.",
    pronounsTitle: "Pronombres Sujeto Indispensables",
    pronounsSubtitle: "En inglés el pronombre NUNCA se omite (no se dice 'is late', sino 'it is late')",
    pronouns: [
      { en: "I", meaning: "yo", tip: "Siempre en mayúscula" },
      { en: "you", meaning: "tú / usted", tip: "Igual para singular y plural formal" },
      { en: "he", meaning: "él", tip: "Personas masculinas" },
      { en: "she", meaning: "ella", tip: "Personas femeninas" },
      { en: "it", meaning: "ello (cosas, animales, situaciones)", tip: "Obligatorio en inglés, nunca se omite" },
      { en: "we", meaning: "nosotros / nosotras", tip: "Incluye al hablante" },
      { en: "you", meaning: "vosotros / ustedes", tip: "Plural de segunda persona" },
      { en: "they", meaning: "ellos / ellas", tip: "Plural de personas, cosas o animales" }
    ],
    toBeTitle: "El Verbo 'To Be' (Ser / Estar)",
    toBeSubtitle: "El único verbo inglés que tiene 3 formas en presente (am, is, are)",
    toBe: [
      { subject: "I", full: "am", contraction: "I'm", example: "I am Tom. (I'm Tom.)" },
      { subject: "you", full: "are", contraction: "you're", example: "You are my friend. (You're my friend.)" },
      { subject: "he / she / it", full: "is", contraction: "he's / she's / it's", example: "He is a teacher. It is late." },
      { subject: "we", full: "are", contraction: "we're", example: "We are together. (We're together.)" },
      { subject: "they", full: "are", contraction: "they're", example: "They are here. (They're here.)" }
    ],
    sRuleTitle: "La Regla de Oro: La '-s' de Tercera Persona",
    sRule: {
      rule: "En presente simple, con he / she / it, el verbo SIEMPRE añade una -s final:",
      examples: [
        { base: "I work", thirdPerson: "he works" },
        { base: "you like", thirdPerson: "she likes" },
        { base: "we go", thirdPerson: "it goes", note: "Si acaba en -o, -ch, -sh, -x, -s añade -es" }
      ],
      goldenRule: "Con I / you / we / they el verbo se queda tal cual (I work, you like, we go). Esta es la ÚNICA vez que el verbo cambia de forma en presente simple afirmativo. ¡Todo lo demás (preguntas y negativas) lo hace do/does!"
    },
    ctaStartPhase1: "Empezar Fase 1 y Leer Cuento"
  },
  en: {
    title: "Phase 0 — Before Your First Story",
    subtitle: "Quick Reference Cheat Sheet (2-Minute Read)",
    badge: "Immediate Prerequisite",
    readingTime: "2-minute read",
    description: "Not a traditional grammar lecture: this is your essential compass. It provides the minimal baseline ('i') so your first story is processed as recognized patterns rather than random noise.",
    pronounsTitle: "Essential Subject Pronouns",
    pronounsSubtitle: "In English, subjects are NEVER omitted (never say 'is late'; say 'it is late')",
    pronouns: [
      { en: "I", meaning: "1st person singular", tip: "Always capitalized" },
      { en: "you", meaning: "2nd person singular / plural", tip: "Identical for formal, informal & plural" },
      { en: "he", meaning: "3rd person masculine", tip: "Male persons" },
      { en: "she", meaning: "3rd person feminine", tip: "Female persons" },
      { en: "it", meaning: "3rd person non-human", tip: "Mandatory in English for things, weather & time" },
      { en: "we", meaning: "1st person plural", tip: "Includes speaker" },
      { en: "you", meaning: "2nd person plural", tip: "You all / you guys" },
      { en: "they", meaning: "3rd person plural", tip: "Persons, things or animals" }
    ],
    toBeTitle: "The Verb 'To Be'",
    toBeSubtitle: "The only English verb with 3 distinct present tense forms (am, is, are)",
    toBe: [
      { subject: "I", full: "am", contraction: "I'm", example: "I am Tom. (I'm Tom.)" },
      { subject: "you", full: "are", contraction: "you're", example: "You are my friend. (You're my friend.)" },
      { subject: "he / she / it", full: "is", contraction: "he's / she's / it's", example: "He is a teacher. It is late." },
      { subject: "we", full: "are", contraction: "we're", example: "We are together. (We're together.)" },
      { subject: "they", full: "are", contraction: "they're", example: "They are here. (They're here.)" }
    ],
    sRuleTitle: "Golden Rule: Third-Person Singular '-s'",
    sRule: {
      rule: "In the simple present, with he / she / it, the verb ALWAYS takes a final -s:",
      examples: [
        { base: "I work", thirdPerson: "he works" },
        { base: "you like", thirdPerson: "she likes" },
        { base: "we go", thirdPerson: "it goes", note: "Verbs ending in -o, -ch, -sh, -x, -s take -es" }
      ],
      goldenRule: "With I / you / we / they the verb stays in base form (I work, you like, we go). This is the ONLY time affirmative verbs change in the simple present. Questions and negatives are handled by do/does!"
    },
    ctaStartPhase1: "Start Phase 1 & Read Story"
  },
  fr: {
    title: "Phase 0 — Avant la Première Histoire",
    subtitle: "Fiche Mémo Rapide (Lecture de 2 minutes)",
    badge: "Prérequis Immédiat",
    readingTime: "Lecture de 2 minutes",
    description: "Ce n'est pas un cours de grammaire lourd : c'est votre boussole de démarrage. C'est le socle minimal pour que la première histoire soit perçue comme un modèle évident et non du bruit.",
    pronounsTitle: "Pronoms Sujets Indispensables",
    pronounsSubtitle: "En anglais, le pronom sujet n'est JAMAIS sous-entendu (on dit 'it is late', jamais 'is late')",
    pronouns: [
      { en: "I", meaning: "je / moi", tip: "Toujours avec une majuscule" },
      { en: "you", meaning: "tu / vous", tip: "Identique au singulier et au pluriel" },
      { en: "he", meaning: "il (masculin)", tip: "Personnes masculines" },
      { en: "she", meaning: "elle (féminin)", tip: "Personnes féminines" },
      { en: "it", meaning: "il / elle (choses, animaux, météo)", tip: "Obligatoire en anglais, jamais omis" },
      { en: "we", meaning: "nous", tip: "Inclut le locuteur" },
      { en: "you", meaning: "vous (pluriel)", tip: "Deuxième personne du pluriel" },
      { en: "they", meaning: "ils / elles", tip: "Pluriel de personnes, objets ou animaux" }
    ],
    toBeTitle: "Le Verbe 'To Be' (Être)",
    toBeSubtitle: "Le seul verbe anglais possédant 3 formes au présent (am, is, are)",
    toBe: [
      { subject: "I", full: "am", contraction: "I'm", example: "I am Tom. (I'm Tom.)" },
      { subject: "you", full: "are", contraction: "you're", example: "You are my friend. (You're my friend.)" },
      { subject: "he / she / it", full: "is", contraction: "he's / she's / it's", example: "He is a teacher. It is late." },
      { subject: "we", full: "are", contraction: "we're", example: "We are together. (We're together.)" },
      { subject: "they", full: "are", contraction: "they're", example: "They are here. (They're here.)" }
    ],
    sRuleTitle: "La Règle d'Or : Le '-s' de la 3e Personne",
    sRule: {
      rule: "Au présent simple, avec he / she / it, le verbe prend TOUJOURS un -s final :",
      examples: [
        { base: "I work", thirdPerson: "he works" },
        { base: "you like", thirdPerson: "she likes" },
        { base: "we go", thirdPerson: "it goes", note: "Terminaisons en -o, -ch, -sh, -x, -s prennent -es" }
      ],
      goldenRule: "Avec I / you / we / they le verbe ne change pas (I work, you like, we go). C'est la SEULE modification du verbe au présent affirmatif. Tout le reste (questions et négations) est géré par do/does !"
    },
    ctaStartPhase1: "Démarrer la Phase 1 et Lire l'Histoire"
  },
  de: {
    title: "Phase 0 — Vor der ersten Geschichte",
    subtitle: "Schnellübersicht & Referenzblatt (2 Minuten Lesezeit)",
    badge: "Sofortige Voraussetzung",
    readingTime: "2 Min. Lesezeit",
    description: "Kein ermüdender Grammatikvortrag: Dies ist dein unverzichtbarer Kompass. Er stellt das Mindestniveau sicher, damit die erste Geschichte als klares Muster und nicht als Kauderwelsch verstanden wird.",
    pronounsTitle: "Unverzichtbare Subjektpronomen",
    pronounsSubtitle: "Im Englischen wird das Subjekt NIE weggelassen (niemals 'is late', sondern stets 'it is late')",
    pronouns: [
      { en: "I", meaning: "ich", tip: "Immer großgeschrieben" },
      { en: "you", meaning: "du / Sie", tip: "Gleich für Singular, Plural und Höflichkeitsform" },
      { en: "he", meaning: "er", tip: "Männliche Personen" },
      { en: "she", meaning: "sie (Einzahl)", tip: "Weibliche Personen" },
      { en: "it", meaning: "es (Dinge, Tiere, Situationen)", tip: "Im Englischen zwingend erforderlich" },
      { en: "we", meaning: "wir", tip: "Schließt den Sprecher ein" },
      { en: "you", meaning: "ihr / Sie (Mehrzahl)", tip: "Zweite Person Plural" },
      { en: "they", meaning: "sie (Mehrzahl)", tip: "Mehrzahl für Personen, Dinge und Tiere" }
    ],
    toBeTitle: "Das Verb 'To Be' (sein)",
    toBeSubtitle: "Das einzige englische Verb mit 3 Gegenwartsformen (am, is, are)",
    toBe: [
      { subject: "I", full: "am", contraction: "I'm", example: "I am Tom. (I'm Tom.)" },
      { subject: "you", full: "are", contraction: "you're", example: "You are my friend. (You're my friend.)" },
      { subject: "he / she / it", full: "is", contraction: "he's / she's / it's", example: "He is a teacher. It is late." },
      { subject: "we", full: "are", contraction: "we're", example: "We are together. (We're together.)" },
      { subject: "they", full: "are", contraction: "they're", example: "They are here. (They're here.)" }
    ],
    sRuleTitle: "Die goldene Regel: Das '-s' der 3. Person",
    sRule: {
      rule: "Im Simple Present erhält das Verb bei he / she / it IMMER ein Endungs-s:",
      examples: [
        { base: "I work", thirdPerson: "he works" },
        { base: "you like", thirdPerson: "she likes" },
        { base: "we go", thirdPerson: "it goes", note: "Endungen auf -o, -ch, -sh, -x, -s erhalten -es" }
      ],
      goldenRule: "Bei I / you / we / they bleibt das Verb in der Grundform (I work, you like, we go). Dies ist die EINZIGE Veränderung im bejahten Simple Present. Fragen und Verneinungen übernimmt do/does!"
    },
    ctaStartPhase1: "Phase 1 starten und Geschichte lesen"
  }
};
