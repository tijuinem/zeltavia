import { InterfaceLanguage } from './interfaceTranslations';
import { PhaseData } from '../types/course';
import { PHASES_DATA } from '../data/courseData';

// Helper to deeply clone and localize phases
function buildLocalizedPhases(lang: InterfaceLanguage): PhaseData[] {
  if (lang === 'es') {
    return PHASES_DATA;
  }

  // Deep clone Spanish baseline
  const phases: PhaseData[] = JSON.parse(JSON.stringify(PHASES_DATA));

  if (lang === 'en') {
    // English (Pedagogical descriptions for international/English learners)
    phases[0].title = "Phase 1: The Language Skeleton";
    phases[0].subtitle = "Simple Present, To Be, questions, articles, and foundational syntax";
    phases[0].frequencyBand = "Top 0 – 1,000 most frequent words";
    phases[0].prerequisites.summary = "Review Phase 0 (pronouns, verb to be, and third-person -s rule).";
    phases[0].prerequisites.details = [
      "The subject is never omitted in English.",
      "Forms of To Be: am / are / is.",
      "Third person singular adds -s in the affirmative simple present."
    ];
    phases[0].storyMeta.estimatedReadTime = "4 minutes";
    phases[0].storyMeta.focus = "Daily routines of Tom and Anna, contrasting simple present and present continuous.";
    phases[0].ahaRules[0].title = "The Subject Never Disappears";
    phases[0].ahaRules[0].description = "Unlike pro-drop languages, English always requires an overt subject pronoun even for weather or time.";
    phases[0].ahaRules[0].keyInsight = "'It' carries no semantic meaning here; it strictly fills the mandatory English subject slot.";
    phases[0].ahaRules[1].title = "To Be: is / are / was / were";
    phases[0].ahaRules[1].description = "One core verb with four fundamental faces: he/she/it → is; you/we/they → are. Past: is → was, are → were.";
    phases[0].ahaRules[2].title = "Third-Person Singular '-s'";
    phases[0].ahaRules[2].description = "With he/she/it in affirmative simple present, the verb strictly adds -s. With I/you/we/they it stays in base form.";
    phases[0].ahaRules[3].title = "Simple Present vs. Present Continuous";
    phases[0].ahaRules[3].description = "'He teaches children' marks habitual routine or profession. 'He is making coffee' describes the action happening right now.";
    phases[0].ahaRules[4].title = "Do / Does: Pure Syntactic Operators";
    phases[0].ahaRules[4].description = "In questions and negatives, the lexical verb stays in bare form. Do/does acts as the tense and question carrier.";
    phases[0].repasoObligatorio = "Continuous review of the top 1,000 frequency band and simple present sentence patterns.";

    // Phase 2 EN
    phases[1].title = "Phase 2: Narrating the Past";
    phases[1].subtitle = "Past simple, regular -ed, high-frequency irregulars, past continuous & used to";
    phases[1].frequencyBand = "Top 1,001 – 2,000 most frequent words";
    phases[1].prerequisites.summary = "Mastery of Phase 1 (mandatory subject, to be, simple present questions with do/does).";
    phases[1].storyMeta.estimatedReadTime = "5 minutes";
    phases[1].storyMeta.focus = "Tom and Anna's mountain trip and finding Rex, contrasting past simple and continuous.";
    phases[1].ahaRules[0].title = "The Universal Past with 'Did'";
    phases[0].ahaRules[0].description = "'Did' handles all persons (I, you, he, she, we, they) in past questions and negatives without changing form.";
    phases[1].repasoObligatorio = "Maintain recycling of Phase 1 simple present while narrating connected events in the past.";

    // Phase 3 EN
    phases[2].title = "Phase 3: The Future & Modals";
    phases[2].subtitle = "Modal scale (can/could/must/should), 3 futures (will/going to/present continuous) & First Conditional";
    phases[2].frequencyBand = "Top 2,001 – 3,000 most frequent words";
    phases[2].storyMeta.estimatedReadTime = "5 minutes";
    phases[2].storyMeta.focus = "Community discussion and decision-making on town changes and Laura's project.";

    // Phase 4 EN
    phases[3].title = "Phase 4: Connecting Experiences";
    phases[3].subtitle = "Present Perfect with present relevance, participles, verb patterns (gerund/infinitive) & phrasal verbs";
    phases[3].frequencyBand = "Top 3,001 – 4,000 most frequent words";
    phases[3].storyMeta.estimatedReadTime = "6 minutes";

    // Phase 5 EN
    phases[4].title = "Phase 5: Shifting the Focus";
    phases[4].subtitle = "Past Perfect, formal would, passive voice, reported speech, and 2nd/3rd conditionals";
    phases[4].frequencyBand = "Top 4,001 – 5,000 most frequent words";
    phases[4].storyMeta.estimatedReadTime = "6 minutes";

    // Phase 6 EN
    phases[5].title = "Phase 6: Mastery & Natural Fluency";
    phases[5].subtitle = "Cleft sentences (it/what), emphatic inversion, rhythm, punctuation, and native idiomaticity";
    phases[5].frequencyBand = "Complete 5,000 Word Lexical Integration";
    phases[5].storyMeta.estimatedReadTime = "7 minutes";
  } else if (lang === 'fr') {
    // French Translations
    phases[0].title = "Phase 1 : Le Squelette de la Langue";
    phases[0].subtitle = "Présent simple, To Be, questions, articles et structures fondamentales";
    phases[0].frequencyBand = "Top 0 – 1 000 mots les plus fréquents";
    phases[0].prerequisites.summary = "Avoir révisé la Phase 0 (pronoms sujets, verbe to be au présent et la règle du -s).";
    phases[0].prerequisites.details = [
      "Le sujet n'est jamais sous-entendu en anglais (contrairement à d'autres langues).",
      "Formes de To Be : am / are / is.",
      "La 3e personne du singulier prend obligatoirement un -s au présent affirmatif."
    ];
    phases[0].thematicVocabulary.forEach(w => {
      const frMap: Record<string, string> = {
        kitchen: "cuisine",
        "bedroom(s)": "chambre(s)",
        bathroom: "salle de bain",
        garden: "jardin",
        coffee: "café",
        bread: "pain",
        lunch: "déjeuner",
        dinner: "dîner",
        rice: "riz",
        "vegetable(s)": "légume(s)",
        meat: "viande",
        neighbor: "voisin(e)",
        "shop(s)": "magasin(s)",
        quiet: "calme / tranquille",
        tired: "fatigué(e)",
        sleep: "dormir",
        men: "hommes (pluriel de man)",
        warm: "chaleureux / accueillant",
        smile: "sourire",
        hello: "bonjour",
        "flower(s)": "fleur(s)",
        yesterday: "hier",
        weather: "temps / météo",
        tomorrow: "demain",
        "Monday(s)": "lundi(s)"
      };
      if (frMap[w.word]) w.translation = frMap[w.word];
    });
    phases[0].storyMeta.estimatedReadTime = "4 minutes";
    phases[0].storyMeta.focus = "Routines quotidiennes de Tom et Anna, contrastant présent simple et continu.";
    phases[0].ahaRules[0].title = "Le sujet ne disparaît jamais";
    phases[0].ahaRules[0].description = "En anglais, il faut systématiquement un sujet formel 'it', même pour la météo ou l'heure.";
    phases[0].ahaRules[0].keyInsight = "'It' ne se traduit pas littéralement, il occupe la case obligatoire du sujet anglais.";
    phases[0].ahaRules[1].title = "To be : is / are / was / were";
    phases[0].ahaRules[1].description = "Un verbe pivot avec quatre formes clés : présent avec he/she/it → is ; avec you/we/they → are. Passé : was / were.";
    phases[0].ahaRules[2].title = "Le -s de la 3e personne";
    phases[0].ahaRules[2].description = "Avec he/she/it au présent simple affirmatif, le verbe prend toujours -s. Avec I/you/we/they, il reste à sa base.";
    phases[0].ahaRules[3].title = "Présent simple vs Présent continu";
    phases[0].ahaRules[3].description = "'He teaches' exprime une habitude ou profession permanente. 'He is making coffee' décrit ce qui a lieu en cet instant.";
    phases[0].ahaRules[4].title = "Do / Does : opérateurs de question et négation";
    phases[0].ahaRules[4].description = "En question et négation, le verbe principal garde sa forme nue. Do/does porte la marque grammaticale.";
    phases[0].repasoObligatorio = "Maintien de la bande des 1 000 premiers mots et des structures du présent.";

    // Phase 2 FR
    phases[1].title = "Phase 2 : Raconter le Passé";
    phases[1].subtitle = "Past simple, réguliers en -ed, irréguliers fréquents, passé continu et used to";
    phases[1].frequencyBand = "Top 1 001 – 2 000 mots les plus fréquents";
    phases[1].prerequisites.summary = "Maîtrise de la Phase 1 (sujet obligatoire, to be, questions avec do/does).";
    phases[1].storyMeta.estimatedReadTime = "5 minutes";
    phases[1].storyMeta.focus = "Excursion en montagne de Tom et Anna et sauvetage de Rex.";
    phases[1].ahaRules[0].title = "L'auxiliaire universel 'Did'";
    phases[1].ahaRules[0].description = "'Did' s'applique à toutes les personnes (I, you, he, she, we, they) sans variation de forme.";

    // Phase 3 FR
    phases[2].title = "Phase 3 : Le Futur et les Modaux";
    phases[2].subtitle = "Échelle des modaux, les 3 futurs anglais (will/going to/présent continu) et premier conditionnel";
    phases[2].frequencyBand = "Top 2 001 – 3 000 mots les plus fréquents";
    phases[2].storyMeta.estimatedReadTime = "5 minutes";

    // Phase 4 FR
    phases[3].title = "Phase 4 : Relier les Expériences";
    phases[3].subtitle = "Present Perfect et lien avec le présent, participes, verbes prépositionnels et phrasal verbs";
    phases[3].frequencyBand = "Top 3 001 – 4 000 mots les plus fréquents";
    phases[3].storyMeta.estimatedReadTime = "6 minutes";

    // Phase 5 FR
    phases[4].title = "Phase 5 : Changer la Perspective";
    phases[4].subtitle = "Past Perfect, would formel, voix passive, discours indirect et conditionnels 2 et 3";
    phases[4].frequencyBand = "Top 4 001 – 5 000 mots les plus fréquents";
    phases[4].storyMeta.estimatedReadTime = "6 minutes";

    // Phase 6 FR
    phases[5].title = "Phase 6 : Maîtrise et Aisance Native";
    phases[5].subtitle = "Phrases clivées (it/what), inversion emphatique, rythme, ponctuation et idiomes naturels";
    phases[5].frequencyBand = "Intégration Complète des 5 000 Mots";
    phases[5].storyMeta.estimatedReadTime = "7 minutes";
  } else if (lang === 'de') {
    // German Translations
    phases[0].title = "Phase 1: Das Sprachgerüst";
    phases[0].subtitle = "Simple Present, To Be, Fragesätze, Artikel und grundlegende Satzstruktur";
    phases[0].frequencyBand = "Top 0 – 1.000 häufigste Wörter";
    phases[0].prerequisites.summary = "Phase 0 wiederholt (Subjektpronomen, To Be im Präsens und die 3.-Person-s-Regel).";
    phases[0].prerequisites.details = [
      "Das Subjekt wird im Englischen niemals weggelassen.",
      "Formen von To Be: am / are / is.",
      "Die 3. Person Einzahl erhält stets ein -s im bejahten Simple Present."
    ];
    phases[0].thematicVocabulary.forEach(w => {
      const deMap: Record<string, string> = {
        kitchen: "Küche",
        "bedroom(s)": "Schlafzimmer",
        bathroom: "Badezimmer",
        garden: "Garten",
        coffee: "Kaffee",
        bread: "Brot",
        lunch: "Mittagessen",
        dinner: "Abendessen",
        rice: "Reis",
        "vegetable(s)": "Gemüse",
        meat: "Fleisch",
        neighbor: "Nachbar(in)",
        "shop(s)": "Geschäft(e)",
        quiet: "ruhig / still",
        tired: "müde",
        sleep: "schlafen",
        men: "Männer (Mehrzahl von man)",
        warm: "warm / gemütlich",
        smile: "Lächeln / lächeln",
        hello: "Hallo",
        "flower(s)": "Blume(n)",
        yesterday: "gestern",
        weather: "Wetter",
        tomorrow: "morgen",
        "Monday(s)": "Montag(e)"
      };
      if (deMap[w.word]) w.translation = deMap[w.word];
    });
    phases[0].storyMeta.estimatedReadTime = "4 Minuten";
    phases[0].storyMeta.focus = "Tagesablauf von Tom und Anna im Kontrast von Simple Present und Present Continuous.";
    phases[0].ahaRules[0].title = "Das Subjekt verschwindet nie";
    phases[0].ahaRules[0].description = "Das unpersönliche 'it' ist im Englischen für Wetter und Uhrzeit zwingend vorgeschrieben.";
    phases[0].ahaRules[0].keyInsight = "'It' füllt zwingend die planmäßige Subjektposition im englischen Satz.";
    phases[0].ahaRules[1].title = "To be: is / are / was / were";
    phases[0].ahaRules[1].description = "Ein Kernverb mit vier Hauptformen: he/she/it → is; you/we/they → are. Vergangenheit: was / were.";
    phases[0].ahaRules[2].title = "Das Endungs-s der 3. Person";
    phases[0].ahaRules[2].description = "Bei he/she/it im bejahten Simple Present erhält das Verb stets ein -s. Bei I/you/we/they bleibt es in der Grundform.";
    phases[0].ahaRules[3].title = "Simple Present vs. Present Continuous";
    phases[0].ahaRules[3].description = "'He teaches' steht für Beruf oder Gewohnheit. 'He is making coffee' beschreibt den jetzigen Augenblick.";
    phases[0].ahaRules[4].title = "Do / Does: Hilfsverben für Fragen und Verneinung";
    phases[0].ahaRules[4].description = "In Fragen und Verneinungen bleibt das Vollverb im Infinitiv. Do/does übernimmt die grammatische Funktion.";
    phases[0].repasoObligatorio = "Festigung des 1.000-Wort-Bandes und der grundlegenden Satzstrukturen.";

    // Phase 2 DE
    phases[1].title = "Phase 2: Vergangenheit erzählen";
    phases[1].subtitle = "Past Simple, reguläres -ed, unregelmäßige Verben, Past Continuous und used to";
    phases[1].frequencyBand = "Top 1.001 – 2.000 häufigste Wörter";
    phases[1].prerequisites.summary = "Beherrschung von Phase 1 (festes Subjekt, to be, Fragen mit do/does).";
    phases[1].storyMeta.estimatedReadTime = "5 Minuten";
    phases[1].storyMeta.focus = "Bergwanderung von Tom und Anna und Rettung des Hundes Rex.";
    phases[1].ahaRules[0].title = "Das universelle Vergangenheits-Hilfsverb 'Did'";
    phases[1].ahaRules[0].description = "'Did' gilt einheitlich für alle Personen (I, you, he, she, we, they) ohne Formänderung.";

    // Phase 3 DE
    phases[2].title = "Phase 3: Zukunft und Modalverben";
    phases[2].subtitle = "Modalskala, die 3 Zukunftsformen (will/going to/Present Continuous) und First Conditional";
    phases[2].frequencyBand = "Top 2.001 – 3.000 häufigste Wörter";
    phases[2].storyMeta.estimatedReadTime = "5 Minuten";

    // Phase 4 DE
    phases[3].title = "Phase 4: Erfahrungen verbinden";
    phases[3].subtitle = "Present Perfect mit Gegenwartsbezug, Partizipien, Verb-Patterns und Phrasal Verbs";
    phases[3].frequencyBand = "Top 3.001 – 4.000 häufigste Wörter";
    phases[3].storyMeta.estimatedReadTime = "6 Minuten";

    // Phase 5 DE
    phases[4].title = "Phase 5: Den Fokus verschieben";
    phases[4].subtitle = "Past Perfect, formelles would, Passiv, indirekte Rede und 2./3. Konditional";
    phases[4].frequencyBand = "Top 4.001 – 5.000 häufigste Wörter";
    phases[4].storyMeta.estimatedReadTime = "6 Minuten";

    // Phase 6 DE
    phases[5].title = "Phase 6: Feinschliff und native Sprachflüssigkeit";
    phases[5].subtitle = "Spaltsätze (it/what), emphatische Inversion, Rhythmus, Zeichensetzung und idiomatische Wendungen";
    phases[5].frequencyBand = "Vollständige Integration der 5.000 Wörter";
    phases[5].storyMeta.estimatedReadTime = "7 Minuten";
  }

  return phases;
}

export function getPhasesData(lang: InterfaceLanguage): PhaseData[] {
  return buildLocalizedPhases(lang);
}
