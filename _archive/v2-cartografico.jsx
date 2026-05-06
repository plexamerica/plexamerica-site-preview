/* PlexAmerica — V2: Cartográfico
   Mapa da Amazônia Ocidental como protagonista (40–50% do hero), pontos brilhando,
   linhas geodésicas saindo de Guajará-Mirim. Sensação: Maersk/DHL institucional —
   logística internacional, tom de "cobertura provada".
*/

const v2Styles = {
  page: {
    width: 1440,
    background: "#0d1a40",
    color: "#FFFFFF",
    fontFamily: "var(--plex-font)",
    fontWeight: 400,
    overflow: "hidden",
    position: "relative",
  },
  topbar: {
    height: 76, padding: "0 56px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    position: "relative", zIndex: 4,
  },
  brandRow: { display: "flex", alignItems: "center", gap: 14 },
  brandMark: {
    width: 32, height: 32, borderRadius: 6,
    border: "1px solid rgba(246,184,23,0.6)",
    display: "grid", placeItems: "center",
    color: "#F6B817", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em",
  },
  brandWord: { fontWeight: 600, fontSize: 18 },
  nav: { display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)" },
  navActive: { color: "#FFF", borderBottom: "1px solid #F6B817", paddingBottom: 4 },
  rightTop: { display: "flex", alignItems: "center", gap: 18, fontSize: 13, color: "rgba(255,255,255,0.6)" },

  // HERO em duas colunas: texto à esquerda, mapa grande à direita.
  hero: {
    position: "relative",
    minHeight: 760,
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    background: "linear-gradient(135deg, #0d1a40 0%, #0a1535 100%)",
  },
  heroLeft: {
    padding: "100px 64px 80px 96px",
    display: "flex", flexDirection: "column", justifyContent: "center",
    position: "relative", zIndex: 2,
  },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 12,
    fontSize: 11, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.9)", marginBottom: 36,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius: 999, background: "#F6B817", boxShadow: "0 0 0 4px rgba(246,184,23,0.18)" },
  h1: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: 84, lineHeight: 0.98, letterSpacing: "-0.025em",
    margin: 0, color: "#FFFFFF", textWrap: "balance",
  },
  h1Period: { color: "#F6B817" },
  lead: {
    marginTop: 28, fontSize: 20, lineHeight: 1.55,
    color: "rgba(255,255,255,0.72)", maxWidth: 480, textWrap: "pretty",
  },
  ctaRow: { marginTop: 44, display: "flex", gap: 14 },
  ctaPrimary: {
    background: "#F6B817", color: "#0d1a40",
    padding: "18px 26px", borderRadius: 4, fontWeight: 600, fontSize: 15,
    border: "none", cursor: "pointer", display: "inline-flex", gap: 12, alignItems: "center",
  },
  ctaSecondary: {
    background: "transparent", color: "#FFFFFF",
    padding: "18px 26px", borderRadius: 4, fontWeight: 500, fontSize: 15,
    border: "1px solid rgba(255,255,255,0.32)", cursor: "pointer",
  },
  // legenda sob CTAs
  caption: { marginTop: 56, display: "flex", gap: 36, fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" },
  capLabel: { color: "rgba(246,184,23,0.85)", fontWeight: 600, marginRight: 8 },

  // Coluna direita: o mapa
  heroRight: {
    position: "relative",
    overflow: "hidden",
    borderLeft: "1px solid rgba(255,255,255,0.07)",
    background: "radial-gradient(80% 60% at 30% 50%, rgba(74,111,165,0.18), rgba(13,26,64,0))",
  },
  mapWrap: { position: "absolute", inset: 0, padding: 24 },
  mapBadge: {
    position: "absolute", top: 32, right: 32,
    background: "rgba(13,26,64,0.7)", backdropFilter: "blur(6px)",
    border: "1px solid rgba(246,184,23,0.35)",
    padding: "10px 16px", borderRadius: 4,
    fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
    color: "#F6B817", fontWeight: 600,
    display: "flex", alignItems: "center", gap: 10, zIndex: 3,
  },
  liveDot: { width: 6, height: 6, borderRadius: 999, background: "#F6B817", boxShadow: "0 0 12px #F6B817" },
  mapCorner: {
    position: "absolute", left: 32, bottom: 32,
    fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)", zIndex: 3, display: "flex", flexDirection: "column", gap: 6,
  },
  mapCornerNum: { fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: 28, color: "#FFFFFF", letterSpacing: "-0.01em" },

  // MANIFESTO
  manifesto: {
    position: "relative",
    padding: "120px 96px 140px",
    background: "#0a1535",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 80,
    alignItems: "start",
  },
  mLabel: {
    fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)",
    display: "flex", alignItems: "center", gap: 14, marginBottom: 32,
  },
  mLine: { width: 56, height: 1, background: "#F6B817" },
  mAside: { color: "rgba(255,255,255,0.65)" },
  mAsideKicker: { fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 20 },
  mAsideRow: {
    padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    fontSize: 14,
  },
  mAsideRowLast: {
    padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)",
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    fontSize: 14,
  },
  mAsideKey: { color: "rgba(255,255,255,0.55)", letterSpacing: "0.02em" },
  mAsideVal: { color: "#FFF", fontWeight: 500 },
  mAnchor: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: 60, lineHeight: 1.06, letterSpacing: "-0.02em",
    color: "#F6B817", margin: 0, textWrap: "balance",
  },
  mBody: {
    marginTop: 36,
    fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,0.78)",
    maxWidth: 620, textWrap: "pretty",
  },
};

function V2HeroManifesto() {
  return (
    <div style={v2Styles.page}>
      <div style={v2Styles.topbar}>
        <div style={v2Styles.brandRow}>
          <div style={v2Styles.brandMark}>P</div>
          <div style={v2Styles.brandWord}>PlexAmerica</div>
        </div>
        <div style={v2Styles.nav}>
          <div style={v2Styles.navActive}>Início</div>
          <div>Catálogo Reyplast</div>
          <div>Sobre</div>
          <div>Para Fabricantes</div>
          <div>Seja Revendedor</div>
        </div>
        <div style={v2Styles.rightTop}>
          <span style={{ color: "#F6B817" }}>WhatsApp →</span>
        </div>
      </div>

      <section style={v2Styles.hero}>
        <div style={v2Styles.heroLeft}>
          <div style={v2Styles.eyebrow}>
            <span style={v2Styles.eyebrowDot}></span>
            <span>Cobertura RO · AC · AM</span>
          </div>
          <h1 style={v2Styles.h1}>
            Conectando oportunidades<span style={v2Styles.h1Period}>.</span>
          </h1>
          <p style={v2Styles.lead}>
            Distribuição estratégica para a Amazônia Ocidental, a partir de Guajará-Mirim — fronteira Brasil-Bolívia, Área de Livre Comércio.
          </p>
          <div style={v2Styles.ctaRow}>
            <button style={v2Styles.ctaPrimary}>
              Ver catálogo Reyplast <span aria-hidden>→</span>
            </button>
            <button style={v2Styles.ctaSecondary}>
              Falar no WhatsApp
            </button>
          </div>
          <div style={v2Styles.caption}>
            <div><span style={v2Styles.capLabel}>Sede</span> Guajará-Mirim/RO</div>
            <div><span style={v2Styles.capLabel}>Regime</span> ALCGM · SUFRAMA</div>
          </div>
        </div>

        <div style={v2Styles.heroRight}>
          <div style={v2Styles.mapBadge}>
            <span style={v2Styles.liveDot}></span>
            <span>Malha de distribuição ativa</span>
          </div>
          <div style={v2Styles.mapWrap}>
            <PlexAmazoniaMap variant="default" showLabels={true} />
          </div>
          <div style={v2Styles.mapCorner}>
            <div style={v2Styles.mapCornerNum}>8 praças</div>
            <div>RO · AC · AM + expansão Bolívia</div>
          </div>
        </div>
      </section>

      <section style={v2Styles.manifesto}>
        <div style={v2Styles.mAside}>
          <div style={v2Styles.mLabel}>
            <span style={v2Styles.mLine}></span>
            <span>01 · Manifesto</span>
          </div>
          <div style={v2Styles.mAsideKicker}>Operação em números</div>
          <div style={v2Styles.mAsideRow}>
            <span style={v2Styles.mAsideKey}>Estados ativos</span>
            <span style={v2Styles.mAsideVal}>Rondônia · Acre · Amazonas</span>
          </div>
          <div style={v2Styles.mAsideRow}>
            <span style={v2Styles.mAsideKey}>Sede / CD</span>
            <span style={v2Styles.mAsideVal}>Guajará-Mirim / RO</span>
          </div>
          <div style={v2Styles.mAsideRow}>
            <span style={v2Styles.mAsideKey}>Capacidade armazenagem</span>
            <span style={v2Styles.mAsideVal}>[CD: X m²]</span>
          </div>
          <div style={v2Styles.mAsideRow}>
            <span style={v2Styles.mAsideKey}>Linha exclusiva</span>
            <span style={v2Styles.mAsideVal}>Reyplast · utilidades domésticas</span>
          </div>
          <div style={v2Styles.mAsideRowLast}>
            <span style={v2Styles.mAsideKey}>Expansão estruturada</span>
            <span style={v2Styles.mAsideVal}>Beni · Pando (Bolívia)</span>
          </div>
        </div>

        <div>
          <h2 style={v2Styles.mAnchor}>
            Caminhos estratégicos fazem parte de uma boa prática comercial.
          </h2>
          <p style={v2Styles.mBody}>
            A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio para quem vive em lados opostos do globo. Existimos para encurtá-las. Somos facilitadores de caminhos comerciais entre cadeias produtivas e mercados.
          </p>
        </div>
      </section>
    </div>
  );
}

window.V2HeroManifesto = V2HeroManifesto;
