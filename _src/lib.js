/* Engine compartilhada do curso "33 Viral Hooks" (formato-curso-v2 INEMA).
   Centraliza head/anti-FOUC/manifesto/nav/footer/scripts + helpers — uma vez para as 14 paginas
   (evita drift de nav #13 e de manifesto #28). */

const COURSE = { id: 'viralhooks', name: '33 Viral Hooks', emoji: '🪝', year: '2026' };

const TRILHAS = [
  { n: 1, slug: 'trilha1', accent: 'emerald', label: 'Fundamentos', emoji: '🧭' },
  { n: 2, slug: 'trilha2', accent: 'blue',    label: 'Técnicas',    emoji: '🎯' },
  { n: 3, slug: 'trilha3', accent: 'purple',  label: 'Avançado',    emoji: '🛠️' },
];

const ACCENTS = {
  emerald: { text: '#059669', rgb: '5, 150, 105',  dark: '#34d399', d2: '#10b981', soft: '#a7f3d0' },
  blue:    { text: '#2563eb', rgb: '37, 99, 235',  dark: '#60a5fa', d2: '#3b82f6', soft: '#bfdbfe' },
  purple:  { text: '#7c3aed', rgb: '124, 58, 237', dark: '#c084fc', d2: '#a855f7', soft: '#e9d5ff' },
};

const MANIFEST = {
  course: 'viralhooks',
  tracks: [
    { n: '1', title: 'Fundamentos', modules: [
      { id: '1-1', title: 'Anatomia de um hook', topics: 6, href: 'curso/trilha1/modulo-1-1.html' },
      { id: '1-2', title: 'As 3 camadas do hook', topics: 6, href: 'curso/trilha1/modulo-1-2.html' },
      { id: '1-3', title: 'A fórmula e os 5 nichos', topics: 6, href: 'curso/trilha1/modulo-1-3.html' },
    ]},
    { n: '2', title: 'Técnicas', modules: [
      { id: '2-1', title: 'AI & Technology', topics: 6, href: 'curso/trilha2/modulo-2-1.html' },
      { id: '2-2', title: 'Finanças & Negócios', topics: 6, href: 'curso/trilha2/modulo-2-2.html' },
      { id: '2-3', title: 'Saúde & Fitness', topics: 6, href: 'curso/trilha2/modulo-2-3.html' },
      { id: '2-4', title: 'Autodesenvolvimento', topics: 6, href: 'curso/trilha2/modulo-2-4.html' },
      { id: '2-5', title: 'Viagem & Aventura', topics: 6, href: 'curso/trilha2/modulo-2-5.html' },
    ]},
    { n: '3', title: 'Avançado', modules: [
      { id: '3-1', title: 'Prompts para gerar hooks', topics: 6, href: 'curso/trilha3/modulo-3-1.html' },
      { id: '3-2', title: 'Sua Hook Machine', topics: 6, href: 'curso/trilha3/modulo-3-2.html' },
    ]},
  ],
};

// ---- anti-FOUC (verbatim do baseline do-zero-ao-deploy) ----
const ANTI_FOUC = `  <script>
  (function () {
    try {
      var html = document.documentElement;
      var DEF = { theme: 'inema-dark', font: 'inter', fontScale: 100, lineWidth: 68, leading: 1.7, accent: 'emerald' };
      function clone(o) { var r = {}; for (var x in o) r[x] = o[x]; return r; }
      var p = clone(DEF);
      try {
        var raw = localStorage.getItem('inema.prefs');
        if (raw) {
          var parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') { for (var k in DEF) if (parsed[k] != null) p[k] = parsed[k]; }
        } else {
          var legacy = localStorage.getItem('theme');
          if (legacy === 'light') p.theme = 'claro'; else if (legacy === 'dark') p.theme = 'inema-dark';
        }
      } catch (e) { p = clone(DEF); }
      var THEMES = {
        'inema-dark': { dark: true,  attr: null,        cs: 'dark'  },
        'claro':      { dark: false, attr: null,        cs: 'light' },
        'sepia':      { dark: false, attr: 'sepia',     cs: 'light' },
        'foco':       { dark: null,  attr: 'foco',      cs: null    },
        'contraste':  { dark: true,  attr: 'contraste', cs: 'dark'  }
      };
      var t = THEMES[p.theme] || THEMES['inema-dark'];
      if (t.dark === true) html.classList.add('dark'); else if (t.dark === false) html.classList.remove('dark');
      if (t.attr) html.setAttribute('data-theme', t.attr); else html.removeAttribute('data-theme');
      html.style.colorScheme = (t.cs ? t.cs : (html.classList.contains('dark') ? 'dark' : 'light'));
      html.setAttribute('data-font', p.font || 'inter');
      html.setAttribute('data-accent', p.accent || 'emerald');
      var s = html.style; var scale = (+p.fontScale || 100);
      s.setProperty('--inema-font-scale', (scale / 100).toString());
      s.setProperty('font-size', scale + '%');
      s.setProperty('--measure', (+p.lineWidth || 68) + 'ch');
      s.setProperty('--lh-body', (+p.leading || 1.7).toString());
      var fam = p.font === 'system' ? 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
        : (p.font === 'leitura' ? '"Atkinson Hyperlegible", "Inter", system-ui, sans-serif' : '"Inter", system-ui, sans-serif');
      s.setProperty('--font-body', fam);
      var ACC = { emerald: [152,76,45], blue: [217,91,60], purple: [258,90,66], amber: [38,92,50], teal: [174,72,41], rose: [350,89,60] };
      var a = ACC[p.accent] || ACC.emerald;
      s.setProperty('--accent-h', a[0]+''); s.setProperty('--accent-s', a[1]+'%'); s.setProperty('--accent-l', a[2]+'%');
      s.setProperty('--accent', 'hsl('+a[0]+' '+a[1]+'% '+a[2]+'%)');
    } catch (err) { try { document.documentElement.classList.add('dark'); document.documentElement.style.colorScheme = 'dark'; } catch(e){} }
  })();
  </script>`;

function lightAccentBlock(acc) {
  const a = ACCENTS[acc];
  return `    /* Light mode - acento ${acc} */
    html:not(.dark) .text-${acc}-400 { color: ${a.text}; }
    html:not(.dark) .bg-${acc}-500\\/20 { background-color: rgba(${a.rgb}, 0.12); }
    html:not(.dark) .bg-${acc}-500\\/10 { background-color: rgba(${a.rgb}, 0.08); }
    html:not(.dark) .border-${acc}-500\\/30 { border-color: rgba(${a.rgb}, 0.25); }
    html:not(.dark) .hover\\:bg-${acc}-500\\/30:hover { background-color: rgba(${a.rgb}, 0.18); }
    html:not(.dark) .hover\\:text-${acc}-400:hover { color: ${a.text}; }
    html:not(.dark) .hover\\:bg-${acc}-500\\/10:hover { background-color: rgba(${a.rgb}, 0.08); }
    html:not(.dark) .group:hover .group-hover\\:text-${acc}-400 { color: ${a.text}; }`;
}

function styleBlock(accents) {
  return `  <style>
    body { font-family: 'Inter', sans-serif; }
    .dark body { background-color: #111827; }

    /* Light mode base */
    html:not(.dark) body { background-color: #f8fafc; }
    html:not(.dark) .bg-dark-900 { background-color: #ffffff; }
    html:not(.dark) .bg-dark-800 { background-color: #f9fafb; }
    html:not(.dark) .bg-dark-700 { background-color: #f3f4f6; }
    html:not(.dark) .bg-dark-600 { background-color: #e5e7eb; }
    html:not(.dark) .text-neutral-100 { color: #111827; }
    html:not(.dark) .text-neutral-300 { color: #4b5563; }
    html:not(.dark) .text-neutral-400 { color: #6b7280; }
    html:not(.dark) .text-neutral-500 { color: #9ca3af; }
    html:not(.dark) .border-dark-600 { border-color: #d1d5db; }
    html:not(.dark) .border-dark-700 { border-color: #e5e7eb; }

${accents.map(lightAccentBlock).join('\n')}

    /* Light mode - remove gradientes e cores especiais */
    html:not(.dark) [class*="bg-gradient-to"] { background-image: none !important; }
    html:not(.dark) .text-primary { color: #a16207; }
    html:not(.dark) .bg-primary\\/10 { background-color: rgba(161, 98, 7, 0.08); }
    html:not(.dark) .border-primary\\/40 { border-color: rgba(161, 98, 7, 0.25); }
    html:not(.dark) .border-primary\\/30 { border-color: rgba(161, 98, 7, 0.22); }
    html:not(.dark) .text-sky-400 { color: #0369a1; }
    html:not(.dark) .text-yellow-400 { color: #a16207; }
    html:not(.dark) .text-red-400 { color: #b91c1c; }
    html:not(.dark) .hover\\:text-sky-300:hover { color: #0284c7; }
    html:not(.dark) .hover\\:text-yellow-300:hover { color: #854d0e; }

    /* Light mode - nav */
    html:not(.dark) .bg-dark-900\\/95 { background-color: rgba(255, 255, 255, 0.95); }

    /* Dark mode - bordas suaves */
    .dark .border-dark-600 { border-color: #374151; }
    .dark .divide-dark-600 > :not([hidden]) ~ :not([hidden]) { border-color: #374151; }

    /* SVG light mode + animacao */
    html:not(.dark) svg[role="img"] { filter: saturate(0.82) brightness(0.96); }
    @keyframes wf-pulse { 0%,100% { opacity:.55 } 50% { opacity:1 } }
    @media (prefers-reduced-motion: no-preference) {
      .wf-a { animation: wf-pulse 2.6s ease-in-out infinite; }
      .wf-a:nth-child(2){animation-delay:.25s} .wf-a:nth-child(3){animation-delay:.5s}
      .wf-a:nth-child(4){animation-delay:.75s} .wf-a:nth-child(5){animation-delay:1s}
    }

    /* Topicos expansiveis */
    .topic-explanation { display: none; }
    .topic-explanation.active { display: block; }
    /* Card de hook (trilha 2) */
    .hook-img { aspect-ratio: 16/9; object-fit: cover; width: 100%; }
  </style>`;
}

const THEME_SVGS = `            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>`;

// depth: 0 = landing (raiz) | 2 = dentro de curso/trilhaN/
function nav(activeTrack, depth) {
  const root = depth === 0 ? '' : '../../';
  const logoHref = depth === 0 ? 'index.html' : '../../index.html';
  const links = TRILHAS.map(t => {
    let href;
    if (depth === 0) href = `curso/${t.slug}/index.html`;
    else href = (t.n === activeTrack) ? 'index.html' : `../${t.slug}/index.html`;
    const active = (t.n === activeTrack);
    const cls = active
      ? `text-${t.accent}-400 bg-${t.accent}-500/10`
      : `text-neutral-400 hover:text-${t.accent}-400 hover:bg-${t.accent}-500/10 transition-colors`;
    return `          <a href="${href}" class="px-3 py-1.5 rounded-lg text-sm font-semibold ${cls}">
            <span class="sm:hidden">T${t.n}</span><span class="hidden sm:inline">${t.label}</span>
          </a>`;
  }).join('\n');
  return `  <nav class="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-600">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <div class="flex items-center space-x-4">
          <a href="${logoHref}" class="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300">
            <span class="text-2xl">${COURSE.emoji}</span>
            <span class="font-bold text-lg hidden sm:inline">${COURSE.name}</span>
          </a>
          <span class="text-neutral-600">|</span>
          <a href="https://inema.club" target="_blank" class="text-sky-400 hover:text-sky-300 text-sm font-medium">INEMA.CLUB</a>
        </div>
        <div class="flex items-center space-x-1 sm:space-x-2">
${links}
          <button id="theme-toggle" class="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors ml-2" aria-label="Alternar tema claro/escuro">
${THEME_SVGS}
          </button>
        </div>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `  <footer class="border-t border-dark-600 py-8 mt-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
      <p>${COURSE.name} - ${COURSE.year} | <a href="https://inema.club" target="_blank" class="text-sky-400 hover:text-sky-300">INEMA.CLUB</a></p>
    </div>
  </footer>`;
}

function scripts(depth) {
  const learn = depth === 0 ? 'assets/learn.js' : '../../assets/learn.js';
  return `  <script>
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const _html = document.documentElement;
    if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && !_html.classList.contains('dark'))) {
      themeToggleDarkIcon.classList.remove('hidden'); _html.classList.remove('dark');
    } else { themeToggleLightIcon.classList.remove('hidden'); }
    themeToggle.addEventListener('click', () => {
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
      _html.classList.toggle('dark');
      localStorage.setItem('theme', _html.classList.contains('dark') ? 'dark' : 'light');
    });
    function toggleTopic(button) {
      const item = button.closest('.topic-item');
      const exp = item.querySelector('.topic-explanation');
      const card = button.closest('.bg-dark-800');
      card.querySelectorAll('.topic-explanation.active').forEach(e => { if (e !== exp) e.classList.remove('active'); });
      exp.classList.toggle('active');
      const open = exp.classList.contains('active');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    function openModal(id){ const m=document.getElementById(id); if(m){ m.classList.remove('hidden'); document.body.style.overflow='hidden'; } }
    function closeModal(){ document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden')); document.body.style.overflow='auto'; }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  </script>
  <script src="${learn}"></script>
  <script>
    if (window.INEMA && typeof window.INEMA.init === 'function') { window.INEMA.init(); }
  </script>`;
}

// Monta a pagina completa.
function shell({ title, depth, activeTrack, accents, body, extraScript = '' }) {
  const cssLink = depth === 0 ? 'assets/learn.css' : '../../assets/learn.css';
  return `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="inema-course" content="${COURSE.id}">
  <title>${title} | ${COURSE.name}</title>

  <!-- ANTI-FOUC: bloqueante, ANTES do Tailwind -->
${ANTI_FOUC}

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { darkMode: 'class', theme: { extend: { colors: {
      primary: '#FACC15', dark: { 900: '#111827', 800: '#1f2937', 700: '#374151', 600: '#4b5563' } } } } }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${cssLink}">

  <!-- Manifesto do curso (OBRIGATORIO em TODA pagina, identico) -->
  <script type="application/json" data-inema-manifest>
  ${JSON.stringify(MANIFEST)}
  </script>

${styleBlock(accents)}
</head>
<body class="bg-dark-900 text-neutral-100 min-h-screen">

${nav(activeTrack, depth)}

${body}

${footer()}

${scripts(depth)}
${extraScript}
</body>
</html>
`;
}

// ---------- Helpers de profundidade (T1/T3) ----------
// "Indo mais fundo" — divulgacao progressiva
function details(acc, summary, html) {
  return `      <details class="bg-dark-800 rounded-xl border border-dark-600 p-5 mb-6 group">
        <summary class="cursor-pointer font-semibold text-${acc}-400 flex items-center gap-2 list-none"><span class="transition-transform group-open:rotate-90">▸</span> ${summary}</summary>
        <div class="mt-4 text-neutral-300 text-sm space-y-3">${html}</div>
      </details>`;
}
// Tabela comparativa
function compareTable(acc, headers, rows) {
  return `      <div class="overflow-x-auto mb-6 rounded-xl border border-dark-600">
        <table class="w-full text-sm text-left">
          <thead class="bg-dark-700/60 text-${acc}-400"><tr>${headers.map(h=>`<th class="px-4 py-3 font-semibold">${h}</th>`).join('')}</tr></thead>
          <tbody class="divide-y divide-dark-600">${rows.map(r=>`<tr class="bg-dark-800">${r.map((c,i)=>`<td class="px-4 py-3 ${i===0?'font-medium text-neutral-100':'text-neutral-300'}">${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>`;
}
// Exemplo trabalhado (hook desmontado nas 3 camadas)
function worked(acc, titulo, falada, visual, texto, nota) {
  return `      <div class="bg-dark-800 rounded-xl border border-${acc}-500/30 overflow-hidden mb-6">
        <div class="px-5 py-3 bg-${acc}-900/20 border-b border-${acc}-500/30"><span class="text-${acc}-400 font-semibold text-sm">🔬 ${titulo}</span></div>
        <div class="p-5 space-y-2 font-mono text-sm">
          <p class="text-neutral-200"><span class="text-${acc}-400">💬 Falada:</span> ${falada}</p>
          <p class="text-neutral-200"><span class="text-sky-400">🎬 Visual:</span> ${visual}</p>
          <p class="text-neutral-200"><span class="text-primary">🔤 Texto:</span> ${texto}</p>
        </div>
        ${nota?`<div class="px-5 py-3 bg-dark-700/40 border-t border-dark-600 text-neutral-400 text-sm">${nota}</div>`:''}</div>`;
}
// Checagem leve (quiz nao-bloqueante). options: array de strings; correct: indice; explain: array paralelo
function quiz({ id, pergunta, options }) {
  const opts = options.map((o,i)=>`          <button type="button" data-inema-check-option="${i}" class="block w-full text-left px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 hover:bg-dark-600 transition-colors text-sm">${o.t}</button>`).join('\n');
  return `      <div data-inema-check="${id}" class="inema-check mt-8 bg-dark-800 border border-dark-600 rounded-xl p-6">
        <p class="font-medium mb-1 flex items-center gap-2"><span aria-hidden="true">🧩</span> Checagem rápida <span class="text-xs text-neutral-500 font-normal">(opcional, não trava o avanço)</span></p>
        <p class="text-neutral-300 text-sm mb-4">${pergunta}</p>
        <div class="inema-check-options space-y-2">
${opts}
        </div>
        <div data-inema-check-feedback class="mt-4 text-sm" role="status" aria-live="polite"></div>
      </div>`;
}
// Gera o script de registro das checagens da pagina (vai em extraScript do shell)
function checkScript(checks) {
  if (!checks.length) return '';
  const body = checks.map(c => {
    const explain = JSON.stringify(c.options.reduce((a,o,i)=>{a[i]=o.e;return a;},{}));
    return `      INEMA.registerCheck(${JSON.stringify(c.id)}, { answer: ${c.options.findIndex(o=>o.correct)}, explain: ${explain} });`;
  }).join('\n');
  return `  <script>
    window.addEventListener('DOMContentLoaded', function () {
      if (window.INEMA && INEMA.registerCheck) {
${body}
      }
    });
  </script>`;
}

// ---------- Helpers de conteudo ----------
function readToggle(acc) {
  return `      <div class="flex justify-start mt-6">
        <button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-${acc}-500/20 border border-${acc}-500/30 text-${acc}-400 hover:bg-${acc}-500/30 transition-colors">
          <span class="inema-read-icon" aria-hidden="true">○</span>
          <span class="inema-read-label">Marcar como lido</span>
        </button>
      </div>`;
}

// Secao de modulo (pagina de conteudo)
function section({ n, mod, acc, title, inner }) {
  return `    <section id="topico-${n}" data-inema-topic="modulo-${mod}#topico-${n}" class="mb-16 scroll-mt-20">
      <div class="flex items-center space-x-4 mb-6">
        <span class="flex items-center justify-center w-12 h-12 rounded-full bg-${acc}-500/20 text-${acc}-400 font-bold text-xl">${n}</span>
        <h2 class="text-2xl font-bold">${title}</h2>
      </div>
${inner}
${readToggle(acc)}
    </section>`;
}

// Painel de SVG
function svgPanel(acc, svg) {
  return `      <div class="rounded-2xl border border-${acc}-500/30 bg-dark-900/40 p-3 sm:p-4 mb-8 overflow-hidden">
${svg}
      </div>`;
}

// Topico expansivel (index de trilha) com as 3 secoes
function accordion({ acc, n, emoji, title, sub, oque, porque, conceitos }) {
  return `        <div class="topic-item">
          <button onclick="toggleTopic(this)" aria-expanded="false" class="w-full px-6 py-4 flex items-center space-x-3 hover:bg-dark-700/50 transition-colors text-left">
            <span class="w-6 h-6 rounded-full bg-${acc}-500/20 text-${acc}-400 text-sm font-bold flex items-center justify-center flex-shrink-0">${n}</span>
            <span class="text-lg">${emoji}</span>
            <div><span class="font-medium">${title}</span><span class="text-neutral-500 text-sm ml-2">- ${sub}</span></div>
          </button>
          <div class="topic-explanation px-6 pb-4">
            <div class="bg-dark-700/50 rounded-lg p-4 space-y-3 ml-9">
              <div><span class="text-${acc}-400 font-semibold">O que é:</span><p class="text-neutral-300 text-sm">${oque}</p></div>
              <div><span class="text-${acc}-400 font-semibold">Por que aprender:</span><p class="text-neutral-300 text-sm">${porque}</p></div>
              <div><span class="text-${acc}-400 font-semibold">Conceitos-chave:</span><p class="text-neutral-300 text-sm">${conceitos}</p></div>
            </div>
          </div>
        </div>`;
}

// Card de modulo no index de trilha (com topicos + botoes)
function moduleCard({ acc, mod, dur, emoji, title, desc, topics, hasModal = true }) {
  const modalBtn = hasModal
    ? `        <button onclick="openModal('modal-${mod}')" class="px-4 py-2 text-sm bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors">Ver em Modal</button>\n`
    : '';
  return `    <div id="modulo-${mod}" class="bg-dark-800 rounded-xl border border-dark-600 mb-6 scroll-mt-20">
      <div class="p-6 border-b border-dark-600">
        <div class="flex items-center justify-between mb-2">
          <span class="text-${acc}-400 font-bold">${mod.replace('-', '.')}</span>
          <span class="text-xs text-neutral-500">${dur}</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">${emoji} ${title}</h3>
        <p class="text-neutral-400 text-sm">${desc}</p>
      </div>
      <div class="divide-y divide-dark-600">
${topics}
      </div>
      <div class="p-4 bg-dark-700/30 flex justify-start space-x-3">
${modalBtn}        <a href="modulo-${mod}.html" class="px-4 py-2 text-sm bg-${acc}-600 hover:bg-${acc}-500 text-white rounded-lg transition-colors">Ver Completo</a>
      </div>
    </div>`;
}

// Modal iframe
function modal({ acc, mod, title }) {
  return `  <div id="modal-${mod}" class="modal hidden fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80" onclick="if(event.target === this) closeModal()">
    <div class="bg-dark-800 rounded-xl w-full max-w-6xl h-[95vh] flex flex-col border border-dark-600">
      <div class="p-4 border-b border-dark-600 flex justify-between items-center flex-shrink-0">
        <div class="flex items-center space-x-3"><span class="text-${acc}-400 font-bold">${mod.replace('-', '.')}</span><span class="font-semibold">${title}</span></div>
        <button onclick="closeModal()" class="text-neutral-400 hover:text-white text-2xl leading-none" aria-label="Fechar">&times;</button>
      </div>
      <iframe src="modulo-${mod}.html" class="flex-1 w-full rounded-b-xl" title="${title}"></iframe>
    </div>
  </div>`;
}

// Header de trilha / modulo
function trilhaHeader({ acc, n, emoji, title, desc, stats }) {
  const cells = stats.map(s => `        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600">
          <div class="text-xl font-bold text-${acc}-400">${s.v}</div>
          <div class="text-xs text-neutral-400">${s.k}</div>
        </div>`).join('\n');
  return `  <header class="bg-gradient-to-br from-${acc}-900/30 via-dark-800 to-dark-800 py-12 border-b border-dark-600">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="inline-block px-3 py-1 bg-${acc}-500/20 text-${acc}-400 text-xs font-semibold rounded-full mb-4">TRILHA ${n}</span>
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">${emoji} ${title}</h1>
      <p class="text-lg text-neutral-400 max-w-3xl">${desc}</p>
      <div class="grid grid-cols-4 gap-4 mt-8 max-w-2xl">
${cells}
      </div>
    </div>
  </header>`;
}

function moduleHeader({ acc, mod, emoji, title, desc, stats }) {
  const cells = stats.map(s => `        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600">
          <div class="text-xl font-bold text-${acc}-400">${s.v}</div>
          <div class="text-xs text-neutral-400">${s.k}</div>
        </div>`).join('\n');
  return `  <header class="bg-gradient-to-br from-${acc}-900/30 via-dark-800 to-dark-800 py-12 border-b border-dark-600">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="inline-block px-3 py-1 bg-${acc}-500/20 text-${acc}-400 text-xs font-semibold rounded-full mb-4">MÓDULO ${mod.replace('-', '.')}</span>
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">${emoji} ${title}</h1>
      <p class="text-lg text-neutral-400 max-w-3xl">${desc}</p>
      <div class="grid grid-cols-4 gap-4 mt-8 max-w-2xl">
${cells}
      </div>
    </div>
  </header>`;
}

function breadcrumb({ acc, trilhaLabel, mod }) {
  return `  <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Trilha de navegação">
    <div class="flex items-center space-x-2 text-sm text-neutral-400">
      <a href="../../index.html" class="hover:text-${acc}-400">Início</a><span>/</span>
      <a href="index.html" class="hover:text-${acc}-400">${trilhaLabel}</a><span>/</span>
      <span class="text-${acc}-400">Módulo ${mod.replace('-', '.')}</span>
    </div>
  </nav>`;
}

// Resumo do modulo
function moduleSummary({ acc, points, nextLabel, nextHref }) {
  const lis = points.map(p => `        <div class="flex items-start space-x-3"><span class="text-${acc}-400 mt-1">✓</span><div>${p}</div></div>`).join('\n');
  const next = nextHref
    ? `        <a href="${nextHref}" class="flex-1 text-center px-6 py-3 bg-${acc}-600 text-white rounded-lg font-semibold hover:bg-${acc}-500 transition-colors">${nextLabel} →</a>`
    : `        <a href="../trilha3/index.html" class="flex-1 text-center px-6 py-3 bg-${acc}-600 text-white rounded-lg font-semibold hover:bg-${acc}-500 transition-colors">${nextLabel} →</a>`;
  return `    <section class="mb-12">
      <div class="bg-gradient-to-br from-${acc}-900/40 via-dark-800 to-dark-800 rounded-xl border border-${acc}-500/30 p-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center"><span class="mr-3">🎓</span> Resumo do módulo</h2>
        <div class="space-y-4 mb-8">
${lis}
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="index.html" class="flex-1 text-center px-6 py-3 bg-dark-700 text-neutral-300 rounded-lg font-semibold hover:bg-dark-600 transition-colors">← Voltar para a trilha</a>
${next}
        </div>
      </div>
    </section>`;
}

module.exports = {
  COURSE, TRILHAS, ACCENTS, MANIFEST,
  shell, nav, footer, scripts, readToggle, section, svgPanel, accordion,
  moduleCard, modal, trilhaHeader, moduleHeader, breadcrumb, moduleSummary,
  details, compareTable, worked, quiz, checkScript,
};
