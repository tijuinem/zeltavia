export interface ThematicWord {
  word: string;
  translation: string;
  context?: string;
}

export interface AhaRule {
  number: number;
  title: string;
  description: string;
  examples: string[];
  keyInsight?: string;
}

export interface AntiTranslationError {
  typicalError: string;
  correctForm: string;
  explanation: string;
  phaseId: number;
}

export interface StorySentence {
  text: string;
  translation?: string;
}

export interface StoryData {
  id: string;
  phaseId: number;
  title: string;
  tokensCount: number;
  lexicalCoverage: string;
  description: string;
  paragraphs: string[];
  keySentencesForShadowing: string[];
}

export interface PhaseData {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  frequencyBand: string;
  prerequisites: {
    summary: string;
    details: string[];
  };
  thematicVocabulary: ThematicWord[];
  lexicalCoverageStats: {
    wordCount: number;
    coveragePercent: number;
    outOfControlTokens: string;
    benchmarkNote: string;
  };
  storyMeta: {
    id: string;
    title: string;
    estimatedReadTime: string;
    focus: string;
  };
  ahaRules: AhaRule[];
  chunks: {
    phrase: string;
    meaning: string;
    note?: string;
  }[];
  antiTranslation: {
    rule: string;
    wrong: string;
    right: string;
    why: string;
  }[];
  repasoCumplido?: string;
  repasoObligatorio: string;
}

export interface VocabWord {
  id: string;
  en: string;
  es: string;
  band: string;
  example: string;
}
