/* Trilha 1 — Fundamentos (Emerald): index + 3 módulos (versão expandida).
   Define CADA termo inline (#31) e ilustra cada conceito (#29); profundidade 500-800 linhas (#14). */
const L = require('./lib.js');
const acc = 'emerald';

// ---------- SVGs ----------
function svgHook3s(){ return `        <svg viewBox="0 0 800 220" class="w-full h-auto" role="img" aria-label="Linha do tempo dos 3 primeiros segundos: nesse intervalo o espectador decide entre continuar assistindo ou deslizar para o próximo vídeo">
          <defs>
            <linearGradient id="t1m1-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <filter id="t1m1-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t1m1-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="800" height="220" fill="url(#t1m1-grid)"/>
          <line x1="60" y1="120" x2="740" y2="120" stroke="#374151" stroke-width="3"/>
          <g filter="url(#t1m1-glow)"><rect x="60" y="70" width="300" height="100" rx="14" fill="#0e2018" stroke="url(#t1m1-grad)" stroke-width="2.4"/></g>
          <text x="210" y="105" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="15">0s — 3s</text>
          <text x="210" y="128" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="12">O HOOK</text>
          <text x="210" y="150" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">decide tudo</text>
          <rect x="380" y="80" width="360" height="80" rx="14" fill="#1a1a2e" stroke="#374151" stroke-width="2"/>
          <text x="560" y="112" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-weight="600" font-size="14">resto do vídeo</text>
          <text x="560" y="134" text-anchor="middle" fill="#6b7280" font-family="Inter,sans-serif" font-size="11">só importa se o hook segurou</text>
          <text x="60" y="195" fill="#9ca3af" font-family="Inter,sans-serif" font-size="12">▲ aqui o dedo decide: continuar ou deslizar</text>
        </svg>`; }

function svgRetention(){ return `        <svg viewBox="0 0 800 240" class="w-full h-auto" role="img" aria-label="Duas curvas de retenção: com hook forte a curva cai pouco e se mantém alta; com hook fraco ela despenca nos 3 primeiros segundos">
          <defs>
            <linearGradient id="t1ret-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <pattern id="t1ret-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="800" height="240" fill="url(#t1ret-grid)"/>
          <line x1="70" y1="30" x2="70" y2="200" stroke="#4b5563" stroke-width="2"/>
          <line x1="70" y1="200" x2="760" y2="200" stroke="#4b5563" stroke-width="2"/>
          <text x="40" y="40" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">100%</text>
          <text x="50" y="205" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">0%</text>
          <text x="400" y="228" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">tempo de vídeo →</text>
          <line x1="150" y1="30" x2="150" y2="205" stroke="#374151" stroke-width="1.5" stroke-dasharray="4 4"/>
          <text x="150" y="22" text-anchor="middle" fill="#6b7280" font-family="Inter,sans-serif" font-size="10">3s</text>
          <path class="wf-a" d="M70,40 C 130,46 200,55 760,90" fill="none" stroke="url(#t1ret-grad)" stroke-width="3.5"/>
          <text x="620" y="75" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="12">hook forte (segura)</text>
          <path d="M70,40 C 110,120 140,165 760,188" fill="none" stroke="#f87171" stroke-width="3" stroke-dasharray="6 5"/>
          <text x="300" y="180" fill="#f87171" font-family="Inter,sans-serif" font-weight="600" font-size="12">hook fraco (despenca nos 3s)</text>
        </svg>`; }

function svg3layers(){ return `        <svg viewBox="0 0 800 240" class="w-full h-auto" role="img" aria-label="As 3 camadas empilhadas de um hook: frase falada (o que se ouve), visual hook (o que se vê) e text hook (o texto curto na tela), atuando juntas nos primeiros segundos">
          <defs>
            <linearGradient id="t1m2-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <filter id="t1m2-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t1m2-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="800" height="240" fill="url(#t1m2-grid)"/>
          <g filter="url(#t1m2-glow)"><rect x="250" y="20" width="300" height="200" rx="18" fill="#0e2018" stroke="url(#t1m2-grad)" stroke-width="2.4"/></g>
          <text x="400" y="46" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">o telefone do espectador</text>
          <rect x="280" y="60" width="240" height="44" rx="10" fill="#13241c" stroke="#34d399" stroke-width="1.6"/>
          <text x="400" y="80" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="13">💬 Frase falada</text>
          <text x="400" y="97" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="10">o que se OUVE</text>
          <rect x="280" y="112" width="240" height="44" rx="10" fill="#13241c" stroke="#38bdf8" stroke-width="1.6"/>
          <text x="400" y="132" text-anchor="middle" fill="#38bdf8" font-family="Inter,sans-serif" font-weight="600" font-size="13">🎬 Visual Hook</text>
          <text x="400" y="149" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="10">o que se VÊ</text>
          <rect x="280" y="164" width="240" height="44" rx="10" fill="#13241c" stroke="#34d399" stroke-width="1.6"/>
          <text x="400" y="184" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="13">🔤 Text Hook</text>
          <text x="400" y="201" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="10">o que se LÊ na tela</text>
        </svg>`; }

function svgSoundOff(){ return `        <svg viewBox="0 0 800 200" class="w-full h-auto" role="img" aria-label="Com o som desligado, a frase falada some, mas o Visual Hook e o Text Hook continuam funcionando — por isso o hook precisa das 3 camadas">
          <defs>
            <linearGradient id="t1snd-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <pattern id="t1snd-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="800" height="200" fill="url(#t1snd-grid)"/>
          <rect x="60" y="30" width="300" height="140" rx="14" fill="#1a1a2e" stroke="#4b5563" stroke-width="2"/>
          <text x="210" y="24" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">85% assistem no MUDO 🔇</text>
          <text x="210" y="72" text-anchor="middle" fill="#6b7280" font-family="Inter,sans-serif" font-size="12" text-decoration="line-through">💬 frase falada (não ouvem)</text>
          <rect x="90" y="92" width="240" height="30" rx="8" fill="#0e1622" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="210" y="112" text-anchor="middle" fill="#38bdf8" font-family="Inter,sans-serif" font-size="12">🎬 Visual Hook (veem)</text>
          <rect x="120" y="130" width="180" height="26" rx="8" fill="#13241c" stroke="#34d399" stroke-width="1.5"/>
          <text x="210" y="148" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="12">🔤 AI Took the Job</text>
          <g filter="url(#t1snd-grad)"></g>
          <path d="M410,100 L470,100" stroke="#34d399" stroke-width="2.5" marker-end="url(#t1snd-ah)"/>
          <defs><marker id="t1snd-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#34d399"/></marker></defs>
          <g><rect x="490" y="55" width="270" height="90" rx="14" fill="#0e2018" stroke="url(#t1snd-grad)" stroke-width="2.2"/></g>
          <text x="625" y="92" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">o hook ainda funciona</text>
          <text x="625" y="115" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">visual + texto seguram sem som</text>
        </svg>`; }

function svgFormula(){ return `        <svg viewBox="0 0 800 200" class="w-full h-auto" role="img" aria-label="A fórmula em 3 passos: Context Lean, Scroll Stop e Contrarian Snapback, encadeados">
          <defs>
            <linearGradient id="t1m3-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <filter id="t1m3-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t1m3-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
            <marker id="t1m3-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker>
          </defs>
          <rect x="0" y="0" width="800" height="200" fill="url(#t1m3-grid)"/>
          <g fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6"><path class="wf-a" d="M250,100 L290,100" marker-end="url(#t1m3-ah)"/><path class="wf-a" d="M510,100 L550,100" marker-end="url(#t1m3-ah)"/></g>
          <rect x="40" y="60" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1m3-grad)" stroke-width="2"/>
          <text x="145" y="95" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">Context Lean</text>
          <text x="145" y="115" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">enxuga o contexto</text>
          <g filter="url(#t1m3-glow)"><rect x="295" y="60" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1m3-grad)" stroke-width="2.4"/></g>
          <text x="400" y="95" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">Scroll Stop</text>
          <text x="400" y="115" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">trava o dedo</text>
          <rect x="550" y="60" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1m3-grad)" stroke-width="2"/>
          <text x="655" y="95" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">Contrarian Snapback</text>
          <text x="655" y="115" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">vira a expectativa</text>
        </svg>`; }

function svgAdapt(){ return `        <svg viewBox="0 0 800 210" class="w-full h-auto" role="img" aria-label="Um mesmo esqueleto de hook adaptado para três nichos diferentes, mantendo a estrutura e trocando só o contexto">
          <defs>
            <linearGradient id="t1ad-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <pattern id="t1ad-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
            <marker id="t1ad-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker>
          </defs>
          <rect x="0" y="0" width="800" height="210" fill="url(#t1ad-grid)"/>
          <rect x="40" y="80" width="230" height="56" rx="12" fill="#0e2018" stroke="url(#t1ad-grad)" stroke-width="2.2"/>
          <text x="155" y="103" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="12">ESQUELETO</text>
          <text x="155" y="122" text-anchor="middle" fill="#a7f3d0" font-family="monospace" font-size="11">"Most think X… it's not."</text>
          <g fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6">
            <path class="wf-a" d="M270,95 C 330,95 330,45 390,45" marker-end="url(#t1ad-ah)"/>
            <path class="wf-a" d="M270,108 L390,108" marker-end="url(#t1ad-ah)"/>
            <path class="wf-a" d="M270,121 C 330,121 330,170 390,170" marker-end="url(#t1ad-ah)"/>
          </g>
          ${[['🤖 IA','velocidade',26],['💰 Finanças','trabalhar mais',89],['💪 Fitness','tanquinho',151]].map(([t,c,y])=>`<rect x="390" y="${y}" width="370" height="38" rx="10" fill="#1a1a2e" stroke="#34d399" stroke-width="1.5"/><text x="405" y="${y+24}" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="12">${t}: "…sobre ${c}? Não é."</text>`).join('\n          ')}
        </svg>`; }

// helper boxes
const tip = (t,h)=>`      <div class="bg-primary/10 rounded-xl border border-primary/40 p-6 mb-6"><h3 class="text-lg font-semibold text-primary mb-2 flex items-center"><span class="mr-2">💡</span> ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const novo = (t,h)=>`      <div class="bg-emerald-900/20 rounded-xl border border-emerald-500/30 p-6 mb-6"><h3 class="text-base font-semibold text-emerald-400 mb-2 flex items-center"><span class="mr-2">🆕</span> Novo aqui? ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const data = (t,items)=>`      <div class="bg-blue-900/20 rounded-xl border border-blue-500/30 p-6 mb-6"><h3 class="text-lg font-semibold text-blue-400 mb-3 flex items-center"><span class="mr-2">📊</span> ${t}</h3><ul class="space-y-2 text-neutral-300 text-sm">${items.map(i=>`<li class="flex items-start space-x-2"><span class="text-blue-400 mt-1">•</span><span>${i}</span></li>`).join('')}</ul></div>`;
const alert = (t,h)=>`      <div class="bg-red-900/20 rounded-xl border border-red-500/30 p-6 mb-6"><h3 class="text-lg font-semibold text-red-400 mb-2 flex items-center"><span class="mr-2">⚠️</span> ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const concept = (t,h,items)=>`      <div class="bg-gradient-to-br from-emerald-900/30 to-dark-800 rounded-xl border border-emerald-500/30 p-6 mb-6"><h3 class="text-lg font-semibold text-emerald-400 mb-3 flex items-center"><span class="mr-2">🧠</span> ${t}</h3><p class="text-neutral-300 mb-3 text-sm">${h}</p>${items?`<ul class="space-y-2 text-neutral-300 text-sm">${items.map(i=>`<li class="flex items-start space-x-2"><span class="text-emerald-400 mt-1">•</span><span>${i}</span></li>`).join('')}</ul>`:''}</div>`;
const doDont = (doT, doItems, dontT, dontItems)=>`      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-emerald-900/20 rounded-xl border border-emerald-500/30 p-6"><h4 class="font-bold text-emerald-400 mb-4">✓ ${doT}</h4><ul class="space-y-3 text-neutral-300 text-sm">${doItems.map(i=>`<li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>${i}</span></li>`).join('')}</ul></div>
        <div class="bg-red-900/20 rounded-xl border border-red-500/30 p-6"><h4 class="font-bold text-red-400 mb-4">✗ ${dontT}</h4><ul class="space-y-3 text-neutral-300 text-sm">${dontItems.map(i=>`<li class="flex items-start space-x-2"><span class="text-red-400">✗</span><span>${i}</span></li>`).join('')}</ul></div>
      </div>`;
const keygrid = (items)=>`      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">${items.map(i=>`<div class="bg-dark-800 rounded-xl p-4 border border-dark-600 text-center"><div class="text-2xl mb-1">${i.e}</div><div class="text-sm font-semibold text-emerald-400">${i.t}</div><p class="text-xs text-neutral-400 mt-1">${i.d}</p></div>`).join('')}</div>`;
const lede = (mod,n,h)=>`      <p data-inema-block="m${mod}-t${n}-p1" class="text-neutral-300 mb-6 leading-relaxed">${h}</p>`;
const para = (mod,n,p,h)=>`      <p data-inema-block="m${mod}-t${n}-p${p}" class="text-neutral-300 mb-6 leading-relaxed">${h}</p>`;
const svgP = svg => L.svgPanel('emerald', svg);

// ---------- MÓDULO 1-1 ----------
function mod11(){
  const mod='1-1';
  const checks=[
    {id:`modulo-${mod}#q1`, pergunta:'Você tem 2 versões da mesma frase de abertura. Qual para mais o dedo?', options:[
      {t:'A) "Hoje vou dar dicas incríveis de produtividade."', e:'Genérica e vaga — confirma o padrão do feed, o dedo desliza.'},
      {t:'B) "Recuperei 3 horas por dia cortando uma única reunião."', correct:true, e:'Específica (3 horas, uma reunião) e abre lacuna ("qual reunião?"). É um pattern interrupt.'},
      {t:'C) "Produtividade é muito importante para todos nós."', e:'Óbvia e sem tensão — não há lacuna nem especificidade.'},
    ]},
  ];
  const secs=[
L.section({n:1,mod,acc,title:'O que é um hook (e por que ele decide o vídeo)',inner:
`${lede(mod,1,'Um <strong class="text-emerald-400">hook</strong> é a isca dos primeiros segundos de um vídeo: a primeira frase + a primeira imagem que aparecem antes de qualquer explicação. Ele tem uma única missão — fazer a pessoa <strong>não deslizar pro próximo</strong>.')}
${para(mod,1,2,'Repare que "hook" não é "introdução". Introdução prepara o assunto; o hook ataca a atenção. Num vídeo curto não existe tempo pra preparar nada: ou você fisga em segundos, ou perdeu.')}
${svgP(svgHook3s())}
${novo('O que é "scroll"?','"Scroll" é o ato de deslizar o feed com o dedo (TikTok, Reels, Shorts). "Scroll stop" — travar o scroll — é o objetivo do hook: a cena que faz o polegar parar no seu vídeo em vez de seguir pro próximo.')}
${concept('Por que os 3 primeiros segundos valem mais que o resto','Nas redes de vídeo curto, a pessoa decide em ~1 a 3 segundos se continua. Se o hook falha, ela desliza e o algoritmo entende que seu vídeo "não segura" — e para de entregar.',['O resto do roteiro só é assistido se o hook segurar.','Um vídeo bom com hook fraco morre; um vídeo médio com hook forte viraliza.','Por isso criadores profissionais gastam mais tempo no hook do que em todo o resto.'])}
${L.worked('emerald','Um hook desmontado','"A IA substituiu um cargo de US$200 mil… mas o chocante não é isso."','cadeira de escritório vazia, tela com aviso "Posição Encerrada"','AI Took the Job','As 3 camadas apontam pra mesma ameaça nos primeiros frames — e a frase ainda abre uma lacuna ("então o que choca?").')}
${keygrid([{e:'🎣',t:'Hook',d:'a isca dos 3s iniciais'},{e:'🛑',t:'Scroll stop',d:'travar o dedo'},{e:'⏱️',t:'3 segundos',d:'a janela de decisão'},{e:'📈',t:'Entrega',d:'algoritmo recompensa retenção'}])}`}),
L.section({n:2,mod,acc,title:'Retenção, watch-time e CTR — as métricas que o hook move',inner:
`${lede(mod,2,'O hook não é estética: ele move <strong>números</strong> que o algoritmo usa pra decidir se te entrega pra mais gente. Vale definir cada um, porque o curso inteiro gira em torno deles.')}
${novo('Os 3 termos, em uma frase cada','<strong>Retenção</strong> = quantos % do vídeo a pessoa assiste antes de sair. <strong>Watch-time</strong> = o tempo total somado que as pessoas passam assistindo. <strong>CTR</strong> (click/swipe-through rate) = quantos % que viram o vídeo realmente pararam pra assistir em vez de deslizar.')}
${L.compareTable('emerald',['Métrica','O que é','O que o hook faz nela'],[
  ['Retenção','% do vídeo assistido','Segura os 3s e mantém a curva alta'],
  ['Watch-time','tempo total somado','Mais gente × mais segundos = mais combustível'],
  ['CTR / scroll-stop','% que parou em vez de deslizar','Visual + contrarian aumentam quem para'],
  ['Re-watch','quem assiste de novo','Hook intrigante puxa o "voltar pro início"'],
])}
${L.details('emerald','Indo mais fundo: a curva de retenção', svgRetention() + '<p class="mt-3">Toda plataforma mostra um gráfico de retenção: o eixo horizontal é o tempo do vídeo, o vertical é quantos % ainda estão assistindo. A queda mais brutal quase sempre acontece nos <strong>3 primeiros segundos</strong> — é ali que o hook fraco perde a audiência. Um hook forte "achata" essa queda inicial e mantém a curva alta, o sinal nº 1 que o algoritmo procura.</p>')}
${tip('A regra do "primeiro frame"','O primeiro frame (a imagem congelada que aparece antes de tocar) já é parte do hook. Se ele for genérico, a pessoa desliza antes do áudio começar. Por isso, neste curso, todo hook tem uma camada VISUAL.')}`}),
L.section({n:3,mod,acc,title:'Pattern interrupt: por que o cérebro para no inesperado',inner:
`${lede(mod,3,'O <strong class="text-emerald-400">pattern interrupt</strong> (quebra de padrão) é o mecanismo psicológico por trás de todo hook que funciona: o cérebro ignora o esperado e acorda diante do inesperado.')}
${novo('O que é "pattern interrupt"','É qualquer coisa que rompe o esperado: uma afirmação absurda, uma imagem estranha, um número específico demais. O feed é uma sequência previsível; o que quebra a previsão recebe atenção automática — antes mesmo da pessoa decidir prestar atenção.')}
${doDont('Quebra o padrão (para o dedo)',['Afirmação que contraria o senso comum ("não é sobre velocidade")','Imagem inesperada (cadeira de escritório vazia + "Posição Encerrada")','Número específico demais ("fez em 4 segundos")'],'Confirma o padrão (o dedo desliza)',['Abertura genérica ("Oi pessoal, hoje vou falar sobre…")','Imagem clichê sem tensão','Promessa vaga ("dicas incríveis de IA")'])}
${concept('3 alavancas de quebra de padrão',null,['<strong>Absurdo plausível:</strong> algo que parece impossível mas pode ser real ("esse robô aprendeu a mentir").','<strong>Específico demais:</strong> número que ninguém inventaria ("US$500 em US$15.000").','<strong>Tabu / proibido:</strong> "convenceu um humano a infringir a lei", "o que ninguém percebeu".'])}
${tip('Específico vence genérico','"Ganhei dinheiro" não para ninguém. "Transformei US$500 em US$15.000 sem tocar na bolsa" para — porque o específico cria uma imagem concreta e uma pergunta ("como?").')}
${L.quiz(checks[0])}`}),
L.section({n:4,mod,acc,title:'A anatomia: gancho + tensão + promessa',inner:
`${lede(mod,4,'Todo hook forte tem três engrenagens internas. Reconhecê-las te deixa <strong>desmontar e remontar</strong> qualquer hook viral.')}
${concept('As 3 engrenagens',null,['<strong>Gancho (atenção):</strong> a quebra de padrão que para o dedo — a parte chocante ou estranha.','<strong>Tensão (lacuna):</strong> a pergunta que fica no ar e exige resposta ("mas não é isso que choca…").','<strong>Promessa (recompensa):</strong> a entrega implícita de que vale a pena ficar — você vai descobrir algo útil ou surpreendente.'])}
${L.compareTable('emerald',['Hook','Gancho','Tensão','Promessa'],[
  ['"Perdi US$50 mil numa semana… e faria de novo."','perda enorme','por que faria de novo?','há uma lição contraintuitiva'],
  ['"Esse app lê sua mente — literalmente."','afirmação absurda','é metáfora ou real?','demonstração impressionante'],
  ['"Pare de poupar pra aposentadoria — faça isto."','contraria o óbvio','fazer o quê, então?','estratégia melhor revelada'],
])}
${L.worked('emerald','Desmontando "Most people fear AI… I fear the people controlling it."','"A maioria teme a IA… eu temo quem a controla."','silhueta controlando uma rede de robôs','Who Controls AI','Gancho: medo reconhecível. Tensão: a virada ("eu temo OUTRA coisa"). Promessa: uma visão mais sofisticada do tema.')}
${alert('Faltou uma engrenagem? O hook capenga','Só gancho = choca e esvazia. Só promessa = soa vago. A tensão é a cola que segura entre o choque e a entrega.')}`}),
L.section({n:5,mod,acc,title:'Por que o algoritmo recompensa hooks',inner:
`${lede(mod,5,'O algoritmo não "gosta" do seu vídeo — ele <strong>mede reações</strong> e entrega o que prende atenção. O hook é o que dispara as reações certas no início.')}
${concept('O ciclo de entrega',null,['Você publica → a plataforma mostra pra um lote pequeno de pessoas.','Se o hook segura (alta retenção nos 3s, poucos "skips"), ela entende "isto prende" e amplia o lote.','Mais alcance → mais sinais → mais entrega. O hook é o gatilho da primeira bola de neve.'])}
${data('O que a plataforma observa nos primeiros segundos',['Quantos deslizaram antes de 3s (quanto menos, melhor).','A inclinação da curva de retenção logo no começo.','Re-watches e idas pro perfil — sinais de que o início valeu.','Comentários/compartilhamentos que o hook provocou.'])}
${L.details('emerald','Indo mais fundo: o "teste de lote"','<p>Pense que cada vídeo passa por uma série de "testes de lote". O lote 1 são ~200-500 pessoas. Se a retenção e o engajamento batem certo limiar, vem o lote 2 (alguns milhares), depois o lote 3, e assim por diante. O hook é o que decide se você passa do lote 1 — por isso dois vídeos com o mesmo conteúdo e hooks diferentes têm destinos completamente opostos.</p>')}
${tip('Hook bom não salva conteúdo ruim — mas conteúdo bom morre com hook ruim','Pense no hook como o porteiro: ele decide quem entra. Sem ele, ninguém chega ao seu melhor conteúdo.')}`}),
L.section({n:6,mod,acc,title:'Mitos que travam criadores iniciantes',inner:
`${lede(mod,6,'Antes de partir pra prática, vale derrubar as crenças que fazem o iniciante desperdiçar bons vídeos com hooks fracos.')}
${doDont('Verdade',['O hook é a parte mais importante — merece mais tempo.','Pode (e deve) reusar fórmulas de hook que já provaram funcionar.','O visual e o texto na tela fazem parte do hook, não só a fala.'],'Mito',['"Se o conteúdo é bom, ele acha o público sozinho."','"Usar fórmula é trapaça / não é autêntico."','"Hook é só a primeira frase falada."'])}
${L.compareTable('emerald',['Crença comum','Realidade'],[
  ['"Preciso de equipamento caro"','Um hook forte vale mais que uma câmera 4K'],
  ['"Tenho que aparecer / falar bem"','Visual + texto seguram mesmo sem você na tela'],
  ['"É sorte / viralizou do nada"','Padrão repetível: hook → retenção → entrega'],
])}
${tip('Próximo passo','No Módulo 1.2 você vai destrinchar as <strong>3 camadas</strong> de todo hook deste curso — a frase falada, o Visual Hook e o Text Hook — e ver como elas se reforçam.')}`}),
  ].join('\n');
  const body=`${L.breadcrumb({acc,trilhaLabel:'Trilha 1',mod})}
${L.moduleHeader({acc,mod,emoji:'🎣',title:'Anatomia de um hook',desc:'O que é um hook, por que ele decide se o vídeo vive ou morre, e as engrenagens internas que fazem o dedo parar.',stats:[{v:'6',k:'Tópicos'},{v:'~30',k:'Minutos'},{v:'Base',k:'Nível'},{v:'Teoria',k:'Tipo'}]})}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="1">
${secs}
${L.moduleSummary({acc,points:[
  '<strong class="text-white">Hook = isca dos 3s</strong><span class="text-neutral-400"> — a primeira frase + primeira imagem que evitam o scroll.</span>',
  '<strong class="text-white">Move métricas reais</strong><span class="text-neutral-400"> — retenção, watch-time e CTR, que guiam o algoritmo.</span>',
  '<strong class="text-white">Pattern interrupt</strong><span class="text-neutral-400"> — o cérebro para no inesperado; específico vence genérico.</span>',
  '<strong class="text-white">Gancho + tensão + promessa</strong><span class="text-neutral-400"> — as 3 engrenagens de todo hook forte.</span>',
],nextLabel:'Módulo 1.2',nextHref:'modulo-1-2.html'})}
  </main>`;
  return {file:`curso/trilha1/modulo-${mod}.html`,html:L.shell({title:'Anatomia de um hook',depth:2,activeTrack:1,accents:['emerald'],body,extraScript:L.checkScript(checks)})};
}

// ---------- MÓDULO 1-2 ----------
function mod12(){
  const mod='1-2';
  const checks=[
    {id:`modulo-${mod}#q1`, pergunta:'85% das pessoas começam vídeos no mudo. Qual camada NÃO chega nelas?', options:[
      {t:'A) O Visual Hook', e:'O visual é exatamente o que funciona no mudo — chega sim.'},
      {t:'B) A frase falada', correct:true, e:'Isso. Sem som, a frase falada não é ouvida — por isso visual + texto são obrigatórios.'},
      {t:'C) O Text Hook', e:'O texto na tela é lido mesmo sem som — chega.'},
    ]},
  ];
  const secs=[
L.section({n:1,mod,acc,title:'As 3 camadas de todo hook deste curso',inner:
`${lede(mod,1,'Cada um dos 165 hooks deste curso é montado em <strong>3 camadas</strong> que tocam ao mesmo tempo nos primeiros segundos. Entender as camadas é o que te deixa montar hooks novos do zero.')}
${svgP(svg3layers())}
${concept('As 3 camadas','Elas atuam em canais sensoriais diferentes — ouvido, olho e leitura — e por isso se reforçam.',['<strong>💬 Frase falada</strong> (spoken line): o que você narra ou diz no início. É a tensão verbal.','<strong>🎬 Visual Hook:</strong> a cena/imagem que aparece — o que trava o dedo antes do áudio.','<strong>🔤 Text Hook:</strong> o texto curto (2-3 palavras) sobreposto na tela, pra quem assiste sem som.'])}
${L.compareTable('emerald',['Camada','Canal','Função','Exemplo'],[
  ['Frase falada','ouvido','tensão verbal, lacuna','"…mas não é isso que choca"'],
  ['Visual Hook','olho','para o dedo no frame 0','cadeira vazia + "Posição Encerrada"'],
  ['Text Hook','leitura','hook no mudo','AI Took the Job'],
])}
${tip('Por que 3 e não 1','85% das pessoas começam vídeos no mudo. Sem Text Hook e Visual, elas nunca ouvem sua melhor frase. As 3 camadas garantem que o hook funcione com ou sem som.')}`}),
L.section({n:2,mod,acc,title:'Camada 1 — a frase falada (spoken line)',inner:
`${lede(mod,2,'A <strong class="text-emerald-400">frase falada</strong> é a linha que você narra nos primeiros segundos. É onde mora a tensão verbal — a lacuna que exige resposta.')}
${novo('Spoken line ≠ legenda','A frase falada é o roteiro do que você DIZ. A legenda automática transcreve isso, mas o Text Hook (camada 3) é diferente: é um resumo curtíssimo, escolhido a dedo, em destaque.')}
${data('O que faz uma boa frase falada',['Cabe em ~2 segundos de fala (curta).','Abre uma lacuna ("…mas não é isso que choca").','Usa específico (número, nome, valor) em vez de adjetivo vago.','Termina deixando a pergunta no ar, não a resposta.'])}
${doDont('Frase falada forte',['"Pedi o impossível pra IA… ela fez em 4 segundos."','"Perdi US$50 mil numa semana… e faria de novo."'],'Frase falada fraca',['"Hoje vou mostrar umas coisas legais de IA."','"Investir é importante, hoje vamos falar sobre dinheiro."'])}
${L.details('emerald','Indo mais fundo: 4 aberturas que sempre abrem lacuna','<ul class="space-y-2"><li>• <strong>"Most people think X…"</strong> → contraria uma crença.</li><li>• <strong>"I [resultado absurdo]…"</strong> → prova pessoal + curiosidade.</li><li>• <strong>"This [coisa] can [feito impossível]…"</strong> → demonstração.</li><li>• <strong>"The [superlativo] … não é onde se espera."</strong> → quebra de expectativa.</li></ul>')}`}),
L.section({n:3,mod,acc,title:'Camada 2 — o Visual Hook',inner:
`${lede(mod,3,'O <strong class="text-emerald-400">Visual Hook</strong> é a cena que aparece na tela no segundo zero. Muitas vezes é o que REALMENTE para o dedo — antes do cérebro processar qualquer palavra.')}
${novo('Visual Hook em uma frase','É a imagem ou micro-cena que ilustra (ou contrasta com) a frase falada: uma cadeira de escritório vazia, um gráfico despencando em vermelho, um cofrinho quebrando. Concreto, com tensão, e legível em telinha de celular.')}
${concept('3 tipos de Visual Hook que funcionam',null,['<strong>Mostra a consequência:</strong> "Posição Encerrada" na tela, conta bancária despencando.','<strong>Cria contraste:</strong> ChatGPT × UI ultra-futurista lado a lado.','<strong>Transformação rápida:</strong> US$100 virando barras de ouro, halter virando frigideira.'])}
${L.worked('emerald','Visual carregando o hook sozinho','"Esse truque clona sua voz em 3 segundos."','onda de áudio transformando de uma voz em outra','Voice Cloning','Mesmo sem som, a onda mudando "conta" a história — o visual já é o hook.')}
${tip('No curso, cada hook tem uma imagem de referência','Na Trilha 2, você vê uma imagem gerada por IA pra cada um dos 165 Visual Hooks — exatamente pra você visualizar a cena antes de gravar.')}`}),
L.section({n:4,mod,acc,title:'Camada 3 — o Text Hook (overlay)',inner:
`${lede(mod,4,'O <strong class="text-emerald-400">Text Hook</strong> é o texto curto que fica sobreposto na tela — geralmente 2 a 3 palavras grandes. É o hook pra quem assiste no mudo.')}
${svgP(svgSoundOff())}
${novo('Text Hook em uma frase','É o resumo brutalmente curto da promessa, em destaque visual: "AI Took the Job", "Lost 50K", "Passive Income Trap". Não é a legenda inteira — é a manchete.')}
${data('Regras do Text Hook',['Curto: 2-3 palavras. Se não cabe num olhar, é longo demais.','Alto contraste, fonte grande, no terço superior ou central.','Reforça a tensão da frase falada, não repete ela inteira.','Aparece já no frame 0, junto com o visual.'])}
${tip('English vs Português','Os Text Hooks do material vêm em inglês (mercado global). Você pode usá-los assim ou adaptar: "Lost 50K" → "Perdi 50 mil". Na Trilha 2 cada card mostra o original + a versão PT-BR.')}
${L.quiz(checks[0])}`}),
L.section({n:5,mod,acc,title:'Como as 3 camadas se reforçam (e os erros comuns)',inner:
`${lede(mod,5,'A mágica não está em cada camada isolada, e sim na <strong>sobreposição</strong>. Quando as três apontam pra mesma tensão, o hook fica difícil de ignorar.')}
${concept('Empilhamento certo — exemplo','Hook "AI Took the Job":',['💬 Falada: "A IA substituiu um cargo de US$200 mil… mas o chocante não é isso."','🎬 Visual: cadeira de escritório vazia, tela com aviso "Posição Encerrada".','🔤 Texto: AI Took the Job.'])}
${doDont('Camadas alinhadas',['As 3 apontam pra mesma ideia (ameaça do emprego).','Visual concreto que dá pra "ler" em 1 segundo.','Texto curto que reforça sem repetir a fala.'],'Camadas brigando',['Fala fala de IA, visual mostra paisagem genérica.','Texto longo demais (uma frase inteira na tela).','Visual bonito mas sem tensão nenhuma.'])}
${L.details('emerald','Indo mais fundo: o teste dos 3 cortes','<p>Pegue seu hook pronto e faça 3 testes isolados: <strong>(1)</strong> leia só o Text Hook — desperta curiosidade sozinho? <strong>(2)</strong> veja só o Visual no mudo — dá pra entender a tensão? <strong>(3)</strong> ouça só a fala de olhos fechados — abre uma lacuna? Se passar nos três, suas camadas estão alinhadas e o hook funciona em qualquer condição de consumo.</p>')}`}),
L.section({n:6,mod,acc,title:'Exercício: monte suas 3 camadas',inner:
`${lede(mod,6,'Hora de praticar. Pegue uma ideia sua e preencha as 3 camadas — esse é exatamente o formato que você vai reusar pro resto da vida.')}
${concept('Template das 3 camadas',null,['<strong>💬 Frase falada:</strong> _________ (curta, com lacuna + específico)','<strong>🎬 Visual Hook:</strong> _________ (cena concreta com tensão)','<strong>🔤 Text Hook:</strong> _________ (2-3 palavras)'])}
      <div class="bg-dark-800 rounded-xl border border-dark-600 p-6 mb-6">
        <h4 class="font-semibold text-white mb-3">Exemplo preenchido (nicho fitness)</h4>
        <div class="bg-dark-700 rounded-lg p-4 font-mono text-sm space-y-1">
          <p class="text-emerald-400">💬 "O melhor treino não é na academia… é na sua cozinha."</p>
          <p class="text-sky-400">🎬 halter se transformando numa frigideira</p>
          <p class="text-primary">🔤 Kitchen Gains</p>
        </div>
      </div>
${L.worked('emerald','Mesmo exercício, nicho finanças','"Sua conta poupança está te custando dinheiro."','cofre de banco vazando notas pelo chão','Losing Money','Falada com paradoxo (poupança que custa), visual de perda concreta, texto-manchete de 2 palavras.')}
${tip('Checagem rápida','Leia só o Text Hook: ele sozinho desperta curiosidade? Olhe só o Visual: dá pra entender a tensão sem som? Se sim nos dois, suas camadas estão fortes.')}`}),
  ].join('\n');
  const body=`${L.breadcrumb({acc,trilhaLabel:'Trilha 1',mod})}
${L.moduleHeader({acc,mod,emoji:'🧱',title:'As 3 camadas do hook',desc:'Frase falada, Visual Hook e Text Hook: o que cada camada faz, como se reforçam e como montar as suas.',stats:[{v:'6',k:'Tópicos'},{v:'~30',k:'Minutos'},{v:'Base',k:'Nível'},{v:'Prático',k:'Tipo'}]})}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="1">
${secs}
${L.moduleSummary({acc,points:[
  '<strong class="text-white">3 camadas</strong><span class="text-neutral-400"> — frase falada, Visual Hook e Text Hook, atuando juntas.</span>',
  '<strong class="text-white">Som opcional</strong><span class="text-neutral-400"> — o hook precisa funcionar no mudo (visual + texto).</span>',
  '<strong class="text-white">Alinhamento</strong><span class="text-neutral-400"> — as 3 camadas apontam pra mesma tensão.</span>',
  '<strong class="text-white">Template reutilizável</strong><span class="text-neutral-400"> — você já sabe montar suas próprias 3 camadas.</span>',
],nextLabel:'Módulo 1.3',nextHref:'modulo-1-3.html'})}
  </main>`;
  return {file:`curso/trilha1/modulo-${mod}.html`,html:L.shell({title:'As 3 camadas do hook',depth:2,activeTrack:1,accents:['emerald'],body,extraScript:L.checkScript(checks)})};
}

// ---------- MÓDULO 1-3 ----------
function mod13(){
  const mod='1-3';
  const checks=[
    {id:`modulo-${mod}#q1`, pergunta:'O que caracteriza o "Contrarian Snapback"?', options:[
      {t:'A) Começar com uma longa introdução do tema', e:'Isso é o oposto — Context Lean manda cortar a introdução.'},
      {t:'B) Tocar numa crença comum e contrariá-la', correct:true, e:'Exato. O snapback vira a expectativa ("…não é", "pare de…") e cria a lacuna que segura.'},
      {t:'C) Mostrar a imagem mais bonita possível', e:'Beleza sem tensão não vira o snapback — é preciso contrariar uma crença.'},
    ]},
  ];
  const secs=[
L.section({n:1,mod,acc,title:'A fórmula: Context Lean → Scroll Stop → Contrarian Snapback',inner:
`${lede(mod,1,'O PDF organiza todos os 165 hooks numa fórmula de 3 passos. Ela é o esqueleto que você aplica pra criar hooks novos em qualquer nicho.')}
${svgP(svgFormula())}
${concept('Os 3 passos','Cada passo corresponde a uma decisão do espectador.',['<strong>Context Lean:</strong> entre direto, com o mínimo de contexto. Zero "oi pessoal".','<strong>Scroll Stop:</strong> entregue a cena/afirmação que trava o dedo nos primeiros frames.','<strong>Contrarian Snapback:</strong> vire a expectativa — contrarie o que a pessoa acredita.'])}
${L.compareTable('emerald',['Passo','Pergunta do espectador','O que você entrega'],[
  ['Context Lean','"isso é pra mim?"','o pico, sem rodeio'],
  ['Scroll Stop','"ué, o que é isso?"','a cena/afirmação que trava'],
  ['Contrarian Snapback','"peraí, não era assim?"','a virada que segura até o fim'],
])}`}),
L.section({n:2,mod,acc,title:'Passo 1 — Context Lean (corta o contexto)',inner:
`${lede(mod,2,'<strong class="text-emerald-400">Context Lean</strong> = "magro de contexto". A maioria dos vídeos morre porque gasta os 3 segundos de ouro se apresentando. A fórmula manda começar já no pico.')}
${novo('"Lean" aqui significa enxuto','Nada de aquecimento. A primeira palavra já é parte do hook. Pense em começar o vídeo no meio da frase mais interessante, não no "antes dela".')}
${doDont('Context Lean (entra no pico)',['"A IA substituiu um cargo de US$200 mil…"','"Perdi US$50 mil numa semana…"'],'Contexto gordo (perde os 3s)',['"Oi gente, tudo bem? Então, hoje eu queria falar sobre…"','"Antes de começar, se inscreve no canal…"'])}
${L.details('emerald','Indo mais fundo: o teste do "corte na frase 1"','<p>Grave seu vídeo e tente <strong>deletar a primeira frase inteira</strong>. Na maioria das vezes o vídeo melhora — aquela frase era só aquecimento. Repita até a primeira frase que sobrar já ser interessante por si só. Esse é o Context Lean na prática.</p>')}`}),
L.section({n:3,mod,acc,title:'Passo 2 — Scroll Stop (trava o dedo)',inner:
`${lede(mod,3,'<strong class="text-emerald-400">Scroll Stop</strong> é o momento em que a cena ou a afirmação para o dedo. É onde o Visual Hook brilha — a imagem inesperada que interrompe o feed.')}
${data('O que gera scroll stop',['Imagem com tensão (algo prestes a dar errado, um contraste forte).','Afirmação que parece impossível ou perigosa.','Número específico demais pra ser inventado.','Movimento ou transformação logo no primeiro frame.'])}
${L.worked('emerald','Scroll stop pelo visual','"Esse hábito queima mais gordura que uma hora de cardio."','relógio correndo enquanto o % de gordura corporal cai','Faster Than Cardio','O número descendo é o scroll stop — o olho trava na transformação antes da fala terminar.')}
${tip('O scroll stop acontece ANTES da palavra','Muitas vezes a pessoa para pelo VISUAL e só depois ouve a frase. Por isso a fórmula trata o visual como protagonista, não enfeite.')}`}),
L.section({n:4,mod,acc,title:'Passo 3 — Contrarian Snapback (vira a expectativa)',inner:
`${lede(mod,4,'<strong class="text-emerald-400">Contrarian Snapback</strong> é a virada: você toca numa crença comum e a contraria — "…não é", "…está errado", "pare de fazer isso". É o que transforma atenção em curiosidade.')}
${novo('"Snapback" = o estalo da virada','É aquele momento "ué?". A pessoa acreditava em X, você diz "não é X" — e agora ela precisa ficar pra entender por quê. A lacuna criada é o que segura até o fim.')}
${concept('Padrões de Contrarian Snapback',null,['"Todo mundo faz X… aqui está por que é uma armadilha."','"Você acha que precisa de X — mas precisa de Y."','"Pare de X — faça Y."','"Disseram que X… não é."'])}
${alert('Sem a virada, vira clickbait vazio','O snapback precisa entregar a virada no conteúdo. Prometer "não é isso que choca" e não ter revelação real queima sua reputação e a retenção cai nas próximas vezes.')}
${L.quiz(checks[0])}`}),
L.section({n:5,mod,acc,title:'Os 5 nichos e seus objetivos',inner:
`${lede(mod,5,'O material cobre os <strong>5 nichos mais populares</strong>. Cada um vende um desejo diferente — e o hook precisa falar com esse desejo. Esta é a ponte pra Trilha 2.')}
      <div class="space-y-4 mb-6">
        ${[['🤖','AI & Technology','Futuro e medo de ficar pra trás','ameaça, espanto, bastidor proibido'],['💰','Finanças & Negócios','Atalho e status financeiro','número específico, confissão, regra contraintuitiva'],['💪','Saúde & Fitness','Resultado com menos sacrifício','o erro que te trava, o atalho, o mito da indústria'],['🚀','Autodesenvolvimento','Controle e clareza','reposicionar o problema, prometer sistema simples'],['✈️','Viagem & Aventura','Desejo e descoberta','lugar secreto, extremo, choque de preço']].map(([e,n,o,c])=>`<div class="flex items-start space-x-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">${e}</div><div class="flex-1 bg-dark-800 rounded-xl p-5 border border-dark-600"><h4 class="font-semibold text-white mb-1">${n}</h4><p class="text-sm text-neutral-400"><strong class="text-emerald-400">Vende:</strong> ${o}. <strong class="text-emerald-400">Hooks típicos:</strong> ${c}.</p></div></div>`).join('\n        ')}
      </div>
${tip('Mesma fórmula, desejo diferente','A fórmula é igual nos 5 nichos. O que muda é o DESEJO que você aperta. Acertar o desejo do nicho é metade do hook.')}`}),
L.section({n:6,mod,acc,title:'Escolhendo seu nicho e adaptando os hooks',inner:
`${lede(mod,6,'Você não precisa inventar do zero: pega um hook que já funciona e adapta pro seu nicho/idioma. Esse é o atalho que a Trilha 3 automatiza com IA.')}
${svgP(svgAdapt())}
${concept('Como adaptar um hook em 3 passos',null,['<strong>1. Escolha o padrão:</strong> medo, contrarian, número, prova ou curiosidade.','<strong>2. Troque o contexto:</strong> mantenha a estrutura, mude o assunto pro seu nicho.','<strong>3. Reescreva as 3 camadas:</strong> frase falada + visual + texto na tela.'])}
      <div class="bg-dark-800 rounded-xl border border-dark-600 p-6 mb-6">
        <h4 class="font-semibold text-white mb-3">Exemplo de adaptação (mesmo esqueleto, 3 nichos)</h4>
        <div class="bg-dark-700 rounded-lg p-4 font-mono text-sm space-y-2">
          <p class="text-neutral-400"># Esqueleto: "Most people think X… it's not."</p>
          <p class="text-emerald-400">IA: "A maioria acha que IA é sobre velocidade… não é."</p>
          <p class="text-emerald-400">Finanças: "A maioria acha que riqueza vem de trabalhar mais. Não vem."</p>
          <p class="text-emerald-400">Fitness: "Todo mundo persegue o tanquinho… veja o que buscar."</p>
        </div>
      </div>
${tip('Pronto pra Trilha 2','Agora você tem a base: hook, 3 camadas e a fórmula. Na Trilha 2 você vê os 165 hooks reais, com imagem, agrupados pelos padrões — e na Trilha 3 aprende a gerar os seus com IA.')}`}),
  ].join('\n');
  const body=`${L.breadcrumb({acc,trilhaLabel:'Trilha 1',mod})}
${L.moduleHeader({acc,mod,emoji:'🧪',title:'A fórmula e os 5 nichos',desc:'Context Lean → Scroll Stop → Contrarian Snapback, e o desejo que cada um dos 5 nichos vende.',stats:[{v:'6',k:'Tópicos'},{v:'~30',k:'Minutos'},{v:'Base',k:'Nível'},{v:'Teoria',k:'Tipo'}]})}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="1">
${secs}
${L.moduleSummary({acc,points:[
  '<strong class="text-white">A fórmula</strong><span class="text-neutral-400"> — Context Lean → Scroll Stop → Contrarian Snapback.</span>',
  '<strong class="text-white">Entre no pico</strong><span class="text-neutral-400"> — corte o contexto, trave o dedo, vire a expectativa.</span>',
  '<strong class="text-white">5 nichos, 5 desejos</strong><span class="text-neutral-400"> — mesma fórmula, gatilho diferente por nicho.</span>',
  '<strong class="text-white">Adaptar > inventar</strong><span class="text-neutral-400"> — pegue um esqueleto que funciona e troque o contexto.</span>',
],nextLabel:'Ir para a Trilha 2',nextHref:'../trilha2/index.html'})}
  </main>`;
  return {file:`curso/trilha1/modulo-${mod}.html`,html:L.shell({title:'A fórmula e os 5 nichos',depth:2,activeTrack:1,accents:['emerald'],body,extraScript:L.checkScript(checks)})};
}

// ---------- INDEX T1 ----------
function t1Index(){
  const heroSvg = L.svgPanel('emerald', `        <svg viewBox="0 0 800 220" class="w-full h-auto" role="img" aria-label="Fundamentos em 3 módulos: anatomia do hook, as 3 camadas e a fórmula com os 5 nichos">
          <defs>
            <linearGradient id="t1hero-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#10b981"/></linearGradient>
            <filter id="t1hero-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t1hero-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#34d399" opacity="0.10"/></pattern>
            <marker id="t1hero-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker>
          </defs>
          <rect x="0" y="0" width="800" height="220" fill="url(#t1hero-grid)"/>
          <g fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6"><path class="wf-a" d="M250,110 L290,110" marker-end="url(#t1hero-ah)"/><path class="wf-a" d="M510,110 L550,110" marker-end="url(#t1hero-ah)"/></g>
          <rect x="40" y="70" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1hero-grad)" stroke-width="2"/>
          <text x="145" y="105" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">🎣 Anatomia</text>
          <text x="145" y="125" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">o que é um hook</text>
          <g filter="url(#t1hero-glow)"><rect x="295" y="70" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1hero-grad)" stroke-width="2.4"/></g>
          <text x="400" y="105" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">🧱 3 camadas</text>
          <text x="400" y="125" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">falada · visual · texto</text>
          <rect x="550" y="70" width="210" height="80" rx="14" fill="#0e2018" stroke="url(#t1hero-grad)" stroke-width="2"/>
          <text x="655" y="105" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">🧪 Fórmula</text>
          <text x="655" y="125" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">+ os 5 nichos</text>
        </svg>`);

  const modulesMeta = [
    {mod:'1-1',emoji:'🎣',title:'Anatomia de um hook',sub:'Por que os 3s decidem tudo',dur:'~30 min',
      topics:[['💬','O que é um hook','isca + scroll stop'],['📊','Retenção, watch-time, CTR','as métricas do hook'],['🧠','Pattern interrupt','o cérebro para no inesperado'],['🔧','Gancho + tensão + promessa','as 3 engrenagens'],['📈','Por que o algoritmo recompensa','o ciclo de entrega'],['🚫','Mitos de iniciante','o que trava criadores']]},
    {mod:'1-2',emoji:'🧱',title:'As 3 camadas do hook',sub:'Falada · visual · texto na tela',dur:'~30 min',
      topics:[['🧱','As 3 camadas','visão geral'],['💬','Frase falada','a tensão verbal'],['🎬','Visual Hook','o que trava o dedo'],['🔤','Text Hook','o overlay no mudo'],['🔗','Como se reforçam','alinhamento das camadas'],['🎯','Exercício','monte suas 3 camadas']]},
    {mod:'1-3',emoji:'🧪',title:'A fórmula e os 5 nichos',sub:'Context Lean → Scroll Stop → Snapback',dur:'~30 min',
      topics:[['🧪','A fórmula','os 3 passos'],['✂️','Context Lean','corta o contexto'],['🛑','Scroll Stop','trava o dedo'],['🔄','Contrarian Snapback','vira a expectativa'],['🗂️','Os 5 nichos','desejo de cada um'],['🎛️','Escolher e adaptar','do esqueleto ao seu hook']]},
  ];

  const mapaCards = modulesMeta.map(m=>`        <a href="#modulo-${m.mod}" class="group bg-dark-800 rounded-xl border border-dark-600 hover:border-emerald-500/30 p-5 transition-all">
          <div class="flex items-center justify-between mb-2"><span class="text-emerald-400 font-bold text-sm">${m.mod.replace('-','.')}</span><span class="text-xs text-neutral-500">${m.dur}</span></div>
          <h3 class="font-semibold mb-1 group-hover:text-emerald-400 transition-colors">${m.emoji} ${m.title}</h3>
          <p class="text-xs text-neutral-400">${m.sub}</p>
        </a>`).join('\n');

  const moduleCards = modulesMeta.map(m=>{
    const topics = m.topics.map((t,i)=>L.accordion({acc:'emerald',n:i+1,emoji:t[0],title:t[1],sub:t[2],
      oque:`Conceito-chave do tópico "${t[1]}", explicado do zero com os termos definidos na hora.`,
      porque:'Faz parte da base que sustenta as Trilhas 2 e 3 — sem ela, os hooks viram cópia sem entendimento.',
      conceitos:t[2]+'.'})).join('\n');
    return L.moduleCard({acc:'emerald',mod:m.mod,dur:m.dur,emoji:m.emoji,title:m.title,desc:m.sub+'.',topics});
  }).join('\n');

  const modals = modulesMeta.map(m=>L.modal({acc:'emerald',mod:m.mod,title:m.title})).join('\n');

  const body=`${L.trilhaHeader({acc:'emerald',n:1,emoji:'🧭',title:'Fundamentos',desc:'Antes dos 165 hooks: o que é um hook, as 3 camadas que o compõem e a fórmula Context Lean → Scroll Stop → Contrarian Snapback. Todos os termos definidos do zero.',stats:[{v:'3',k:'Módulos'},{v:'18',k:'Tópicos'},{v:'~1h30',k:'Duração'},{v:'Base',k:'Nível'}]})}

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
${heroSvg}
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Mapa da trilha</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
${mapaCards}
      </div>
    </section>
    <h2 class="text-2xl font-bold mb-6">Conteúdo detalhado</h2>
${moduleCards}
  </main>

${modals}`;

  return {file:'curso/trilha1/index.html',html:L.shell({title:'Trilha 1: Fundamentos',depth:2,activeTrack:1,accents:['emerald'],body})};
}

function buildT1(){ return [ t1Index(), mod11(), mod12(), mod13() ]; }
module.exports = { buildT1 };
