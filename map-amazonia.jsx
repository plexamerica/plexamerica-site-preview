/* Mapa estilizado da Amazônia Ocidental — RO/AC/AM + ponto Bolívia.
   Não é geograficamente exato; é "reconhecível mas estilizado".
   - Contorno minimalista da silhueta dos 3 estados + recorte da fronteira RO-Bolívia
   - Pinos das 6 (ou 8) cidades atendidas
   - Linhas geodésicas saindo de Guajará-Mirim (mais opacas no nó central, mais sutis nas pontas)
*/

// Coordenadas dentro de um viewBox 1000x680.
// Ordem: Manaus (NE) — Rio Branco (SW) — Porto Velho (centro) — Ji-Paraná (E de PV)
//        — Cacoal — Vilhena — Guajará-Mirim (sede, fronteira) — Guayaramerín (Bolívia, do outro lado)
const PLEX_CITIES = [
  { id: "manaus",    label: "Manaus",        sub: "AM",        x: 720, y: 175, kind: "city" },
  { id: "riobranco", label: "Rio Branco",    sub: "AC",        x: 215, y: 415, kind: "city" },
  { id: "portovelho",label: "Porto Velho",   sub: "RO • capital", x: 470, y: 360, kind: "city" },
  { id: "jiparana",  label: "Ji-Paraná",     sub: "RO",        x: 575, y: 425, kind: "city" },
  { id: "cacoal",    label: "Cacoal",        sub: "RO",        x: 615, y: 470, kind: "city" },
  { id: "vilhena",   label: "Vilhena",       sub: "RO",        x: 700, y: 540, kind: "city" },
  { id: "guajara",   label: "Guajará-Mirim", sub: "Sede • CD", x: 360, y: 500, kind: "hub" },
  { id: "guayara",   label: "Guayaramerín",  sub: "Bolívia • expansão", x: 330, y: 520, kind: "border" },
];

/* Silhueta livre dos 3 estados (estilizada, não cartograficamente exata).
   Comeca no NW (alto Solimões), sobe pelo norte do AM, desce pelo leste, volta
   pelo sul de RO até o oeste do AC. */
const PLEX_OUTLINE = `
  M 80 250
  C 130 200, 250 170, 360 160
  C 470 145, 600 140, 760 155
  C 850 165, 920 195, 935 240
  C 940 285, 905 320, 880 360
  C 855 410, 850 460, 820 510
  C 780 560, 720 595, 640 605
  C 540 615, 460 605, 380 590
  C 310 580, 270 555, 230 525
  C 200 505, 175 475, 165 440
  C 150 395, 130 360, 110 320
  C 95 295, 78 275, 80 250 Z
`.replace(/\s+/g, " ").trim();

/* Linha de fronteira Brasil–Bolívia: entra pelo SW (perto de Guajará-Mirim)
   e sai pelo S (limite com Mato Grosso). É um detalhe sutil, não um corte real. */
const PLEX_BORDER = `
  M 270 525
  C 305 515, 345 510, 385 510
  C 425 510, 470 525, 505 555
  C 535 580, 555 600, 580 605
`.replace(/\s+/g, " ").trim();

/* Geodésicas saindo de Guajará-Mirim para cada destino. Cada linha curva
   é (sx,sy) → controle alto → (ex,ey), para sugerir trajeto aéreo. */
function plexGeodesic(sx, sy, ex, ey) {
  const mx = (sx + ex) / 2;
  const my = (sy + ey) / 2;
  // arco "para cima" (menor y), proporcional à distância
  const dx = ex - sx, dy = ey - sy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(120, dist * 0.28);
  return `M ${sx} ${sy} Q ${mx} ${my - lift} ${ex} ${ey}`;
}

function PlexAmazoniaMap({
  variant = "default",      // "default" | "ghost" | "bold"
  showLines = true,
  showLabels = true,
  highlightHub = true,
  mapLanguage = "geodesic", // "geodesic" | "constellation" | "silhouette"
  accent = "#F6B817",
  className = "",
  style = {},
}) {
  // Paletas por variante (todas dentro da paleta oficial)
  const palette = {
    default: { stroke: "#4A6FA5", fill: "rgba(74,111,165,0.06)", line: accent, pin: accent, hub: accent, text: "rgba(255,255,255,0.78)" },
    ghost:   { stroke: "rgba(74,111,165,0.55)", fill: "rgba(74,111,165,0.03)", line: accent, pin: accent, hub: accent, text: "rgba(255,255,255,0.55)" },
    bold:    { stroke: "#FFFFFF", fill: "rgba(255,255,255,0.04)", line: accent, pin: accent, hub: accent, text: "#FFFFFF" },
  }[variant] || {};

  // Linguagem do mapa altera a expressão visual:
  // - geodesic: rotas curvas + glow + pinos com labels
  // - constellation: só pontos + halos sutis, sem rotas
  // - silhouette: contorno + grade, sem pinos nem rotas — virar marca d'água
  const showLinesEff = showLines && mapLanguage === "geodesic";
  const showPins = mapLanguage !== "silhouette";
  const showHubGlow = highlightHub && mapLanguage === "geodesic";
  const showLabelsEff = showLabels && mapLanguage !== "silhouette";
  const showConstellationHalos = mapLanguage === "constellation";

  const hub = PLEX_CITIES.find(c => c.id === "guajara");

  return (
    <svg
      viewBox="0 0 1000 680"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="plex-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#F6B817" stopOpacity="0.45"/>
          <stop offset="60%" stopColor="#F6B817" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#F6B817" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="plex-geo-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#F6B817" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#F6B817" stopOpacity="0.18"/>
        </linearGradient>
        <pattern id="plex-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(74,111,165,0.08)" strokeWidth="0.5"/>
        </pattern>
      </defs>

      {/* Grade sutil */}
      <rect x="0" y="0" width="1000" height="680" fill="url(#plex-grid)" />

      {/* Silhueta dos 3 estados */}
      <path d={PLEX_OUTLINE}
            fill={palette.fill}
            stroke={palette.stroke}
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke" />

      {/* Linha de fronteira Brasil–Bolívia (tracejada, sutil) */}
      <path d={PLEX_BORDER}
            fill="none"
            stroke={palette.stroke}
            strokeOpacity="0.6"
            strokeWidth="1"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke" />

      {/* Geodésicas a partir do hub */}
      {showLinesEff && PLEX_CITIES.filter(c => c.kind !== "hub").map(c => {
        const isBorder = c.kind === "border";
        return (
          <path key={"g-" + c.id}
                d={plexGeodesic(hub.x, hub.y, c.x, c.y)}
                fill="none"
                stroke={isBorder ? "rgba(246,184,23,0.45)" : "url(#plex-geo-line)"}
                strokeWidth={isBorder ? 1.1 : 1.4}
                strokeDasharray={isBorder ? "4 4" : "none"}
                vectorEffect="non-scaling-stroke" />
        );
      })}

      {/* Glow do hub */}
      {showHubGlow && (
        <circle cx={hub.x} cy={hub.y} r="80" fill="url(#plex-hub-glow)" />
      )}

      {/* Pinos */}
      {showPins && PLEX_CITIES.map(c => {
        const isHub = c.kind === "hub";
        const isBorder = c.kind === "border";
        const r = isHub ? 7 : 4;
        const fill = isHub ? palette.hub : isBorder ? "transparent" : palette.pin;
        const stroke = isBorder ? palette.pin : "rgba(13,26,64,0.9)";
        return (
          <g key={c.id} transform={`translate(${c.x} ${c.y})`}>
            {isHub && <circle r="14" fill="none" stroke={palette.hub} strokeOpacity="0.45" strokeWidth="1"/>}
            {showConstellationHalos && !isBorder && (
              <circle r={isHub ? 22 : 11} fill="none" stroke={palette.pin} strokeOpacity="0.22" strokeWidth="0.8"/>
            )}
            <circle r={r} fill={fill} stroke={stroke} strokeWidth="1.2" />
            {showLabelsEff && (
              <g transform={`translate(${isHub ? 14 : 10}, ${isHub ? 4 : 3})`}>
                <text fontFamily="PlexAmerica, sans-serif"
                      fontSize={isHub ? 14 : 12}
                      fontWeight={isHub ? 600 : 500}
                      fill={isHub ? accent : palette.text}
                      letterSpacing="0.02em">
                  {c.label}
                </text>
                <text fontFamily="PlexAmerica, sans-serif"
                      fontSize="10"
                      fontWeight="400"
                      fill={isHub ? "rgba(246,184,23,0.75)" : "rgba(255,255,255,0.45)"}
                      letterSpacing="0.08em"
                      y="13"
                      style={{ textTransform: "uppercase" }}>
                  {c.sub}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

window.PlexAmazoniaMap = PlexAmazoniaMap;
window.PLEX_CITIES = PLEX_CITIES;
