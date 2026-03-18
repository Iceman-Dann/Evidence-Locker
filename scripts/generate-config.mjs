import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDir = resolve('public');
const outputFile = resolve(outputDir, 'config.js');
const placeholder = 'YOUR_GEMINI_API_KEY';
const apiKey = process.env.GEMINI_API_KEY || placeholder;

mkdirSync(outputDir, { recursive: true });

writeFileSync(
  outputFile,
  `window.__EVIDENCELOCKER_CONFIG__ = Object.assign({}, window.__EVIDENCELOCKER_CONFIG__, {
  GEMINI_API_KEY: ${JSON.stringify(apiKey)}
});
`,
  'utf8'
);

console.log(`Wrote ${outputFile}`);
if (apiKey === placeholder) {
  console.warn('GEMINI_API_KEY is not set. config.js contains the placeholder value.');
}
