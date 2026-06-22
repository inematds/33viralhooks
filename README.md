# 🪝 33 Viral Hooks — Curso INEMA.CLUB

Curso sobre **viral hooks** para vídeo curto (TikTok, Reels, Shorts): os **33 hooks de cada um dos 5 nichos** mais populares (165 no total), com a frase falada, o Visual Hook, o Text Hook e uma **imagem de referência gerada por IA** para cada exemplo.

🔗 **No ar:** https://inematds.github.io/33viralhooks/

## Trilhas

1. **Fundamentos** — o que é um hook, as 3 camadas (falada · visual · texto) e a fórmula *Context Lean → Scroll Stop → Contrarian Snapback*.
2. **Técnicas** — os 165 hooks (5 nichos × 33), com imagem, agrupados pelos 5 padrões virais.
3. **Avançado** — prompts copy-run e uma *skill* ("Hook Machine") para gerar seus próprios hooks com IA.

## Stack

- HTML estático self-contained + Tailwind (CDN) + camada de aprendizagem INEMA (`assets/learn.css` / `assets/learn.js`): progresso, marcar-lido, anotações, "minha jornada", temas e modo leitura.
- Imagens geradas localmente (flux2-klein) e comprimidas em WebP.

## Build

As páginas são geradas pelos scripts em `_src/` (`node _src/build.js`) a partir de `_src/hooks.json`. As imagens vêm de `node _src/gen-images.js` (servidor inemaimg local).

---

Feito para a comunidade **[INEMA.CLUB](https://inema.club)**.
