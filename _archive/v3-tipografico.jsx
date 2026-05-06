/* PlexAmerica — V3: Tipográfico bold
   Sem mapa no hero — tipografia massiva ocupa a tela ("CONECTANDO / OPORTUNIDADES"
   em duas linhas gigantes), dourado mais presente. Mapa entra forte na seção
   de Cobertura, abaixo. Sensação: agência criativa B2B.
*/

const v3Styles = {
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
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative", zIndex: 4,
  },
  brandRow: { display: "flex", alignItems: "center", gap: 14 },
  brandMark: {
    width: 32, height: 32, borderRadius: 6,
    background: "#F6B817", color: "#0d1a40",
    display: "grid", placeItems: "center",
    fontWeight: 700, fontSize: 14, letterSpacing: "0.06em",
  },
  brandWord: { fontWeight: 600, fontSize: 18 },
  nav: { display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)" },
  navActive: { color: "#F6B817" },
  rightTop: { display: "flex", alignItems: "center", gap: 18, fontSize: 13, color: "rgba(255,255,255,0.7)" },

  // HERO — full width, vertical, tipografia massiva
  hero: {
    position: "relative",
    padding: "60px 64px 70px",
    minHeight: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  // gridlines decorativas
  heroGrid: {
    position: "absolute", inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "120px 120px",
    pointerEvents: "none",
  },
  heroTop: {
    position: "relative", zIndex: 2,
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
  },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 14,
    fontSize: 12, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.95)",
  },
  eyebrowBar: { width: 56, height: 2, background: "#F6B817" },
  metaCol: {
    fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    display: "flex", flexDirection: "column", gap: 8, textAlign: "right",
  },
  metaCode: { color: "#F6B817", fontWeight: 600, fontSize: 12, letterSpacing: "0.18em" },

  // Tipografia massiva — duas linhas
  bigType: {
    position: "relative", zIndex: 2,
    margin: "60px 0",
  },
  bigLine: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: 116, lineHeight: 0.92, letterSpacing: "-0.045em",
    color: "#FFFFFF", textTransform: "uppercase",
    margin: 0, display: "block",
    whiteSpace: "nowrap",
  },
  bigLine2: {
    fontFamily: "var(--plex-font)", fontWeight: 700, fontStyle: "italic",
    fontSize: 116, lineHeight: 0.92, letterSpacing: "-0.045em",
    color: "#F6B817", textTransform: "uppercase",
    margin: 0, display: "block", marginLeft: 24,
    whiteSpace: "nowrap",
  },
  // Linha decorativa entre as duas
  bigDivider: {
    height: 1, background: "rgba(255,255,255,0.18)",
    margin: "18px 0", position: "relative", zIndex: 2,
  },
  bigDividerInner: {
    position: "absolute", left: 0, top: 0, height: "100%", width: 220,
    background: "#F6B817",
  },

  // Footer do hero
  heroBottom: {
    position: "relative", zIndex: 2,
    display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end",
  },
  lead: {
    fontSize: 22, lineHeight: 1.5, color: "rgba(255,255,255,0.78)",
    maxWidth: 540, margin: 0, textWrap: "pretty",
    fontWeight: 400,
  },
  ctaRow: {
    display: "flex", gap: 14, justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap",
  },
  ctaPrimary: {
    background: "#F6B817", color: "#0d1a40",
    padding: "20px 30px", borderRadius: 0,
    fontWeight: 600, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase",
    border: "none", cursor: "pointer",
    display: "inline-flex", gap: 14, alignItems: "center",
  },
  ctaSecondary: {
    background: "transparent", color: "#FFFFFF",
    padding: "20px 30px", borderRadius: 0,
    fontWeight: 500, fontSize: 15, letterSpacing: "0.04em", textTransform: "uppercase",
    border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer",
  },

  // ——— MANIFESTO em V3: faixa dourada estreita + caixa escura. Bem editorial.
  manifesto: {
    background: "#F6B817",
    color: "#0d1a40",
    padding: "28px 64px",
    fontWeight: 600, fontSize: 13, letterSpacing: "0.32em", textTransform: "uppercase",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  manifestoCore: {
    background: "#0a1535",
    padding: "120px 64px 140px",
    position: "relative",
  },
  mLabel: {
    display: "flex", alignItems: "center", gap: 14, marginBottom: 64,
    fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
    color: "rgba(246,184,23,0.85)",
  },
  mLine: { width: 56, height: 1, background: "#F6B817" },
  mAnchor: {
    fontFamily: "var(--plex-font)", fontWeight: 700,
    fontSize: 96, lineHeight: 0.98, letterSpacing: "-0.035em",
    margin: 0, color: "#FFFFFF",
    textTransform: "uppercase", textWrap: "balance",
    maxWidth: 1200,
  },
  mGold: { color: "#F6B817" },
  mGrid: {
    marginTop: 80,
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 56,
    paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  mCol: { },
  mColTitle: { fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F6B817", fontWeight: 600, marginBottom: 16 },
  mColBody: { fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", margin: 0, textWrap: "pretty" },
};

function V3HeroManifesto() {
  return (
    <div style={v3Styles.page}>
      <div style={v3Styles.topbar}>
        <div style={v3Styles.brandRow}>
          <div style={v3Styles.brandMark}>P</div>
          <div style={v3Styles.brandWord}>PlexAmerica</div>
        </div>
        <div style={v3Styles.nav}>
          <div style={v3Styles.navActive}>Início</div>
          <div>Catálogo</div>
          <div>Sobre</div>
          <div>Para Fabricantes</div>
          <div>Seja Revendedor</div>
        </div>
        <div style={v3Styles.rightTop}>
          <span style={{ color: "#F6B817" }}>WhatsApp →</span>
        </div>
      </div>

      <section style={v3Styles.hero}>
        <div style={v3Styles.heroGrid}></div>

        <div style={v3Styles.heroTop}>
          <div style={v3Styles.eyebrow}>
            <span style={v3Styles.eyebrowBar}></span>
            <span>Manifesto · 2026</span>
          </div>
          <div style={v3Styles.metaCol}>
            <div style={v3Styles.metaCode}>PLEX / 01</div>
            <div>Distribuição B2B</div>
            <div>Amazônia Ocidental · BR</div>
          </div>
        </div>

        <div style={v3Styles.bigType}>
          <span style={v3Styles.bigLine}>Conectando</span>
          <div style={v3Styles.bigDivider}>
            <div style={v3Styles.bigDividerInner}></div>
          </div>
          <span style={v3Styles.bigLine2}>oportunidades.</span>
        </div>

        <div style={v3Styles.heroBottom}>
          <p style={v3Styles.lead}>
            Distribuição estratégica para a Amazônia Ocidental — Rondônia, Acre e Amazonas. Sediados em Guajará-Mirim, fronteira Brasil-Bolívia, Área de Livre Comércio.
          </p>
          <div style={v3Styles.ctaRow}>
            <button style={v3Styles.ctaSecondary}>
              WhatsApp
            </button>
            <button style={v3Styles.ctaPrimary}>
              Catálogo Reyplast <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Faixa dourada — transição editorial */}
      <div style={v3Styles.manifesto}>
        <span>↓ Manifesto institucional</span>
        <span>PlexAmerica · Indústria & Comércio</span>
        <span>RO · AC · AM</span>
      </div>

      <section style={v3Styles.manifestoCore}>
        <div style={v3Styles.mLabel}>
          <span style={v3Styles.mLine}></span>
          <span>01 · O que defendemos</span>
        </div>
        <h2 style={v3Styles.mAnchor}>
          Caminhos estratégicos<br/>
          fazem parte de uma<br/>
          <span style={v3Styles.mGold}>boa prática comercial.</span>
        </h2>

        <div style={v3Styles.mGrid}>
          <div style={v3Styles.mCol}>
            <div style={v3Styles.mColTitle}>Distância</div>
            <p style={v3Styles.mColBody}>
              A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio para quem vive em lados opostos do globo.
            </p>
          </div>
          <div style={v3Styles.mCol}>
            <div style={v3Styles.mColTitle}>Conexão</div>
            <p style={v3Styles.mColBody}>
              Existimos para encurtá-las. Somos facilitadores de caminhos comerciais entre cadeias produtivas e os mercados que ainda não as alcançaram.
            </p>
          </div>
          <div style={v3Styles.mCol}>
            <div style={v3Styles.mColTitle}>Compromisso</div>
            <p style={v3Styles.mColBody}>
              Adaptáveis e versáteis para representar seu negócio e honrar o compromisso firmado entre cadeias produtivas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

window.V3HeroManifesto = V3HeroManifesto;
