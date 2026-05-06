/* PlexAmerica — V4: Síntese
   Hero limpo e respirado, só headline + subtítulo + 2 CTAs, mapa fantasma 7%.
   Manifesto abaixo, fundo #0d1a40, frase âncora dourada + 2-3 linhas em branco.
   Sem extras — sem aside, sem stats, sem ficha técnica.
   Container 1280px max, padding 32px desktop.
*/

const v4Styles = {
  page: {
    width: "100%",
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
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    position: "relative", zIndex: 4,
  },
  topInner: {
    maxWidth: 1280, margin: "0 auto", height: "100%",
    padding: "0 clamp(16px, 3vw, 32px)",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 24,
  },
  brandRow: { display: "flex", alignItems: "center", gap: 14 },
  brandMark: {
    width: 32, height: 32, borderRadius: 6,
    border: "1px solid rgba(246,184,23,0.6)",
    display: "grid", placeItems: "center",
    color: "#F6B817", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em",
  },
  brandWord: { fontWeight: 600, fontSize: 18, letterSpacing: "0.02em" },
  // brandTag oculta em < 1600px — não cabe junto da nav completa.
  brandTag: { display: "none" },
  nav: {
    display: "flex", gap: 24,
    fontSize: 14, fontWeight: 500,
    color: "rgba(255,255,255,0.78)", letterSpacing: "0.01em",
  },
  navItem: { cursor: "pointer", whiteSpace: "nowrap" },
  navItemActive: {
    color: "#FFFFFF",
    borderBottom: "1px solid #F6B817",
    paddingBottom: 4,
  },
  topRight: {
    display: "flex", alignItems: "center", gap: 18,
    fontSize: 13, color: "rgba(255,255,255,0.6)",
  },

  // ——— HERO
  hero: {
    position: "relative",
    minHeight: "min(820px, 90vh)",
    display: "flex",
    alignItems: "center",
  },
  heroMap: {
    position: "absolute", inset: 0,
    opacity: 0.07,
    pointerEvents: "none",
  },
  heroVignette: {
    position: "absolute", inset: 0,
    background:
      "radial-gradient(120% 90% at 50% 50%, rgba(13,26,64,0) 0%, rgba(13,26,64,0.85) 80%)",
    pointerEvents: "none",
  },
  heroInner: {
    position: "relative", zIndex: 2,
    maxWidth: 1280, width: "100%",
    margin: "0 auto",
    padding: "clamp(72px, 10vw, 120px) clamp(16px, 3vw, 32px) clamp(80px, 12vw, 140px)",
  },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 12,
    fontSize: 12, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)",
    marginBottom: 36,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius: 999, background: "#F6B817" },
  h1: {
    fontFamily: "var(--plex-font)",
    fontWeight: 700,
    fontSize: "clamp(44px, 7.2vw, 96px)",
    lineHeight: 0.98,
    letterSpacing: "-0.025em",
    margin: 0,
    color: "#FFFFFF",
    textWrap: "balance",
    maxWidth: 1100,
  },
  h1Period: { color: "#F6B817" },
  lead: {
    fontSize: "clamp(16px, 1.6vw, 22px)",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 720,
    margin: "clamp(20px, 2.5vw, 32px) 0 0",
    textWrap: "pretty",
  },
  ctaRow: {
    marginTop: "clamp(32px, 4vw, 52px)",
    display: "flex", flexWrap: "wrap",
    gap: 16, alignItems: "center",
  },
  ctaPrimary: {
    background: "#F6B817", color: "#0d1a40",
    padding: "18px 28px", borderRadius: 4,
    fontWeight: 600, fontSize: 15, letterSpacing: "0.02em",
    border: "none", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 12,
    fontFamily: "var(--plex-font)",
  },
  ctaSecondary: {
    background: "transparent", color: "#FFFFFF",
    padding: "18px 28px", borderRadius: 4,
    fontWeight: 500, fontSize: 15, letterSpacing: "0.02em",
    border: "1px solid rgba(255,255,255,0.32)", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 12,
    fontFamily: "var(--plex-font)",
  },

  // ——— Manifesto
  manifesto: {
    background: "#0d1a40",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    position: "relative",
  },
  manifestoInner: {
    maxWidth: 1280, width: "100%",
    margin: "0 auto",
    padding: "clamp(80px, 12vw, 140px) clamp(16px, 3vw, 32px) clamp(96px, 13vw, 160px)",
  },
  manifestoLabel: {
    fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)",
    display: "flex", alignItems: "center", gap: 14,
    marginBottom: "clamp(36px, 5vw, 56px)",
  },
  manifestoLine: { width: 56, height: 1, background: "#F6B817" },
  manifestoAnchor: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: "clamp(34px, 4.8vw, 64px)",
    lineHeight: 1.08,
    letterSpacing: "-0.02em",
    color: "#F6B817",
    margin: 0,
    maxWidth: 1100,
    textWrap: "balance",
  },
  manifestoBody: {
    maxWidth: 760,
    fontFamily: "var(--plex-font)",
    fontWeight: 400,
    fontSize: "clamp(16px, 1.5vw, 21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)",
    margin: "clamp(28px, 3.5vw, 48px) 0 0",
    textWrap: "pretty",
  },
};

function V4HeroManifesto() {
  return (
    <div style={v4Styles.page}>
      {/* TOPBAR */}
      <div style={v4Styles.topbar}>
        <div style={v4Styles.topInner}>
          <div style={v4Styles.brandRow}>
            <img src="assets/brand/marca-hor-white.png?v=3" alt="PlexAmerica"
                 style={{ height: 40, width: "auto", display: "block", objectFit: "contain" }} />
          </div>
          <nav className="plex-topnav" style={v4Styles.nav}>
            <div style={{ ...v4Styles.navItem, ...v4Styles.navItemActive }}>Início</div>
            <div style={v4Styles.navItem}>Catálogo Reyplast</div>
            <div style={v4Styles.navItem}>Sobre</div>
            <div style={v4Styles.navItem}>Para Fabricantes</div>
            <div style={v4Styles.navItem}>Seja Revendedor</div>
          </nav>
          <button className="plex-mobile-menu" aria-label="Menu">
            <span></span>
          </button>
          <div style={v4Styles.topRight} className="plex-top-right">
            <span style={{ color: "#F6B817" }}>WhatsApp →</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={v4Styles.hero}>
        <div style={v4Styles.heroMap}>
          <PlexAmazoniaMap variant="ghost" showLabels={false} />
        </div>
        <div style={v4Styles.heroVignette} />

        <div style={v4Styles.heroInner}>
          <div style={v4Styles.eyebrow}>
            <span style={v4Styles.eyebrowDot}></span>
            <span>Distribuição B2B • Amazônia Ocidental</span>
          </div>
          <h1 style={v4Styles.h1}>
            Conectando oportunidades<span style={v4Styles.h1Period}>.</span>
          </h1>
          <p style={v4Styles.lead}>
            Distribuição estratégica para a Amazônia Ocidental — RO • AC • AM.
          </p>
          <div style={v4Styles.ctaRow}>
            <button style={v4Styles.ctaPrimary}>
              Ver catálogo Reyplast <span aria-hidden>→</span>
            </button>
            <button style={v4Styles.ctaSecondary}>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={v4Styles.manifesto}>
        <div style={v4Styles.manifestoInner}>
          <div style={v4Styles.manifestoLabel}>
            <span style={v4Styles.manifestoLine}></span>
            <span>01 · Manifesto institucional</span>
          </div>
          <h2 style={v4Styles.manifestoAnchor}>
            Caminhos estratégicos fazem parte de uma boa prática comercial.
          </h2>
          <p style={v4Styles.manifestoBody}>
            A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio para quem vive em lados opostos do globo. Existimos para encurtá-las. Somos facilitadores de caminhos comerciais entre cadeias produtivas e mercados.
          </p>
        </div>
      </section>
    </div>
  );
}

window.V4HeroManifesto = V4HeroManifesto;
