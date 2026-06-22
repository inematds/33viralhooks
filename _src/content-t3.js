/* Trilha 3 — Avançado (Purple): index + 2 módulos (versão expandida).
   Prompts copy-run (#30) + skill Hook Machine; profundidade 500-800 linhas (#14). */
const L = require('./lib.js');
const acc = 'purple';

const lede = (mod,n,h)=>`      <p data-inema-block="m${mod}-t${n}-p1" class="text-neutral-300 mb-6 leading-relaxed">${h}</p>`;
const para = (mod,n,p,h)=>`      <p data-inema-block="m${mod}-t${n}-p${p}" class="text-neutral-300 mb-6 leading-relaxed">${h}</p>`;
const tip = (t,h)=>`      <div class="bg-primary/10 rounded-xl border border-primary/40 p-6 mb-6"><h3 class="text-lg font-semibold text-primary mb-2 flex items-center"><span class="mr-2">💡</span> ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const novo = (t,h)=>`      <div class="bg-purple-900/20 rounded-xl border border-purple-500/30 p-6 mb-6"><h3 class="text-base font-semibold text-purple-400 mb-2 flex items-center"><span class="mr-2">🆕</span> Novo aqui? ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const concept = (t,h,items)=>`      <div class="bg-gradient-to-br from-purple-900/30 to-dark-800 rounded-xl border border-purple-500/30 p-6 mb-6"><h3 class="text-lg font-semibold text-purple-400 mb-3 flex items-center"><span class="mr-2">🧠</span> ${t}</h3><p class="text-neutral-300 mb-3 text-sm">${h}</p>${items?`<ul class="space-y-2 text-neutral-300 text-sm">${items.map(i=>`<li class="flex items-start space-x-2"><span class="text-purple-400 mt-1">•</span><span>${i}</span></li>`).join('')}</ul>`:''}</div>`;
const alert = (t,h)=>`      <div class="bg-red-900/20 rounded-xl border border-red-500/30 p-6 mb-6"><h3 class="text-lg font-semibold text-red-400 mb-2 flex items-center"><span class="mr-2">⚠️</span> ${t}</h3><p class="text-neutral-300 text-sm">${h}</p></div>`;
const doDont = (doT, doItems, dontT, dontItems)=>`      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-emerald-900/20 rounded-xl border border-emerald-500/30 p-6"><h4 class="font-bold text-emerald-400 mb-4">✓ ${doT}</h4><ul class="space-y-3 text-neutral-300 text-sm">${doItems.map(i=>`<li class="flex items-start space-x-2"><span class="text-emerald-400">✓</span><span>${i}</span></li>`).join('')}</ul></div>
        <div class="bg-red-900/20 rounded-xl border border-red-500/30 p-6"><h4 class="font-bold text-red-400 mb-4">✗ ${dontT}</h4><ul class="space-y-3 text-neutral-300 text-sm">${dontItems.map(i=>`<li class="flex items-start space-x-2"><span class="text-red-400">✗</span><span>${i}</span></li>`).join('')}</ul></div>
      </div>`;

// Bloco copy-run: objetivo + bloco copiavel + como verificar (erro #30)
function copyRun({objetivo, code, verificar}){
  return `      <div class="bg-dark-800 rounded-xl border border-purple-500/30 overflow-hidden mb-6">
        <div class="px-5 py-3 bg-purple-900/20 border-b border-purple-500/30"><span class="text-purple-400 font-semibold text-sm">🎯 Objetivo:</span> <span class="text-neutral-300 text-sm">${objetivo}</span></div>
        <pre class="p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed whitespace-pre-wrap">${code}</pre>
        <div class="px-5 py-3 bg-dark-700/40 border-t border-dark-600"><span class="text-emerald-400 font-semibold text-sm">✅ Como verificar:</span> <span class="text-neutral-400 text-sm">${verificar}</span></div>
      </div>`;
}
const E = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const svgP = svg => L.svgPanel('purple', svg);

function svgPipe(prefix,label,nodes){
  const w=800; const n=nodes.length; const bw=150; const gap=(w-40-n*bw)/(n-1);
  let x=20; const rects=nodes.map((t,i)=>{ const cx=x+bw/2; const r=`<rect x="${x}" y="70" width="${bw}" height="70" rx="12" fill="#1a1230" stroke="#c084fc" stroke-width="1.8"/><text x="${cx}" y="100" text-anchor="middle" fill="#c084fc" font-family="Inter,sans-serif" font-weight="600" font-size="12">${t[0]}</text><text x="${cx}" y="119" text-anchor="middle" fill="#e9d5ff" font-family="Inter,sans-serif" font-size="10">${t[1]}</text>`; const arrow = i<n-1?`<path class="wf-a" d="M${x+bw},105 L${x+bw+gap},105" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#${prefix}-ah)"/>`:''; x+=bw+gap; return r+arrow; }).join('\n          ');
  return `        <svg viewBox="0 0 800 180" class="w-full h-auto" role="img" aria-label="${label}">
          <defs>
            <filter id="${prefix}-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="${prefix}-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#c084fc" opacity="0.10"/></pattern>
            <marker id="${prefix}-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker>
          </defs>
          <rect x="0" y="0" width="800" height="180" fill="url(#${prefix}-grid)"/>
          ${rects}
        </svg>`;
}

// SVG da rubrica (5 pontos)
function svgRubric(){ return `        <svg viewBox="0 0 800 170" class="w-full h-auto" role="img" aria-label="A rubrica de 5 pontos para filtrar hooks: específico, lacuna, contrarian, visual e curto; some os pontos e corte abaixo de 4">
          <defs><pattern id="t3rub-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#c084fc" opacity="0.10"/></pattern></defs>
          <rect x="0" y="0" width="800" height="170" fill="url(#t3rub-grid)"/>
          ${[['🎯','Específico',30],['🕳️','Lacuna',180],['🔄','Contrarian',330],['🎬','Visual',480],['⏱️','Curto',630]].map(([e,t,x])=>`<rect x="${x}" y="45" width="140" height="80" rx="12" fill="#1a1230" stroke="#c084fc" stroke-width="1.8"/><text x="${x+70}" y="80" text-anchor="middle" font-family="Inter,sans-serif" font-size="22">${e}</text><text x="${x+70}" y="105" text-anchor="middle" fill="#e9d5ff" font-family="Inter,sans-serif" font-size="12">${t}</text>`).join('\n          ')}
          <text x="400" y="30" text-anchor="middle" fill="#c084fc" font-family="Inter,sans-serif" font-weight="600" font-size="13">dê 0 ou 1 em cada — corte abaixo de 4/5</text>
          <text x="400" y="150" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">passou? vira vídeo. não passou? a IA reescreve.</text>
        </svg>`; }

// SVG anatomia da skill
function svgSkill(){ return `        <svg viewBox="0 0 800 200" class="w-full h-auto" role="img" aria-label="Anatomia de uma SKILL.md: o cabeçalho com name e description decide quando ativar, e o corpo decide o que a IA faz">
          <defs>
            <linearGradient id="t3sk-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
            <filter id="t3sk-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t3sk-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#c084fc" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="800" height="200" fill="url(#t3sk-grid)"/>
          <g filter="url(#t3sk-glow)"><rect x="40" y="30" width="300" height="60" rx="12" fill="#1a1230" stroke="url(#t3sk-grad)" stroke-width="2"/></g>
          <text x="190" y="55" text-anchor="middle" fill="#c084fc" font-family="Inter,sans-serif" font-weight="600" font-size="13">name + description</text>
          <text x="190" y="74" text-anchor="middle" fill="#e9d5ff" font-family="Inter,sans-serif" font-size="11">QUANDO ativar (os gatilhos)</text>
          <rect x="40" y="110" width="300" height="60" rx="12" fill="#1a1230" stroke="#c084fc" stroke-width="1.6"/>
          <text x="190" y="135" text-anchor="middle" fill="#c084fc" font-family="Inter,sans-serif" font-weight="600" font-size="13">corpo (instruções)</text>
          <text x="190" y="154" text-anchor="middle" fill="#e9d5ff" font-family="Inter,sans-serif" font-size="11">O QUE fazer (o método)</text>
          <path d="M340,100 L420,100" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#t3sk-ah)"/>
          <defs><marker id="t3sk-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker></defs>
          <rect x="430" y="55" width="320" height="90" rx="14" fill="#0e2018" stroke="#34d399" stroke-width="2.2"/>
          <text x="590" y="92" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-weight="600" font-size="14">você diz "gera hooks de X"</text>
          <text x="590" y="115" text-anchor="middle" fill="#a7f3d0" font-family="Inter,sans-serif" font-size="11">→ pacote completo, no seu método</text>
        </svg>`; }

// ---------- MÓDULO 3-1 ----------
function mod31(){
  const mod='3-1';
  const checks=[
    {id:`modulo-${mod}#q1`, pergunta:'Qual é a "regra de ouro" ao gerar hooks com IA?', options:[
      {t:'A) Publicar tudo que a IA gerar, sem mexer', e:'A IA erra pra mais (clichê). Publicar tudo derruba a qualidade.'},
      {t:'B) A IA rascunha em volume; você edita e escolhe', correct:true, e:'Isso. Gere 20-30, filtre com a rubrica, fique com os 3-5 melhores.'},
      {t:'C) Pedir só 1 hook por vez pra economizar', e:'Volume é a vantagem da IA — peça muitos e filtre.'},
    ]},
  ];
  const secs=[
L.section({n:1,mod,acc,title:'Por que gerar hooks com IA (e a regra de ouro)',inner:
`${lede(mod,1,'Você já tem 165 hooks e a fórmula. A IA entra pra <strong class="text-purple-400">multiplicar</strong>: gerar dezenas de variações no seu nicho, em segundos. Mas há uma regra de ouro — a IA rascunha, <strong>você edita e escolhe</strong>.')}
${svgP(svgPipe('t3m1','Fluxo de geração de hooks com IA: ideia, prompt, lote de variações, filtro humano e hook final', [['Ideia/nicho','o assunto'],['Prompt','o pedido à IA'],['Lote','20-30 variações'],['Filtro','você escolhe'],['Hook final','3 camadas']]))}
${novo('O que é um "prompt"','Prompt é a instrução que você dá pra IA (ChatGPT, Claude, etc.). Um bom prompt de hook tem: papel ("você é roteirista viral"), contexto (nicho, fórmula), tarefa (quantos hooks, formato) e restrições (curto, específico, sem clichê).')}
${doDont('Prompt forte',['Define papel ("roteirista de vídeo curto")','Dá a fórmula e os 5 padrões','Exige formato (tabela/CSV) e específico','Proíbe clichê explicitamente'],'Prompt fraco',['"Me dá uns hooks bons"','Sem fórmula nem padrões','Sem formato (resposta vira texto solto)','Sem restrição → vem genérico'])}
${alert('A IA erra pra mais','Modelos de IA tendem a soar genéricos ("dicas incríveis"). Por isso o prompt PROÍBE clichê e exige a fórmula + específico. E mesmo assim: você filtra. 30 gerados, 3 prestáveis é um ótimo resultado.')}`}),
L.section({n:2,mod,acc,title:'Prompt 1 — o Gerador de Hooks',inner:
`${lede(mod,2,'Cole este prompt no ChatGPT/Claude. Ele gera 20 hooks no seu nicho seguindo a fórmula, em formato de tabela com as 3 camadas. Troque o que está em <code class="text-purple-400">&lt;colchetes&gt;</code>.')}
${copyRun({objetivo:'Gerar 20 hooks virais prontos no seu nicho, com as 3 camadas.',
code:E(`Você é um roteirista de vídeo curto especialista em hooks virais (TikTok, Reels, Shorts).

NICHO: <seu nicho — ex.: finanças pessoais para iniciantes>
IDIOMA: <português do Brasil>

Gere 20 hooks seguindo a fórmula "Context Lean → Scroll Stop → Contrarian Snapback":
- Context Lean: comece no pico, zero "oi pessoal", zero contexto inútil.
- Scroll Stop: a cena/afirmação que trava o dedo nos 3 primeiros segundos.
- Contrarian Snapback: contrarie uma crença comum do nicho ("...não é", "pare de...", "você acha X, mas...").

Use estes 5 padrões, ~4 hooks de cada: medo/alta aposta, contrarian, número/especificidade, prova pessoal, curiosidade/loop aberto.

REGRAS:
- Cada hook em 3 camadas: (1) Frase falada — máx 12 palavras; (2) Visual Hook — a cena na tela; (3) Text Hook — 2 a 3 palavras de overlay.
- Específico vence genérico: use números, valores, prazos.
- PROIBIDO: clichê ("dicas incríveis"), abertura genérica, promessa vaga.

Responda em TABELA com colunas: # | Frase falada | Visual Hook | Text Hook | Padrão.`),
verificar:'A IA deve devolver uma tabela de 20 linhas. Cheque: cada frase falada tem uma lacuna (curiosidade) e algo específico? O Text Hook tem no máx 3 palavras? Se vier genérico, responda "refaça mais contrarian e específico".'})}
${tip('Modelo recomendado','Use o modelo mais capaz disponível (ex.: Claude Opus ou GPT mais recente). Hooks dependem de nuance — modelos pequenos entregam mais clichê.')}`}),
L.section({n:3,mod,acc,title:'Prompt 2 — Gerador das 3 camadas a partir de uma frase',inner:
`${lede(mod,3,'Já tem uma frase boa mas faltam o visual e o texto na tela? Este prompt completa as 3 camadas de qualquer linha que você jogar.')}
${copyRun({objetivo:'Transformar uma frase falada solta nas 3 camadas completas (com 3 opções de visual).',
code:E(`Tenho esta frase falada de hook: "<cole sua frase aqui>".

Complete as 3 camadas:
1) Refine a frase falada (máx 12 palavras, mantendo a ideia, mais punchy).
2) Proponha 3 opções de Visual Hook — cenas concretas e legíveis em tela de celular, com tensão ou contraste. Descreva cada cena em 1 linha.
3) Proponha 3 opções de Text Hook (2 a 3 palavras cada).

Para cada Visual Hook, diga em 1 frase POR QUE ele para o dedo.
Formato: listas curtas, sem enrolação.`),
verificar:'Você deve receber 1 frase refinada + 3 visuais + 3 textos. Escolha 1 de cada. Teste mental: o visual escolhido funciona no mudo? O texto cabe num olhar?'})}
${L.details('purple','Indo mais fundo: como pedir variações sem repetir','<p>Depois da primeira leva, peça: <em>"Agora me dê 5 versões mais ousadas e 5 mais sóbrias da mesma frase, sem repetir verbos de abertura."</em> Restringir o que NÃO repetir (verbos, estrutura) força a IA a explorar ângulos novos em vez de variar só palavras.</p>')}`}),
L.section({n:4,mod,acc,title:'Prompt 3 — gerar o prompt de IMAGEM do Visual Hook',inner:
`${lede(mod,4,'O Visual Hook vira imagem. Este prompt produz um prompt de imagem pronto pra colar num gerador (flux2-klein, Midjourney, etc.) — exatamente como as 165 imagens deste curso foram feitas.')}
${novo('Por que um prompt gera outro prompt','Geradores de imagem têm uma "língua" própria (estilo, luz, lente, negativos). Pedir pra IA traduzir seu Visual Hook nessa língua poupa tentativa-e-erro e mantém o padrão visual consistente.')}
${copyRun({objetivo:'Converter um Visual Hook em um prompt de imagem cinematográfico pronto pra colar.',
code:E(`Converta este Visual Hook num prompt de imagem para um gerador (flux/Midjourney):
VISUAL HOOK: "<ex.: cadeira de escritório vazia, tela com aviso 'Posição Encerrada'>"

Saída: um único parágrafo em inglês, estilo:
"cinematic dark premium thumbnail, <cena>, dramatic moody lighting, deep navy-black background, high contrast, shallow depth of field, photographic realism, volumetric glow, 8k, no text, no watermark"

Mantenha "no text, no watermark" no fim. Não invente texto na imagem (geradores erram letras).`),
verificar:'O retorno é 1 parágrafo em inglês terminando em "no text, no watermark". Cole no gerador. Se aparecer texto torto na imagem, regenere com outra seed — o "no text" reduz, mas não zera.'})}
${tip('Servidor local do INEMA','Neste curso as imagens saíram do inemaimg (flux2-klein local). O mesmo prompt funciona em qualquer gerador — a estrutura é portátil.')}`}),
L.section({n:5,mod,acc,title:'Prompt 4 — lote: 33 hooks de um nicho de uma vez',inner:
`${lede(mod,5,'Pra reproduzir o material original (33 hooks por nicho) num assunto novo, peça o lote completo já agrupado por padrão.')}
${copyRun({objetivo:'Gerar um pacote de 33 hooks de um nicho, agrupados pelos 5 padrões, em CSV.',
code:E(`Gere 33 hooks virais para o nicho "<seu nicho>", idioma <pt-BR>, seguindo a fórmula Context Lean → Scroll Stop → Contrarian Snapback.

Distribua entre os 5 padrões (medo, contrarian, número, prova pessoal, curiosidade).
Cada hook: frase falada (máx 12 palavras), Visual Hook, Text Hook (2-3 palavras), padrão.

Saída em CSV com cabeçalho:
n,frase_falada,visual_hook,text_hook,padrao

Sem texto fora do CSV. Aspas duplas em campos com vírgula.`),
verificar:'Salve a saída como .csv e abra numa planilha: deve ter 33 linhas + cabeçalho, 5 padrões representados. Filtre as linhas fracas; sobraram 20+ boas? Ótimo lote.'})}
${L.compareTable('purple',['Padrão','Gatilho que você pede','Exemplo de Text Hook'],[
  ['Medo','ameaça, perda, risco','AI Took the Job'],
  ['Contrarian','contraria uma crença','Not About Speed'],
  ['Número','cifra/prazo específico','4 Seconds'],
  ['Prova pessoal','"eu fiz/perdi/dobrei"','Lost 50K'],
  ['Curiosidade','lacuna aberta','Wrong Question'],
])}`}),
L.section({n:6,mod,acc,title:'Filtrar e iterar: a rubrica de 5 pontos',inner:
`${lede(mod,6,'Gerar é fácil; <strong>escolher</strong> é o trabalho. Use esta rubrica pra dar nota e ficar só com os hooks que merecem virar vídeo.')}
${svgP(svgRubric())}
${concept('Rubrica — dê 0 ou 1 em cada (corte abaixo de 4/5)',null,['<strong>Específico?</strong> tem número/valor/prazo concreto.','<strong>Lacuna?</strong> deixa uma pergunta no ar.','<strong>Contrarian?</strong> contraria uma crença do nicho.','<strong>Visual?</strong> dá pra ver a cena em 1 segundo, no mudo.','<strong>Curto?</strong> frase em ~2s, texto em 2-3 palavras.'])}
${copyRun({objetivo:'Fazer a IA pontuar e reescrever os hooks fracos automaticamente.',
code:E(`Avalie cada hook da lista abaixo com a rubrica (0 ou 1 cada): específico, lacuna, contrarian, visual, curto. Some (0 a 5).

Para hooks com nota < 4, reescreva uma versão melhor mantendo o tema.
Devolva: tabela com hook | nota | versão melhorada (quando aplicável).

LISTA:
<cole aqui os hooks gerados>`),
verificar:'Você recebe notas + versões melhoradas. Leve pro próximo módulo (3.2) só os de nota 4-5 — eles viram o seu banco de hooks.'})}
${L.quiz(checks[0])}
${tip('Próximo passo','No Módulo 3.2 você transforma esses prompts num SISTEMA reutilizável — uma skill que faz tudo isso com um comando.')}`}),
  ].join('\n');
  const body=`${L.breadcrumb({acc,trilhaLabel:'Trilha 3',mod})}
${L.moduleHeader({acc,mod,emoji:'⌨️',title:'Prompts para gerar hooks',desc:'4 prompts copy-run prontos: gerar hooks, completar as 3 camadas, criar o prompt de imagem e filtrar com rubrica.',stats:[{v:'6',k:'Tópicos'},{v:'~30',k:'Minutos'},{v:'Avançado',k:'Nível'},{v:'Prático',k:'Tipo'}]})}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="3">
${secs}
${L.moduleSummary({acc,points:[
  '<strong class="text-white">A IA multiplica</strong><span class="text-neutral-400"> — você gera dezenas de variações; você edita e escolhe.</span>',
  '<strong class="text-white">4 prompts copy-run</strong><span class="text-neutral-400"> — gerar, completar camadas, prompt de imagem, lote em CSV.</span>',
  '<strong class="text-white">Rubrica de 5 pontos</strong><span class="text-neutral-400"> — específico, lacuna, contrarian, visual, curto.</span>',
  '<strong class="text-white">Próximo</strong><span class="text-neutral-400"> — virar tudo isso numa skill com um comando só.</span>',
],nextLabel:'Módulo 3.2',nextHref:'modulo-3-2.html'})}
  </main>`;
  return {file:`curso/trilha3/modulo-${mod}.html`,html:L.shell({title:'Prompts para gerar hooks',depth:2,activeTrack:3,accents:['purple'],body,extraScript:L.checkScript(checks)})};
}

// ---------- MÓDULO 3-2 ----------
function mod32(){
  const mod='3-2';
  const checks=[
    {id:`modulo-${mod}#q1`, pergunta:'O que faz uma skill "acender" na hora certa?', options:[
      {t:'A) O name curto', e:'O name identifica, mas não é o que dispara a ativação.'},
      {t:'B) A description com os gatilhos reais', correct:true, e:'Isso. A description lista quando usar ("gera hooks de...") — é o que faz a skill ativar no momento certo.'},
      {t:'C) O tamanho do corpo', e:'O corpo diz O QUE fazer, não QUANDO ativar.'},
    ]},
  ];
  const secs=[
L.section({n:1,mod,acc,title:'De prompt avulso a sistema (sua Hook Machine)',inner:
`${lede(mod,1,'Prompt avulso resolve um vídeo. Uma <strong class="text-purple-400">skill</strong> (sistema reutilizável) resolve os próximos 100: você dá o nicho, ela devolve hooks + camadas + prompts de imagem, sempre no mesmo padrão.')}
${svgP(svgPipe('t3m2','Pipeline da Hook Machine: nicho de entrada, geração, imagens, banco de hooks e publicação', [['Nicho','entrada'],['Gerar','hooks + camadas'],['Imagens','Visual Hook'],['Banco','tagueado'],['Publicar','+ medir']]))}
${novo('O que é uma "skill"','No Claude Code (e ferramentas similares), uma skill é uma pasta com um arquivo SKILL.md que descreve QUANDO usá-la e O QUE fazer. Você invoca por um comando e ela roda o processo inteiro — como ter um roteirista de plantão com seu método embutido.')}
${concept('O que sua Hook Machine entrega',null,['Recebe: um nicho/assunto e o idioma.','Gera: 20-33 hooks na fórmula, agrupados por padrão.','Completa: as 3 camadas de cada hook.','Produz: o prompt de imagem de cada Visual Hook.','Filtra: pontua com a rubrica e corta os fracos.'])}
${L.compareTable('purple',['Prompt avulso','Skill / sistema'],[
  ['Resolve 1 vídeo','Resolve os próximos 100'],
  ['Você recola tudo toda vez','Um comando dispara o método'],
  ['Resultado varia a cada vez','Padrão consistente sempre'],
])}`}),
L.section({n:2,mod,acc,title:'Anatomia de uma SKILL.md',inner:
`${lede(mod,2,'Uma skill é simples: um cabeçalho que diz QUANDO ativar e um corpo que diz COMO agir. Vamos ver as partes antes de colar a sua.')}
${svgP(svgSkill())}
${concept('As partes de uma SKILL.md',null,['<strong>name</strong>: nome curto da skill (ex.: <code>hook-machine</code>).','<strong>description</strong>: quando usar — os gatilhos ("criar hooks", "gerar ganchos virais").','<strong>Corpo (instruções):</strong> o passo a passo que a IA segue — papel, fórmula, formato de saída, rubrica.'])}
${tip('Regra da boa description','A description é o que faz a skill "acender" na hora certa. Liste gatilhos reais que você diria: "gera hooks pra…", "ganchos virais de…", "ideias de Reels sobre…".')}
${L.quiz(checks[0])}`}),
L.section({n:3,mod,acc,title:'SKILL.md pronta pra colar',inner:
`${lede(mod,3,'Esta é a sua Hook Machine. Crie a pasta <code class="text-purple-400">hook-machine/</code> e dentro dela o arquivo <code class="text-purple-400">SKILL.md</code> com o conteúdo abaixo. Funciona no Claude Code; o corpo também serve como um "system prompt" em qualquer chat.')}
${copyRun({objetivo:'Criar uma skill reutilizável que gera o pacote completo de hooks de qualquer nicho.',
code:E(`---
name: hook-machine
description: Use quando o usuário pedir para criar hooks/ganchos virais para vídeo curto (TikTok, Reels, Shorts) — "gera hooks de...", "ganchos virais sobre...", "ideias de abertura para Reels de...". Gera hooks na fórmula Context Lean → Scroll Stop → Contrarian Snapback, com as 3 camadas e prompt de imagem.
---

# Hook Machine

Você é roteirista de vídeo curto especialista em hooks virais.

## Quando o usuário der um NICHO/ASSUNTO e (opcional) idioma:

1. Gere 20 hooks (ou a quantidade pedida) na fórmula:
   - Context Lean: começa no pico, zero contexto inútil.
   - Scroll Stop: a cena/afirmação que trava o dedo nos 3s.
   - Contrarian Snapback: contraria uma crença comum do nicho.
2. Distribua entre os 5 padrões: medo, contrarian, número, prova pessoal, curiosidade.
3. Para cada hook entregue as 3 CAMADAS:
   - Frase falada (máx 12 palavras)
   - Visual Hook (cena concreta, legível no mudo)
   - Text Hook (2-3 palavras)
4. Pontue cada hook com a rubrica (0/1): específico, lacuna, contrarian, visual, curto. Mostre só os com nota >= 4.
5. Para os aprovados, gere o PROMPT DE IMAGEM (inglês, cinematográfico, terminando em "no text, no watermark").

## Regras
- Específico vence genérico (números, valores, prazos).
- PROIBIDO clichê, abertura genérica, promessa vaga.
- Saída final em tabela: # | Frase falada | Visual Hook | Text Hook | Padrão | Nota | Prompt de imagem.

## Idioma
Responda no idioma pedido (default: português do Brasil).`),
verificar:'No Claude Code: salve em hook-machine/SKILL.md e peça "gera hooks de <nicho>". Em outro chat: cole o corpo como primeira mensagem e mande o nicho. Deve vir a tabela com nota e prompt de imagem.'})}`}),
L.section({n:4,mod,acc,title:'Pipeline em lote: do nicho ao pacote pronto',inner:
`${lede(mod,4,'Com a skill no lugar, dá pra rodar em lote — vários nichos, vários hooks, imagens incluídas. Aqui o passo a passo reproduzível.')}
${concept('O pipeline, passo a passo',null,['<strong>1. Gerar:</strong> rode a Hook Machine pro nicho → tabela de hooks aprovados.','<strong>2. Imagens:</strong> pegue a coluna "prompt de imagem" e gere cada uma no flux/Midjourney.','<strong>3. Montar:</strong> junte frase + visual + texto + imagem num card (igual aos da Trilha 2).','<strong>4. Agendar:</strong> distribua os hooks em vídeos ao longo da semana.'])}
${copyRun({objetivo:'Gerar todas as imagens de um lote a partir de uma planilha de prompts (Node + servidor local).',
code:E(`// salve como gen.js — lê prompts.json [{n, prompt}] e salva PNGs
const http=require('http'),fs=require('fs');
const items=JSON.parse(fs.readFileSync('prompts.json','utf8'));
(async()=>{ for(const it of items){
  const payload=JSON.stringify({model:'flux2-klein',prompt:it.prompt,width:1024,height:576,steps:4,guidance_scale:1.0,seed:it.n});
  const png=await new Promise((ok,no)=>{const r=http.request({host:'localhost',port:8000,path:'/generate',method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(payload)}},res=>{let b='';res.on('data',c=>b+=c);res.on('end',()=>ok(Buffer.from(JSON.parse(b).image,'base64')))});r.on('error',no);r.write(payload);r.end();});
  fs.writeFileSync('hook-'+it.n+'.png',png); console.log('ok',it.n);
}})();`),
verificar:'Tenha o inemaimg rodando em localhost:8000. Rode "node gen.js": deve criar hook-1.png, hook-2.png… Conte os arquivos == número de prompts.'})}
${L.details('purple','Indo mais fundo: este curso foi feito assim','<p>As 165 imagens da Trilha 2 saíram de um script quase idêntico a esse: leu um JSON com os 165 Visual Hooks, gerou cada PNG no inemaimg (flux2-klein, 4 passos) e comprimiu pra WebP (~23 KB cada). O mesmo pipeline gera o seu pacote.</p>')}`}),
L.section({n:5,mod,acc,title:'Banco de hooks: reusar, taguear, versionar',inner:
`${lede(mod,5,'Hook bom não é descartável. Guarde os aprovados num banco — uma planilha ou JSON — pra reusar, remixar e ver o que repete sucesso.')}
${concept('Estrutura mínima do banco',null,['<strong>id, nicho, padrão</strong> — pra filtrar depois.','<strong>3 camadas</strong> — frase, visual, texto.','<strong>status</strong> — ideia / gravado / publicado.','<strong>desempenho</strong> — views/retenção quando publicar.'])}
${copyRun({objetivo:'Padronizar uma entrada do seu banco de hooks (JSON reutilizável).',
code:E(`{
  "id": "fin-001",
  "nicho": "financas",
  "padrao": "numero",
  "frase_falada": "Transformei US$500 em US$15.000 sem tocar na bolsa.",
  "visual_hook": "nota de 500 se multiplicando em maços de dinheiro",
  "text_hook": "No Stocks",
  "status": "ideia",
  "views": null
}`),
verificar:'Crie banco.json como uma lista desses objetos. Pra reusar: filtre por "padrao" ou "nicho" e adapte. Quando publicar, preencha "views" e veja qual padrão rende mais pra você.'})}
${tip('Versionar com Git','Guarde o banco.json num repositório (você aprende isso no curso "Do Zero ao Deploy" do INEMA). Cada vídeo publicado vira um commit — histórico do que funcionou.')}`}),
L.section({n:6,mod,acc,title:'Publicar e medir: o ciclo que faz você melhorar',inner:
`${lede(mod,6,'O hook só prova seu valor no campo. Feche o ciclo: teste, meça, dobre no que funciona. É assim que você sai de "copiando hooks" pra "tendo um método".')}
${concept('O ciclo de melhoria',null,['<strong>Teste:</strong> grave 2-3 versões do mesmo conteúdo com hooks diferentes.','<strong>Meça:</strong> olhe retenção nos 3s e % que passou de 50% — não só views.','<strong>Aprenda:</strong> qual PADRÃO segurou mais? (medo? número?)','<strong>Dobre:</strong> repita o padrão vencedor no seu nicho.'])}
${L.compareTable('purple',['Métrica que muita gente olha','Métrica que importa pro hook'],[
  ['Views totais','Retenção nos 3 primeiros segundos'],
  ['Curtidas','% que passou de 50% do vídeo'],
  ['Seguidores','Scroll-stop rate (quem parou de deslizar)'],
])}
${alert('Não confie em 1 vídeo','Um hook pode viralizar por sorte e outro morrer por horário. Olhe a média de 5-10 vídeos por padrão antes de concluir o que funciona pra você.')}
${tip('Você terminou o curso 🎉','Você tem: a teoria (Trilha 1), os 165 hooks com imagem (Trilha 2) e o sistema pra gerar os seus (Trilha 3). Agora é publicar, medir e iterar. Marque os módulos como lidos e acompanhe sua jornada no painel do curso.')}`}),
  ].join('\n');
  const body=`${L.breadcrumb({acc,trilhaLabel:'Trilha 3',mod})}
${L.moduleHeader({acc,mod,emoji:'⚙️',title:'Sua Hook Machine',desc:'Transforme os prompts num sistema reutilizável: uma skill que gera hooks, imagens e banco — e o ciclo de publicar e medir.',stats:[{v:'6',k:'Tópicos'},{v:'~30',k:'Minutos'},{v:'Avançado',k:'Nível'},{v:'Sistema',k:'Tipo'}]})}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="3">
${secs}
${L.moduleSummary({acc,points:[
  '<strong class="text-white">Skill = sistema</strong><span class="text-neutral-400"> — um comando gera hooks + camadas + prompts de imagem.</span>',
  '<strong class="text-white">SKILL.md pronta</strong><span class="text-neutral-400"> — copie, salve e invoque a sua Hook Machine.</span>',
  '<strong class="text-white">Pipeline em lote</strong><span class="text-neutral-400"> — gerar, imagens, montar, agendar; banco de hooks versionado.</span>',
  '<strong class="text-white">Publicar e medir</strong><span class="text-neutral-400"> — teste 3 hooks, meça retenção, dobre no padrão vencedor.</span>',
],nextLabel:'Voltar ao início',nextHref:'../../index.html'})}
  </main>`;
  return {file:`curso/trilha3/modulo-${mod}.html`,html:L.shell({title:'Sua Hook Machine',depth:2,activeTrack:3,accents:['purple'],body,extraScript:L.checkScript(checks)})};
}

// ---------- INDEX T3 ----------
function t3Index(){
  const heroSvg = L.svgPanel('purple', svgPipe('t3hero','Trilha avançada: dos prompts copy-run à sua Hook Machine que gera hooks em escala',[['Prompts','copy-run'],['Skill','hook-machine'],['Lote','hooks + imagens'],['Banco','reusar e medir']]));
  const modulesMeta=[
    {mod:'3-1',emoji:'⌨️',title:'Prompts para gerar hooks',sub:'4 prompts copy-run + rubrica',dur:'~30 min',
      topics:[['🤖','Por que gerar com IA','a regra de ouro: você edita'],['1️⃣','Prompt: gerador de hooks','20 hooks na fórmula'],['2️⃣','Prompt: as 3 camadas','de uma frase ao pacote'],['3️⃣','Prompt: imagem do visual','prompt pronto pro gerador'],['4️⃣','Prompt: lote em CSV','33 hooks de um nicho'],['🧮','Filtrar e iterar','a rubrica de 5 pontos']]},
    {mod:'3-2',emoji:'⚙️',title:'Sua Hook Machine',sub:'Skill + pipeline + medir',dur:'~30 min',
      topics:[['🏭','De prompt a sistema','o que é uma skill'],['🧩','Anatomia da SKILL.md','name, description, corpo'],['📋','SKILL.md pronta','copie e use'],['🔁','Pipeline em lote','do nicho ao pacote'],['🗄️','Banco de hooks','reusar, taguear, versionar'],['📈','Publicar e medir','o ciclo de melhoria']]},
  ];
  const mapaCards = modulesMeta.map(m=>`        <a href="#modulo-${m.mod}" class="group bg-dark-800 rounded-xl border border-dark-600 hover:border-purple-500/30 p-5 transition-all">
          <div class="flex items-center justify-between mb-2"><span class="text-purple-400 font-bold text-sm">${m.mod.replace('-','.')}</span><span class="text-xs text-neutral-500">${m.dur}</span></div>
          <h3 class="font-semibold mb-1 group-hover:text-purple-400 transition-colors">${m.emoji} ${m.title}</h3>
          <p class="text-xs text-neutral-400">${m.sub}</p>
        </a>`).join('\n');
  const moduleCards = modulesMeta.map(m=>{
    const topics=m.topics.map((t,i)=>L.accordion({acc:'purple',n:i+1,emoji:t[0],title:t[1],sub:t[2],
      oque:`O tópico "${t[1]}" entrega um recurso prático pronto pra usar (prompt, skill ou script).`,
      porque:'É o que transforma o conhecimento das Trilhas 1 e 2 em produção real, em escala.',
      conceitos:t[2]+'.'})).join('\n');
    return L.moduleCard({acc:'purple',mod:m.mod,dur:m.dur,emoji:m.emoji,title:m.title,desc:m.sub+'.',topics});
  }).join('\n');
  const modals = modulesMeta.map(m=>L.modal({acc:'purple',mod:m.mod,title:m.title})).join('\n');
  const body=`${L.trilhaHeader({acc:'purple',n:3,emoji:'🛠️',title:'Avançado',desc:'Pare de copiar e comece a produzir: prompts copy-run prontos e uma skill ("Hook Machine") que gera hooks, imagens e banco no seu nicho — com o ciclo de publicar e medir.',stats:[{v:'2',k:'Módulos'},{v:'12',k:'Tópicos'},{v:'~1h',k:'Duração'},{v:'Avançado',k:'Nível'}]})}

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
  return {file:'curso/trilha3/index.html',html:L.shell({title:'Trilha 3: Avançado',depth:2,activeTrack:3,accents:['purple'],body})};
}

function buildT3(){ return [ t3Index(), mod31(), mod32() ]; }
module.exports = { buildT3 };
