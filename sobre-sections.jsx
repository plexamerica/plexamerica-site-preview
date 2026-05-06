/* PlexAmerica — Sobre
   Reutiliza Topbar + Footer da Home Versão A. Quatro blocos:
   01. Hero — eyebrow + headline + subtítulo, mapa fantasma 5-8%
   02. Nossa história — duas colunas (foto placeholder + texto)
   03. O que nos diferencia — 3 cards horizontais
   04. Manifesto + Dual CTA — frase âncora + parágrafo + 2 CTAs + símbolo
*/

const { wrap, sectionPad, SectionLabel, CtaPrimary, CtaSecondary } = window.HomeShared;
const PlexAmazoniaMap = window.PlexAmazoniaMap;

// 01 — HERO
function HeroSobre() {
  return (
    <section style={{
      background: "#0d1a40", color: "#FFFFFF",
      position: "relative", minHeight: "min(620px, 70vh)",
      display: "flex", alignItems: "center", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}>
        <PlexAmazoniaMap variant="ghost" showLabels={false} />
      </div>
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(120% 90% at 50% 50%, rgba(13,26,64,0) 0%, rgba(13,26,64,0.85) 80%)",
        pointerEvents: "none" }}/>
      <div style={{ ...wrap, position: "relative", zIndex: 2,
        padding: "clamp(72px, 10vw, 120px) clamp(16px, 3vw, 32px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(246,184,23,0.85)", marginBottom: 36 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#F6B817" }}></span>
          <span>Quem somos</span>
        </div>
        <h1 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.04, letterSpacing: "-0.025em",
          margin: 0, maxWidth: 1100, textWrap: "balance" }}>
          Uma distribuidora construída para conectar<span style={{ color: "#F6B817" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.5vw, 21px)", lineHeight: 1.55,
          color: "rgba(255,255,255,0.78)", maxWidth: 760,
          margin: "clamp(24px, 3vw, 36px) 0 0", textWrap: "pretty" }}>
          Fabricantes, varejistas e mercados — encurtando distâncias na Amazônia Ocidental.
        </p>
      </div>
    </section>
  );
}

// 02 — NOSSA HISTÓRIA
function NossaHistoria() {
  return (
    <section style={{ background: "#FFFFFF", color: "#15172A" }}>
      <div style={{ ...wrap, ...sectionPad,
        display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
        gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
        <div style={{ aspectRatio: "4 / 5", background: "#F1F2F6",
          border: "1px dashed rgba(13,26,64,0.18)", borderRadius: 4,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 8,
          color: "rgba(13,26,64,0.5)", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.22em", textAlign: "center", padding: 24 }}>
          <span>[FOTO DA SEDE]</span>
          <span style={{ opacity: 0.7 }}>Guajará-Mirim/RO</span>
        </div>
        <div>
          <SectionLabel num="01" title="De onde viemos" />
          <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
            fontSize: "clamp(34px, 4.5vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#253875", margin: "0 0 clamp(24px, 3vw, 32px)",
            textWrap: "balance" }}>
            Construída sobre experiência real de mercado.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "#1A1A1A",
            margin: 0, maxWidth: 620, textWrap: "pretty" }}>
            A PlexAmerica nasceu da convicção de que o varejo da Amazônia Ocidental merece um parceiro que entenda a região por dentro. Mais de doze anos de experiência da liderança no setor de construção e suprimentos no Norte do Brasil deram a base para construir uma distribuidora com seriedade institucional, vantagem fiscal real e atendimento próximo ao lojista.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03 — O QUE NOS DIFERENCIA
function CardPilar({ icon, title, body }) {
  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid rgba(13,26,64,0.08)", borderRadius: 6,
      padding: "clamp(28px, 3vw, 40px)",
      display: "flex", flexDirection: "column", gap: 18,
      transition: "transform .25s ease, box-shadow .25s ease",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,26,64,0.08)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ width: 40, height: 40, color: "#F6B817" }}>{icon}</div>
      <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 600,
        fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em",
        color: "#253875", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#1A1A1A",
        margin: 0, textWrap: "pretty" }}>{body}</p>
    </div>
  );
}

function Diferencial() {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5,
    strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <section style={{ background: "#F8F9FB", color: "#15172A" }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="02" title="O que nos define" />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(34px, 4.5vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.02em",
          color: "#253875", margin: "0 0 clamp(40px, 5vw, 64px)",
          maxWidth: 1100, textWrap: "balance" }}>
          Três pilares de operação.
        </h2>
        <div style={{ display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          <CardPilar
            icon={
              <svg viewBox="0 0 40 40" {...stroke}>
                <path d="M20 5 L20 35 M5 20 L35 20"/>
                <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none"/>
                <circle cx="20" cy="20" r="11"/>
              </svg>
            }
            title="Posição estratégica"
            body="Sediados em Guajará-Mirim/RO, na fronteira Brasil-Bolívia. Cobertura plena em Rondônia, Acre e Amazonas, com expansão estruturada para o lado boliviano."
          />
          <CardPilar
            icon={
              <svg viewBox="0 0 40 40" {...stroke}>
                <path d="M8 30 L20 10 L32 30 Z"/>
                <path d="M14 24 L26 24"/>
              </svg>
            }
            title="Vantagem repassada"
            body="Operamos sob regime fiscal otimizado da Área de Livre Comércio. Essa economia chega ao lojista em forma de preço competitivo, não fica retida no caminho."
          />
          <CardPilar
            icon={
              <svg viewBox="0 0 40 40" {...stroke}>
                <circle cx="20" cy="15" r="6"/>
                <path d="M8 33 C 8 26, 14 23, 20 23 C 26 23, 32 26, 32 33"/>
              </svg>
            }
            title="Atendimento humano"
            body="Sem call center, sem robô, sem fila. O lojista fala direto com gente que conhece o produto, o preço e o seu negócio."
          />
        </div>
      </div>
    </section>
  );
}

// 04 — MANIFESTO + DUAL CTA
function ManifestoDualCta() {
  return (
    <section style={{
      background: "#0d1a40", color: "#FFFFFF",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <img src="assets/brand/simbolo-white.png?v=3" alt=""
           aria-hidden="true"
           style={{ position: "absolute",
             bottom: "clamp(24px, 4vw, 48px)",
             right: "clamp(24px, 4vw, 56px)",
             height: 120, width: "auto", opacity: 0.15,
             pointerEvents: "none", objectFit: "contain", display: "block",
             zIndex: 0 }} />
      <div style={{ ...wrap, ...sectionPad, position: "relative", zIndex: 1,
        textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(246,184,23,0.85)", marginBottom: 36 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#F6B817" }}></span>
          <span>03 — Nosso compromisso</span>
        </div>
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(34px, 4.8vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em",
          color: "#F6B817", margin: "0 auto clamp(28px, 3.5vw, 40px)",
          maxWidth: 1000, textWrap: "balance" }}>
          Diminuir as distâncias entre suas ideias e o seu sucesso comercial.
        </h2>
        <p style={{ fontFamily: "var(--plex-font)", fontWeight: 400,
          fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.6,
          color: "rgba(255,255,255,0.82)",
          maxWidth: 700, margin: "0 auto clamp(56px, 6vw, 80px)",
          textWrap: "pretty" }}>
          Possibilitamos parcerias inteligentes, pragmáticas, com foco no resultado e na viabilidade. Adaptáveis e versáteis para representar negócios e honrar o compromisso firmado entre cadeias produtivas.
        </p>
        <div style={{ display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(32px, 4vw, 56px)",
          maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(246,184,23,0.85)",
              marginBottom: 16 }}>
              Para o varejo
            </div>
            <a href="seja-revendedor.html" style={{ textDecoration: "none" }}>
              <CtaPrimary>Quero ser revendedor →</CtaPrimary>
            </a>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(246,184,23,0.85)",
              marginBottom: 16 }}>
              Para indústrias e marcas
            </div>
            <a href="Para Fabricantes.html" style={{ textDecoration: "none" }}>
              <CtaSecondary>Apresente sua marca →</CtaSecondary>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.SobrePage = { HeroSobre, NossaHistoria, Diferencial, ManifestoDualCta };
