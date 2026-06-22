/* Trilha 2 — Técnicas: 5 módulos (1 por nicho), 33 hooks cada com imagem + 3 camadas.
   Agrupa os 33 hooks por PADRÃO viral e renderiza cards. Exporta páginas via buildT2(). */
const fs = require('fs');
const path = require('path');
const L = require('./lib.js');
const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, 'hooks.json'), 'utf8'));

// Tradução / adaptação PT-BR de cada hook (chave: "<nicheId>-<n>")
const PT = {
  // AI & Technology
  'ai-1':'A IA acabou de substituir um cargo de US$200 mil… mas o chocante não é isso.','ai-2':'Todo mundo faz a pergunta errada pro ChatGPT — esta aqui muda tudo.','ai-3':'Essa nova IA faz o ChatGPT parecer Windows 95.','ai-4':'Pedi o impossível pra IA… ela fez em 4 segundos.','ai-5':'A maioria acha que IA é sobre velocidade… não é.','ai-6':'Esse robô aprendeu a mentir — e aqui está por que isso importa.','ai-7':'A IA não só escreveu isso… ela previu o que você vai fazer depois.','ai-8':'Esse app lê a sua mente — literalmente.','ai-9':'Todos temem perder o emprego pra IA… mas ela já tomou algo mais valioso.','ai-10':'A IA passou no exame da OAB — e por que isso é assustador.','ai-11':'Essa ferramenta clona sua voz em 3 segundos — e isso é o de menos.','ai-12':'Acha que IA não cria? Olha isso.','ai-13':'A IA construiu um negócio inteiro numa tarde.','ai-14':'Esse software vê o futuro — e acerta.','ai-15':'A IA fez a melhor música que você nunca ouviu.','ai-16':'Essa máquina aprende mais rápido que seu cérebro — e está acelerando.','ai-17':'A maioria usa IA pra economizar tempo. Eu uso pra comprar tempo.','ai-18':'Essa arte de IA não é desenhada — é sonhada.','ai-19':'Seu celular já tem uma IA mais esperta do que você imagina.','ai-20':'A IA já cria memórias falsas — e você não distingue.','ai-21':'Esse programa escreve código melhor que a maioria dos engenheiros.','ai-22':'A IA passou no Teste de Turing — e ninguém percebeu.','ai-23':'Esse chatbot convenceu um humano a infringir a lei.','ai-24':'Disseram que a IA é neutra… não é.','ai-25':'Isso não é ficção científica — está acontecendo agora.','ai-26':'Fiz um clone de IA de mim mesmo… agora ele trabalha enquanto durmo.','ai-27':'Esse robô não só conversa — ele lembra dos seus segredos.','ai-28':'A maioria teme a IA… eu temo quem a controla.','ai-29':'A IA projetou um produto que humanos não inventariam em 50 anos.','ai-30':'Essa ferramenta faz deepfake de qualquer um — até ao vivo no Zoom.','ai-31':'Pedi conselho de vida pra IA… e o plano foi melhor que o do meu terapeuta.','ai-32':'O mais assustador da IA não é o que ela faz… é o que ela fará a seguir.','ai-33':'Essa nova IA não vai te substituir… vai te tornar irrelevante.',
  // Finance
  'finance-1':'O jeito mais rápido de fazer US$10 mil não é o que você pensa.','finance-2':'Isso não é uma dica de investimento… é um aviso.','finance-3':'Perdi US$50 mil numa semana… e faria de novo.','finance-4':'Todo mundo corre atrás de renda passiva… veja por que é uma armadilha.','finance-5':'Você não precisa de mais clientes — precisa disto.','finance-6':'A maioria acha que riqueza vem de trabalhar mais. Não vem.','finance-7':'Transformei US$500 em US$15 mil… sem tocar na bolsa.','finance-8':'As pessoas mais ricas que conheço evitam isto a todo custo.','finance-9':'Esse trabalho extra rende mais que meu emprego fixo.','finance-10':'A maioria economiza do jeito errado — veja o jeito certo.','finance-11':'Fiz US$2 mil num dia… sem nenhum produto.','finance-12':'Quer dobrar sua renda? Pare de fazer isto.','finance-13':'Esse é o maior erro financeiro dos profissionais.','finance-14':'A maioria espera anos por isto… consegui em 3 meses.','finance-15':'O dinheiro mais fácil que ganhei veio de um único movimento.','finance-16':'Pare de poupar pra aposentadoria — faça isto.','finance-17':'Esse investimento de US$100 me rendeu US$20 mil.','finance-18':'A maioria acha dívida ruim — eu uso pra enriquecer.','finance-19':'Essa única decisão salvou meu negócio.','finance-20':'Você não precisa de mais tempo — precisa desta habilidade.','finance-21':'Fiz meus primeiros US$100 mil quebrando esta regra.','finance-22':'O jeito mais rápido de enriquecer é pensar menor.','finance-23':'Demiti metade dos clientes — e dobrei minha renda.','finance-24':'Os primeiros US$1.000 são os mais difíceis — veja como acelerar.','finance-25':'Sua conta poupança está te custando dinheiro.','finance-26':'O melhor investimento do ano não me custou nada.','finance-27':'Larguei o emprego sem plano B — veja o que aconteceu.','finance-28':'Pare de comprar ativos — compre isto.','finance-29':'Multipliquei meu faturamento por 5 mudando uma frase.','finance-30':'A maioria foca no lucro — eu foco nisto.','finance-31':'O melhor negócio que fechei levou 5 minutos.','finance-32':'Dobrei meu patrimônio dizendo "não" com mais frequência.','finance-33':'Isto não é sobre dinheiro — é sobre liberdade.',
  // Health
  'health-1':'Você treina pelo motivo errado — e isso mata seu progresso.','health-2':'O melhor treino não é na academia… é na sua cozinha.','health-3':'Todo mundo quer tanquinho… veja o que deveriam buscar.','health-4':'Esse hábito queima mais gordura que uma hora de cardio.','health-5':'A maioria das dietas falha por ignorar esta regra.','health-6':'Parei de contar calorias… e entrei na melhor forma da vida.','health-7':'Você não precisa de mais treinos — precisa disto.','health-8':'Esse truque de recuperação cria músculo enquanto você dorme.','health-9':'Pare de treinar assim — isso te segura.','health-10':'Fiquei mais forte sem levantar mais peso.','health-11':'Quase todo suplemento é desperdício — exceto este.','health-12':'Essa combinação de alimentos queima gordura como nada.','health-13':'Você transforma o corpo em 30 dias… se começar por aqui.','health-14':'Esse erro de treino arruína seus resultados.','health-15':'As pessoas mais fortes que conheço fazem menos disto.','health-16':'Você não precisa de academia pra ficar definido.','health-17':'Ganhei mais músculo cortando o treino pela metade.','health-18':'Esse é o exercício mais subestimado pra força total.','health-19':'Dobrei minha força ajustando um detalhe minúsculo.','health-20':'Seu corpo não está travado — sua rotina está.','health-21':'Esse hábito matinal queima gordura o dia todo.','health-22':'A melhor hora pra treinar não é o que você pensa.','health-23':'Você não treina o suficiente pra compensar este erro.','health-24':'Esse alongamento curou minha dor nas costas em 5 minutos.','health-25':'A maioria desiste por causa disto… não desista.','health-26':'Ganhei resistência fazendo o oposto do cardio.','health-27':'Esse hábito pré-treino dobrou meus resultados.','health-28':'As pessoas mais saudáveis que conheço nunca fazem isto.','health-29':'Você está a um ajuste do corpo dos sonhos.','health-30':'A maioria desperdiça os 10 primeiros minutos na academia.','health-31':'Esse alimento é vendido como saudável… mas mata seu progresso.','health-32':'Seu músculo não cresce por causa deste erro de recuperação.','health-33':'Ganhei mais energia dormindo menos.',
  // Self-improvement
  'selfimprovement-1':'Você não tem problema de motivação — tem este problema.','selfimprovement-2':'Acordar cedo é superestimado — veja o que funciona.','selfimprovement-3':'Dobre seu foco em 10 minutos… sem café.','selfimprovement-4':'A maioria trabalha mais — o topo 1% remove isto.','selfimprovement-5':'Esse hábito mudou meu ano inteiro.','selfimprovement-6':'Você acha que precisa de disciplina — mas precisa disto.','selfimprovement-7':'Produtividade não é fazer mais… é deletar isto primeiro.','selfimprovement-8':'Produzi mais trabalhando menos horas.','selfimprovement-9':'Suas metas são grandes demais — esse é o problema.','selfimprovement-10':'Esse truque de 2 minutos me deixa imparável.','selfimprovement-11':'Pare de buscar motivação — construa momentum.','selfimprovement-12':'Essa é a coisa que está matando seu foco.','selfimprovement-13':'Você não precisa de mais apps — precisa deste sistema.','selfimprovement-14':'Parei de fazer várias coisas ao mesmo tempo — e rendi mais.','selfimprovement-15':'Sua rotina matinal é longa demais — veja a correção.','selfimprovement-16':'Recuperei 3 horas por dia fazendo isto.','selfimprovement-17':'Você planeja errado — faça assim.','selfimprovement-18':'Pare de marcar prazos — marque isto.','selfimprovement-19':'Larguei esse hábito e dobrei meu tempo livre.','selfimprovement-20':'A maioria falha por causa de uma palavra.','selfimprovement-21':'Rendo mais parando em 80%.','selfimprovement-22':'Seu cérebro não aguenta tanto input — veja a correção.','selfimprovement-23':'Esse hábito de 5 minutos no fim do dia muda suas manhãs.','selfimprovement-24':'Venci a procrastinação com este truque simples.','selfimprovement-25':'Você não está esgotado — está pouco desafiado.','selfimprovement-26':'A maioria escreve a lista de tarefas errado — veja o certo.','selfimprovement-27':'Pare de buscar o perfeito — busque isto.','selfimprovement-28':'Essa mudança de mentalidade dobrou minha produção.','selfimprovement-29':'Seu ambiente trabalha contra você — corrija.','selfimprovement-30':'Aprendi mais em 1 mês do que a maioria em um ano — veja como.','selfimprovement-31':'A maioria acha que precisa de mais energia — precisa disto.','selfimprovement-32':'Parei de trabalhar às sextas — e meu negócio cresceu.','selfimprovement-33':'Sua agenda está mentindo pra você.',
  // Travel
  'travel-1':'Esse é o lugar mais lindo que você nunca vai visitar.','travel-2':'Turistas nunca veem este lado de [Cidade].','travel-3':'Viajei 8 mil km por isto… e valeu a pena.','travel-4':'O país mais barato do mundo pra viver como rei.','travel-5':'Esse é o único lugar onde eu nunca voltaria.','travel-6':'Achei o paraíso — e está vazio.','travel-7':'A trilha mais perigosa do mundo — e por que eu a fiz.','travel-8':'Fui enganado 5 minutos depois de pousar.','travel-9':'A melhor refeição da minha vida custou US$2.','travel-10':'Dá pra viajar o mundo sem largar o emprego.','travel-11':'Esse truque de upgrade de voo parece ilegal.','travel-12':'A cidade mais superestimada do mundo.','travel-13':'Achei a cidade mais limpa do mundo.','travel-14':'Esse país paga pra você visitar.','travel-15':'O melhor pôr do sol da minha vida não foi onde você imagina.','travel-16':'Gastei US$0 em 7 dias nesse país.','travel-17':'O país mais subestimado que já visitei.','travel-18':'Essa vila minúscula mudou minha vida.','travel-19':'Quase não sobrevivi a essa viagem.','travel-20':'O único país onde estranhos me convidaram pra casa deles.','travel-21':'O Airbnb mais insano em que já fiquei.','travel-22':'Esse truque de viagem me economizou US$1.200.','travel-23':'O lugar mais frio em que já estive.','travel-24':'A recepção mais calorosa que já recebi.','travel-25':'O país que mais me chocou.','travel-26':'Essa é a água mais azul que já vi.','travel-27':'Dormi num hotel de US$5 a diária — veja o que aconteceu.','travel-28':'O café mais caro do mundo.','travel-29':'A melhor viagem da minha vida foi por acidente.','travel-30':'Você não vai acreditar que isto fica em [País].','travel-31':'O lugar mais remoto em que já estive.','travel-32':'Conheci meu melhor amigo nessa viagem.','travel-33':'Nunca mais viajo sem isto.',
};

// Padrões virais (5 grupos + 1 intro = 6 topicos por modulo)
const PATTERNS = [
  { key:'medo',   emoji:'⚠️', title:'Medo & alta aposta', lead:'Ameaça, perda ou risco. O cérebro não consegue ignorar o que parece perigoso — é o "scroll stop" mais primitivo. Funciona quando há algo a perder.' },
  { key:'contra', emoji:'🔄', title:'Contrarian & quebra de crença', lead:'O "Contrarian Snapback": começa concordando com o senso comum e vira a mesa ("…não é"). A tensão entre o que a pessoa acredita e o que você afirma prende até a resposta aparecer.' },
  { key:'numero', emoji:'🔢', title:'Número & especificidade', lead:'Cifras, prazos e quantidades exatas ($10.000, 4 segundos, 30 dias). O específico soa verdadeiro e mensurável — o cérebro confia mais em número do que em adjetivo.' },
  { key:'prova',  emoji:'🏆', title:'Prova pessoal & resultado', lead:'Primeira pessoa, resultado concreto ("Eu fiz / perdi / dobrei"). História real ativa identificação e curiosidade: "como ELE conseguiu?".' },
  { key:'curio',  emoji:'🧲', title:'Curiosidade & loop aberto', lead:'Abre uma lacuna de informação e segura a resposta ("isto", "aqui está o que…"). O loop aberto cria coceira mental: o espectador fica pra fechar o ciclo.' },
];

function patternOf(h){
  const s = (h.line + ' ' + h.text).toLowerCase();
  if (/terrif|scary|scariest|kill|warning|danger|\blie|lied|break the law|replace|irrelevant|fear|trap|mistake|costing|scam|surviv|almost|stuck|holding you back|ruin|waste|destroy|\bfail|losing|\blost|never go back/.test(s)) return 'medo';
  if (/isn't|aren't|\bnot\b|wrong|overrated|\bstop\b|most people|you've been|you think|everyone|instead|don't|\bnever\b|myth|do less|fewer|smaller|opposite|too big|too long/.test(s)) return 'contra';
  if (/[$%]|\b\d/.test(s)) return 'numero';
  if (/^i\b|i made|i turned|i built|i quit|i doubled|i got|i fired|i 5x|i gained|i spent|i slept|i met|i traveled|i found|i stopped|i learned|i quit|i lost|i almost|\bmy /.test(s)) return 'prova';
  return 'curio';
}

function escapeAttr(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function hookCard(niche, h){
  const nn = String(h.n).padStart(2,'0');
  const pt = PT[`${niche.id}-${h.n}`] || '';
  const img = `img/${niche.slug}/hook-${nn}.webp`;
  const altText = `Hook ${h.n} — ${h.visual} (texto na tela: ${h.text})`;
  return `          <div class="bg-dark-800 rounded-xl border border-dark-600 overflow-hidden flex flex-col">
            <img src="${img}" alt="${escapeAttr(altText)}" loading="lazy" class="hook-img" width="1024" height="576">
            <div class="p-4 flex flex-col flex-1">
              <div class="flex items-center justify-between mb-2">
                <span class="text-blue-400 font-bold text-sm">#${nn}</span>
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30" title="Texto na tela (overlay)">${esc(h.text)}</span>
              </div>
              <p class="text-neutral-100 font-medium text-sm mb-2 leading-snug">“${esc(h.line)}”</p>
              <p class="text-neutral-400 text-xs mb-3"><span class="text-blue-400 font-semibold">PT:</span> ${esc(pt)}</p>
              <p class="text-neutral-500 text-xs mt-auto"><span class="font-semibold text-neutral-400">🎬 Visual:</span> ${esc(h.visual)}</p>
            </div>
          </div>`;
}

// SVG do funil da formula (azul/ciano) — reusavel por nicho, com defs prefixadas
function formulaSvg(prefix){
  return `        <svg viewBox="0 0 800 200" class="w-full h-auto" role="img" aria-label="Fórmula do hook em 3 passos: Context Lean (contexto mínimo), Scroll Stop (a cena que trava o dedo) e Contrarian Snapback (a virada que segura até o fim)">
          <defs>
            <linearGradient id="${prefix}-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#3b82f6"/></linearGradient>
            <filter id="${prefix}-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="${prefix}-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#60a5fa" opacity="0.10"/></pattern>
            <marker id="${prefix}-ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 L2,4 Z" fill="#38bdf8"/></marker>
          </defs>
          <rect x="0" y="0" width="800" height="200" fill="url(#${prefix}-grid)"/>
          <g fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6">
            <path class="wf-a" d="M250,100 L290,100" marker-end="url(#${prefix}-ah)"/>
            <path class="wf-a" d="M510,100 L550,100" marker-end="url(#${prefix}-ah)"/>
          </g>
          <rect x="40" y="60" width="210" height="80" rx="14" fill="#0e1622" stroke="url(#${prefix}-grad)" stroke-width="2"/>
          <text x="145" y="92" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-weight="600" font-size="14">1 · Context Lean</text>
          <text x="145" y="112" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">contexto mínimo, zero rodeio</text>
          <g filter="url(#${prefix}-glow)"><rect x="295" y="60" width="210" height="80" rx="14" fill="#0e1622" stroke="url(#${prefix}-grad)" stroke-width="2.4"/></g>
          <text x="400" y="92" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-weight="600" font-size="14">2 · Scroll Stop</text>
          <text x="400" y="112" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">a cena que trava o dedo</text>
          <rect x="550" y="60" width="210" height="80" rx="14" fill="#0e1622" stroke="url(#${prefix}-grad)" stroke-width="2"/>
          <text x="655" y="92" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-weight="600" font-size="14">3 · Contrarian Snapback</text>
          <text x="655" y="112" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">a virada que segura até o fim</text>
          <text x="145" y="40" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">o que falar</text>
          <text x="400" y="40" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">o que mostrar</text>
          <text x="655" y="40" text-anchor="middle" fill="#9ca3af" font-family="Inter,sans-serif" font-size="11">o que prometer</text>
        </svg>`;
}

const NICHE_META = {
  ai:             { emoji:'🤖', headTitle:'AI & Technology', objective:'Vender futuro e medo do futuro. O público quer não ficar pra trás — então o hook entrega ameaça ("vai te substituir"), espanto ("fez em 4 segundos") ou bastidor proibido ("o que ninguém percebeu").' },
  finance:        { emoji:'💰', headTitle:'Finanças & Negócios', objective:'Vender atalho e status. O público quer mais dinheiro com menos esforço — o hook entrega número específico ($10 mil, 5 minutos), confissão ("perdi US$50 mil") ou regra contraintuitiva ("pare de poupar").' },
  health:         { emoji:'💪', headTitle:'Saúde & Fitness', objective:'Vender resultado com menos sacrifício. O público quer o corpo/energia sem a dor — o hook entrega o "erro que te trava", o atalho ("metade do treino") e o mito da indústria ("vendido como saudável").' },
  selfimprovement:{ emoji:'🚀', headTitle:'Autodesenvolvimento & Produtividade', objective:'Vender controle e clareza. O público se sente travado/disperso — o hook reposiciona o problema ("não é motivação, é isto") e promete sistema simples ("recuperei 3 horas por dia").' },
  travel:         { emoji:'✈️', headTitle:'Viagem & Aventura', objective:'Vender desejo e descoberta. O público quer escapar e ver o inédito — o hook entrega o lugar secreto, o extremo ("trilha mais perigosa") e o choque de preço ("US$2 a refeição").' },
};

function nicheModule(niche, idx){
  const mod = `2-${idx+1}`;
  const meta = NICHE_META[niche.id];
  const acc = 'blue';
  // buckets
  const buckets = { medo:[], contra:[], numero:[], prova:[], curio:[] };
  niche.hooks.forEach(h => buckets[patternOf(h)].push(h));

  // Topico 1 — intro (formula aplicada ao nicho)
  const keyGrid = `      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        <div class="bg-dark-800 rounded-xl p-4 border border-dark-600 text-center"><div class="text-2xl mb-1">💬</div><div class="text-sm font-semibold text-blue-400">Frase falada</div><p class="text-xs text-neutral-400 mt-1">a linha que você narra/escreve</p></div>
        <div class="bg-dark-800 rounded-xl p-4 border border-dark-600 text-center"><div class="text-2xl mb-1">🎬</div><div class="text-sm font-semibold text-blue-400">Visual Hook</div><p class="text-xs text-neutral-400 mt-1">a cena que aparece na tela</p></div>
        <div class="bg-dark-800 rounded-xl p-4 border border-dark-600 text-center"><div class="text-2xl mb-1">🔤</div><div class="text-sm font-semibold text-blue-400">Text Hook</div><p class="text-xs text-neutral-400 mt-1">o overlay curto de 2-3 palavras</p></div>
      </div>`;
  const s1 = L.section({ n:1, mod, acc, title:`Como ${meta.headTitle} prende a atenção`, inner:
`      <p data-inema-block="m${mod}-t1-p1" class="text-neutral-300 mb-6 leading-relaxed">${meta.objective}</p>
${L.svgPanel(acc, formulaSvg('f'+(idx+1)))}
      <p class="text-neutral-400 text-sm mb-2 text-center">A fórmula do PDF — <strong class="text-blue-400">Context Lean → Scroll Stop → Contrarian Snapback</strong> — aplicada aos 33 hooks deste nicho.</p>
      <div class="bg-primary/10 rounded-xl border border-primary/40 p-6 mt-6">
        <h3 class="text-lg font-semibold text-primary mb-2 flex items-center"><span class="mr-2">💡</span> Como ler cada card</h3>
        <p data-inema-block="m${mod}-t1-p2" class="text-neutral-300 text-sm">Cada hook abaixo traz as <strong>3 camadas</strong> empilhadas: a <strong>frase falada</strong> (em inglês, pronta pra usar ou adaptar), a tradução PT-BR, o <strong>🎬 Visual</strong> (o que mostrar) e o badge azul com o <strong>Text Hook</strong> (o texto curto na tela). A imagem é uma referência visual gerada pra cada exemplo.</p>
      </div>
${keyGrid}` });

  // Topicos 2-6 — padroes
  const patternSections = PATTERNS.map((p, i) => {
    const list = buckets[p.key];
    const cards = list.length
      ? `      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
${list.map(h => hookCard(niche, h)).join('\n')}
      </div>`
      : `      <p class="text-neutral-400 text-sm">Neste nicho específico esse padrão aparece combinado com os outros — observe os exemplos das demais seções.</p>`;
    return L.section({ n:i+2, mod, acc, title:`${p.emoji} ${p.title}`, inner:
`      <p data-inema-block="m${mod}-t${i+2}-p1" class="text-neutral-300 mb-6 leading-relaxed">${p.lead} <span class="text-blue-400 font-semibold">${list.length} hook${list.length===1?'':'s'} deste nicho usam esse padrão.</span></p>
${cards}` });
  });

  const total = niche.hooks.length;
  const summary = L.moduleSummary({ acc,
    points: [
      `<strong class="text-white">${total} hooks prontos</strong><span class="text-neutral-400"> de ${meta.headTitle}, cada um com frase falada, visual e texto na tela.</span>`,
      `<strong class="text-white">5 padrões virais</strong><span class="text-neutral-400"> mapeados: medo, contrarian, número, prova pessoal e curiosidade.</span>`,
      `<strong class="text-white">A fórmula aplicada</strong><span class="text-neutral-400"> — Context Lean → Scroll Stop → Contrarian Snapback — vista em exemplos reais.</span>`,
      `<strong class="text-white">Próximo passo</strong><span class="text-neutral-400"> — leve um desses hooks pra Trilha 3 e gere variações com IA.</span>`,
    ],
    nextLabel: idx < 4 ? 'Próximo nicho' : 'Ir para o Avançado',
    nextHref: idx < 4 ? `modulo-2-${idx+2}.html` : '../trilha3/index.html',
  });

  const body = `${L.breadcrumb({ acc, trilhaLabel:'Trilha 2', mod })}
${L.moduleHeader({ acc, mod, emoji:meta.emoji, title:meta.headTitle, desc:`Os 33 viral hooks de ${meta.headTitle}, com frase falada, visual e texto na tela — agrupados pelos 5 padrões que travam o scroll.`, stats:[
    {v:'33', k:'Hooks'}, {v:'6', k:'Seções'}, {v:'~25', k:'Minutos'}, {v:'Prático', k:'Tipo'} ] })}

  <main id="conteudo" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-inema-module="${mod}" data-inema-track="2">
${s1}
${patternSections.join('\n')}
${summary}
  </main>`;

  return { file:`curso/trilha2/modulo-${mod}.html`, html:
    L.shell({ title:`${meta.headTitle} — 33 Hooks`, depth:2, activeTrack:2, accents:['blue'], body }) };
}

// Index da Trilha 2
function t2Index(){
  const acc = 'blue';
  const heroSvg = L.svgPanel(acc, `        <svg viewBox="0 0 900 220" class="w-full h-auto" role="img" aria-label="Os 5 nichos da trilha 2: AI, Finanças, Saúde, Autodesenvolvimento e Viagem — cada um com 33 hooks">
          <defs>
            <linearGradient id="t2h-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#3b82f6"/></linearGradient>
            <filter id="t2h-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="t2h-grid" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1.3" cy="1.3" r="1.3" fill="#60a5fa" opacity="0.10"/></pattern>
          </defs>
          <rect x="0" y="0" width="900" height="220" fill="url(#t2h-grid)"/>
          <g filter="url(#t2h-glow)"><rect x="360" y="20" width="180" height="56" rx="14" fill="#0e1622" stroke="url(#t2h-grad)" stroke-width="2.4"/></g>
          <text x="450" y="46" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-weight="600" font-size="14">165 VIRAL HOOKS</text>
          <text x="450" y="64" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">5 nichos × 33</text>
          <g fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.5">
            <path d="M450,76 C 200,110 150,120 130,150"/><path d="M450,76 C 320,120 300,130 290,150"/>
            <path d="M450,76 L450,150"/><path d="M450,76 C 580,120 600,130 610,150"/><path d="M450,76 C 700,110 750,120 770,150"/>
          </g>
          ${[['🤖','AI',90],['💰','Finanças',250],['💪','Saúde',410],['🚀','Cresc.',570],['✈️','Viagem',730]].map(([e,t,x])=>
            `<rect x="${x}" y="150" width="120" height="54" rx="12" fill="#0e1622" stroke="#60a5fa" stroke-width="1.8"/><text x="${x+60}" y="174" text-anchor="middle" fill="#60a5fa" font-family="Inter,sans-serif" font-size="18">${e}</text><text x="${x+60}" y="194" text-anchor="middle" fill="#bfdbfe" font-family="Inter,sans-serif" font-size="11">${t} · 33</text>`).join('\n          ')}
        </svg>`);

  // Mapa da trilha
  const mapaCards = DATA.niches.map((niche, idx) => {
    const mod = `2-${idx+1}`; const meta = NICHE_META[niche.id];
    return `        <a href="#modulo-${mod}" class="group bg-dark-800 rounded-xl border border-dark-600 hover:border-blue-500/30 p-5 transition-all">
          <div class="flex items-center justify-between mb-2"><span class="text-blue-400 font-bold text-sm">${mod.replace('-','.')}</span><span class="text-xs text-neutral-500">~25 min</span></div>
          <h3 class="font-semibold mb-1 group-hover:text-blue-400 transition-colors">${meta.emoji} ${meta.headTitle}</h3>
          <p class="text-xs text-neutral-400">33 hooks, 5 padrões</p>
        </a>`;
  }).join('\n');

  // Cards de modulo (com topicos = os 5 padroes, resumidos)
  const moduleCards = DATA.niches.map((niche, idx) => {
    const mod = `2-${idx+1}`; const meta = NICHE_META[niche.id];
    const buckets = { medo:[], contra:[], numero:[], prova:[], curio:[] };
    niche.hooks.forEach(h => buckets[patternOf(h)].push(h));
    const topics = [
      L.accordion({ acc:'blue', n:1, emoji:'🧭', title:`Como ${meta.headTitle} prende`, sub:'objetivo + fórmula do nicho',
        oque:`A lógica do nicho: ${esc(meta.objective)}`,
        porque:'Entender o desejo por trás do nicho é o que faz o hook acertar — você fala com a dor/sonho certo.',
        conceitos:'Context Lean → Scroll Stop → Contrarian Snapback, aplicado aos 33 hooks.' }),
      ...PATTERNS.map((p,i) => L.accordion({ acc:'blue', n:i+2, emoji:p.emoji.replace('️',''), title:p.title, sub:`${buckets[p.key].length} hooks`,
        oque:esc(p.lead),
        porque:'É um dos 5 gatilhos que travam o scroll — reconhecê-lo te deixa criar variações infinitas.',
        conceitos: buckets[p.key].slice(0,3).map(h=>`“${esc(h.text)}”`).join(', ') || 'aparece combinado neste nicho.' }))
    ].join('\n');
    return L.moduleCard({ acc:'blue', mod, dur:'~25 min', emoji:meta.emoji, title:meta.headTitle,
      desc:`Os 33 hooks de ${meta.headTitle}, com imagem, frase falada, visual e texto na tela.`, topics });
  }).join('\n');

  const modals = DATA.niches.map((niche, idx) => {
    const mod = `2-${idx+1}`; const meta = NICHE_META[niche.id];
    return L.modal({ acc:'blue', mod, title:meta.headTitle });
  }).join('\n');

  const body = `${L.trilhaHeader({ acc, n:2, emoji:'🎯', title:'Técnicas — os 165 hooks',
    desc:'Os 33 viral hooks de cada um dos 5 nichos mais populares, com a frase falada, o visual e o texto na tela — e uma imagem de referência gerada pra cada exemplo. Agrupados pelos 5 padrões que fazem o dedo parar.',
    stats:[{v:'5',k:'Nichos'},{v:'165',k:'Hooks'},{v:'30',k:'Seções'},{v:'~2h',k:'Duração'}] })}

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

  return { file:'curso/trilha2/index.html', html:
    L.shell({ title:'Trilha 2: Técnicas', depth:2, activeTrack:2, accents:['blue'], body }) };
}

function buildT2(){
  const pages = [ t2Index() ];
  DATA.niches.forEach((niche, idx) => pages.push(nicheModule(niche, idx)));
  return pages;
}

module.exports = { buildT2 };
