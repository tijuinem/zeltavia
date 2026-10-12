import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import https from 'https';
import querystring from 'querystring';
import { defineConfig, Plugin } from 'vite';

function translateSingleText(text: string): Promise<string> {
  return new Promise((resolve) => {
    if (!text || !text.trim()) return resolve('');
    const postData = querystring.stringify({
      client: 'gtx',
      sl: 'en',
      tl: 'es',
      dt: 't',
      q: text.trim()
    });

    let finished = false;
    const finish = (val: string) => {
      if (!finished) {
        finished = true;
        resolve(val);
      }
    };

    const timer = setTimeout(() => {
      try { req.destroy(); } catch {}
      finish('');
    }, 2500);

    const req = https.request({
      hostname: 'translate.googleapis.com',
      port: 443,
      path: '/translate_a/single',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        clearTimeout(timer);
        try {
          if (res.statusCode === 200) {
            const parsed = JSON.parse(data);
            const full = (parsed[0] || []).map((c: any) => c[0] || '').join('');
            if (full.trim()) {
              return finish(full.trim());
            }
          }
          finish('');
        } catch {
          finish('');
        }
      });
    });

    req.on('error', () => {
      clearTimeout(timer);
      finish('');
    });
    req.write(postData);
    req.end();
  });
}

function translateMyMemory(text: string): Promise<string> {
  return new Promise((resolve) => {
    if (!text || !text.trim()) return resolve('');
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text.trim()) + '&langpair=en|es';
    
    let finished = false;
    const finish = (val: string) => {
      if (!finished) {
        finished = true;
        resolve(val);
      }
    };

    const timer = setTimeout(() => {
      try { req.destroy(); } catch {}
      finish('');
    }, 2500);

    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        clearTimeout(timer);
        try {
          const parsed = JSON.parse(data);
          if (parsed && parsed.responseData && parsed.responseData.translatedText) {
            const tr = parsed.responseData.translatedText.trim();
            // Ignore quota exceeded responses from mymemory
            if (!tr.includes('MYMEMORY WARNING:')) {
              return finish(tr);
            }
          }
          finish('');
        } catch {
          finish('');
        }
      });
    });
    req.on('error', () => {
      clearTimeout(timer);
      finish('');
    });
  });
}

async function translateWithFallback(text: string): Promise<string> {
  if (!text || !text.trim()) return '';
  let result = await translateSingleText(text);
  if (!result) {
    result = await translateMyMemory(text);
  }
  return result || text;
}

function translateApiPlugin(): Plugin {
  const handler = async (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
      return;
    }

    const processTranslation = async (text?: string, sentences?: string[]) => {
      const rawText = (text || '').trim();
      const hasSentences = Array.isArray(sentences) && sentences.length > 0;

      if (!rawText && !hasSentences) {
        res.end(JSON.stringify({ success: true, translation: '', chunks: [], translations: [] }));
        return;
      }

      try {
        if (hasSentences) {
          const items = sentences!;
          // Process in concurrent batches of 8 for high speed and 100% 1-to-1 exact alignment
          const BATCH_SIZE = 8;
          const translatedList: string[] = new Array(items.length);

          for (let i = 0; i < items.length; i += BATCH_SIZE) {
            const slice = items.slice(i, i + BATCH_SIZE);
            const sliceResults = await Promise.all(
              slice.map(s => translateWithFallback(s))
            );
            sliceResults.forEach((tr, sIdx) => {
              translatedList[i + sIdx] = tr;
            });
          }

          res.end(JSON.stringify({
            success: true,
            source: 'google',
            translations: translatedList,
            translation: translatedList.join('\n')
          }));
          return;
        }

        // Single text translation
        const singleResult = await translateWithFallback(rawText);
        res.end(JSON.stringify({
          success: true,
          source: 'google',
          translation: singleResult
        }));
      } catch (err: any) {
        console.warn('Translation proxy error:', err.message);
        res.statusCode = 200;
        res.end(JSON.stringify({
          success: false,
          error: err.message,
          translations: sentences ? sentences : [],
          translation: rawText,
          source: 'error'
        }));
      }
    };

    if (req.method === 'POST') {
      let body = '';
      const readPromise = new Promise<string>((resolve) => {
        const timer = setTimeout(() => resolve(body), 2500);
        req.on('data', (chunk: any) => body += chunk);
        req.on('end', () => {
          clearTimeout(timer);
          resolve(body);
        });
        req.on('error', () => {
          clearTimeout(timer);
          resolve(body);
        });
      });
      const resolvedBody = await readPromise;
      try {
        const parsed = JSON.parse(resolvedBody || '{}');
        await processTranslation(parsed.text || '', parsed.sentences);
      } catch {
        await processTranslation(resolvedBody);
      }
    } else {
      const urlObj = new URL(req.url || '', 'http://localhost');
      const text = urlObj.searchParams.get('text') || '';
      await processTranslation(text);
    }
  };

  return {
    name: 'translate-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/translate', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/translate', handler);
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), translateApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,
    },
  };
});
