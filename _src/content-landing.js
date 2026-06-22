/* Landing page (index.html na raiz). Usa as 3 cores de trilha. */
const L = require('./lib.js');

function heroSvg(){
  return `      <div class="rounded-2xl border border-emerald-500/30 bg-dark-900/40 p-3 sm:p-4 mb-8 overflow-hidden max-w-4xl mx-auto">
        <svg viewBox="0 0 900 180" class="w-full h-auto" role="img" aria-label="Jornada do curso em 3 trilhas: Fundamentos, Técnicas (165 hooks) e Avançado">
          <defs>
            <linearGradient id="lh-e" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <linearGradient id="lh-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#3b82f6"/></linearGradient>
            <linearGradient id="lh-p" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
            <filter id="lh-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="lh-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#60a5fa" opacity="0.08"/></pattern>
            <marker id="lh-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#9ca3af"/></marker>
          </defs>
          <rect x="0" y="0" width="900" height="180" fill="url(#lh-grid)"/>
          <g fill="none" stroke="#9ca3af" stroke-width="2" opacity="0.5">
            <path class="wf-a" d="M290,90 L330,90" marker-end="url(#lh-ah)"/>
            <path class="wf-a" d="M590,90 L630,90" marker-end="url(#lh-ah)"/>
          </g>
          <rect x="40" y="50" width="250" height="80" rx="14" fill="#0e2018" stroke="url(#lh-e)" stroke-width="2"/>
          <text x="165" y="82" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="15">🧭 Fundamentos</text>
          <text x="165" y="103" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">hook · 3 camadas · fórmula</text>
          <g filter="url(#lh-glow)"><rect x="330" y="50" width="260" height="80" rx="14" fill="#0e1622" stroke="url(#lh-b)" stroke-width="2.4"/></g>
          <text x="460" y="82" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-weight="600" font-size="15">🎯 Técnicas</text>
          <text x="460" y="103" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">165 hooks · 5 nichos · imagens</text>
          <rect x="630" y="50" width="230" height="80" rx="14" fill="#1a1230" stroke="url(#lh-p)" stroke-width="2"/>
          <text x="745" y="82" text-anchor="middle" fill="#c084fc" font-family="Inter,sans-serif" font-weight="600" font-size="15">🛠️ Avançado</text>
          <text x="745" y="103" text-anchor="middle" fill="#e9d5ff" font-family="Inter,sans-serif" font-size="11">prompts + sua Hook Machine</text>
          <text x="165" y="150" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="10">Trilha 1</text>
          <text x="460" y="150" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="10">Trilha 2</text>
          <text x="745" y="150" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="10">Trilha 3</text>
        </svg>
      </div>`;
}

function trilhaCard({slug,acc,n,emoji,title,desc,tags}){
  return `        <a href="curso/${slug}/index.html" class="group bg-dark-800 rounded-xl border border-dark-600 hover:border-${acc}-500/30 p-6 transition-all">
          <div class="flex items-center justify-between mb-4">
            <span class="inline-block px-3 py-1 bg-${acc}-500/20 text-${acc}-400 text-xs font-semibold rounded-full">TRILHA ${n}</span>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-${acc}-400 transition-colors">${emoji} ${title}</h3>
          <p class="text-sm text-neutral-400 mb-4">${desc}</p>
          <div class="flex flex-wrap gap-2">${tags.map(t=>`<span class="text-xs px-2 py-1 bg-${acc}-500/10 text-${acc}-400 rounded">${t}</span>`).join('')}</div>
        </a>`;
}

function buildLanding(){
  const body = `  <header class="bg-gradient-to-br from-blue-900/30 via-dark-800 to-dark-800 py-16 border-b border-dark-600">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-6">VÍDEO CURTO · TIKTOK · REELS · SHORTS</span>
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">🪝 33 Viral Hooks</h1>
        <p class="text-xl text-neutral-400 max-w-2xl mx-auto mb-2">Pare o dedo nos 3 primeiros segundos.</p>
        <p class="text-neutral-500 max-w-xl mx-auto">Os 33 viral hooks de cada um dos 5 nichos mais populares — com a frase falada, o visual, o texto na tela e uma imagem de referência pra cada exemplo. Da teoria à sua própria máquina de hooks.</p>
      </div>
${heroSvg()}
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600 text-center"><div class="text-xl font-bold text-emerald-400">3</div><div class="text-xs text-neutral-400">Trilhas</div></div>
        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600 text-center"><div class="text-xl font-bold text-blue-400">165</div><div class="text-xs text-neutral-400">Hooks</div></div>
        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600 text-center"><div class="text-xl font-bold text-purple-400">5</div><div class="text-xs text-neutral-400">Nichos</div></div>
        <div class="bg-dark-800/50 rounded-lg p-3 border border-dark-600 text-center"><div class="text-xl font-bold text-emerald-400">165</div><div class="text-xs text-neutral-400">Imagens</div></div>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    <!-- Sua jornada -->
    <section class="mb-12">
      <div class="bg-dark-800 rounded-xl border border-dark-600 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold mb-1">Sua jornada</h2>
          <p class="text-sm text-neutral-400">Marque os módulos como lidos e acompanhe seu progresso. Tudo fica salvo no seu navegador.</p>
        </div>
        <div data-inema-meter="curso" class="inema-meter shrink-0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso do curso">
          <span class="inema-meter-pct text-2xl font-bold text-blue-400">0%</span>
          <span class="inema-meter-count text-xs text-neutral-400 block">0 de 60 tópicos</span>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-8">As 3 trilhas</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
${trilhaCard({slug:'trilha1',acc:'emerald',n:1,emoji:'🧭',title:'Fundamentos',desc:'O que é um hook, as 3 camadas (falada · visual · texto) e a fórmula Context Lean → Scroll Stop → Contrarian Snapback. Todos os termos do zero.',tags:['Hook','3 camadas','Fórmula']})}
${trilhaCard({slug:'trilha2',acc:'blue',n:2,emoji:'🎯',title:'Técnicas — 165 hooks',desc:'Os 33 hooks de cada um dos 5 nichos, com imagem, frase falada, visual e texto na tela. Agrupados pelos 5 padrões virais.',tags:['AI','Finanças','Saúde','Cresc.','Viagem']})}
${trilhaCard({slug:'trilha3',acc:'purple',n:3,emoji:'🛠️',title:'Avançado',desc:'Prompts copy-run prontos e uma skill ("Hook Machine") pra gerar seus próprios hooks com IA — e o ciclo de publicar e medir.',tags:['Prompts','Skill','Pipeline']})}
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6">Para quem é este curso</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-emerald-900/20 rounded-xl border border-emerald-500/30 p-6">
          <h4 class="font-bold text-emerald-400 mb-4">É pra você se:</h4>
          <ul class="space-y-3 text-neutral-300 text-sm">
            <li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>Posta (ou quer postar) Reels, TikToks ou Shorts</span></li>
            <li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>Seus vídeos têm poucas views e você suspeita do início</span></li>
            <li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>Quer um banco de hooks prontos pra usar e adaptar</span></li>
            <li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>Quer usar IA pra gerar ganchos no seu nicho</span></li>
          </ul>
        </div>
        <div class="bg-red-900/20 rounded-xl border border-red-500/30 p-6">
          <h4 class="font-bold text-red-400 mb-4">Não é pra você se:</h4>
          <ul class="space-y-3 text-neutral-300 text-sm">
            <li class="flex items-start space-x-2"><span class="text-red-400">✗</span><span>Procura edição avançada de vídeo (corte, color, áudio)</span></li>
            <li class="flex items-start space-x-2"><span class="text-red-400">✗</span><span>Quer um curso de estratégia de canal de ponta a ponta</span></li>
            <li class="flex items-start space-x-2"><span class="text-red-400">✗</span><span>Espera fórmula mágica sem testar e medir</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6">O que você leva</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">📚</span><h3 class="font-semibold mb-1">165 hooks prontos</h3><p class="text-xs text-neutral-400">33 por nicho, com as 3 camadas e imagem de referência.</p></div>
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">🧠</span><h3 class="font-semibold mb-1">A teoria que sustenta</h3><p class="text-xs text-neutral-400">Por que o hook decide o vídeo e como montar o seu.</p></div>
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">🎬</span><h3 class="font-semibold mb-1">5 padrões virais</h3><p class="text-xs text-neutral-400">Medo, contrarian, número, prova e curiosidade.</p></div>
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">⌨️</span><h3 class="font-semibold mb-1">Prompts copy-run</h3><p class="text-xs text-neutral-400">Gere hooks, camadas e imagens com IA, prontos pra colar.</p></div>
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">⚙️</span><h3 class="font-semibold mb-1">Sua Hook Machine</h3><p class="text-xs text-neutral-400">Uma skill reutilizável que faz tudo com um comando.</p></div>
        <div class="bg-dark-800 rounded-xl border border-dark-600 p-5"><span class="text-2xl mb-2 block">📈</span><h3 class="font-semibold mb-1">O ciclo de melhorar</h3><p class="text-xs text-neutral-400">Testar, medir retenção e dobrar no que funciona.</p></div>
      </div>
    </section>

    <section class="mb-12">
      <div class="bg-gradient-to-br from-blue-900/40 via-dark-800 to-dark-800 rounded-xl border border-blue-500/30 p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Pronto pra parar o dedo?</h2>
        <p class="text-neutral-400 mb-6 max-w-lg mx-auto">Comece pela Trilha 1 pra entender a mecânica, ou pule direto pros 165 hooks da Trilha 2.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="curso/trilha1/index.html" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors">Começar pelos Fundamentos</a>
          <a href="curso/trilha2/index.html" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors">Ver os 165 hooks</a>
        </div>
      </div>
    </section>

  </main>`;

  return { file:'index.html', html: L.shell({ title:'Curso de Viral Hooks', depth:0, activeTrack:null, accents:['emerald','blue','purple'], body }) };
}

module.exports = { buildLanding };
