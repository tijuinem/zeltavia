import { InterfaceLanguage } from './interfaceTranslations';

export interface TheoryInfoStructure {
  title: string;
  subtitle: string;
  summary: string;
  acronymComponents: {
    letter: string;
    name: string;
    what: string;
    science: string;
  }[];
  scientificPillars: {
    title: string;
    description: string;
  }[];
  architecture: {
    vocabTrack: string;
    grammarTrack: string;
  };
  usageSteps: string[];
  scopeNotice: string;
}

export const THEORY_TRANSLATIONS: Record<InterfaceLanguage, TheoryInfoStructure> = {
  es: {
    title: "El Método ZELTAVIA",
    subtitle: "Manual Completo de Gramática Inglesa por Fases de Frecuencia Léxica",
    summary: "Un sistema de adquisición de inglés que integra tres elementos con sólido respaldo científico: la frecuencia léxica real del idioma (listas Zeltavia), la exposición mediante narrativa comprensible (Krashen) y el entrenamiento auditivo simultáneo a la lectura (codificación dual).",
    acronymComponents: [
      {
        letter: "Z",
        name: "Zipfian Frequency Mapping",
        what: "Vocabulario en bandas de 1.000 palabras según su frecuencia real de uso; decide qué se aprende primero.",
        science: "Zipf (1949); Davies y Gardner (2010)"
      },
      {
        letter: "E",
        name: "Explicit Rules after Noticing",
        what: "Una micro-regla breve, el «Aha», aparece después del cuento y nunca antes; nombra un patrón que ya has visto.",
        science: "Schmidt (1990)"
      },
      {
        letter: "L",
        name: "Lexical Coverage Control",
        what: "Cada cuento se verifica para que conozcas la gran mayoría de sus palabras (objetivo de 95-98% o más).",
        science: "Hu y Nation (2000); Schmitt, Jiang y Grabe (2011)"
      },
      {
        letter: "T",
        name: "Targeted Comprehensible Input",
        what: "Historias que saturan una gramática concreta con input ligeramente por encima de tu nivel (i+1).",
        science: "Krashen (1985)"
      },
      {
        letter: "A",
        name: "Audio-Visual Dual Coding",
        what: "Lectura con voz sintetizada simultánea y palabra resaltada, para usar vista y oído a la vez.",
        science: "Paivio (1986)"
      },
      {
        letter: "V",
        name: "Vocabulary Spaced Repetition",
        what: "Repaso a intervalos crecientes y reciclaje deliberado de la fase anterior en cada cuento.",
        science: "Ebbinghaus (1885/1913); Cepeda et al. (2006)"
      },
      {
        letter: "I",
        name: "Incremental Graded Narratives",
        what: "Un cuento breve por fase, de complejidad creciente, dentro del nivel de cada banda.",
        science: "Nakanishi (2015)"
      },
      {
        letter: "A",
        name: "Active Output",
        what: "Repetición en voz alta (shadowing) de las frases clave. Hoy con control de velocidad para afianzar fluidez motora.",
        science: "Swain (1985)"
      }
    ],
    scientificPillars: [
      {
        title: "Hipótesis del Input Comprensible (Krashen)",
        description: "La adquisición ocurre por exposición a mensajes comprensibles (i+1) y no por memorizar reglas abstractas. La gramática se asimila de forma natural entendiendo historias."
      },
      {
        title: "Frecuencia Léxica y Ley de Zipf (Zipf; Davies & Gardner)",
        description: "Pocas palabras concentran la gran mayoría del uso real (listas Zeltavia). El vocabulario y la sintaxis se ordenan por impacto comunicativo directo."
      },
      {
        title: "Umbral de Cobertura Léxica (Hu & Nation; van Zeeland & Schmitt)",
        description: "Comprender un texto exige reconocer el 98% de sus palabras. Cada cuento se calibra para garantizar ese umbral (98.3% a 100%) sin lagunas léxicas."
      },
      {
        title: "Hipótesis del Noticing (Schmidt)",
        description: "Aprender exige percibir conscientemente el patrón. La micro-regla «Aha» va siempre después del cuento: nombra y consolida lo que ya acabas de percibir."
      },
      {
        title: "Curva del Olvido y Espaciado (Ebbinghaus; Cepeda et al.)",
        description: "El recuerdo requiere repaso distribuido. Cada fase recicla de forma deliberada el vocabulario y las estructuras previas dentro del nuevo relato."
      },
      {
        title: "Producción Activa y Codificación Dual (Swain; Paivio)",
        description: "Escuchar y leer a la vez refuerza la memoria visual y fonológica. El shadowing (repetición en voz alta) afianza la dicción y fluidez motora."
      }
    ],
    architecture: {
      vocabTrack: "Entrenamiento auditivo puro: Escuchar y memorizar las 5.000 palabras más frecuentes en bandas de 1.000 palabras. Reconocerlas de oído antes de encontrarlas combinadas.",
      grammarTrack: "Pista Gramatical: Añade la gramática necesaria para combinar esas palabras en frases con sentido comunicativo real: esqueleto básico, pasado, futuro/modales, experiencias/present perfect, cambio de foco/condicionales, matices de énfasis."
    },
    usageSteps: [
      "Escucha y estudia la banda de frecuencia de la fase en la pista de vocabulario hasta reconocerla de oído.",
      "Consulta brevemente la ficha de prerrequisitos de 2 minutos (Fase 0 o notas iniciales).",
      "Escucha y lee el cuento de la fase con voz sintetizada (TTS) en el Lector Inmersivo, sin detenerte a diseccionar cada frase.",
      "Repasa las micro-reglas 'Aha' que siguen al cuento para hacer consciente el patrón.",
      "Practica shadowing (repetición en voz alta) con las frases clave marcadas, ajustando la velocidad de audio.",
      "Consolida con el filtro anti-traducción y avanza a la siguiente fase reciclada."
    ],
    scopeNotice: "El Método ZELTAVIA está diseñado para producir fluidez funcional de comprensión y conversación cotidiana (las ~5.000 palabras más usadas). Quedan fuera de alcance de forma deliberada el lenguaje legal/académico ultra formal y el subjuntivo literario arcaico."
  },
  en: {
    title: "The ZELTAVIA Method",
    subtitle: "Complete English Grammar Curriculum by Lexical Frequency Phases",
    summary: "An English acquisition framework grounded in cognitive science: real lexical frequency distributions (Zeltavia lists), targeted comprehensible narrative input (Krashen), and dual-coding auditory-visual alignment (Paivio).",
    acronymComponents: [
      {
        letter: "Z",
        name: "Zipfian Frequency Mapping",
        what: "Vocabulary organized in 1,000-word bands following real natural usage; dictates what to master first.",
        science: "Zipf (1949); Davies & Gardner (2010)"
      },
      {
        letter: "E",
        name: "Explicit Rules after Noticing",
        what: "A brief 'Aha' micro-rule appears strictly after reading the story; naming a pattern you have already processed.",
        science: "Schmidt (1990)"
      },
      {
        letter: "L",
        name: "Lexical Coverage Control",
        what: "Every graded story is algorithmically calibrated so you already know 95-98%+ of its tokens.",
        science: "Hu & Nation (2000); Schmitt, Jiang & Grabe (2011)"
      },
      {
        letter: "T",
        name: "Targeted Comprehensible Input",
        what: "Graded narratives that saturate specific grammar structures slightly above your level (i+1).",
        science: "Krashen (1985)"
      },
      {
        letter: "A",
        name: "Audio-Visual Dual Coding",
        what: "Synchronized synthesized voice playback with word tracking to stimulate ear and eye simultaneously.",
        science: "Paivio (1986)"
      },
      {
        letter: "V",
        name: "Vocabulary Spaced Repetition",
        what: "Expanding review intervals with deliberate recycling of preceding phases in each new story.",
        science: "Ebbinghaus (1885/1913); Cepeda et al. (2006)"
      },
      {
        letter: "I",
        name: "Incremental Graded Narratives",
        what: "A concise, engaging story per phase with increasing syntactical complexity calibrated to each frequency band.",
        science: "Nakanishi (2015)"
      },
      {
        letter: "A",
        name: "Active Output",
        what: "Out-loud speech shadowing of key sentences with adjustable playback rate to solidify motor fluency.",
        science: "Swain (1985)"
      }
    ],
    scientificPillars: [
      {
        title: "Comprehensible Input Hypothesis (Krashen)",
        description: "Language is acquired through exposure to meaningful, understandable messages (i+1) rather than rote grammatical drill memorization."
      },
      {
        title: "Lexical Frequency & Zipf's Law (Zipf; Davies & Gardner)",
        description: "A small fraction of words accounts for the vast majority of natural discourse. Vocabulary and syntax are sequenced by direct communicative return."
      },
      {
        title: "Lexical Coverage Threshold (Hu & Nation; van Zeeland & Schmitt)",
        description: "Text comprehension demands recognizing ~98% of running words. Each story is engineered to meet 98.3% - 100% lexical coverage."
      },
      {
        title: "The Noticing Hypothesis (Schmidt)",
        description: "Acquisition requires conscious awareness of linguistic form. The 'Aha' micro-rule appears after the story to codify what was intuitively noticed."
      },
      {
        title: "Forgetting Curve & Spaced Recycling (Ebbinghaus; Cepeda et al.)",
        description: "Long-term retention requires distributed retrieval. Each subsequent phase re-incorporates prior vocabulary into the narrative."
      },
      {
        title: "Active Output & Dual Coding (Swain; Paivio)",
        description: "Simultaneous audio and text builds robust mental traces. Shadowing aloud cements articulatory motor control and automaticity."
      }
    ],
    architecture: {
      vocabTrack: "Pure Auditory Training: Listen to and master the top 5,000 words in 1,000-word frequency bands by ear before combining them.",
      grammarTrack: "Grammar Core Track: Provides the structural scaffolding to assemble words into meaningful sentences: core clauses, past tense, modals/future, present perfect, conditionals, and voice shifts."
    },
    usageSteps: [
      "Listen to and master the phase's frequency band in the vocabulary track until recognized by ear.",
      "Check the 2-minute prerequisite sheet (Phase 0 or core concept cards).",
      "Listen and read along with the phase story using synthesized audio without stopping to over-analyze.",
      "Review the 'Aha' micro-rules following the story to anchor the grammatical patterns.",
      "Practice shadowing key marked sentences aloud, adjusting playback speed to your comfort.",
      "Check common interference errors with the Anti-Translation table and advance to the next phase."
    ],
    scopeNotice: "The ZELTAVIA Method targets communicative fluency and everyday spoken & written comprehension (~top 5,000 words). Highly archaic literary forms and hyper-formal legal jargon are deliberately excluded."
  },
  fr: {
    title: "La Méthode ZELTAVIA",
    subtitle: "Manuel Complet de Grammaire Anglaise par Phases de Fréquence Lexicale",
    summary: "Un système d'acquisition de l'anglais fondé sur la recherche cognitive : la fréquence lexicale réelle de la langue (listes Zeltavia), l'exposition par narration compréhensible (Krashen) et le double codage audio-visuel simultané (Paivio).",
    acronymComponents: [
      {
        letter: "Z",
        name: "Zipfian Frequency Mapping",
        what: "Vocabulaire organisé en bandes de 1 000 mots selon leur fréquence d'usage réel ; détermine ce qui est appris en priorité.",
        science: "Zipf (1949) ; Davies et Gardner (2010)"
      },
      {
        letter: "E",
        name: "Explicit Rules after Noticing",
        what: "Une micro-règle brève, l'« Aha », apparaît après l'histoire et jamais avant ; elle formalise un modèle déjà observé.",
        science: "Schmidt (1990)"
      },
      {
        letter: "L",
        name: "Lexical Coverage Control",
        what: "Chaque récit est calibré pour que vous connaissiez au moins 95 à 98 % des mots employés.",
        science: "Hu et Nation (2000) ; Schmitt, Jiang et Grabe (2011)"
      },
      {
        letter: "T",
        name: "Targeted Comprehensible Input",
        what: "Des récits saturant une structure grammaticale précise avec un apport légèrement au-dessus de votre niveau (i+1).",
        science: "Krashen (1985)"
      },
      {
        letter: "A",
        name: "Audio-Visual Dual Coding",
        what: "Lecture accompagnée d'une voix de synthèse et mot surligné pour mobiliser l'œil et l'oreille en synergie.",
        science: "Paivio (1986)"
      },
      {
        letter: "V",
        name: "Vocabulary Spaced Repetition",
        what: "Répétition espacée avec recyclage systématique des structures et mots de la phase précédente.",
        science: "Ebbinghaus (1885/1913) ; Cepeda et al. (2006)"
      },
      {
        letter: "I",
        name: "Incremental Graded Narratives",
        what: "Un conte court par phase, à complexité progressive, adapté au niveau de chaque bande lexicale.",
        science: "Nakanishi (2015)"
      },
      {
        letter: "A",
        name: "Active Output",
        what: "Répétition orale à voix haute (shadowing) des phrases clés avec régulateur de vitesse pour fluidifier l'élocution.",
        science: "Swain (1985)"
      }
    ],
    scientificPillars: [
      {
        title: "Hypothèse de l'Input Compréhensible (Krashen)",
        description: "L'acquisition s'opère par exposition à des messages porteurs de sens (i+1) et non par mémorisation de règles abstraites isolées."
      },
      {
        title: "Loi de Zipf et Fréquence Lexicale (Zipf ; Davies & Gardner)",
        description: "Un noyau réduit de mots couvre la grande majorité des échanges réels. Vocabulaire et syntaxe sont ordonnés par impact direct."
      },
      {
        title: "Seuil de Couverture Lexicale (Hu & Nation ; van Zeeland & Schmitt)",
        description: "Comprendre un texte exige d'en reconnaître au moins 98 % des termes. Chaque histoire garantit un taux de 98,3 % à 100 %."
      },
      {
        title: "Hypothèse du Noticing (Schmidt)",
        description: "Apprendre nécessite une prise de conscience du modèle linguistique. La micro-règle « Aha » intervient après l'histoire."
      },
      {
        title: "Courbe de l'Oubli et Répétition Espacée (Ebbinghaus ; Cepeda et al.)",
        description: "La rétention durable exige une réactivation espacée. Chaque phase réinvestit les acquis antérieurs dans le récit suivant."
      },
      {
        title: "Production Active et Double Codage (Swain ; Paivio)",
        description: "Écouter et lire simultanément renforce la mémoire visuelle et auditive. Le shadowing consolide la mémoire motrice."
      }
    ],
    architecture: {
      vocabTrack: "Piste Vocabulaire : Écouter et reconnaître d'oreille les 5 000 mots les plus fréquents en 5 bandes de 1 000 mots.",
      grammarTrack: "Piste Grammaticale : Fournit la syntaxe indispensable pour combiner ces mots en phrases authentiques : squelette de base, passé, futurs/modaux, present perfect, conditionnels et nuances."
    },
    usageSteps: [
      "Écoutez et assimilez la bande lexicale de la phase sur la piste audio jusqu'à la reconnaître d'oreille.",
      "Consultez la fiche préalable de 2 minutes (Fase 0 ou notions clés).",
      "Écoutez et lisez le récit de la phase avec la voix de synthèse sans bloquer sur chaque terme.",
      "Examinez les micro-règles « Aha » qui suivent le texte pour conscientiser le modèle.",
      "Pratiquez le shadowing à voix haute sur les phrases clés en modulant la vitesse.",
      "Vérifiez les erreurs courantes avec le filtre anti-traduction et passez à la phase suivante."
    ],
    scopeNotice: "Le Méthode ZELTAVIA cible une aisance fonctionnelle orale et écrite du quotidien (~5 000 mots majeurs). Le vocabulaire juridique hyper-formel et le subjonctif littéraire archaïque sont délibérément exclus."
  },
  de: {
    title: "Die ZELTAVIA-Methode",
    subtitle: "Vollständiges englisches Grammatik-Curriculum nach lexikalischen Frequenzphasen",
    summary: "Ein wissenschaftlich fundiertes System zum Spracherwerb des Englischen: echte lexikalische Nutzungshäufigkeit (Zeltavia-Listen), verständlicher narrativer Input (Krashen) und simultanes audio-visuelles Dual-Coding (Paivio).",
    acronymComponents: [
      {
        letter: "Z",
        name: "Zipfian Frequency Mapping",
        what: "Wortschatz in Bändern zu je 1.000 Wörtern nach realer Häufigkeit geordnet; bestimmt, was zuerst gelernt wird.",
        science: "Zipf (1949); Davies & Gardner (2010)"
      },
      {
        letter: "E",
        name: "Explicit Rules after Noticing",
        what: "Eine kurze 'Aha'-Mikroregel erscheint erst nach der Geschichte; sie benennt ein Muster, das du bereits wahrgenommen hast.",
        science: "Schmidt (1990)"
      },
      {
        letter: "L",
        name: "Lexical Coverage Control",
        what: "Jede Geschichte ist so kalibriert, dass du mindestens 95–98 % aller Wörter bereits kennst.",
        science: "Hu & Nation (2000); Schmitt, Jiang & Grabe (2011)"
      },
      {
        letter: "T",
        name: "Targeted Comprehensible Input",
        what: "Geschichten, die gezielt eine grammatische Struktur mit leicht anspruchsvollem Input sättigen (i+1).",
        science: "Krashen (1985)"
      },
      {
        letter: "A",
        name: "Audio-Visual Dual Coding",
        what: "Simultanes Lesen mit synthetischer Sprachausgabe und Worterkennung zur synchronen Reizung von Auge und Ohr.",
        science: "Paivio (1986)"
      },
      {
        letter: "V",
        name: "Vocabulary Spaced Repetition",
        what: "Wiederholung in wachsenden Intervallen und gezieltes Recycling vorangehender Phasen in jeder neuen Story.",
        science: "Ebbinghaus (1885/1913); Cepeda et al. (2006)"
      },
      {
        letter: "I",
        name: "Incremental Graded Narratives",
        what: "Eine kurze, stufenweise strukturierte Geschichte pro Phase im Niveau des jeweiligen Frequenzbandes.",
        science: "Nakanishi (2015)"
      },
      {
        letter: "A",
        name: "Active Output",
        what: "Lautes Nachsprechen (Shadowing) markierter Schlüsselsätze mit Geschwindigkeitskontrolle für motorische Sprachflüssigkeit.",
        science: "Swain (1985)"
      }
    ],
    scientificPillars: [
      {
        title: "Hypothese des verständlichen Inputs (Krashen)",
        description: "Spracherwerb geschieht durch bedeutungsvollen, verständlichen Input (i+1) und nicht durch das Auswendiglernen isolierter Regeln."
      },
      {
        title: "Lexikalische Frequenz & Zipfsches Gesetz (Zipf; Davies & Gardner)",
        description: "Wenige Wörter decken den Großteil der tatsächlichen Kommunikation ab. Wortschatz und Syntax folgen direktem Kommunikationswert."
      },
      {
        title: "Schwellenwert der Wortschatzabdeckung (Hu & Nation; van Zeeland & Schmitt)",
        description: "Textverständnis verlangt das Erkennen von ca. 98 % der Wörter. Jede Zeltavia-Geschichte garantiert 98,3 % bis 100 % Abdeckung."
      },
      {
        title: "Noticing-Hypothese (Schmidt)",
        description: "Lernen erfordert bewusstes Wahrnehmen der sprachlichen Form. Die 'Aha'-Mikroregel folgt der Geschichte, um das Erkannte zu verankern."
      },
      {
        title: "Vergessenskurve und Spaced Repetition (Ebbinghaus; Cepeda et al.)",
        description: "Dauerhaftes Behalten verlangt verteilte Wiederholung. Jede Phase greift vorherigen Wortschatz organisch wieder auf."
      },
      {
        title: "Aktive Sprachproduktion & Dual Coding (Swain; Paivio)",
        description: "Gleichzeitiges Hören und Lesen festigt Gedächtnisspuren. Lautes Shadowing schult Sprechmotorik und Aussprache."
      }
    ],
    architecture: {
      vocabTrack: "Reines Hörtraining: Hören und Verinnerlichen der 5.000 häufigsten Wörter in Bändern zu je 1.000 Wörtern vor dem freien Satzbau.",
      grammarTrack: "Grammatischer Kern: Vermittelt das Gerüst zum Bilden echter Sätze: Grundbau, Vergangenheit, Futur/Modale, Present Perfect, Konditionale und Nuancen."
    },
    usageSteps: [
      "Höre und übe das Frequenzband der Phase auf der Wortschatzspur, bis du die Wörter flüssig nach Gehör erkennst.",
      "Lies die 2-minütige Vorbereitungsübersicht (Phase 0 oder Kernkonzepte).",
      "Höre und lies die Geschichte der Phase mit Sprachausgabe, ohne jedes Detail krampfhaft zu zergliedern.",
      "Prüfe die anschließenden 'Aha'-Mikroregeln, um das grammatische Muster bewusst zu machen.",
      "Übe lautes Shadowing der markierten Schlüsselsätze bei passender Audio-Geschwindigkeit.",
      "Festige dein Wissen mit der Anti-Übersetzungs-Tabelle und gehe zur nächsten Phase über."
    ],
    scopeNotice: "Die ZELTAVIA-Methode zielt auf praxisnahe Sprach- und Lesekompetenz im Alltag (~5.000 Kernwörter). Juristische Fachsprache und veraltete literarische Formen werden bewusst ausgeklammert."
  }
};
