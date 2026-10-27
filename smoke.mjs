import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const required = [
  '<!doctype html>', 'id="sidebarToggle"', 'id="dynamicView"', 'id="sourceEditor"',
  'function parseCourse(', 'function renderMarkdown(', 'function safeArithmetic(',
  'function renderMap(', 'prefers-reduced-motion', 'Q: Practice question?'
];
for (const token of required) assert.ok(html.includes(token), `Missing expected feature: ${token}`);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
assert.deepEqual([...new Set(dup)], [], `Duplicate static IDs: ${[...new Set(dup)].join(', ')}`);

const scriptBlocks = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
assert.ok(scriptBlocks.length >= 1, 'Expected embedded JavaScript');
for (const [i, js] of scriptBlocks.entries()) new vm.Script(js, { filename: `inline-script-${i + 1}.js` });

assert.ok(!/<script[^>]+src\s*=|<link[^>]+href\s*=\s*["']https?:|@import\s+url\(/i.test(html), 'Unexpected external script/style dependency');
assert.ok(!/\beval\s*\(|\bnew\s+Function\s*\(/.test(html), 'Unsafe dynamic execution found');
console.log(`Smoke checks passed: ${required.length} required markers, ${ids.length} unique static IDs, ${scriptBlocks.length} syntax-checked script block(s).`);
