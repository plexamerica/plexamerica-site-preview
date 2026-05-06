# Guia de Uso dos Logos PlexAmerica no Site

## Decodificação dos arquivos

**Tipos de logo (4 formatos)**
- **MARCA-HOR** → Wordmark horizontal (PLEXAMERICA em uma linha) — versão para header/cabeçalhos
- **MARCA-VERT** → Logo composto vertical (símbolo + PLEXAMERICA empilhados) — versão para áreas quadradas
- **SIMBOLO** → Apenas o ícone seta+X — versão para favicon, app icon, espaços muito pequenos
- **ASSINATURA** → Símbolo + tagline "CONECTANDO OPORTUNIDADES" — versão para institucional pesado

**Variações de cor (5 cada)**
- **AZUL-DOURADO** (01) → para fundos brancos/claros — versão padrão institucional
- **BRANCO-DOURADO** (02) → para fundos escuros — destaque dourado preservado
- **BRANCO-AZUL** (03) → para fundos escuros — versão alternativa
- **BRANCO** → para fundos escuros — versão mais sóbria, sem dourado
- **PRETO** → para impressão monocromática ou aplicações em preto-e-branco

---

## Recomendação de uso por seção do site

### Header (navegação superior do site)
**Arquivo:** `plexamerica-marca-hor-branco-dourado.png`
- O header fica sobre fundo escuro #0d1a40, então usa a versão branca com X dourado
- Tamanho recomendado: altura 40-48px no desktop, 32px no mobile
- Largura proporcional resultante: ~415px desktop / ~330px mobile

### Bloco "Marcas que distribuímos" (fundo claro)
**Arquivo:** `plexamerica-marca-hor-azul-dourado.png`
- Sobre fundo branco/claro, usa versão institucional padrão
- Aparece junto ao logo Reyplast como "marca da casa"

### Rodapé global (fundo escuro #0d1a40)
**Arquivo:** `plexamerica-marca-hor-branco-dourado.png` ou `plexamerica-marca-hor-branco.png`
- Mesma versão do header, ou sóbria sem dourado se preferir hierarquia visual

### Favicon do navegador
**Arquivo:** `plexamerica-simbolo-azul-dourado.png`
- Cortar e exportar em 32×32, 64×64, 192×192px para diferentes dispositivos
- Usa só o símbolo seta+X (PLEXAMERICA não cabe em 32px)

### Open Graph / link social
**Arquivo:** `plexamerica-marca-vert-branco-dourado.png` sobre fundo #0d1a40
- Imagem 1200×630px com logo centralizado e tagline "Conectando oportunidades"

### Bloco institucional pesado (Sobre, Para Fabricantes — fundo escuro)
**Arquivo:** `plexamerica-assinatura-branco-dourado.png`
- A assinatura completa com tagline reforça o posicionamento
- Usar como "logo de fechamento" antes do dual-CTA

### App icon mobile (PWA)
**Arquivo:** `plexamerica-simbolo-azul-dourado.png` sobre fundo branco
- Ou `plexamerica-simbolo-branco-dourado.png` sobre fundo #0d1a40

---

## Regra simples de decisão

| Onde aparece | Fundo | Arquivo |
|---|---|---|
| Header | escuro #0d1a40 | marca-hor-branco-dourado |
| Marcas que distribuímos | claro | marca-hor-azul-dourado |
| Rodapé | escuro #0d1a40 | marca-hor-branco-dourado |
| Sobre / Para Fabricantes (institucional) | escuro #0d1a40 | assinatura-branco-dourado |
| Favicon | qualquer | simbolo-azul-dourado |
| Mobile / espaços quadrados | qualquer | marca-vert-branco-dourado |

---

## Prompt para o Claude Design

```
Substitua todos os placeholders "P PlexAmerica" pelos logos oficiais conforme:

1. HEADER (fundo escuro #0d1a40): use plexamerica-marca-hor-branco-dourado.png,
   altura 40px desktop / 32px mobile.

2. BLOCO "MARCAS QUE DISTRIBUÍMOS" (fundo claro): use 
   plexamerica-marca-hor-azul-dourado.png ao lado do logo Reyplast,
   ambos com altura ~80px, separados por divisor dourado vertical de 1px.

3. RODAPÉ (fundo escuro #0d1a40): use plexamerica-marca-hor-branco-dourado.png,
   altura 36px.

4. BLOCO MANIFESTO E DUAL-CTA FINAL: NÃO inserir logo nestas seções —
   o conteúdo institucional fala por si.

5. FAVICON: use plexamerica-simbolo-azul-dourado.png exportado em 32×32 e 192×192.

Manter proporções originais e nunca distorcer. Margem de segurança ao redor 
do logo de no mínimo metade da altura do logo.
```

---

## Notas importantes

- Todos os arquivos foram processados em **alta resolução (3000-3700px)** — qualidade profissional para qualquer tela.
- Fundo já está **transparente (PNG)** — funciona sobre qualquer cor.
- A pasta contém **20 arquivos** (4 formatos × 5 variações de cor).
- Para conversão futura para SVG (ainda mais leve e escalável infinitamente), você pode pedir ao designer original o arquivo `.ai` ou `.svg` — mas para web atual os PNGs entregues já são adequados.
