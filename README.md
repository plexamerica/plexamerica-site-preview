# PlexAmerica — Site Institucional

Site institucional da **PlexAmerica Indústria e Comércio Ltda** (Guajará-Mirim/RO), distribuidora B2B exclusiva Reyplast para a Amazônia Ocidental (RO · AC · AM).

## Estrutura de páginas

| Rota | Descrição |
|------|-----------|
| `index.html` | Home — hero, manifesto, cobertura, categorias |
| `sobre.html` | Sobre — história e diferenciais |
| `para-fabricantes.html` | Página para fabricantes que querem distribuir na região |
| `seja-revendedor.html` | Página para revendedores parceiros |
| `catalogo.html` | Catálogo Reyplast (em construção) |

## Stack

- HTML estático
- React 18 + Babel-standalone via CDN (sem build step)
- Componentes em `*.jsx` carregados em runtime via `<script type="text/babel" src="...">`
- `tokens.css` (design tokens) + `styles.css` (resets globais)

Não há `package.json`, `node_modules`, nem etapa de bundling. Tudo é servido como arquivo estático.

## Como rodar localmente

Como o Babel-standalone busca os `.jsx` por `fetch`, é preciso servir via HTTP (abrir o `index.html` direto no navegador via `file://` não funciona).

```bash
# Python 3
python -m http.server 8000
```

Depois abra `http://localhost:8000/`.

Qualquer outro servidor estático serve (Node `http-server`, `caddy file-server`, extensão Live Server do VSCode, etc.).

## Como publicar no GitHub Pages

1. Criar um repositório no GitHub.
2. `git remote add origin <url-do-repo>` e `git push -u origin main`.
3. No GitHub, ir em **Settings → Pages**.
4. Em **Source**, selecionar **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Salvar. O site fica disponível em `https://<usuario>.github.io/<repo>/` em alguns minutos.

O arquivo `.nojekyll` no root garante que o GitHub Pages não processe o site com Jekyll (necessário para servir corretamente a pasta `_archive/`).

## Pasta `_archive/`

Contém variações de design exploradas durante o handoff (Hero+Manifesto V1–V4, Home A vs B, versões standalone e print). **Não fazem parte do site publicado** — ficam preservadas apenas como referência histórica.
