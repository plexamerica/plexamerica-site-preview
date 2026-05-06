/* PlexAmerica — V1: Editorial sóbrio
   Hero quase preto, mapa em opacidade muito baixa (5–8%), tipografia gigante,
   dourado com parcimônia (apenas CTA primário e frase âncora do manifesto).
   Sensação: revista B2B premium tipo Harvard Business Review.

   Cada artboard é uma seção do site (hero + manifesto + dual-CTA inferior na home).
   A V1 fica no artboard único "Hero + Manifesto" mostrando os dois blocos empilhados
   exatamente como apareceriam na Home.
*/

const v1Styles = {
  page: {
    width: 1440,
    background: "#0d1a40",
    color: "#FFFFFF",
    fontFamily: "var(--plex-font)",
    fontWeight: 400,
    overflow: "hidden",
    position: "relative",
  },
  // ——— Topbar
  topbar: {
    height: 76,
    padding: "0 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    position: "relative",
    zIndex: 3,
  },
  brandRow: { display: "flex", alignItems: "center", gap: 14 },
  brandMark: {
    width: 32, height: 32, borderRadius: 6,
    border: "1px solid rgba(246,184,23,0.6)",
    display: "grid", placeItems: "center",
    color: "#F6B817", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em",
  },
  brandWord: { fontWeight: 600, fontSize: 18, letterSpacing: "0.02em" },
  brandTag: { fontSize: 11, letterSpacing: "0.22em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginLeft: 4, paddingLeft: 14, borderLeft: "1px solid rgba(255,255,255,0.18)" },
  nav: { display: "flex", gap: 36, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)", letterSpacing: "0.01em" },
  navItem: { cursor: "pointer" },
  navItemActive: { color: "#FFFFFF", borderBottom: "1px solid #F6B817", paddingBottom: 4 },
  topRight: { display: "flex", alignItems: "center", gap: 18, fontSize: 13, color: "rgba(255,255,255,0.6)" },
  // ——— Hero
  hero: {
    position: "relative",
    padding: "120px 96px 140px",
    minHeight: 760,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.15fr) 380px",
    gap: 64,
    alignItems: "center",
  },
  heroMap: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,                // 7% — quase imperceptível
    pointerEvents: "none",
  },
  heroVignette: {
    position: "absolute", inset: 0,
    background: "radial-gradient(120% 80% at 30% 40%, rgba(13,26,64,0) 0%, rgba(13,26,64,0.85) 70%)",
    pointerEvents: "none",
  },
  heroLeft: { position: "relative", zIndex: 2, minWidth: 0 },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 12,
    fontSize: 12, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)", marginBottom: 36,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius: 999, background: "#F6B817" },
  eyebrowLine: { width: 40, height: 1, background: "rgba(246,184,23,0.5)" },
  h1: {
    fontFamily: "var(--plex-font)",
    fontWeight: 700,
    fontSize: 96,
    lineHeight: 0.96,
    letterSpacing: "-0.025em",
    margin: 0,
    color: "#FFFFFF",
    textWrap: "balance",
  },
  h1Period: { color: "#F6B817" },
  heroLead: {
    marginTop: 32,
    fontSize: 22,
    lineHeight: 1.5,
    fontWeight: 400,
    color: "rgba(255,255,255,0.72)",
    maxWidth: 540,
    textWrap: "pretty",
  },
  ctaRow: { marginTop: 48, display: "flex", gap: 16, alignItems: "center" },
  ctaPrimary: {
    background: "#F6B817", color: "#0d1a40",
    padding: "18px 28px", borderRadius: 4,
    fontWeight: 600, fontSize: 15, letterSpacing: "0.02em",
    border: "none", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 12,
  },
  ctaSecondary: {
    background: "transparent", color: "#FFFFFF",
    padding: "18px 28px", borderRadius: 4,
    fontWeight: 500, fontSize: 15, letterSpacing: "0.02em",
    border: "1px solid rgba(255,255,255,0.32)", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 12,
  },
  // ——— Heroaside (lateral direita: cartela de credenciais)
  heroAside: {
    position: "relative", zIndex: 2,
    borderLeft: "1px solid rgba(255,255,255,0.12)",
    paddingLeft: 40,
    color: "rgba(255,255,255,0.78)",
    minWidth: 0,
  },
  asideKicker: { fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 24 },
  asideQuote: {
    fontFamily: "var(--plex-font)", fontWeight: 400, fontStyle: "italic",
    fontSize: 19, lineHeight: 1.45, color: "rgba(255,255,255,0.88)",
    borderLeft: "2px solid #F6B817", paddingLeft: 18, margin: "0 0 32px",
    textWrap: "pretty",
  },
  asideStats: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 20px", marginTop: 28 },
  statNum: { fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em" },
  statLabel: { fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 8, letterSpacing: "0.06em", textTransform: "uppercase" },
  placeholderTag: { fontSize: 10, color: "rgba(246,184,23,0.7)", marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase", fontStyle: "italic" },

  // Indicador de scroll
  scrollHint: {
    position: "absolute", left: 96, bottom: 36,
    display: "flex", alignItems: "center", gap: 14,
    fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
  },
  scrollLine: { width: 64, height: 1, background: "rgba(255,255,255,0.3)" },

  // ——— Manifesto
  manifesto: {
    position: "relative",
    padding: "140px 96px 160px",
    background: "#0a1535",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  manifestoLabel: {
    fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)",
    display: "flex", alignItems: "center", gap: 14, marginBottom: 56,
  },
  manifestoLine: { width: 56, height: 1, background: "#F6B817" },
  manifestoAnchor: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.02em",
    color: "#F6B817", margin: 0, maxWidth: 1100,
    textWrap: "balance",
  },
  manifestoBody: {
    marginTop: 56, maxWidth: 760,
    fontFamily: "var(--plex-font)", fontWeight: 400,
    fontSize: 21, lineHeight: 1.6, color: "rgba(255,255,255,0.78)",
    textWrap: "pretty",
  },
  manifestoSig: {
    marginTop: 64, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
    color: "rgba(255,255,255,0.5)", fontSize: 13, letterSpacing: "0.02em",
  },
  sigQuote: { fontStyle: "italic", color: "rgba(255,255,255,0.7)", maxWidth: 380, lineHeight: 1.5 },
  sigCite: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" },
};

function V1HeroManifesto() {
  return (
    <div style={v1Styles.page}>
      {/* TOPBAR */}
      <div style={v1Styles.topbar}>
        <div style={v1Styles.brandRow}>
          <div style={v1Styles.brandMark}>P</div>
          <div style={v1Styles.brandWord}>PlexAmerica</div>
          <div style={v1Styles.brandTag}>Indústria e Comércio</div>
        </div>
        <div style={v1Styles.nav}>
          <div style={{...v1Styles.navItem, ...v1Styles.navItemActive}}>Início</div>
          <div style={v1Styles.navItem}>Catálogo Reyplast</div>
          <div style={v1Styles.navItem}>Sobre</div>
          <div style={v1Styles.navItem}>Para Fabricantes</div>
          <div style={v1Styles.navItem}>Seja Revendedor</div>
        </div>
        <div style={v1Styles.topRight}>
          <span>Guajará-Mirim / RO</span>
          <span style={{ color: "#F6B817" }}>WhatsApp →</span>
        </div>
      </div>

      {/* HERO */}
      <section style={v1Styles.hero}>
        <div style={v1Styles.heroMap}>
          <PlexAmazoniaMap variant="ghost" showLabels={false} />
        </div>
        <div style={v1Styles.heroVignette} />

        <div style={v1Styles.heroLeft}>
          <div style={v1Styles.eyebrow}>
            <span style={v1Styles.eyebrowDot}></span>
            <span>Distribuição B2B • Amazônia Ocidental</span>
          </div>
          <h1 style={v1Styles.h1}>
            Conectando<br/>oportunidades<span style={v1Styles.h1Period}>.</span>
          </h1>
          <p style={v1Styles.heroLead}>
            Distribuição estratégica para a Amazônia Ocidental — Rondônia, Acre e Amazonas. Sediados em Guajará-Mirim, na fronteira do Brasil com a Bolívia.
          </p>
          <div style={v1Styles.ctaRow}>
            <button style={v1Styles.ctaPrimary}>
              Ver catálogo Reyplast
              <span aria-hidden>→</span>
            </button>
            <button style={v1Styles.ctaSecondary}>
              Falar no WhatsApp
            </button>
          </div>
        </div>

        <aside style={v1Styles.heroAside}>
          <div style={v1Styles.asideKicker}>Manifesto · trecho</div>
          <p style={v1Styles.asideQuote}>
            “Caminhos estratégicos fazem parte de uma boa prática comercial.”
          </p>
          <div style={v1Styles.asideStats}>
            <div>
              <div style={v1Styles.statNum}>3</div>
              <div style={v1Styles.statLabel}>Estados atendidos · RO · AC · AM</div>
            </div>
            <div>
              <div style={v1Styles.statNum}>12<span style={{ fontSize: 24, color: "#F6B817" }}>+</span></div>
              <div style={v1Styles.statLabel}>Anos de liderança no Norte</div>
            </div>
            <div>
              <div style={v1Styles.statNum}>1ª</div>
              <div style={v1Styles.statLabel}>Distribuidora exclusiva Reyplast</div>
            </div>
            <div>
              <div style={v1Styles.statNum}>ALCGM</div>
              <div style={v1Styles.statLabel}>Registro SUFRAMA · Reg. Esp. nº 88</div>
            </div>
          </div>
        </aside>

        <div style={v1Styles.scrollHint}>
          <span style={v1Styles.scrollLine}></span>
          <span>Manifesto</span>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={v1Styles.manifesto}>
        <div style={v1Styles.manifestoLabel}>
          <span style={v1Styles.manifestoLine}></span>
          <span>01 · Manifesto institucional</span>
        </div>
        <h2 style={v1Styles.manifestoAnchor}>
          Caminhos estratégicos fazem parte de uma boa prática comercial.
        </h2>
        <p style={v1Styles.manifestoBody}>
          A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio para quem vive em lados opostos do globo. Existimos para encurtá-las. Somos facilitadores de caminhos comerciais entre cadeias produtivas e mercados.
        </p>
        <div style={v1Styles.manifestoSig}>
          <div style={v1Styles.sigQuote}>
            “Honrar o compromisso firmado entre cadeias produtivas.”
          </div>
          <div style={v1Styles.sigCite}>PlexAmerica · 2026</div>
        </div>
      </section>
    </div>
  );
}

window.V1HeroManifesto = V1HeroManifesto;
