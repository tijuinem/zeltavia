const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const appReadDataDir = path.join(rootDir, 'public/app_read/data');
const appSpeakDataDir = path.join(rootDir, 'public/app_speak/data');
const translationsDir = path.join(appReadDataDir, 'translations');

console.log("Loading downloaded zeltavia_banda JSON files...");

const rawBands = {};
for (let b = 1; b <= 5; b++) {
  const filePath = `/tmp/zeltavia_banda_${b}.json`;
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${filePath} does not exist`);
  }
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  rawBands[b] = content;
  console.log(`Band ${b}: loaded ${content.length} words.`);
  
  // Also copy raw JSON file to public/app_read/data/zeltavia_banda_${b}.json
  fs.writeFileSync(path.join(appReadDataDir, `zeltavia_banda_${b}.json`), JSON.stringify(content, null, 2), 'utf8');
}

// 1. Update band_words.txt files
for (let b = 1; b <= 5; b++) {
  const words = rawBands[b].map(item => item.en.trim());
  fs.writeFileSync(path.join(appReadDataDir, `band${b}_words.txt`), words.join('\n'), 'utf8');
  console.log(`Wrote band${b}_words.txt (${words.length} lines)`);
}

// 2. Update public/app_read/data/translations/band[1-5].json
for (let b = 1; b <= 5; b++) {
  const transMap = {};
  for (const item of rawBands[b]) {
    transMap[item.en.trim()] = (item.translations && item.translations.es) ? item.translations.es.trim() : "";
  }
  fs.writeFileSync(path.join(translationsDir, `band${b}.json`), JSON.stringify(transMap, null, 2), 'utf8');
  console.log(`Wrote translations/band${b}.json (${Object.keys(transMap).length} keys)`);
}

// 3. Update public/app_read/data/frequency_words.js
const frequencyBands = {};
for (let b = 1; b <= 5; b++) {
  frequencyBands[b] = rawBands[b].map(item => ({
    en: item.en.trim(),
    es: (item.translations && item.translations.es) ? item.translations.es.trim() : ""
  }));
}

const freqOutput = `// ZELTAVIA Read — Bandas Completas de Frecuencia (1.000 palabras por banda)
// Con traducciones oficiales completas en español
var FREQUENCY_BANDS = ${JSON.stringify(frequencyBands, null, 2)};

if (typeof window !== 'undefined') {
  window.FREQUENCY_BANDS = FREQUENCY_BANDS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREQUENCY_BANDS;
}
`;
fs.writeFileSync(path.join(appReadDataDir, 'frequency_words.js'), freqOutput, 'utf8');
console.log(`Wrote frequency_words.js`);

// 4. Update public/app_read/data/dictionary.js
const masterDict = {};
try {
  const existingDictCode = fs.readFileSync(path.join(appReadDataDir, 'dictionary.js'), 'utf8');
  eval(existingDictCode);
  if (typeof DICTIONARY_DATA !== 'undefined') {
    Object.assign(masterDict, DICTIONARY_DATA);
  }
} catch (e) {
  console.warn("Could not read existing DICTIONARY_DATA, starting fresh:", e.message);
}

for (let b = 1; b <= 5; b++) {
  for (const item of rawBands[b]) {
    const wordKey = item.en.toLowerCase().trim();
    const es = (item.translations && item.translations.es) ? item.translations.es.trim() : "";
    masterDict[wordKey] = es;
  }
}

const dictOutput = `// Diccionario de traducción instantánea offline para ZELTAVIA Read
// Contiene las 5.000 palabras más frecuentes en inglés del curso
var DICTIONARY_DATA = ${JSON.stringify(masterDict, null, 2)};

if (typeof window !== 'undefined') {
  window.DICTIONARY_DATA = DICTIONARY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DICTIONARY_DATA;
}
`;
fs.writeFileSync(path.join(appReadDataDir, 'dictionary.js'), dictOutput, 'utf8');
console.log(`Wrote dictionary.js with ${Object.keys(masterDict).length} entries.`);

// 5. Update public/app_speak/data/words.js
let existingPhases = {};
try {
  const existingSpeakWordsCode = fs.readFileSync(path.join(appSpeakDataDir, 'words.js'), 'utf8');
  const m = existingSpeakWordsCode.match(/(?:const|var)\s+WORDS_DATA\s*=\s*({[\s\S]*?});\s*if/);
  if (m) {
    const parsed = eval('(' + m[1] + ')');
    if (parsed.phases) existingPhases = parsed.phases;
  }
} catch (e) {
  console.warn("Could not parse existing phases from words.js:", e.message);
}

const speakBands = {};
for (let b = 1; b <= 5; b++) {
  speakBands[b] = rawBands[b].map(item => ({
    word: item.en.trim(),
    translation: (item.translations && item.translations.es) ? item.translations.es.trim() : "",
    example: (item.example && item.example.en) ? item.example.en.trim() : (typeof item.example === 'string' ? item.example.trim() : "")
  }));
}

const speakWordsData = {
  bands: speakBands,
  phases: existingPhases,
  totalWords: 5000
};

const speakOutput = `// ZELTAVIA Speak — Vocabulario Oficial de las 5.000 Palabras Frecuentes del Curso
// Incluye las 5 Bandas Oficiales (1.000 palabras cada una) y Fases del Curso
var WORDS_DATA = ${JSON.stringify(speakWordsData, null, 2)};

if (typeof window !== 'undefined') {
  window.WORDS_DATA = WORDS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORDS_DATA;
}
`;
fs.writeFileSync(path.join(appSpeakDataDir, 'words.js'), speakOutput, 'utf8');
console.log(`Wrote public/app_speak/data/words.js with 5 bands (1,000 words each).`);

console.log("All 5 word bands successfully updated across Zeltavia!");
