// Script to compile band1.json to band5.json into frequency_words.js & dictionary.js
const fs = require('fs');
const path = require('path');

const transDir = path.join(__dirname, '../public/app_read/data/translations');
const outDir = path.join(__dirname, '../public/app_read/data');

const b1 = JSON.parse(fs.readFileSync(path.join(transDir, 'band1.json'), 'utf8'));
const b2 = JSON.parse(fs.readFileSync(path.join(transDir, 'band2.json'), 'utf8'));
const b3 = JSON.parse(fs.readFileSync(path.join(transDir, 'band3.json'), 'utf8'));
const b4 = JSON.parse(fs.readFileSync(path.join(transDir, 'band4.json'), 'utf8'));
const b5 = JSON.parse(fs.readFileSync(path.join(transDir, 'band5.json'), 'utf8'));

console.log(`Loaded JSONs: B1=${Object.keys(b1).length}, B2=${Object.keys(b2).length}, B3=${Object.keys(b3).length}, B4=${Object.keys(b4).length}, B5=${Object.keys(b5).length}`);

// Read English word lists
const band1En = fs.readFileSync(path.join(outDir, 'band1_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band2En = fs.readFileSync(path.join(outDir, 'band2_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band3En = fs.readFileSync(path.join(outDir, 'band3_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band4En = fs.readFileSync(path.join(outDir, 'band4_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
const band5En = fs.readFileSync(path.join(outDir, 'band5_words.txt'), 'utf8').split(/\r?\n/).filter(Boolean);

function buildBandArray(words, transObj) {
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
  1: buildBandArray(band1En, b1),
  2: buildBandArray(band2En, b2),
  3: buildBandArray(band3En, b3),
  4: buildBandArray(band4En, b4),
  5: buildBandArray(band5En, b5)
};

// Check coverage
for (let b = 1; b <= 5; b++) {
  const missing = frequencyBands[b].filter(item => !item.es);
  console.log(`Banda ${b}: Total=${frequencyBands[b].length}, Translated=${frequencyBands[b].length - missing.length}, Missing=${missing.length}`);
}

// 1. Write frequency_words.js
const freqOutput = `// ZELTAVIA Read — Bandas Completas de Frecuencia (1.000 palabras por banda)
// Con traducciones oficiales completas en español
const FREQUENCY_BANDS = ${JSON.stringify(frequencyBands, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREQUENCY_BANDS;
}
`;
fs.writeFileSync(path.join(outDir, 'frequency_words.js'), freqOutput, 'utf8');

// 2. Write master dictionary.js
const masterDictionary = {};
// Read existing dictionary base
try {
  const existingDictCode = fs.readFileSync(path.join(outDir, 'dictionary.js'), 'utf8');
  eval(existingDictCode);
  if (typeof DICTIONARY_DATA !== 'undefined') {
    Object.assign(masterDictionary, DICTIONARY_DATA);
  }
} catch (e) {}

[b1, b2, b3, b4, b5].forEach(b => {
  for (const en in b) {
    masterDictionary[en.toLowerCase().trim()] = b[en];
  }
});

console.log("Master dictionary total words:", Object.keys(masterDictionary).length);

const dictOutput = `// Diccionario de traducción instantánea offline para ZELTAVIA Read
// Contiene las 5.000 palabras más frecuentes en inglés del curso
const DICTIONARY_DATA = ${JSON.stringify(masterDictionary, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DICTIONARY_DATA;
}
`;
fs.writeFileSync(path.join(outDir, 'dictionary.js'), dictOutput, 'utf8');

console.log("Compilation complete!");
