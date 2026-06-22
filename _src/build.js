/* Orquestrador: gera as 14 páginas do curso e valida a saída. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const { buildLanding } = require('./content-landing.js');
const { buildT1 } = require('./content-t1.js');
const { buildT2 } = require('./content-t2.js');
const { buildT3 } = require('./content-t3.js');

const pages = [ buildLanding(), ...buildT1(), ...buildT2(), ...buildT3() ];

let warns = 0;
for (const p of pages) {
  const full = path.join(ROOT, p.file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, p.html);
  // validacoes leves
  const h = p.html;
  const checks = [
    ['undefined', />undefined<|"undefined"| undefined /],
    ['[object Object]', /\[object Object\]/],
    ['manifesto', null, !h.includes('data-inema-manifest')],
    ['INEMA.CLUB', null, !h.includes('inema.club')],
    ['nav trilhas', null, !(h.includes('Fundamentos') && h.includes('Técnicas') && h.includes('Avançado'))],
    ['learn.css', null, !h.includes('learn.css')],
    ['justify-center btn', /class="[^"]*justify-center[^"]*space-x-3/],
  ];
  for (const [name, re, cond] of checks) {
    const bad = re ? re.test(h) : cond;
    if (bad) { console.log(`  ⚠ ${p.file}: ${name}`); warns++; }
  }
  console.log(`✓ ${p.file} (${h.split('\n').length} linhas, ${(h.length/1024).toFixed(0)}KB)`);
}
console.log(`\n${pages.length} páginas geradas, ${warns} avisos.`);
