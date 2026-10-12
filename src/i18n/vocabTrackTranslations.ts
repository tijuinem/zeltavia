import { InterfaceLanguage } from './interfaceTranslations';

export interface VocabBandLocalized {
  band: string;
  range: string;
  coveragePercent: string;
  description: string;
  sampleWords: {
    en: string;
    trans: string;
    ex: string;
  }[];
}

export interface VocabTrackStrings {
  badgeCategory: string;
  badgeFocus: string;
  badgeLaw: string;
  title: string;
  subtitle: string;
  coverageLabel: string;
  coverageValue: string;
  
  // Cards for Read and Speak
  readBadge: string;
  readTitle: string;
  readDescription: string;
  readBtnOpen: string;
  readBtnTabTooltip: string;
  
  speakBadge: string;
  speakTitle: string;
  speakDescription: string;
  speakBtnOpen: string;
  speakBtnTabTooltip: string;
  
  // Iframe modal
  integratedModule: string;
  openNewTab: string;
  closeViewer: string;
  
  // Methodological integration explanation
  integrationTitle: string;
  integrationSummary: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;

  // Interactive sample words trainer
  trainerTitle: string;
  trainerSubtitle: string;
  listenBtn: string;
  showMeaningBtn: string;
  nextWordBtn: string;
  exampleSentenceLabel: string;
}

export const VOCAB_TRACK_STRINGS: Record<InterfaceLanguage, VocabTrackStrings> = {
  es: {
    badgeCategory: "Pista de Vocabulario",
    badgeFocus: "Entrenamiento Auditivo Puro",
    badgeLaw: "Ley de Zipf",
    title: "Entrenamiento de Vocabulario y Aplicaciones",
    subtitle: "El objetivo es puramente léxico y fonológico: acostumbrar el oído y reconocer la palabra antes de verla ensamblada en la narrativa de las fases.",
    coverageLabel: "Cobertura Total",
    coverageValue: "Top 5.000 palabras (listas Zeltavia)",
    
    readBadge: "Lector Autónomo",
    readTitle: "ZELTAVIA Read (Offline)",
    readDescription: "Aplicación independiente para lectura de textos en inglés y vocabulario continuo, diseñada con funcionamiento 100% offline.",
    readBtnOpen: "Abrir Visor",
    readBtnTabTooltip: "Abrir en pestaña nueva",
    
    speakBadge: "Entrenador Oral",
    speakTitle: "ZELTAVIA Speak (Corrector)",
    speakDescription: "Aplicación con reconocimiento de voz con micrófono que escucha tu pronunciación y evalúa en tiempo real si coincide con el estándar.",
    speakBtnOpen: "Abrir Visor",
    speakBtnTabTooltip: "Abrir en pestaña nueva",
    
    integratedModule: "Módulo Integrado",
    openNewTab: "Abrir en pestaña completa",
    closeViewer: "Cerrar visor",
    
    integrationTitle: "Cómo se integran las aplicaciones en el método ZELTAVIA",
    integrationSummary: "Para garantizar la máxima velocidad de aprendizaje y respetar los principios de adquisición natural (Input Comprensible y Active Output), el curso separa el entrenamiento de entrada auditiva y de salida oral en dos aplicaciones independientes:",
    pillar1Title: "1. Entrada Pasiva Comprensible (Read)",
    pillar1Desc: "Utiliza ZELTAVIA Read para escuchar las palabras y textos completos en cualquier momento, incluso sin conexión a internet. El oído se familiariza con el sonido antes de intentar producirlo.",
    pillar2Title: "2. Producción Activa y Corrección (Speak)",
    pillar2Desc: "Utiliza ZELTAVIA Speak para repetir en voz alta con micrófono. El motor de reconocimiento analiza tu pronunciación y te da feedback visual inmediato para fijar los patrones motores del habla.",

    trainerTitle: "Muestreo Fonológico por Bandas",
    trainerSubtitle: "Explora las palabras muestra de cada banda para acostumbrar tu oído:",
    listenBtn: "Escuchar en inglés",
    showMeaningBtn: "Ver traducción",
    nextWordBtn: "Siguiente palabra",
    exampleSentenceLabel: "Oración de ejemplo:"
  },

  en: {
    badgeCategory: "Vocabulary Track",
    badgeFocus: "Pure Auditory Training",
    badgeLaw: "Zipf's Law",
    title: "Vocabulary Training & Specialized Apps",
    subtitle: "The goal is purely lexical and phonological: tuning the ear and recognizing the word before seeing it deployed in the phase narratives.",
    coverageLabel: "Total Coverage",
    coverageValue: "Top 5,000 words (Zeltavia lists)",
    
    readBadge: "Autonomous Reader",
    readTitle: "ZELTAVIA Read (Offline)",
    readDescription: "Independent app for English reading and continuous vocabulary building, built for 100% offline operation.",
    readBtnOpen: "Open Viewer",
    readBtnTabTooltip: "Open in new tab",
    
    speakBadge: "Speech Trainer",
    speakTitle: "ZELTAVIA Speak (Pronunciation)",
    speakDescription: "Speech recognition application with microphone support that listens to your pronunciation and provides real-time accuracy scoring.",
    speakBtnOpen: "Open Viewer",
    speakBtnTabTooltip: "Open in new tab",
    
    integratedModule: "Integrated Module",
    openNewTab: "Open in full tab",
    closeViewer: "Close viewer",
    
    integrationTitle: "How the applications integrate into the ZELTAVIA method",
    integrationSummary: "To ensure maximum learning speed and adhere to natural language acquisition principles (Comprehensible Input & Active Output), the course splits listening input and oral production into two dedicated tools:",
    pillar1Title: "1. Passive Comprehensible Input (Read)",
    pillar1Desc: "Use ZELTAVIA Read to listen to words and full stories anytime, completely offline. The brain familiarizes itself with native phonetics before attempting speech.",
    pillar2Title: "2. Active Production & Correction (Speak)",
    pillar2Desc: "Use ZELTAVIA Speak to speak aloud into your microphone. The recognition engine analyzes your pronunciation and delivers immediate visual feedback to solidify motor speech patterns.",

    trainerTitle: "Phonological Sampling by Frequency Bands",
    trainerSubtitle: "Explore sample words from each band to train your auditory recognition:",
    listenBtn: "Listen in English",
    showMeaningBtn: "Show meaning",
    nextWordBtn: "Next word",
    exampleSentenceLabel: "Example sentence:"
  },

  fr: {
    badgeCategory: "Piste Vocabulaire",
    badgeFocus: "Entraînement Auditif Pur",
    badgeLaw: "Loi de Zipf",
    title: "Entraînement au Vocabulaire et Applications",
    subtitle: "L'objectif est strictement lexical et phonologique : habituer l'oreille et identifier le mot avant de l'observer dans les récits gradués.",
    coverageLabel: "Couverture Totale",
    coverageValue: "Top 5 000 mots (listes Zeltavia)",
    
    readBadge: "Lecteur Autonome",
    readTitle: "ZELTAVIA Read (Hors-ligne)",
    readDescription: "Application autonome de lecture en anglais et vocabulaire continu, conçue pour un fonctionnement 100% hors-ligne.",
    readBtnOpen: "Ouvrir le Lecteur",
    readBtnTabTooltip: "Ouvrir dans un nouvel onglet",
    
    speakBadge: "Entraîneur Oral",
    speakTitle: "ZELTAVIA Speak (Prononciation)",
    speakDescription: "Application à reconnaissance vocale par micro écoutant votre prononciation et évaluant instantanément sa concordance standard.",
    speakBtnOpen: "Ouvrir l'Entraîneur",
    speakBtnTabTooltip: "Ouvrir dans un nouvel onglet",
    
    integratedModule: "Module Intégré",
    openNewTab: "Ouvrir dans un onglet dédié",
    closeViewer: "Fermer la vue",
    
    integrationTitle: "Comment les applications s'intègrent dans la méthode ZELTAVIA",
    integrationSummary: "Pour maximiser la vitesse d'assimilation et respecter les principes d'acquisition naturelle (Input Compréhensible et Sortie Active), le cours sépare l'écoute et l'expression orale en deux applications spécialisées :",
    pillar1Title: "1. Entrée Passive Compréhensible (Read)",
    pillar1Desc: "Utilisez ZELTAVIA Read pour écouter les mots et récits complets à tout moment, sans connexion internet. L'oreille s'imprègne de la phonétique native avant de chercher à la reproduire.",
    pillar2Title: "2. Production Active et Correction (Speak)",
    pillar2Desc: "Utilisez ZELTAVIA Speak pour répéter à voix haute au micro. Le moteur de reconnaissance analyse votre accent et fournit un retour visuel instantané.",

    trainerTitle: "Échantillon Phonologique par Bandes de Fréquence",
    trainerSubtitle: "Explorez les mots exemples de chaque niveau pour former votre oreille :",
    listenBtn: "Écouter en anglais",
    showMeaningBtn: "Voir la traduction",
    nextWordBtn: "Mot suivant",
    exampleSentenceLabel: "Exemple en contexte :"
  },

  de: {
    badgeCategory: "Wortschatz-Pfad",
    badgeFocus: "Reines Hörtraining",
    badgeLaw: "Zipf-Gesetz",
    title: "Wortschatztraining & Spezial-Apps",
    subtitle: "Das Ziel ist rein lexikalisch und phonologisch: Das Gehör schulen und Wörter erkennen, bevor sie in den Geschichten der Phasen auftauchen.",
    coverageLabel: "Vollständige Abdeckung",
    coverageValue: "Top 5.000 Wörter (Zeltavia-Listen)",
    
    readBadge: "Eigenständiger Leser",
    readTitle: "ZELTAVIA Read (Offline)",
    readDescription: "Unabhängige Web-App zum Lesen englischer Texte und kontinuierlichen Wortschatzaufbau, konzipiert für 100% Offline-Betrieb.",
    readBtnOpen: "Betrachter öffnen",
    readBtnTabTooltip: "In neuem Tab öffnen",
    
    speakBadge: "Sprechtrainer",
    speakTitle: "ZELTAVIA Speak (Aussprache)",
    speakDescription: "Spracherkennungs-App mit Mikrofonunterstützung, die deine englische Aussprache analysiert und sofortiges Feedback gibt.",
    speakBtnOpen: "Trainer öffnen",
    speakBtnTabTooltip: "In neuem Tab öffnen",
    
    integratedModule: "Integriertes Modul",
    openNewTab: "Im Vollbild-Tab öffnen",
    closeViewer: "Betrachter schließen",
    
    integrationTitle: "Wie die Anwendungen in die ZELTAVIA-Methode integriert sind",
    integrationSummary: "Um maximale Lerngeschwindigkeit zu sichern und natürliche Spracherwerbsprinzipien (Verständlicher Input & Aktiver Output) zu wahren, teilt der Kurs Höreingabe und Sprachausgabe in zwei Werkzeuge:",
    pillar1Title: "1. Passiver verständlicher Input (Read)",
    pillar1Desc: "Nutze ZELTAVIA Read, um Wörter und Geschichten jederzeit anzuhören – völlig offline. Das Gehirn gewöhnt sich an die englische Phonetik, bevor aktives Sprechen gefordert wird.",
    pillar2Title: "2. Aktive Sprachproduktion & Korrektur (Speak)",
    pillar2Desc: "Nutze ZELTAVIA Speak, um laut ins Mikrofon zu sprechen. Die Erkennung prüft deine Aussprache in Echtzeit und festigt die motorischen Sprechmuster.",

    trainerTitle: "Phonologische Stichproben nach Frequenzbändern",
    trainerSubtitle: "Entdecke Musterwörter der einzelnen Bänder zur Hinführung deines Hörverständnisses:",
    listenBtn: "Auf Englisch anhören",
    showMeaningBtn: "Übersetzung anzeigen",
    nextWordBtn: "Nächstes Wort",
    exampleSentenceLabel: "Beispielsatz:"
  }
};

export const LOCALIZED_VOCAB_BANDS: Record<InterfaceLanguage, VocabBandLocalized[]> = {
  es: [
    {
      band: "Banda 1 (0 – 1.000)",
      range: "0 - 1000",
      coveragePercent: "72% del habla cotidiana",
      description: "El núcleo indispensable del idioma inglés. Cubre verbos primarios, pronombres, determinantes y objetos inmediatos.",
      sampleWords: [
        { en: "the", trans: "el / la / los / las", ex: "The school is in the town." },
        { en: "be", trans: "ser / estar", ex: "He is a teacher." },
        { en: "have", trans: "tener / haber", ex: "Does Tom have friends?" },
        { en: "say", trans: "decir", ex: "Laura says hello." },
        { en: "make", trans: "hacer / fabricar", ex: "He makes some coffee." },
        { en: "work", trans: "trabajar / funcionar", ex: "Anna works at night." },
        { en: "know", trans: "saber / conocer", ex: "I don't know yet." },
        { en: "people", trans: "personas / gente", ex: "The people are very nice." }
      ]
    },
    {
      band: "Banda 2 (1.000 – 2.000)",
      range: "1000 - 2000",
      coveragePercent: "84% acumulado",
      description: "Vocabulario de acción, relato en pasado, emociones comunes, viajes y descripciones concretas.",
      sampleWords: [
        { en: "travel", trans: "viajar", ex: "We used to travel a lot." },
        { en: "mountain", trans: "montaña", ex: "The drive to the mountains took five hours." },
        { en: "suddenly", trans: "de repente", ex: "Suddenly, it started to rain." },
        { en: "noise", trans: "ruido", ex: "They heard a strange noise." },
        { en: "hungry", trans: "hambriento", ex: "It looked hungry and cold." },
        { en: "wonder", trans: "preguntarse / maravillarse", ex: "We might always wonder." },
        { en: "gift", trans: "regalo", ex: "Paul gave them a small gift." }
      ]
    },
    {
      band: "Banda 3 (2.000 – 3.000)",
      range: "2000 - 3000",
      coveragePercent: "90% acumulado",
      description: "Expresión de posibilidad, debate comunitario, toma de decisiones, hipótesis y matices de futuro.",
      sampleWords: [
        { en: "improve", trans: "mejorar", ex: "A new garden will improve the square." },
        { en: "propose", trans: "proponer", ex: "She proposes a clear idea." },
        { en: "community", trans: "comunidad", ex: "The community gathers on Saturday." },
        { en: "agree", trans: "estar de acuerdo", ex: "If they agree, we will begin." },
        { en: "schedule", trans: "horario / programar", ex: "The team checks the schedule." }
      ]
    },
    {
      band: "Banda 4 (3.000 – 4.000)",
      range: "3000 - 4000",
      coveragePercent: "94% acumulado",
      description: "Conexión de vivencias, trayectoria profesional, proyectos a largo plazo y phrasal verbs frecuentes.",
      sampleWords: [
        { en: "establish", trans: "establecer / consolidar", ex: "They have established a close bond." },
        { en: "achievement", trans: "logro / éxito", ex: "Finishing the archive was an achievement." },
        { en: "decade", trans: "década", ex: "She has lived here for a decade." },
        { en: "overcome", trans: "superar / vencer", ex: "They have overcome early doubts." }
      ]
    },
    {
      band: "Banda 5 (4.000 – 5.000)",
      range: "4000 - 5000",
      coveragePercent: "97% acumulado",
      description: "Registro formal, estilo indirecto complejo, hipótesis avanzadas y debate reflexivo sofisticado.",
      sampleWords: [
        { en: "inevitable", trans: "inevitable", ex: "Change was deemed inevitable." },
        { en: "perspective", trans: "perspectiva", ex: "From historical perspective, it mattered." },
        { en: "controversy", trans: "controversia", ex: "The project generated little controversy." },
        { en: "substantial", trans: "sustancial / notable", ex: "They made substantial progress." }
      ]
    },
    {
      band: "Phrasal Verbs (Top 200)",
      range: "Phrasal Verbs",
      coveragePercent: "+15% fluidez oral",
      description: "Verbos compuestos y partículas preposicionales indispensables para el habla natural cotidiana.",
      sampleWords: [
        { en: "go on", trans: "seguir, continuar, ocurrir", ex: "Please go on with your story." },
        { en: "pick up", trans: "recoger, coger", ex: "I will pick up the kids at five." },
        { en: "come back", trans: "volver, regresar", ex: "She will come back tomorrow." },
        { en: "find out", trans: "descubrir, averiguar", ex: "I need to find out the truth." },
        { en: "give up", trans: "rendirse, abandonar", ex: "Never give up on your dreams." },
        { en: "figure out", trans: "descubrir, entender", ex: "I can't figure out this problem." },
        { en: "look forward to", trans: "tener ganas de, esperar con ilusión", ex: "I look forward to seeing you." },
        { en: "catch up", trans: "ponerse al día, alcanzar", ex: "Let's catch up over coffee." }
      ]
    }
  ],

  en: [
    {
      band: "Band 1 (0 – 1,000)",
      range: "0 - 1000",
      coveragePercent: "72% of everyday conversation",
      description: "The indispensable core of English: primary verbs, pronouns, determiners, and immediate environment objects.",
      sampleWords: [
        { en: "the", trans: "definite article", ex: "The school is in the town." },
        { en: "be", trans: "exist / state of being", ex: "He is a teacher." },
        { en: "have", trans: "possess / auxiliary", ex: "Does Tom have friends?" },
        { en: "say", trans: "utter words / state", ex: "Laura says hello." },
        { en: "make", trans: "create / produce", ex: "He makes some coffee." },
        { en: "work", trans: "labor / operate", ex: "Anna works at night." },
        { en: "know", trans: "understand / be acquainted with", ex: "I don't know yet." },
        { en: "people", trans: "human beings in general", ex: "The people are very nice." }
      ]
    },
    {
      band: "Band 2 (1,000 – 2,000)",
      range: "1000 - 2000",
      coveragePercent: "84% cumulative",
      description: "Action vocabulary, narrative past tense, common emotions, travel, and concrete situational descriptions.",
      sampleWords: [
        { en: "travel", trans: "journey / move from place to place", ex: "We used to travel a lot." },
        { en: "mountain", trans: "large elevated landform", ex: "The drive to the mountains took five hours." },
        { en: "suddenly", trans: "abruptly / without warning", ex: "Suddenly, it started to rain." },
        { en: "noise", trans: "sound, especially loud or unexpected", ex: "They heard a strange noise." },
        { en: "hungry", trans: "needing food", ex: "It looked hungry and cold." },
        { en: "wonder", trans: "think about curiously", ex: "We might always wonder." },
        { en: "gift", trans: "present / donation", ex: "Paul gave them a small gift." }
      ]
    },
    {
      band: "Band 3 (2,000 – 3,000)",
      range: "2000 - 3000",
      coveragePercent: "90% cumulative",
      description: "Expressing possibility, community debate, decision making, hypothetical reasoning, and future intentions.",
      sampleWords: [
        { en: "improve", trans: "make or become better", ex: "A new garden will improve the square." },
        { en: "propose", trans: "put forward an idea for consideration", ex: "She proposes a clear idea." },
        { en: "community", trans: "group of people living together", ex: "The community gathers on Saturday." },
        { en: "agree", trans: "have the same opinion", ex: "If they agree, we will begin." },
        { en: "schedule", trans: "timetable / plan for events", ex: "The team checks the schedule." }
      ]
    },
    {
      band: "Band 4 (3,000 – 4,000)",
      range: "3000 - 4000",
      coveragePercent: "94% cumulative",
      description: "Connecting life experiences, professional background, long-term endeavors, and frequent phrasal verbs.",
      sampleWords: [
        { en: "establish", trans: "set up on a firm basis", ex: "They have established a close bond." },
        { en: "achievement", trans: "thing done successfully with effort", ex: "Finishing the archive was an achievement." },
        { en: "decade", trans: "period of ten years", ex: "She has lived here for a decade." },
        { en: "overcome", trans: "succeed in dealing with a problem", ex: "They have overcome early doubts." }
      ]
    },
    {
      band: "Band 5 (4,000 – 5,000)",
      range: "4000 - 5000",
      coveragePercent: "97% cumulative",
      description: "Formal discourse register, nuanced reported speech, advanced hypotheticals, and sophisticated argumentation.",
      sampleWords: [
        { en: "inevitable", trans: "certain to happen / unavoidable", ex: "Change was deemed inevitable." },
        { en: "perspective", trans: "particular attitude or point of view", ex: "From historical perspective, it mattered." },
        { en: "controversy", trans: "disagreement or public debate", ex: "The project generated little controversy." },
        { en: "substantial", trans: "of considerable importance or size", ex: "They made substantial progress." }
      ]
    },
    {
      band: "Phrasal Verbs (Top 200)",
      range: "Phrasal Verbs",
      coveragePercent: "+15% spoken fluency",
      description: "Essential multi-word verbs and prepositions vital for natural everyday conversation.",
      sampleWords: [
        { en: "go on", trans: "continue, happen", ex: "Please go on with your story." },
        { en: "pick up", trans: "collect, lift", ex: "I will pick up the kids at five." },
        { en: "come back", trans: "return", ex: "She will come back tomorrow." },
        { en: "find out", trans: "discover, learn", ex: "I need to find out the truth." },
        { en: "give up", trans: "surrender, quit", ex: "Never give up on your dreams." },
        { en: "figure out", trans: "understand, solve", ex: "I can't figure out this problem." },
        { en: "look forward to", trans: "anticipate with pleasure", ex: "I look forward to seeing you." },
        { en: "catch up", trans: "reconnect, reach", ex: "Let's catch up over coffee." }
      ]
    }
  ],

  fr: [
    {
      band: "Bande 1 (0 – 1 000)",
      range: "0 - 1000",
      coveragePercent: "72% du langage quotidien",
      description: "Le noyau indispensable de l'anglais : verbes primaires, pronoms, déterminants et objets de l'environnement immédiat.",
      sampleWords: [
        { en: "the", trans: "le / la / les", ex: "The school is in the town." },
        { en: "be", trans: "être", ex: "He is a teacher." },
        { en: "have", trans: "avoir", ex: "Does Tom have friends?" },
        { en: "say", trans: "dire", ex: "Laura says hello." },
        { en: "make", trans: "faire / fabriquer", ex: "He makes some coffee." },
        { en: "work", trans: "travailler / fonctionner", ex: "Anna works at night." },
        { en: "know", trans: "savoir / connaître", ex: "I don't know yet." },
        { en: "people", trans: "les gens / personnes", ex: "The people are very nice." }
      ]
    },
    {
      band: "Bande 2 (1 000 – 2 000)",
      range: "1000 - 2000",
      coveragePercent: "84% cumulé",
      description: "Vocabulaire d'action, récit au passé, émotions fréquentes, voyages et descriptions concrètes.",
      sampleWords: [
        { en: "travel", trans: "voyager", ex: "We used to travel a lot." },
        { en: "mountain", trans: "montagne", ex: "The drive to the mountains took five hours." },
        { en: "suddenly", trans: "soudainement", ex: "Suddenly, it started to rain." },
        { en: "noise", trans: "bruit", ex: "They heard a strange noise." },
        { en: "hungry", trans: "affamé / avoir faim", ex: "It looked hungry and cold." },
        { en: "wonder", trans: "se demander / s'émerveiller", ex: "We might always wonder." },
        { en: "gift", trans: "cadeau", ex: "Paul gave them a small gift." }
      ]
    },
    {
      band: "Bande 3 (2 000 – 3 000)",
      range: "2000 - 3000",
      coveragePercent: "90% cumulé",
      description: "Expression de possibilités, débats communautaires, prises de décisions et nuances de futur.",
      sampleWords: [
        { en: "improve", trans: "améliorer", ex: "A new garden will improve the square." },
        { en: "propose", trans: "proposer", ex: "She proposes a clear idea." },
        { en: "community", trans: "communauté", ex: "The community gathers on Saturday." },
        { en: "agree", trans: "être d'accord", ex: "If they agree, we will begin." },
        { en: "schedule", trans: "planning / programmer", ex: "The team checks the schedule." }
      ]
    },
    {
      band: "Bande 4 (3 000 – 4 000)",
      range: "3000 - 4000",
      coveragePercent: "94% cumulé",
      description: "Liaison d'expériences de vie, parcours professionnel, projets durables et phrasal verbs usuels.",
      sampleWords: [
        { en: "establish", trans: "établir / fonder", ex: "They have established a close bond." },
        { en: "achievement", trans: "accomplissement / réussite", ex: "Finishing the archive was an achievement." },
        { en: "decade", trans: "décennie", ex: "She has lived here for a decade." },
        { en: "overcome", trans: "surmonter", ex: "They have overcome early doubts." }
      ]
    },
    {
      band: "Bande 5 (4 000 – 5 000)",
      range: "4000 - 5000",
      coveragePercent: "97% cumulé",
      description: "Registre formel, discours indirect avancé, hypothèses complexes et argumentation raffinée.",
      sampleWords: [
        { en: "inevitable", trans: "inévitable", ex: "Change was deemed inevitable." },
        { en: "perspective", trans: "perspective / point de vue", ex: "From historical perspective, it mattered." },
        { en: "controversy", trans: "controverse / débat", ex: "The project generated little controversy." },
        { en: "substantial", trans: "substantiel / considérable", ex: "They made substantial progress." }
      ]
    },
    {
      band: "Phrasal Verbs (Top 200)",
      range: "Phrasal Verbs",
      coveragePercent: "+15% d'aisance orale",
      description: "Verbes à particules et locutions verbales essentiels pour la conversation naturelle au quotidien.",
      sampleWords: [
        { en: "go on", trans: "continuer, se passer", ex: "Please go on with your story." },
        { en: "pick up", trans: "ramasser, prendre, chercher", ex: "I will pick up the kids at five." },
        { en: "come back", trans: "revenir, rentrer", ex: "She will come back tomorrow." },
        { en: "find out", trans: "découvrir, apprendre", ex: "I need to find out the truth." },
        { en: "give up", trans: "abandonner, renoncer", ex: "Never give up on your dreams." },
        { en: "figure out", trans: "comprendre, trouver", ex: "I can't figure out this problem." },
        { en: "look forward to", trans: "avoir hâte de", ex: "I look forward to seeing you." },
        { en: "catch up", trans: "rattraper, se mettre à jour", ex: "Let's catch up over coffee." }
      ]
    }
  ],

  de: [
    {
      band: "Band 1 (0 – 1.000)",
      range: "0 - 1000",
      coveragePercent: "72% der Alltagssprache",
      description: "Der unverzichtbare Kern des Englischen: Grundverben, Pronomen, Determinierer und unmittelbare Alltagsobjekte.",
      sampleWords: [
        { en: "the", trans: "der / die / das", ex: "The school is in the town." },
        { en: "be", trans: "sein", ex: "He is a teacher." },
        { en: "have", trans: "haben", ex: "Does Tom have friends?" },
        { en: "say", trans: "sagen", ex: "Laura says hello." },
        { en: "make", trans: "machen / herstellen", ex: "He makes some coffee." },
        { en: "work", trans: "arbeiten / funktionieren", ex: "Anna works at night." },
        { en: "know", trans: "wissen / kennen", ex: "I don't know yet." },
        { en: "people", trans: "Leute / Menschen", ex: "The people are very nice." }
      ]
    },
    {
      band: "Band 2 (1.000 – 2.000)",
      range: "1000 - 2000",
      coveragePercent: "84% kumuliert",
      description: "Aktionsvokabular, Erzählungen in der Vergangenheit, Gefühle, Reisen und anschauliche Beschreibungen.",
      sampleWords: [
        { en: "travel", trans: "reisen", ex: "We used to travel a lot." },
        { en: "mountain", trans: "Berg / Gebirge", ex: "The drive to the mountains took five hours." },
        { en: "suddenly", trans: "plötzlich", ex: "Suddenly, it started to rain." },
        { en: "noise", trans: "Geräusch / Lärm", ex: "They heard a strange noise." },
        { en: "hungry", trans: "hungrig", ex: "It looked hungry and cold." },
        { en: "wonder", trans: "sich wundern / sich fragen", ex: "We might always wonder." },
        { en: "gift", trans: "Geschenk / Gabe", ex: "Paul gave them a small gift." }
      ]
    },
    {
      band: "Band 3 (2.000 – 3.000)",
      range: "2000 - 3000",
      coveragePercent: "90% kumuliert",
      description: "Möglichkeiten ausdrücken, Debatten in der Gemeinschaft, Entscheidungen und Zukunftsnuancen.",
      sampleWords: [
        { en: "improve", trans: "verbessern", ex: "A new garden will improve the square." },
        { en: "propose", trans: "vorschlagen", ex: "She proposes a clear idea." },
        { en: "community", trans: "Gemeinschaft / Gemeinde", ex: "The community gathers on Saturday." },
        { en: "agree", trans: "zustimmen / einverstanden sein", ex: "If they agree, we will begin." },
        { en: "schedule", trans: "Zeitplan / planen", ex: "The team checks the schedule." }
      ]
    },
    {
      band: "Band 4 (3.000 – 4.000)",
      range: "3000 - 4000",
      coveragePercent: "94% kumuliert",
      description: "Lebenserfahrungen verknüpfen, beruflicher Werdegang, langfristige Vorhaben und häufige Phrasal Verbs.",
      sampleWords: [
        { en: "establish", trans: "etablieren / gründen", ex: "They have established a close bond." },
        { en: "achievement", trans: "Leistung / Errungenschaft", ex: "Finishing the archive was an achievement." },
        { en: "decade", trans: "Jahrzehnt", ex: "She has lived here for a decade." },
        { en: "overcome", trans: "überwinden / bewältigen", ex: "They have overcome early doubts." }
      ]
    },
    {
      band: "Band 5 (4.000 – 5.000)",
      range: "4000 - 5000",
      coveragePercent: "97% kumuliert",
      description: "Formelles Register, komplexe indirekte Rede, anspruchsvolle Hypothesen und reflektierte Debatten.",
      sampleWords: [
        { en: "inevitable", trans: "unvermeidlich", ex: "Change was deemed inevitable." },
        { en: "perspective", trans: "Perspektive / Blickwinkel", ex: "From historical perspective, it mattered." },
        { en: "controversy", trans: "Kontroverse / Debatte", ex: "The project generated little controversy." },
        { en: "substantial", trans: "erheblich / beträchtlich", ex: "They made substantial progress." }
      ]
    },
    {
      band: "Phrasal Verbs (Top 200)",
      range: "Phrasal Verbs",
      coveragePercent: "+15% Sprachflüssigkeit",
      description: "Zusammengesetzte Verben und Partikelverben, unverzichtbar für die natürliche Alltagssprache.",
      sampleWords: [
        { en: "go on", trans: "weitermachen, weitergehen, passieren", ex: "Please go on with your story." },
        { en: "pick up", trans: "aufheben, abholen", ex: "I will pick up the kids at five." },
        { en: "come back", trans: "zurückkommen", ex: "She will come back tomorrow." },
        { en: "find out", trans: "herausfinden", ex: "I need to find out the truth." },
        { en: "give up", trans: "aufgeben", ex: "Never give up on your dreams." },
        { en: "figure out", trans: "herausfinden, verstehen", ex: "I can't figure out this problem." },
        { en: "look forward to", trans: "sich freuen auf", ex: "I look forward to seeing you." },
        { en: "catch up", trans: "aufholen, nachholen", ex: "Let's catch up over coffee." }
      ]
    }
  ]
};
