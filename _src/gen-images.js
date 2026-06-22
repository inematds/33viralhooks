#!/usr/bin/env node
/* Gera 1 imagem por hook via inemaimg (flux2-klein) e comprime PNG->WebP com ffmpeg.
   Saida: curso/trilha2/img/<slug>/hook-NN.webp  (referenciada pelos modulos de nicho). */
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = '/home/nmaldaner/projetos/33viralhooks';
const OUTBASE = path.join(ROOT, 'curso/trilha2/img');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, '_src/hooks.json'), 'utf8'));
const LOG = path.join(ROOT, '_src/gen-images.log');
function log(m){ const line = `[${new Date().toISOString()}] ${m}\n`; fs.appendFileSync(LOG, line); process.stdout.write(line); }

// Sabor visual por nicho (mantem cinematografico dark premium, acento azul/ciano)
const FLAVOR = {
  ai: 'futuristic technology, holographic interface, sci-fi, electric blue and cyan neon glow',
  finance: 'luxury finance, money, stock charts, gold and deep blue, premium business',
  health: 'fitness and health, gym, athletic body, dynamic energy, cyan rim light',
  selfimprovement: 'productivity, minimalist desk, focus and discipline, clean modern, blue accent',
  travel: 'travel and adventure, cinematic landscape, wanderlust, dramatic sky'
};

function genImage(prompt, seed){
  const payload = JSON.stringify({ model:'flux2-klein', prompt, width:1024, height:576, steps:4, guidance_scale:1.0, seed });
  return new Promise((resolve, reject) => {
    const req = http.request({ host:'localhost', port:8000, path:'/generate', method:'POST',
      headers:{ 'Content-Type':'application/json', 'Content-Length':Buffer.byteLength(payload) }, timeout:180000 },
      res => { let body=''; res.on('data',c=>body+=c); res.on('end',()=>{
        try { const j=JSON.parse(body); const b64=j.image||j.image_base64||(j.images&&j.images[0]);
          if(!b64) return reject(new Error('sem image no retorno: '+body.slice(0,200)));
          resolve(Buffer.from(b64.replace(/^data:image\/\w+;base64,/,''),'base64')); }
        catch(e){ reject(new Error('parse falhou: '+body.slice(0,200))); }
      }); });
    req.on('error', reject); req.on('timeout', ()=>req.destroy(new Error('timeout')));
    req.write(payload); req.end();
  });
}

(async () => {
  let done=0, fail=0; const total = data.niches.reduce((a,n)=>a+n.hooks.length,0);
  log(`INICIO — ${total} imagens`);
  for (const niche of data.niches){
    const dir = path.join(OUTBASE, niche.slug);
    fs.mkdirSync(dir, { recursive:true });
    const flavor = FLAVOR[niche.id] || '';
    for (const h of niche.hooks){
      const nn = String(h.n).padStart(2,'0');
      const out = path.join(dir, `hook-${nn}.webp`);
      if (fs.existsSync(out) && fs.statSync(out).size > 2000){ done++; continue; } // resume
      const prompt = `cinematic dark premium thumbnail, ${h.visual} ${flavor}, dramatic moody lighting, deep navy-black background, high contrast, shallow depth of field, photographic realism, volumetric glow, 8k, no text, no watermark, no caption`;
      const seed = (data.niches.indexOf(niche)+1)*1000 + h.n;
      const tmp = path.join(os.tmpdir(), `vh_${niche.id}_${nn}.png`);
      try {
        const png = await genImage(prompt, seed);
        fs.writeFileSync(tmp, png);
        execFileSync('ffmpeg', ['-y','-loglevel','error','-i',tmp,'-c:v','libwebp','-quality','70','-preset','photo',out]);
        fs.unlinkSync(tmp);
        done++; log(`OK ${niche.slug}/hook-${nn}  (${done}/${total})`);
      } catch(e){ fail++; log(`FALHA ${niche.slug}/hook-${nn}: ${e.message}`); }
    }
  }
  log(`FIM — ok=${done} fail=${fail}`);
})();
