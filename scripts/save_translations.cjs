// Script to compile the complete 5000 translations into public/app_read/data/
const fs = require('fs');
const path = require('path');

const rawTranslationsJs = fs.readFileSync(path.join(__dirname, 'raw_user_translations.js'), 'utf8');

// Evaluate the translations
eval(rawTranslationsJs);

console.log("Banda 1 keys:", Object.keys(TRADUCCIONES_BANDA_1).length);
console.log("Banda 2 keys:", Object.keys(TRADUCCIONES_BANDA_2).length);
console.log("Banda 3 keys:", Object.keys(TRADUCCIONES_BANDA_3).length);
console.log("Banda 4 keys:", Object.keys(TRADUCCIONES_BANDA_4).length);
console.log("Banda 5 keys:", Object.keys(TRADUCCIONES_BANDA_5).length);

const outDir = path.join(__dirname, '../public/app_read/data');

// 1. Save traducciones_bandas.js
fs.writeFileSync(path.join(outDir, 'traducciones_bandas.js'), rawTranslationsJs + `
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TRADUCCIONES_BANDA_1,
    TRADUCCIONES_BANDA_2,
    TRADUCCIONES_BANDA_3,
    TRADUCCIONES_BANDA_4,
    TRADUCCIONES_BANDA_5
  };
}
`, 'utf8');

// 2. Read the ordered 5000 English words
const band1En = fs.readFileSync(path.join(outDir, 'band1_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band2En = fs.readFileSync(path.join(outDir, 'band2_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band3En = fs.readFileSync(path.join(outDir, 'band3_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band4En = fs.readFileSync(path.join(outDir, 'band4_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band5En = fs.readFileSync(path.join(outDir, 'band5_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);

function buildBandWithTranslations(words, transObj) {
  // Create lowercase lookup map
  const lowerMap = {};
  for (const k in transObj) {
    lowerMap[k.toLowerCase().trim()] = transObj[k];
  }

  return words.map(w => {
    const clean = w.toLowerCase().trim();
    const es = transObj[w] || lowerMap[clean] || "";
    return { en: w, es: es };
  });
}

const frequencyBands = {
  1: buildBandWithTranslations(band1En, TRADUCCIONES_BANDA_1),
  2: buildBandWithTranslations(band2En, TRADUCCIONES_BANDA_2),
  3: buildBandWithTranslations(band3En, TRADUCCIONES_BANDA_3),
  4: buildBandWithTranslations(band4En, TRADUCCIONES_BANDA_4),
  5: buildBandWithTranslations(band5En, TRADUCCIONES_BANDA_5)
};

// Check coverage
for (let b = 1; b <= 5; b++) {
  const missing = frequencyBands[b].filter(item => !item.es);
  console.log(`Banda ${b}: Total=${frequencyBands[b].length}, Translated=${frequencyBands[b].length - missing.length}, Missing=${missing.length}`);
  if (missing.length > 0) {
    console.log(`Sample missing in Banda ${b}:`, missing.slice(0, 5).map(m => m.en));
  }
}

// 3. Write frequency_words.js
const freqOutput = `// ZELTAVIA Read — Bandas Completas de Frecuencia (1.000 palabras por banda)
// Con traducciones oficiales completas en español
const FREQUENCY_BANDS = ${JSON.stringify(frequencyBands, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREQUENCY_BANDS;
}
`;
fs.writeFileSync(path.join(outDir, 'frequency_words.js'), freqOutput, 'utf8');

// 4. Update dictionary.js with all 5,000 words
const masterDictionary = {};
// Read existing dictionary
try {
  const existingDictCode = fs.readFileSync(path.join(outDir, 'dictionary.js'), 'utf8');
  eval(existingDictCode);
  if (typeof DICTIONARY_DATA !== 'undefined') {
    Object.assign(masterDictionary, DICTIONARY_DATA);
  }
} catch (e) {}

// Merge all bands into master dictionary (lowercase keys)
[TRADUCCIONES_BANDA_1, TRADUCCIONES_BANDA_2, TRADUCCIONES_BANDA_3, TRADUCCIONES_BANDA_4, TRADUCCIONES_BANDA_5].forEach(b => {
  for (const en in b) {
    masterDictionary[en.toLowerCase().trim()] = b[en];
  }
});

console.log("Total master dictionary words:", Object.keys(masterDictionary).length);

const dictOutput = `// Diccionario de traducción instantánea offline para ZELTAVIA Read
// Contiene las 5.000 palabras más frecuentes en inglés del curso
const DICTIONARY_DATA = ${JSON.stringify(masterDictionary, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DICTIONARY_DATA;
}
`;
fs.writeFileSync(path.join(outDir, 'dictionary.js'), dictOutput, 'utf8');

console.log("All files successfully updated!");
