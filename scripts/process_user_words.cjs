// Script to split the 5 packs of 1000 words each
const fs = require('fs');
const path = require('path');

// We have the raw stream from the user
const raw = fs.readFileSync(path.join(__dirname, 'raw_user_words.txt'), 'utf8');
const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

console.log("Total raw lines found:", lines.length);

// Fix boundary glues if present
const cleanTokens = [];
for (let line of lines) {
  if (line === "detailmethod") {
    cleanTokens.push("detail");
    cleanTokens.push("method");
  } else if (line === "wastemerely") {
    cleanTokens.push("waste");
    cleanTokens.push("merely");
  } else if (line === "witnesschapter") {
    cleanTokens.push("witness");
    cleanTokens.push("chapter");
  } else if (line === "chopperformer") {
    cleanTokens.push("chopper");
    cleanTokens.push("former");
  } else {
    cleanTokens.push(line);
  }
}

console.log("Total clean tokens:", cleanTokens.length);

const band1 = cleanTokens.slice(0, 1000);
const band2 = cleanTokens.slice(1000, 2000);
const band3 = cleanTokens.slice(2000, 3000);
const band4 = cleanTokens.slice(3000, 4000);
const band5 = cleanTokens.slice(4000, 5000);

console.log(`Band 1: ${band1.length} words (from "${band1[0]}" to "${band1[band1.length-1]}")`);
console.log(`Band 2: ${band2.length} words (from "${band2[0]}" to "${band2[band2.length-1]}")`);
console.log(`Band 3: ${band3.length} words (from "${band3[0]}" to "${band3[band3.length-1]}")`);
console.log(`Band 4: ${band4.length} words (from "${band4[0]}" to "${band4[band4.length-1]}")`);
console.log(`Band 5: ${band5.length} words (from "${band5[0]}" to "${band5[band5.length-1]}")`);

// Save clean text files for the app
const outDir = path.join(__dirname, '../public/app_read/data');
fs.writeFileSync(path.join(outDir, 'band1_words.txt'), band1.join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, 'band2_words.txt'), band2.join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, 'band3_words.txt'), band3.join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, 'band4_words.txt'), band4.join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, 'band5_words.txt'), band5.join('\n'), 'utf8');

// Also load existing dictionary
let dict = {};
try {
  const dictFile = fs.readFileSync(path.join(outDir, 'dictionary.js'), 'utf8');
  eval(dictFile);
  if (typeof DICTIONARY_DATA !== 'undefined') dict = DICTIONARY_DATA;
} catch (e) {
  console.log("Dictionary not loaded via eval:", e.message);
}

// Generate updated frequency_words.js with all 5000 authentic words
const buildBandArray = (wordList) => {
  return wordList.map((w, idx) => {
    const clean = w.toLowerCase().trim();
    const es = dict[clean] || "";
    return { en: w, es: es };
  });
};

const frequencyBands = {
  1: buildBandArray(band1),
  2: buildBandArray(band2),
  3: buildBandArray(band3),
  4: buildBandArray(band4),
  5: buildBandArray(band5)
};

const jsOutput = `// ZELTAVIA Read — Bandas Completas de Frecuencia (1.000 palabras por banda)
// Cargado desde los 5 Packs canónicos del curso
const FREQUENCY_BANDS = ${JSON.stringify(frequencyBands, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREQUENCY_BANDS;
}
`;

fs.writeFileSync(path.join(outDir, 'frequency_words.js'), jsOutput, 'utf8');
console.log("Successfully wrote frequency_words.js with all 5,000 words!");
