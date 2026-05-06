/* PlexAmerica — Para Fabricantes
   Reutiliza tokens da Home Versão A. Cinco blocos:
   01. Hero — eyebrow + headline + lead + CTA + link diretor
   02. PorQue — 4 cards (Card 1 com mini-rota Guajará-Mirim → Pacífico)
   03. Manifesto integral — 4 parágrafos com âncoras douradas + símbolo
   04. Formulário — 8 campos com validação React funcional
   05. CTA secundário — e-mail direto + assinatura
*/

const { wrap, sectionPad, SectionLabel, CtaPrimary, CtaSecondary, HOME_INK } = window.HomeShared;
const PlexAmazoniaMap = window.PlexAmazoniaMap;

const FAB_THEME = {
  hero:      { bg: "#0d1a40", text: "#FFFFFF" },
  manifesto: { bg: "#0d1a40", text: "#FFFFFF" },
  porQue:    { bg: "#F8F9FB", text: "#15172A", surface: "#FFFFFF", line: "rgba(13,26,64,0.08)" },
  form:      { bg: "#F8F9FB", text: "#15172A", surface: "#FFFFFF", line: "rgba(13,26,64,0.10)" },
  cta:       { bg: "#0d1a40", text: "#FFFFFF" },
};

// ─────────────────────────────────────────────────────────────────────────
// 01. HERO
// ─────────────────────────────────────────────────────────────────────────
function HeroFabricantes() {
  return (
    <section style={{
      background: FAB_THEME.hero.bg, color: FAB_THEME.hero.text,
      position: "relative", minHeight: "min(720px, 80vh)",
      display: "flex", alignItems: "center", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none" }}>
        <PlexAmazoniaMap variant="ghost" showLabels={false} />
      </div>
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(120% 90% at 50% 50%, rgba(13,26,64,0) 0%, rgba(13,26,64,0.85) 80%)",
        pointerEvents: "none" }}/>

      {/* EN/PT toggle desabilitado */}
      <div title="Em breve" style={{
        position: "absolute", top: 24, right: "clamp(16px, 3vw, 32px)", zIndex: 3,
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
        color: "rgba(255,255,255,0.42)", cursor: "not-allowed",
        padding: "6px 10px", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 4,
      }}>
        <span style={{ color: "#F6B817" }}>PT</span>
        <span style={{ opacity: 0.4 }}>/</span>
        <span>EN</span>
      </div>

      <div style={{ ...wrap, position: "relative", zIndex: 2,
        padding: "clamp(72px, 10vw, 120px) clamp(16px, 3vw, 32px) clamp(72px, 10vw, 120px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12,
          fontSize: 12, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase",
          color: "rgba(246,184,23,0.85)", marginBottom: 36 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#F6B817" }}></span>
          <span>Para Fabricantes</span>
        </div>
        <h1 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(40px, 6.4vw, 88px)", lineHeight: 1.02, letterSpacing: "-0.025em",
          margin: 0, maxWidth: 1100, textWrap: "balance" }}>
          Sua marca, distribuída com estratégia na Amazônia Ocidental<span style={{ color: "#F6B817" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.5vw, 21px)", lineHeight: 1.55,
          color: "rgba(255,255,255,0.78)", maxWidth: 760,
          margin: "clamp(24px, 3vw, 36px) 0 0", textWrap: "pretty" }}>
          Sediados em Guajará-Mirim/RO, fronteira Brasil-Bolívia. Cobertura plena em RO, AC e AM.
        </p>
        <div style={{ marginTop: "clamp(32px, 4vw, 52px)",
          display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
          <CtaPrimary>Apresente sua marca →</CtaPrimary>
          <a href="#cta" style={{
            color: "rgba(255,255,255,0.78)", fontSize: 14, fontStyle: "italic",
            textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.35)",
            textUnderlineOffset: 4, marginLeft: 8 }}>
            Prefere conversar antes? Fale com um diretor →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// 02. POR QUE — 4 cards (Card 1 com mini-rota)
// ─────────────────────────────────────────────────────────────────────────
function MiniRota() {
  // Três pontos conectados: Guajará-Mirim (BR) → Guayaramerín (BO) → Iquique/Arica (CL)
  return (
    <svg viewBox="0 0 360 70" style={{ width: "100%", height: 70, display: "block" }}
         aria-label="Rota Guajará-Mirim → Guayaramerín → Iquique/Arica">
      <defs>
        <linearGradient id="rota-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F6B817" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#F6B817" stopOpacity="0.55"/>
        </linearGradient>
      </defs>
      {/* Linha pontilhada conectando os 3 pontos */}
      <path d="M 30 35 Q 105 18 180 35 Q 255 52 330 35"
            fill="none" stroke="url(#rota-grad)" strokeWidth="1.5"
            strokeDasharray="3 4" />
      {/* Pontos */}
      {[
        { x: 30,  y: 35, label: "GUAJARÁ-MIRIM", sub: "BR" },
        { x: 180, y: 35, label: "GUAYARAMERÍN", sub: "BO" },
        { x: 330, y: 35, label: "IQUIQUE / ARICA", sub: "CL" },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <circle r="14" fill="none" stroke="#F6B817" strokeOpacity="0.25" strokeWidth="1"/>
          <circle r="5" fill="#F6B817" stroke="#0d1a40" strokeWidth="1.5"/>
          <text y={i === 1 ? -22 : 22} textAnchor="middle"
                fontFamily="PlexAmerica, sans-serif"
                fontSize="9" fontWeight="600"
                fill="#253875" letterSpacing="0.08em">
            {p.label}
          </text>
          <text y={i === 1 ? -10 : 34} textAnchor="middle"
                fontFamily="PlexAmerica, sans-serif"
                fontSize="8" fontWeight="500"
                fill="rgba(13,26,64,0.55)" letterSpacing="0.12em">
            {p.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CardFab({ num, title, body, visual }) {
  return (
    <div style={{
      background: FAB_THEME.porQue.surface,
      border: `1px solid ${FAB_THEME.porQue.line}`,
      borderRadius: 6, padding: "clamp(28px, 3vw, 40px)",
      display: "flex", flexDirection: "column", gap: 18,
      transition: "transform .25s ease, box-shadow .25s ease",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,26,64,0.08)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {visual && <div style={{ marginBottom: 4 }}>{visual}</div>}
      {!visual && (
        <div style={{ width: 36, height: 36, borderRadius: 4,
          background: "rgba(37,56,117,0.06)",
          display: "grid", placeItems: "center",
          color: "#253875" }}>
          <span style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
            fontSize: 12, letterSpacing: "0.06em" }}>{num}</span>
        </div>
      )}
      <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 600,
        fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em",
        color: "#253875", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#1A1A1A",
        margin: 0, textWrap: "pretty" }}>{body}</p>
    </div>
  );
}

function PorQueFabricantes() {
  return (
    <section style={{ background: FAB_THEME.porQue.bg, color: FAB_THEME.porQue.text }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="01" title="Por que nos escolher" />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(34px, 4.5vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.02em",
          color: "#253875", margin: "0 0 clamp(40px, 5vw, 64px)",
          maxWidth: 1100, textWrap: "balance" }}>
          Quatro razões para representar sua marca conosco.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          <CardFab
            num="01"
            visual={<MiniRota />}
            title="Posição estratégica de fronteira"
            body="Único ponto do Brasil que combina Área de Livre Comércio com porta de saída para o Pacífico via território boliviano. Sua marca chega ao varejo amazônico e ganha rota latino-americana."
          />
          <CardFab
            num="02"
            title="Vantagem fiscal estruturada"
            body="Operamos sob regime fiscal otimizado da Área de Livre Comércio. O resultado é margem competitiva real para sua marca chegar ao consumidor com preço de mercado, mesmo competindo com importadores diretos do Sul-Sudeste."
          />
          <CardFab
            num="03"
            title="Canal ativo no varejo regional"
            body="Não somos atacadista de balcão — somos canal ativo. Visitamos clientes, fazemos sell-out, treinamos vendedores e organizamos pontos de venda. Sua marca chega bem posicionada, não esquecida no fundo da prateleira."
          />
          <CardFab
            num="04"
            title="Disciplina contratual e financeira"
            body="Mais de doze anos de experiência da liderança no setor de construção e suprimentos no Norte do Brasil. Trazemos para a distribuição a mesma disciplina contratual que aprendemos em décadas de operação."
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// 03. MANIFESTO INTEGRAL
// ─────────────────────────────────────────────────────────────────────────
function ManifestoIntegral() {
  const G = "#F6B817";
  const W = "rgba(255,255,255,0.86)";
  return (
    <section style={{
      background: FAB_THEME.manifesto.bg, color: FAB_THEME.manifesto.text,
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ ...wrap, ...sectionPad,
        display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 0.6fr)",
        gap: "clamp(48px, 6vw, 96px)", alignItems: "center" }}>
        <div>
          <SectionLabel num="02" title="Nosso compromisso" />
          <div style={{ fontFamily: "var(--plex-font)", fontWeight: 400,
            fontSize: "clamp(17px, 1.55vw, 22px)", lineHeight: 1.55,
            color: W, maxWidth: 760, textWrap: "pretty",
            display: "flex", flexDirection: "column", gap: "clamp(20px, 2vw, 28px)" }}>
            <p style={{ margin: 0 }}>
              Existe um ditado que diz <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.65)" }}>"marinheiro experiente faz a maré"</em>. Na PlexAmerica nós acreditamos que <span style={{ color: G, fontWeight: 600 }}>caminhos estratégicos fazem parte de uma boa prática comercial.</span>
            </p>
            <p style={{ margin: 0 }}>
              A internet nos conectou com os cantos mais remotos de nosso planeta, mas as distâncias físicas ainda são um desafio para aqueles que vivem em lados opostos do globo.
            </p>
            <p style={{ margin: 0 }}>
              Nós possibilitamos parcerias de negócios inteligentes, que pensam de maneira pragmática e com foco no resultado e viabilidade. <span style={{ color: G, fontWeight: 600 }}>Somos adaptáveis e versáteis para representar seu negócio</span> e honrar o compromisso firmado entre cadeias produtivas.
            </p>
            <p style={{ margin: 0 }}>
              Queremos ser facilitadores de caminhos, luz guia para aqueles que enxergam oportunidades em cada passo. Conte com nossa expertise para viabilizar seus projetos mais audaciosos e <span style={{ color: G, fontWeight: 600 }}>diminuir as distâncias entre suas ideias e o seu sucesso comercial.</span>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="assets/brand/simbolo-white.png?v=3" alt=""
               aria-hidden="true"
               style={{ height: 280, width: "auto", opacity: 0.65,
                 objectFit: "contain", display: "block" }} />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// 04. FORMULÁRIO
// ─────────────────────────────────────────────────────────────────────────
const PAISES = [
  "Brasil","Argentina","Bolívia","Chile","Colômbia","Equador","México","Paraguai","Peru","Uruguai",
  "Estados Unidos","Canadá","Espanha","Portugal","Alemanha","Itália","França","China","Coreia do Sul","Japão","Índia","Outro",
];
const SEGMENTOS = [
  "Utilidades domésticas","Alimentos","Ferramentas","Materiais de construção","Têxtil","Eletro","Outros",
];
const VOLUMES = [
  "Até 1 contêiner / mês","1 a 5 contêineres / mês","5 a 20 contêineres / mês","Acima de 20 contêineres / mês",
];

function Field({ label, required, children, error, hint, full }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6,
      gridColumn: full ? "1 / -1" : "auto" }}>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
        color: "#253875", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "#D14040", marginLeft: 4 }}>*</span>}
      </span>
      {children}
      {hint && !error && (
        <span style={{ fontSize: 12, color: "rgba(13,26,64,0.55)" }}>{hint}</span>
      )}
      {error && (
        <span style={{ fontSize: 12, color: "#D14040" }}>{error}</span>
      )}
    </label>
  );
}

function Input(props) {
  return (
    <input {...props} style={{
      fontFamily: "var(--plex-font)", fontSize: 16, lineHeight: 1.4,
      color: "#15172A", background: "#FFFFFF",
      border: `1px solid ${props["data-error"] ? "#D14040" : "rgba(13,26,64,0.18)"}`,
      borderRadius: 4, padding: "12px 14px", outline: "none",
      transition: "border-color .15s ease",
      ...props.style,
    }}
    onFocus={(e) => { e.target.style.borderColor = "#253875"; props.onFocus?.(e); }}
    onBlur={(e) => { e.target.style.borderColor = props["data-error"] ? "#D14040" : "rgba(13,26,64,0.18)"; props.onBlur?.(e); }}
    />
  );
}

function Select({ children, ...props }) {
  return (
    <select {...props} style={{
      fontFamily: "var(--plex-font)", fontSize: 16, lineHeight: 1.4,
      color: "#15172A", background: "#FFFFFF",
      border: `1px solid ${props["data-error"] ? "#D14040" : "rgba(13,26,64,0.18)"}`,
      borderRadius: 4, padding: "12px 14px", outline: "none",
      appearance: "none",
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M2 4 L6 8 L10 4' fill='none' stroke='%23253875' stroke-width='1.5'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
      backgroundSize: "12px",
      paddingRight: 38,
      cursor: "pointer",
      ...props.style,
    }}>{children}</select>
  );
}

function Formulario() {
  const [v, setV] = React.useState({
    empresa: "", pais: "", site: "", segmento: "", volume: "",
    nome: "", email: "", telefone: "",
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!v.empresa.trim()) e.empresa = "Informe o nome da empresa.";
    if (!v.pais) e.pais = "Selecione o país sede.";
    if (!v.segmento) e.segmento = "Selecione o segmento.";
    if (!v.volume) e.volume = "Selecione o volume mensal.";
    if (!v.nome.trim()) e.nome = "Informe seu nome.";
    if (!v.email.trim()) e.email = "Informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "E-mail inválido.";
    if (!v.telefone.trim()) e.telefone = "Informe um telefone com DDI.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <section style={{ background: FAB_THEME.form.bg, color: FAB_THEME.form.text }}>
        <div style={{ ...wrap, ...sectionPad, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 64, height: 64, borderRadius: 999,
            background: "rgba(246,184,23,0.12)", marginBottom: 24 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12 L10 17 L19 7" stroke="#F6B817" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
            fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#253875", margin: "0 0 16px", textWrap: "balance" }}>
            Obrigado, em breve entraremos em contato.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "#1A1A1A",
            maxWidth: 560, margin: "0 auto", textWrap: "pretty" }}>
            Sua apresentação foi recebida. Em até 5 dias úteis, um diretor da PlexAmerica retorna com uma avaliação inicial.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="form" style={{ background: FAB_THEME.form.bg, color: FAB_THEME.form.text }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="03" title="Inicie a conversa" />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(34px, 4.5vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.02em",
          color: "#253875", margin: "0 0 12px", maxWidth: 900, textWrap: "balance" }}>
          Apresente sua marca à PlexAmerica.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "#1A1A1A",
          maxWidth: 720, margin: "0 0 clamp(40px, 5vw, 56px)", textWrap: "pretty" }}>
          Conte um pouco sobre seu negócio. Em até 5 dias úteis um diretor retorna com uma avaliação inicial.
        </p>

        <form onSubmit={submit} noValidate
          style={{ background: FAB_THEME.form.surface,
            border: `1px solid ${FAB_THEME.form.line}`, borderRadius: 6,
            padding: "clamp(28px, 3.5vw, 48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Field label="Empresa" required error={errors.empresa}>
              <Input value={v.empresa} onChange={set("empresa")} data-error={!!errors.empresa}
                     placeholder="Razão social ou marca" />
            </Field>
            <Field label="País sede" required error={errors.pais}>
              <Select value={v.pais} onChange={set("pais")} data-error={!!errors.pais}>
                <option value="">Selecione…</option>
                {PAISES.map(p => <option key={p} value={p}>{p}</option>)}
              </Select>
            </Field>
            <Field label="Site / catálogo (URL)">
              <Input value={v.site} onChange={set("site")} placeholder="https://" />
            </Field>
            <Field label="Segmento" required error={errors.segmento}>
              <Select value={v.segmento} onChange={set("segmento")} data-error={!!errors.segmento}>
                <option value="">Selecione…</option>
                {SEGMENTOS.map(s => <option key={s} value={s}>{s}</option>)}
              </Select>
            </Field>
            <Field label="Volume mensal disponível" required error={errors.volume} full>
              <Select value={v.volume} onChange={set("volume")} data-error={!!errors.volume}>
                <option value="">Selecione…</option>
                {VOLUMES.map(s => <option key={s} value={s}>{s}</option>)}
              </Select>
            </Field>
            <Field label="Nome do contato" required error={errors.nome}>
              <Input value={v.nome} onChange={set("nome")} data-error={!!errors.nome} />
            </Field>
            <Field label="E-mail" required error={errors.email}>
              <Input type="email" value={v.email} onChange={set("email")} data-error={!!errors.email}
                     placeholder="nome@empresa.com" />
            </Field>
            <Field label="Telefone / WhatsApp com DDI" required error={errors.telefone} full>
              <Input value={v.telefone} onChange={set("telefone")} data-error={!!errors.telefone}
                     placeholder="+55 69 9 9999-9999" />
            </Field>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
            gap: 24, marginTop: 32, justifyContent: "space-between" }}>
            <button type="submit" style={{
              fontFamily: "var(--plex-font)", fontWeight: 600,
              fontSize: 15, letterSpacing: "0.02em",
              background: "#F6B817", color: "#0d1a40",
              border: 0, borderRadius: 4,
              padding: "14px 24px", cursor: "pointer",
              transition: "transform .15s ease, box-shadow .15s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(246,184,23,0.32)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              Iniciar conversa →
            </button>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(13,26,64,0.6)",
              margin: 0, maxWidth: 520 }}>
              Ao enviar, você concorda em receber contato comercial da PlexAmerica. Seus dados são tratados conforme a LGPD.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// 05. CTA SECUNDÁRIO
// ─────────────────────────────────────────────────────────────────────────
function CtaSecundarioFab() {
  return (
    <section id="cta" style={{
      background: FAB_THEME.cta.bg, color: FAB_THEME.cta.text,
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ ...wrap, ...sectionPad, textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.015em",
          color: "#FFFFFF", margin: "0 0 14px", textWrap: "balance" }}>
          Prefere falar antes de preencher um formulário<span style={{ color: "#F6B817" }}>?</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.78)",
          margin: "0 0 clamp(36px, 4vw, 56px)", textWrap: "pretty" }}>
          Escreva para{" "}
          <a href="mailto:representacoes@plexamerica.com.br"
             style={{ color: "#F6B817", textDecoration: "underline",
               textDecorationColor: "rgba(246,184,23,0.4)", textUnderlineOffset: 4 }}>
            representacoes@plexamerica.com.br
          </a>
        </p>
        <img src="assets/brand/assinatura-white.png?v=3" alt="PlexAmerica"
             style={{ height: 70, width: "auto", display: "inline-block",
               objectFit: "contain", opacity: 0.95 }} />
      </div>
    </section>
  );
}

window.FabricantesPage = {
  HeroFabricantes, PorQueFabricantes, ManifestoIntegral, Formulario, CtaSecundarioFab,
};
