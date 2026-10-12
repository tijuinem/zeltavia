export type InterfaceLanguage = 'es' | 'en' | 'fr' | 'de';

export interface InterfaceStrings {
  // Navigation
  navIntro: string;
  navPhases: string;
  navPhase0: string;
  navPhase0Badge: string;
  navPhaseSummary: string;
  navPhaseSummarySubtitle: string;
  navVocab: string;
  navAntiTranslation: string;
  navPhasesDropdownHeader: string;
  
  // Phase Sub-header
  curriculumHeader: string;
  curriculumSubtitle: string;
  phaseLabel: string;
  
  // Settings Modal
  settingsTitle: string;
  settingsSubtitle: string;
  fontSizeTitle: string;
  fontSizeStandard: string;
  fontSizeLarge: string;
  fontSizeXLarge: string;
  highContrastTitle: string;
  highContrastSubtitle: string;
  themeTitle: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  languageTitle: string;
  diagnosticsTitle: string;
  diagSpeech: string;
  diagStorage: string;
  diagOffline: string;
  close: string;
  
  // Credits Modal
  creditsTitle: string;
  creditsSubtitle: string;
  appVersionLabel: string;
  freeEditionTag: string;
  freeEditionTitle: string;
  freeEditionBadge: string;
  freeEditionDesc: string;
  freeEditionSupportNote: string;
  methodologyTitle: string;
  methodologyDescription: string;
  pillarsTitle: string;
  architectureTitle: string;
  architectureDescription: string;
  rightsReserved: string;

  // PhaseView Sections
  phasePrereqTitle: string;
  phaseSlaGoal: string;
  phaseStoryTag: string;
  phaseStoryTitle: string;
  phaseOpenStoryBtn: string;
  phaseOpenStandaloneReader: string;
  phaseStoryHint: string;
  phaseAhaRulesTitle: string;
  phaseAhaRulesSubtitle: string;
  phaseChunksTitle: string;
  phaseChunksSubtitle: string;
  phaseAntiTranslationTitle: string;
  phaseRecyclingTitle: string;
  phaseNextPhaseBtn: string;
  phaseOfTotal: string;

  // Story Reader Modal
  storyReaderPlay: string;
  storyReaderPause: string;
  storyReaderStop: string;
  storyReaderSpeed: string;
  storyReaderShadowingActive: string;
  storyReaderShadowingAvailable: string;
  storyReaderNoticingBanner: string;
  storyReaderNoticingText: string;
  storyReaderShadowingSection: string;
  storyReaderShadowingHint: string;

  // Theory Intro
  theoryPillarsBadge: string;
  theoryStartBtn: string;
  theoryHowToUseTitle: string;

  // Phase Submenu Short Names (Phases 1 to 6)
  phaseNames: string[];

  // Footer
  methodTagline: string;
  footerBrandDesc: string;
  footerBadgePhases: string;
  footerBadgeWords: string;
  footerBadgeNoPrior: string;
  footerCourseStructureTitle: string;
  footerIntroTheory: string;
  footerPhase0Ref: string;
  footerToolsTitle: string;
  footerToolVocabTrack: string;
  footerToolAntiTranslation: string;
  footerToolSummary: string;
  footerToolDualReader: string;
  footerToolPronunciation: string;
  footerLicense: string;
  footerDevelopedBy: string;
  footerFor: string;
  footerBlog: string;
}

export const INTERFACE_TRANSLATIONS: Record<InterfaceLanguage, InterfaceStrings> = {
  es: {
    navIntro: "Introducción",
    navPhases: "Fases",
    navPhase0: "Fase 0: Ficha Previa",
    navPhase0Badge: "2 min de conceptos esenciales",
    navPhaseSummary: "Resumen de las 6 Fases",
    navPhaseSummarySubtitle: "1 línea por fase con foco pedagógico",
    navVocab: "Vocabulario (1k-5k)",
    navAntiTranslation: "Anti-Traducción",
    navPhasesDropdownHeader: "Currículum de Fases",

    curriculumHeader: "Currículum Gramatical:",
    curriculumSubtitle: "Selecciona la fase para estudiar su estructura y acceder al cuento",
    phaseLabel: "Fase",

    settingsTitle: "Ajustes de Visibilidad",
    settingsSubtitle: "Comodidad para ojos y oídos",
    fontSizeTitle: "Tamaño de Letra",
    fontSizeStandard: "Estándar",
    fontSizeLarge: "Grande",
    fontSizeXLarge: "Muy Grande",
    highContrastTitle: "Modo Contraste Alto",
    highContrastSubtitle: "Fondo negro y bordes amarillos luminosos",
    themeTitle: "Tema de Interfaz",
    themeLight: "Modo Claro",
    themeDark: "Modo Oscuro",
    themeSystem: "Predeterminado",
    languageTitle: "Idioma de la Interfaz",
    diagnosticsTitle: "Diagnóstico del Sistema",
    diagSpeech: "Síntesis de voz nativa",
    diagStorage: "Almacenamiento local",
    diagOffline: "Modo Offline autónomo",
    close: "Cerrar",

    creditsTitle: "Créditos & Versión",
    creditsSubtitle: "Información técnica y metodológica de ZELTAVIA",
    appVersionLabel: "Versión de la Aplicación",
    freeEditionTag: "EDICIÓN LIBRE · COMUNIDAD",
    freeEditionTitle: "Versión FREE de Acceso Completo",
    freeEditionBadge: "Versión FREE",
    freeEditionDesc: "Estás utilizando la versión FREE con acceso completo al método ZELTAVIA. Existe una versión con un precio simbólico creada para ayudar y apoyar al equipo de desarrollo a seguir trabajando en continuas actualizaciones, nuevos cuentos y ampliaciones de contenido.",
    freeEditionSupportNote: "Proyecto independiente · Próximamente disponible edición de apoyo",
    methodologyTitle: "Metodología Lingüística",
    methodologyDescription: "Integración de frecuencia léxica real (Zipf & listas Zeltavia), narrativa comprensible i+1 (Krashen) y micro-reglas de detección guiada (Schmidt).",
    pillarsTitle: "Pilares Científicos",
    architectureTitle: "Arquitectura de Software",
    architectureDescription: "Plataforma web reactiva y autónoma diseñada para máxima velocidad, accesibilidad universal y práctica auditiva oral inmersiva.",
    rightsReserved: "Todos los derechos reservados.",

    phasePrereqTitle: "Requisitos Previos y Corrección a la Ficha",
    phaseSlaGoal: "Objetivo científico SLA: Comprensión sin sobrecarga",
    phaseStoryTag: "Escucha primero, descubre la regla después",
    phaseStoryTitle: "Cuento Calibrado de la Fase",
    phaseOpenStoryBtn: "Abrir Cuento con Audio y Modo Lectura",
    phaseOpenStandaloneReader: "Abrir en Lector Autónomo",
    phaseStoryHint: "Haz clic para escuchar el cuento completo antes de ver las reglas.",
    phaseAhaRulesTitle: "Reglas 'Aha' (Noticing Guiado)",
    phaseAhaRulesSubtitle: "La regla aparece solo después de haberla oído en el cuento, para consolidar el patrón.",
    phaseChunksTitle: "Chunks y Expresiones Frecuentes",
    phaseChunksSubtitle: "Aprende bloques enteros de palabras tal como las usan los nativos, sin traducir palabra por palabra.",
    phaseAntiTranslationTitle: "Filtro Anti-Traducción y Errores Típicos",
    phaseRecyclingTitle: "Reciclaje y Repaso Obligatorio",
    phaseNextPhaseBtn: "Avanzar a la Fase Siguiente",
    phaseOfTotal: "de 6",

    storyReaderPlay: "Reproducir Cuento",
    storyReaderPause: "Pausar Audio",
    storyReaderStop: "Detener audio",
    storyReaderSpeed: "Velocidad:",
    storyReaderShadowingActive: "Modo Shadowing Activado",
    storyReaderShadowingAvailable: "Modo Shadowing Disponible",
    storyReaderNoticingBanner: "Regla pedagógica ZELTAVIA: Exposición antes de la regla",
    storyReaderNoticingText: "Escucha y lee la narrativa sin detenerte a traducir mentalmente cada término. Tu cerebro comenzará a registrar los patrones de forma intuitiva.",
    storyReaderShadowingSection: "Frases clave para Shadowing (Entrenamiento Oral)",
    storyReaderShadowingHint: "Haz clic en cada frase para escucharla individualmente. Repítela en voz alta de inmediato imitando el ritmo y la entonación nativa.",

    theoryPillarsBadge: "Fundamentos Científicos · Modelo ZELTAVIA",
    theoryStartBtn: "Iniciar Currículum (Fase 0)",
    theoryHowToUseTitle: "Cómo Utilizar el Método ZELTAVIA",

    phaseNames: [
      "El Esqueleto del Idioma",
      "Narrar el Pasado",
      "Decisiones, Futuro y Posibilidad",
      "Experiencias y Conexión",
      "Cambiar el Foco",
      "Matices y Deshispanización"
    ],

    methodTagline: "MÉTODO DE INGLÉS BASADO EN LA FRECUENCIA",
    footerBrandDesc: "ZELTAVIA es un sistema de adquisición de inglés basado en frecuencia léxica real (listas Zeltavia), narrativa graduada i+1, micro-reglas de detección posterior (Noticing) y entrenamiento auditivo simultáneo.",
    footerBadgePhases: "6 Fases Cerradas",
    footerBadgeWords: "5.000 Palabras Frecuentes",
    footerBadgeNoPrior: "Sin reglas abstractas previas",
    footerCourseStructureTitle: "Estructura del Curso",
    footerIntroTheory: "1. Introducción Teórica",
    footerPhase0Ref: "2. Fase 0: Ficha de Referencia",
    footerToolsTitle: "Herramientas del Método",
    footerToolVocabTrack: "Pista Auditiva Vocabulario",
    footerToolAntiTranslation: "Filtro Anti-Traducción",
    footerToolSummary: "Resumen de 6 Fases (1 línea)",
    footerToolDualReader: "Lector Dual con Traducción",
    footerToolPronunciation: "Entrenador de Pronunciación",
    footerLicense: "Método de Inglés por Frecuencia Léxica y Gramática de Fases · Licencia CC BY 4.0",
    footerDevelopedBy: "Desarrollado por",
    footerFor: "para",
    footerBlog: "Blog personal:"
  },
  en: {
    navIntro: "Introduction",
    navPhases: "Phases",
    navPhase0: "Phase 0: Quick Reference",
    navPhase0Badge: "2-min core concepts",
    navPhaseSummary: "6-Phase Overview",
    navPhaseSummarySubtitle: "1 line per phase with pedagogical focus",
    navVocab: "Vocabulary (1k-5k)",
    navAntiTranslation: "Anti-Translation",
    navPhasesDropdownHeader: "Phase Curriculum",

    curriculumHeader: "Grammar Curriculum:",
    curriculumSubtitle: "Select a phase to explore its structure and access the graded story",
    phaseLabel: "Phase",

    settingsTitle: "Display & Audio Settings",
    settingsSubtitle: "Visual comfort and listening clarity",
    fontSizeTitle: "Font Size",
    fontSizeStandard: "Standard",
    fontSizeLarge: "Large",
    fontSizeXLarge: "Extra Large",
    highContrastTitle: "High Contrast Mode",
    highContrastSubtitle: "Deep black background with vivid amber borders",
    themeTitle: "Interface Theme",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    themeSystem: "System Default",
    languageTitle: "Interface Language",
    diagnosticsTitle: "System Diagnostics",
    diagSpeech: "Native speech synthesis",
    diagStorage: "Local storage persistence",
    diagOffline: "Autonomous offline PWA",
    close: "Close",

    creditsTitle: "Credits & Version",
    creditsSubtitle: "Technical and pedagogical specifications of ZELTAVIA",
    appVersionLabel: "Application Version",
    freeEditionTag: "OPEN COMMUNITY EDITION",
    freeEditionTitle: "Full-Access FREE Version",
    freeEditionBadge: "FREE Edition",
    freeEditionDesc: "You are using the FREE version with full access to the ZELTAVIA method. A supporter edition with a symbolic price will be available to help the development team keep working on regular updates, new stories, and expanded content.",
    freeEditionSupportNote: "Independent project · Supporter edition coming soon",
    methodologyTitle: "Linguistic Methodology",
    methodologyDescription: "Empirical lexical frequency mapping (Zipf & Zeltavia corpora), targeted comprehensible input (Krashen), and explicit noticing micro-rules (Schmidt).",
    pillarsTitle: "Scientific Foundations",
    architectureTitle: "Software Architecture",
    architectureDescription: "Reactive, offline-first web platform engineered for instant latency, universal accessibility, and dual-coded oral immersion.",
    rightsReserved: "All rights reserved.",

    phasePrereqTitle: "Prerequisites & Concept Baseline",
    phaseSlaGoal: "SLA Cognitive Goal: Comprehension without cognitive overload",
    phaseStoryTag: "Listen first, discover the explicit rule after",
    phaseStoryTitle: "Calibrated Phase Graded Story",
    phaseOpenStoryBtn: "Open Story with Synchronized Audio & Reader",
    phaseOpenStandaloneReader: "Open in Standalone Reader",
    phaseStoryHint: "Click to listen to the full story before reviewing explicit grammar rules.",
    phaseAhaRulesTitle: "'Aha' Rules (Guided Noticing)",
    phaseAhaRulesSubtitle: "Rules appear strictly after hearing them inside the story to codify the recognized pattern.",
    phaseChunksTitle: "High-Frequency Chunks & Collocations",
    phaseChunksSubtitle: "Internalize complete multi-word phrases as native speakers use them, without word-by-word translation.",
    phaseAntiTranslationTitle: "Anti-Translation Filter & Common Pitfalls",
    phaseRecyclingTitle: "Spaced Recycling & Mandatory Review",
    phaseNextPhaseBtn: "Advance to Next Phase",
    phaseOfTotal: "of 6",

    storyReaderPlay: "Play Story Audio",
    storyReaderPause: "Pause Audio",
    storyReaderStop: "Stop audio",
    storyReaderSpeed: "Speed:",
    storyReaderShadowingActive: "Shadowing Mode Active",
    storyReaderShadowingAvailable: "Shadowing Mode Available",
    storyReaderNoticingBanner: "ZELTAVIA Pedagogical Principle: Immersion before rules",
    storyReaderNoticingText: "Listen and read along without pausing to analyze every word. Your brain will register syntactic patterns intuitively.",
    storyReaderShadowingSection: "Key Sentences for Oral Shadowing",
    storyReaderShadowingHint: "Click each sentence to listen. Immediately repeat aloud imitating native rhythm and intonation.",

    theoryPillarsBadge: "Scientific Foundations · ZELTAVIA Model",
    theoryStartBtn: "Start Curriculum (Phase 0)",
    theoryHowToUseTitle: "How to Use the ZELTAVIA Method",

    phaseNames: [
      "The Language Skeleton",
      "Narrating the Past",
      "Decisions, Future & Modals",
      "Connecting Experiences",
      "Shifting the Focus",
      "Nuance & Native Fluency"
    ],

    methodTagline: "FREQUENCY-BASED ENGLISH METHOD",
    footerBrandDesc: "ZELTAVIA is an English language acquisition system based on authentic lexical frequency (Zeltavia lists), i+1 graded narrative, post-exposure discovery micro-rules (Noticing), and simultaneous auditory training.",
    footerBadgePhases: "6 Closed Phases",
    footerBadgeWords: "5,000 Frequent Words",
    footerBadgeNoPrior: "No abstract prior rules",
    footerCourseStructureTitle: "Course Structure",
    footerIntroTheory: "1. Theoretical Introduction",
    footerPhase0Ref: "2. Phase 0: Reference Card",
    footerToolsTitle: "Method Tools",
    footerToolVocabTrack: "Auditory Vocabulary Track",
    footerToolAntiTranslation: "Anti-Translation Filter",
    footerToolSummary: "6-Phase Summary (1 line)",
    footerToolDualReader: "Dual Reader with Translation",
    footerToolPronunciation: "Pronunciation Trainer",
    footerLicense: "English Method by Lexical Frequency & Phase Grammar · CC BY 4.0 License",
    footerDevelopedBy: "Developed by",
    footerFor: "for",
    footerBlog: "Personal blog:"
  },
  fr: {
    navIntro: "Introduction",
    navPhases: "Phases",
    navPhase0: "Phase 0 : Fiche Préalable",
    navPhase0Badge: "2 min de notions clés",
    navPhaseSummary: "Résumé des 6 Phases",
    navPhaseSummarySubtitle: "1 ligne par phase avec focus pédagogique",
    navVocab: "Vocabulaire (1k-5k)",
    navAntiTranslation: "Anti-Traduction",
    navPhasesDropdownHeader: "Programme par Phases",

    curriculumHeader: "Programme Grammatical :",
    curriculumSubtitle: "Sélectionnez la phase pour explorer sa structure et lire l'histoire",
    phaseLabel: "Phase",

    settingsTitle: "Paramètres d'Affichage",
    settingsSubtitle: "Confort visuel et écoute optimale",
    fontSizeTitle: "Taille de Police",
    fontSizeStandard: "Standard",
    fontSizeLarge: "Grande",
    fontSizeXLarge: "Très Grande",
    highContrastTitle: "Mode Contraste Élevé",
    highContrastSubtitle: "Fond noir profond et bordures ambrées",
    themeTitle: "Thème d'Interface",
    themeLight: "Mode Clair",
    themeDark: "Mode Sombre",
    themeSystem: "Par Défaut",
    languageTitle: "Langue de l'Interface",
    diagnosticsTitle: "Diagnostic du Système",
    diagSpeech: "Synthèse vocale native",
    diagStorage: "Stockage local persistant",
    diagOffline: "Mode Hors-ligne autonome",
    close: "Fermer",

    creditsTitle: "Crédits & Version",
    creditsSubtitle: "Spécifications techniques et méthodologiques de ZELTAVIA",
    appVersionLabel: "Version de l'Application",
    freeEditionTag: "ÉDITION LIBRE · COMMUNAUTÉ",
    freeEditionTitle: "Version FREE à Accès Intégral",
    freeEditionBadge: "Version FREE",
    freeEditionDesc: "Vous utilisez la version FREE avec un accès complet aux 6 phases de la méthode ZELTAVIA. Une édition au prix symbolique sera bientôt disponible pour soutenir l'équipe de développement dans la création de nouvelles mises à jour, histoires et enrichissements réguliers.",
    freeEditionSupportNote: "Projet indépendant · Édition de soutien bientôt disponible",
    methodologyTitle: "Méthodologie Linguistique",
    methodologyDescription: "Fréquence lexicale réelle (Zipf & corpus Zeltavia), narration compréhensible i+1 (Krashen) et micro-règles de noticing (Schmidt).",
    pillarsTitle: "Piliers Scientifiques",
    architectureTitle: "Architecture Logicielle",
    architectureDescription: "Plateforme web haute performance conçue pour une réactivité instantanée, une accessibilité universelle et une pratique orale immersive.",
    rightsReserved: "Tous droits réservés.",

    phasePrereqTitle: "Prérequis et Alignement des Notions",
    phaseSlaGoal: "Objectif SLA : Compréhension fluide sans surcharge",
    phaseStoryTag: "Écoutez d'abord, découvrez la règle après",
    phaseStoryTitle: "Récit Calibré de la Phase",
    phaseOpenStoryBtn: "Ouvrir le Récit avec Audio et Mode Lecture",
    phaseOpenStandaloneReader: "Ouvrir dans le Lecteur Autonome",
    phaseStoryHint: "Cliquez pour écouter l'histoire complète avant d'étudier les règles explicites.",
    phaseAhaRulesTitle: "Règles « Aha » (Noticing Guidé)",
    phaseAhaRulesSubtitle: "La règle apparaît après l'écoute dans l'histoire pour ancrer le modèle naturel.",
    phaseChunksTitle: "Collocations et Chunks Fréquents",
    phaseChunksSubtitle: "Assimilez des blocs de mots prêts à l'emploi sans traduire mot à mot.",
    phaseAntiTranslationTitle: "Filtre Anti-Traduction & Pièges Courants",
    phaseRecyclingTitle: "Recyclage et Révision Obligatoire",
    phaseNextPhaseBtn: "Passer à la Phase Suivante",
    phaseOfTotal: "sur 6",

    storyReaderPlay: "Lire le Récit",
    storyReaderPause: "Mettre en pause",
    storyReaderStop: "Arrêter l'audio",
    storyReaderSpeed: "Vitesse :",
    storyReaderShadowingActive: "Mode Shadowing Activé",
    storyReaderShadowingAvailable: "Mode Shadowing Disponible",
    storyReaderNoticingBanner: "Principe pédagogique ZELTAVIA : L'immersion avant la règle",
    storyReaderNoticingText: "Écoutez et lisez sans bloquer sur chaque terme. Votre cerveau assimile les structures naturellement.",
    storyReaderShadowingSection: "Phrases Clés pour le Shadowing (Pratique Orale)",
    storyReaderShadowingHint: "Cliquez sur chaque phrase pour l'écouter et répétez immédiatement à voix haute en imitant le rythme natif.",

    theoryPillarsBadge: "Fondements Scientifiques · Modèle ZELTAVIA",
    theoryStartBtn: "Démarrer le Parcours (Phase 0)",
    theoryHowToUseTitle: "Comment Utiliser la Méthode ZELTAVIA",

    phaseNames: [
      "Le Squelette de la Langue",
      "Raconter le Passé",
      "Décisions, Futur et Modalité",
      "Relier les Expériences",
      "Changer la Perspective",
      "Nuances et Aisance Native"
    ],

    methodTagline: "MÉTHODE D'ANGLAIS BASÉE SUR LA FRÉQUENCE",
    footerBrandDesc: "ZELTAVIA est un système d'apprentissage de l'anglais fondé sur la fréquence lexicale réelle (listes Zeltavia), la narration graduée i+1, le repérage guidé (Noticing) et l'écoute simultanée.",
    footerBadgePhases: "6 Phases Clôturées",
    footerBadgeWords: "5 000 Mots Fréquents",
    footerBadgeNoPrior: "Sans règles abstraites préalables",
    footerCourseStructureTitle: "Structure du Cours",
    footerIntroTheory: "1. Introduction Théorique",
    footerPhase0Ref: "2. Phase 0 : Fiche de Référence",
    footerToolsTitle: "Outils de la Méthode",
    footerToolVocabTrack: "Piste de Vocabulaire Auditif",
    footerToolAntiTranslation: "Filtre Anti-Traduction",
    footerToolSummary: "Résumé des 6 Phases (1 ligne)",
    footerToolDualReader: "Lecteur Bilingue avec Traduction",
    footerToolPronunciation: "Entraîneur de Prononciation",
    footerLicense: "Méthode d'Anglais par Fréquence Lexicale et Grammaire de Phases · Licence CC BY 4.0",
    footerDevelopedBy: "Développé par",
    footerFor: "pour",
    footerBlog: "Blog personnel :"
  },
  de: {
    navIntro: "Einführung",
    navPhases: "Phasen",
    navPhase0: "Phase 0: Referenzblatt",
    navPhase0Badge: "2 Min. Kernkonzepte",
    navPhaseSummary: "6-Phasen-Übersicht",
    navPhaseSummarySubtitle: "1 Zeile pro Phase mit pädagogischem Fokus",
    navVocab: "Wortschatz (1k-5k)",
    navAntiTranslation: "Anti-Übersetzung",
    navPhasesDropdownHeader: "Phasen-Lehrplan",

    curriculumHeader: "Grammatik-Lehrplan:",
    curriculumSubtitle: "Wähle eine Phase, um ihre Struktur zu studieren und die Geschichte zu lesen",
    phaseLabel: "Phase",

    settingsTitle: "Sichtbarkeits- & Audioeinstellungen",
    settingsSubtitle: "Lesekomfort und klare Hörerfahrung",
    fontSizeTitle: "Schriftgröße",
    fontSizeStandard: "Standard",
    fontSizeLarge: "Groß",
    fontSizeXLarge: "Sehr groß",
    highContrastTitle: "Hoher Kontrastmodus",
    highContrastSubtitle: "Tiefschwarzer Hintergrund mit markanten gelben Rahmen",
    themeTitle: "Oberflächendesign",
    themeLight: "Heller Modus",
    themeDark: "Dunkler Modus",
    themeSystem: "Systemstandard",
    languageTitle: "Sprache der Benutzeroberfläche",
    diagnosticsTitle: "Systemdiagnose",
    diagSpeech: "Native Sprachausgabe",
    diagStorage: "Lokale Speicherung",
    diagOffline: "Autonomer Offline-Modus",
    close: "Schließen",

    creditsTitle: "Credits & Version",
    creditsSubtitle: "Technische und methodische Details zu ZELTAVIA",
    appVersionLabel: "Anwendungsversion",
    freeEditionTag: "FREIE GEMEINSCHAFTS-EDITION",
    freeEditionTitle: "Vollständige FREE-Version",
    freeEditionBadge: "FREE-Version",
    freeEditionDesc: "Du nutzt die FREE-Version mit uneingeschränktem Zugang zu allen 6 Phasen der ZELTAVIA-Methode. In Kürze wird eine Edition mit einem symbolischen Förderbeitrag verfügbar sein, um das Entwicklerteam bei kontinuierlichen Updates, neuen Lektionen und inhaltlichen Erweiterungen zu unterstützen.",
    freeEditionSupportNote: "Unabhängiges Projekt · Förder-Edition demnächst verfügbar",
    methodologyTitle: "Linguistische Methodik",
    methodologyDescription: "Reale lexikalische Nutzungshäufigkeit (Zipf & Zeltavia-Listen), verständlicher Input i+1 (Krashen) und 'Aha'-Noticing-Mikroregeln (Schmidt).",
    pillarsTitle: "Wissenschaftliche Säulen",
    architectureTitle: "Software-Architektur",
    architectureDescription: "Leistungsstarke Webplattform für sofortige Reaktionszeiten, universelle Barrierefreiheit und immersive auditive Sprachpraxis.",
    rightsReserved: "Alle Rechte vorbehalten.",

    phasePrereqTitle: "Voraussetzungen & Vorbereitung",
    phaseSlaGoal: "SLA-Lernziel: Verständlichkeit ohne kognitive Überlastung",
    phaseStoryTag: "Zuerst hören, dann die Regel entdecken",
    phaseStoryTitle: "Kalibrierte Phase-Geschichte",
    phaseOpenStoryBtn: "Geschichte mit Audio & Lesemodus öffnen",
    phaseOpenStandaloneReader: "Im eigenständigen Reader öffnen",
    phaseStoryHint: "Klicke hier, um die ganze Geschichte anzuhören, bevor du die Regeln lernst.",
    phaseAhaRulesTitle: "'Aha'-Regeln (Gezieltes Bemerken)",
    phaseAhaRulesSubtitle: "Die Regel wird erst nach dem Hören in der Geschichte studiert, um das Muster zu verankern.",
    phaseChunksTitle: "Feste Wendungen & Häufige Chunks",
    phaseChunksSubtitle: "Lerne feste Wortgruppen als Ganzes, wie Muttersprachler sie nutzen, ohne wörtlich zu übersetzen.",
    phaseAntiTranslationTitle: "Anti-Übersetzungs-Filter & Typische Fehler",
    phaseRecyclingTitle: "Wiederholung & Verankerung",
    phaseNextPhaseBtn: "Zur nächsten Phase",
    phaseOfTotal: "von 6",

    storyReaderPlay: "Geschichte abspielen",
    storyReaderPause: "Audio anhalten",
    storyReaderStop: "Audio stoppen",
    storyReaderSpeed: "Geschwindigkeit:",
    storyReaderShadowingActive: "Shadowing-Modus Aktiv",
    storyReaderShadowingAvailable: "Shadowing-Modus Verfügbar",
    storyReaderNoticingBanner: "ZELTAVIA-Lernregel: Immersion vor der Regel",
    storyReaderNoticingText: "Höre und lies mit, ohne jedes Wort zu übersetzen. Dein Gehirn verarbeitet die Muster intuitiv.",
    storyReaderShadowingSection: "Schlüsselsätze für Shadowing (Sprechtraining)",
    storyReaderShadowingHint: "Klicke auf jeden Satz zum Anhören und sprich sofort laut nach, um Rhythmus und Melodie zu verinnerlichen.",

    theoryPillarsBadge: "Wissenschaftliche Basis · ZELTAVIA-Modell",
    theoryStartBtn: "Lehrplan starten (Phase 0)",
    theoryHowToUseTitle: "So nutzt du die ZELTAVIA-Methode",

    phaseNames: [
      "Das Sprachgerüst",
      "Vergangenheit erzählen",
      "Zukunft, Entscheidungen und Modalverben",
      "Erfahrungen verbinden",
      "Den Fokus verschieben",
      "Feinschliff und native Sprachflüssigkeit"
    ],

    methodTagline: "FREQUENZBASIERTE ENGLISCHMETHODE",
    footerBrandDesc: "ZELTAVIA ist ein Spracherwerbssystem für Englisch, basierend auf realer Wortschatzfrequenz (Zeltavia-Listen), abgestufter i+1 Erzählung, Noticing-Mikroregeln und simultanem Hörtraining.",
    footerBadgePhases: "6 abgeschlossene Phasen",
    footerBadgeWords: "5.000 häufigste Wörter",
    footerBadgeNoPrior: "Keine abstrakten Vorabregeln",
    footerCourseStructureTitle: "Kursstruktur",
    footerIntroTheory: "1. Theoretische Einführung",
    footerPhase0Ref: "2. Phase 0: Referenzblatt",
    footerToolsTitle: "Werkzeuge der Methode",
    footerToolVocabTrack: "Hörpfad Wortschatz",
    footerToolAntiTranslation: "Anti-Übersetzungsfilter",
    footerToolSummary: "6-Phasen-Übersicht (1 Zeile)",
    footerToolDualReader: "Zweisprachiger Leser mit Übersetzung",
    footerToolPronunciation: "Aussprachetrainer",
    footerLicense: "Englischmethode nach Wortschatzfrequenz und Phasengrammatik · CC BY 4.0 Lizenz",
    footerDevelopedBy: "Entwickelt von",
    footerFor: "für",
    footerBlog: "Persönlicher Blog:"
  }
};
