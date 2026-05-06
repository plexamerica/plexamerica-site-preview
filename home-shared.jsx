/* PlexAmerica — Home completa, parametrizável por tema.
   Uma só implementação. theme = { hero, manifesto, marcas, cobertura,
   porQue, categorias, dualCta, footer } com {bg, text, mute, surface}.
   A versão A alterna escuro/claro; a B é predominantemente clara.
   Container 1280, padding clamp, tipografia em clamp.
*/

const HOME_INK = "#15172A";
const HOME_MUTE_DARK = "rgba(255,255,255,0.72)";
const HOME_LINE_DARK = "rgba(255,255,255,0.1)";

const themeA = {
  // Alternância escuro/claro
  hero:       { bg: "#0d1a40", text: "#FFFFFF", surface: "rgba(255,255,255,0.05)" },
  manifesto:  { bg: "#0d1a40", text: "#FFFFFF" },
  marcas:     { bg: "#FFFFFF", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6", surface: "#F8F9FB" },
  cobertura:  { bg: "#0d1a40", text: "#FFFFFF" },
  porQue:     { bg: "#FFFFFF", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6", surface: "#F8F9FB" },
  categorias: { bg: "#F8F9FB", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6" },
  dualCta:    { bg: "#0d1a40", text: "#FFFFFF" },
  footer:     { bg: "#0d1a40", text: "#FFFFFF" },
};

const themeB = {
  // Predominância clara
  hero:       { bg: "#0d1a40", text: "#FFFFFF", surface: "rgba(255,255,255,0.05)" },
  manifesto:  { bg: "#0d1a40", text: "#FFFFFF" },
  marcas:     { bg: "#FFFFFF", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6", surface: "#F8F9FB" },
  cobertura:  { bg: "#FFFFFF", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6", surface: "#F8F9FB" },
  porQue:     { bg: "#F8F9FB", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6" },
  categorias: { bg: "#FFFFFF", text: HOME_INK, mute: "#5C5F77", line: "#E4E0D6", surface: "#F8F9FB" },
  dualCta:    { bg: "#253875", text: "#FFFFFF" },   // azul institucional médio
  footer:     { bg: "#0d1a40", text: "#FFFFFF" },
};

window.HOME_THEMES = { A: themeA, B: themeB };

// ------- Primitives -------
const wrap = { maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 clamp(16px, 3vw, 32px)" };
const sectionPad = { padding: "calc(clamp(80px, 10vw, 120px) * var(--plex-density-mult, 1)) 0" };

function SectionLabel({ num, title, color = "#F6B817" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(36px, 5vw, 56px)",
                  fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color }}>
      <span style={{ width: 56, height: 1, background: color }}></span>
      <span>{num} · {title}</span>
    </div>
  );
}

function CtaPrimary({ children, dark }) {
  return (
    <button style={{
      background: "#F6B817", color: "#0d1a40",
      padding: "18px 28px", borderRadius: 4,
      fontWeight: 600, fontSize: 15, letterSpacing: "0.02em",
      border: "none", cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 12,
      fontFamily: "var(--plex-font)",
    }}>{children}</button>
  );
}
function CtaSecondary({ children, onLight }) {
  const border = onLight ? "#253875" : "rgba(255,255,255,0.32)";
  const color = onLight ? "#253875" : "#FFFFFF";
  return (
    <button style={{
      background: "transparent", color,
      padding: "18px 28px", borderRadius: 4,
      fontWeight: 500, fontSize: 15, letterSpacing: "0.02em",
      border: `1px solid ${border}`, cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 12,
      fontFamily: "var(--plex-font)",
    }}>{children}</button>
  );
}

// ------- Topbar -------
const NAV_ITEMS = [
  { id: "home",       label: "Início",            href: "index.html" },
  { id: "sobre",      label: "Sobre",             href: "sobre.html" },
  { id: "catalogo",   label: "Catálogo Reyplast", href: "catalogo.html" },
  { id: "fabricantes",label: "Para Fabricantes",  href: "para-fabricantes.html" },
  { id: "revendedor", label: "Seja Revendedor",   href: "seja-revendedor.html" },
];
function Topbar({ theme, active = "home" }) {
  const onDark = theme.bg === "#0d1a40";
  const navColor = onDark ? "rgba(255,255,255,0.78)" : "#5C5F77";
  return (
    <div style={{
      height: 76, borderBottom: `1px solid ${onDark ? "rgba(255,255,255,0.07)" : "#E4E0D6"}`,
      position: "relative", zIndex: 4, background: theme.bg, color: theme.text,
    }}>
      <div style={{ ...wrap, height: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src={onDark ? "assets/brand/marca-hor-white.png?v=3" : "assets/brand/marca-hor-color.png?v=3"}
            alt="PlexAmerica"
            style={{ height: 40, width: "auto", display: "block", objectFit: "contain" }}
          />
        </div>
        <nav style={{ display: "flex", gap: 24, fontSize: 14, fontWeight: 500, color: navColor }}>
          {NAV_ITEMS.map(it => (
            <a key={it.id} href={it.href}
               style={{
                 textDecoration: "none",
                 color: it.id === active ? theme.text : navColor,
                 borderBottom: it.id === active ? "1px solid #F6B817" : "1px solid transparent",
                 paddingBottom: 4, whiteSpace: "nowrap",
               }}>{it.label}</a>
          ))}
        </nav>
        <div style={{ fontSize: 13, color: "#F6B817", fontWeight: 600, whiteSpace: "nowrap" }}>WhatsApp →</div>
      </div>
    </div>
  );
}

// ------- 1. Hero -------
function Hero({ theme, mapLanguage = "geodesic", heroVoice = "editorial" }) {
  const voices = {
    editorial: {
      headline: "Conectando oportunidades",
      lead: "Distribuição estratégica para a Amazônia Ocidental — RO • AC • AM.",
    },
    manifesto: {
      headline: "Encurtamos distâncias",
      lead: "A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio. Existimos para encurtá-las.",
    },
    direto: {
      headline: "Distribuição B2B",
      lead: null,
    },
  };
  const v = voices[heroVoice] || voices.editorial;
  return (
    <section style={{
      background: theme.hero.bg, color: theme.hero.text,
      position: "relative", minHeight: "min(820px, 90vh)",
      display: "flex", alignItems: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none" }}>
        <PlexAmazoniaMap variant="ghost" showLabels={false} mapLanguage={mapLanguage} />
      </div>
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(120% 90% at 50% 50%, rgba(13,26,64,0) 0%, rgba(13,26,64,0.85) 80%)",
        pointerEvents: "none" }}/>
      <div style={{ ...wrap, position: "relative", zIndex: 2,
        padding: "clamp(72px, 10vw, 120px) clamp(16px, 3vw, 32px) clamp(80px, 12vw, 140px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(246,184,23,0.85)", marginBottom: 36 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#F6B817" }}></span>
          <span>Distribuição B2B • Amazônia Ocidental</span>
        </div>
        <h1 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(44px, 7.2vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.025em",
          margin: 0, maxWidth: 1100, textWrap: "balance" }}>
          {v.headline}<span style={{ color: "#F6B817" }}>.</span>
        </h1>
        {v.lead && (
          <p style={{ fontSize: "clamp(16px, 1.6vw, 22px)", lineHeight: 1.5,
            color: HOME_MUTE_DARK, maxWidth: 720, margin: "clamp(20px, 2.5vw, 32px) 0 0", textWrap: "pretty" }}>
            {v.lead}
          </p>
        )}
        <div style={{ marginTop: "clamp(32px, 4vw, 52px)", display: "flex", flexWrap: "wrap", gap: 16 }}>
          <CtaPrimary>Ver catálogo Reyplast →</CtaPrimary>
          <CtaSecondary>Falar no WhatsApp</CtaSecondary>
        </div>
      </div>
    </section>
  );
}

// ------- 2. Manifesto -------
function Manifesto({ theme, variant }) {
  const showSymbol = variant === "A";
  return (
    <section style={{ background: theme.manifesto.bg, color: theme.manifesto.text,
      borderTop: `1px solid ${HOME_LINE_DARK}`, position: "relative", overflow: "hidden" }}>
      <div style={{ ...wrap, ...sectionPad, position: "relative", zIndex: 1 }}>
        <SectionLabel num="01" title="Manifesto institucional" />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(34px, 4.8vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em",
          color: "#F6B817", margin: 0, maxWidth: 1100, textWrap: "balance" }}>
          Caminhos estratégicos fazem parte de uma boa prática comercial.
        </h2>
        <p style={{ fontFamily: "var(--plex-font)", fontWeight: 400,
          fontSize: "clamp(16px, 1.5vw, 21px)", lineHeight: 1.6,
          color: "rgba(255,255,255,0.82)", maxWidth: 760,
          margin: "clamp(28px, 3.5vw, 48px) 0 0", textWrap: "pretty" }}>
          A internet aproximou os cantos mais remotos do planeta — mas as distâncias físicas ainda são um desafio para quem vive em lados opostos do globo. Existimos para encurtá-las. Somos facilitadores de caminhos comerciais entre cadeias produtivas e mercados.
        </p>
      </div>
      {showSymbol && (
        <img src="assets/brand/simbolo-white.png" alt=""
             aria-hidden="true"
             style={{ position: "absolute", bottom: 100, right: 120,
               height: 150, width: "auto", opacity: 0.65,
               pointerEvents: "none", zIndex: 2,
               objectFit: "contain", display: "block" }} />
      )}
    </section>
  );
}

window.HomeShared = { Topbar, Hero, Manifesto, SectionLabel, CtaPrimary, CtaSecondary, wrap, sectionPad, HOME_INK };
