/* PlexAmerica — Seja Revendedor
   Reutiliza Topbar + Footer da Home Versão A. Três blocos:
   01. Hero — eyebrow PARA O VAREJO + headline + subtítulo, mapa fantasma
   02. Proposta + Formulário — duas colunas (4 bullets + form com 6 campos)
   03. CTA secundário — WhatsApp direto
*/

const { wrap, sectionPad, SectionLabel, CtaPrimary } = window.HomeShared;
const PlexAmazoniaMap = window.PlexAmazoniaMap;

// 01 — HERO
function HeroRevendedor() {
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
          <span>Para o varejo</span>
        </div>
        <h1 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.04, letterSpacing: "-0.025em",
          margin: 0, maxWidth: 1100, textWrap: "balance" }}>
          Seja um revendedor PlexAmerica<span style={{ color: "#F6B817" }}>.</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.5vw, 21px)", lineHeight: 1.55,
          color: "rgba(255,255,255,0.78)", maxWidth: 760,
          margin: "clamp(24px, 3vw, 36px) 0 0", textWrap: "pretty" }}>
          Acesso à linha Reyplast com vantagem fiscal repassada, atendimento direto e logística que entende a Amazônia Ocidental.
        </p>
      </div>
    </section>
  );
}

// 02 — PROPOSTA + FORMULÁRIO
function Bullet({ icon, title, body }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5,
    strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
      <div style={{ flex: "0 0 auto", width: 40, height: 40,
        borderRadius: 4, background: "rgba(37,56,117,0.06)",
        display: "grid", placeItems: "center", color: "#F6B817" }}>
        <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>{icon}</svg>
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 600,
          fontSize: 17, lineHeight: 1.3, color: "#253875",
          margin: "8px 0 6px" }}>{title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#1A1A1A",
          margin: 0, textWrap: "pretty" }}>{body}</p>
      </div>
    </div>
  );
}

// Form primitives (escopo local — não reusar para evitar colisão)
function FieldR({ label, required, children, error, full }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6,
      gridColumn: full ? "1 / -1" : "auto" }}>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
        color: "#253875", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "#D14040", marginLeft: 4 }}>*</span>}
      </span>
      {children}
      {error && (
        <span style={{ fontSize: 12, color: "#D14040" }}>{error}</span>
      )}
    </label>
  );
}
function InputR(props) {
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
    onBlur={(e) => { e.target.style.borderColor = props["data-error"] ? "#D14040" : "rgba(13,26,64,0.18)"; props.onBlur?.(e); }} />
  );
}
function SelectR({ children, ...props }) {
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

const SEGMENTOS_R = ["Lojista de utilidades", "Atacadista", "Supermercado", "Outros"];
const VOLUMES_R = ["Até R$ 5 mil / mês", "R$ 5 mil a 20 mil / mês", "R$ 20 mil a 50 mil / mês", "Acima de R$ 50 mil / mês"];

function PropostaForm() {
  const [v, setV] = React.useState({
    nome: "", cnpj: "", cidade: "", segmento: "", volume: "", whatsapp: "",
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!v.nome.trim()) e.nome = "Informe seu nome completo.";
    if (!v.cnpj.trim()) e.cnpj = "Informe o CNPJ.";
    else if (v.cnpj.replace(/\D/g, "").length < 14) e.cnpj = "CNPJ deve ter 14 dígitos.";
    if (!v.cidade.trim()) e.cidade = "Informe cidade e UF.";
    if (!v.segmento) e.segmento = "Selecione o segmento.";
    if (!v.volume) e.volume = "Selecione o volume estimado.";
    if (!v.whatsapp.trim()) e.whatsapp = "Informe um WhatsApp para contato.";
    return e;
  };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  return (
    <section style={{ background: "#F8F9FB", color: "#15172A" }}>
      <div style={{ ...wrap, ...sectionPad,
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
        gap: "clamp(40px, 6vw, 88px)", alignItems: "start" }}>

        {/* Esquerda — proposta */}
        <div>
          <SectionLabel num="01" title="Por que revender conosco" />
          <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#253875", margin: "0 0 clamp(32px, 4vw, 48px)",
            textWrap: "balance" }}>
            Quatro razões objetivas.
          </h2>
          <div style={{ display: "flex", flexDirection: "column",
            gap: "clamp(24px, 2.5vw, 32px)" }}>
            <Bullet
              icon={<><path d="M12 2 L12 22 M5 9 L19 9 M7 15 L17 15"/><circle cx="12" cy="12" r="9"/></>}
              title="Preço competitivo via vantagem fiscal"
              body="Operamos na Área de Livre Comércio. A economia tributária chega ao seu custo final."
            />
            <Bullet
              icon={<><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></>}
              title="Mix curado para o varejo regional"
              body="Linha Reyplast com SKUs selecionados pela rotação real no mercado de RO, AC e AM."
            />
            <Bullet
              icon={<><path d="M3 17 L9 17 L11 13 L15 19 L17 17 L21 17"/><circle cx="6" cy="20" r="1.2" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.2" fill="currentColor" stroke="none"/></>}
              title="Logística que entende a região"
              body="Prazos firmes, rotas conhecidas, cobertura plena em Rondônia, Acre e Amazonas."
            />
            <Bullet
              icon={<><path d="M21 12 C 21 16, 17 19, 12 19 C 10.5 19, 9 18.7, 7.7 18.2 L 4 19 L 5 15.5 C 4 14.4 3 13 3 12 C 3 8, 7 5, 12 5 C 17 5, 21 8, 21 12 Z"/></>}
              title="Atendimento humano via WhatsApp"
              body="Você fala direto com nosso comercial. Sem fila, sem robô, sem ruído."
            />
          </div>
        </div>

        {/* Direita — formulário */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid rgba(13,26,64,0.10)", borderRadius: 6,
          padding: "clamp(28px, 3.5vw, 44px)" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 8px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 56, height: 56, borderRadius: 999,
                background: "rgba(246,184,23,0.12)", marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12 L10 17 L19 7" stroke="#F6B817" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
                fontSize: 24, lineHeight: 1.2, color: "#253875",
                margin: "0 0 12px", textWrap: "balance" }}>
                Recebemos seu cadastro.
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "#1A1A1A",
                margin: 0 }}>
                Em breve entraremos em contato pelo WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
                fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.015em",
                color: "#253875", margin: "0 0 8px" }}>
                Cadastre-se em 2 minutos.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(13,26,64,0.65)",
                margin: "0 0 24px" }}>
                Nosso comercial entra em contato pelo WhatsApp.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <FieldR label="Nome completo" required error={errors.nome} full>
                  <InputR value={v.nome} onChange={set("nome")} data-error={!!errors.nome} />
                </FieldR>
                <FieldR label="CNPJ" required error={errors.cnpj}>
                  <InputR value={v.cnpj} onChange={set("cnpj")} data-error={!!errors.cnpj}
                          placeholder="00.000.000/0000-00" />
                </FieldR>
                <FieldR label="Cidade / UF" required error={errors.cidade}>
                  <InputR value={v.cidade} onChange={set("cidade")} data-error={!!errors.cidade}
                          placeholder="Porto Velho / RO" />
                </FieldR>
                <FieldR label="Segmento de atuação" required error={errors.segmento} full>
                  <SelectR value={v.segmento} onChange={set("segmento")} data-error={!!errors.segmento}>
                    <option value="">Selecione…</option>
                    {SEGMENTOS_R.map(s => <option key={s} value={s}>{s}</option>)}
                  </SelectR>
                </FieldR>
                <FieldR label="Volume estimado mensal" required error={errors.volume} full>
                  <SelectR value={v.volume} onChange={set("volume")} data-error={!!errors.volume}>
                    <option value="">Selecione…</option>
                    {VOLUMES_R.map(s => <option key={s} value={s}>{s}</option>)}
                  </SelectR>
                </FieldR>
                <FieldR label="WhatsApp para contato" required error={errors.whatsapp} full>
                  <InputR value={v.whatsapp} onChange={set("whatsapp")} data-error={!!errors.whatsapp}
                          placeholder="(69) 9 9999-9999" />
                </FieldR>
              </div>

              <button type="submit" style={{
                width: "100%", marginTop: 24,
                fontFamily: "var(--plex-font)", fontWeight: 600,
                fontSize: 16, letterSpacing: "0.02em",
                background: "#F6B817", color: "#0d1a40",
                border: 0, borderRadius: 4,
                padding: "16px 24px", cursor: "pointer",
                transition: "transform .15s ease, box-shadow .15s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(246,184,23,0.32)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                Quero ser revendedor →
              </button>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(13,26,64,0.55)",
                margin: "16px 0 0" }}>
                Ao enviar, você concorda em receber contato comercial da PlexAmerica. Seus dados são tratados conforme a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// 03 — CTA SECUNDÁRIO (WhatsApp direto)
function CtaWhatsapp() {
  return (
    <section style={{
      background: "#0d1a40", color: "#FFFFFF",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ ...wrap, ...sectionPad, textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700,
          fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.015em",
          color: "#FFFFFF", margin: "0 0 14px", textWrap: "balance" }}>
          Prefere falar agora<span style={{ color: "#F6B817" }}>?</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.78)",
          margin: "0 0 clamp(32px, 4vw, 44px)", textWrap: "pretty" }}>
          Chame nosso comercial direto no WhatsApp.
        </p>
        <a href="https://wa.me/5569999999999" target="_blank" rel="noopener noreferrer"
           style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12,
             fontFamily: "var(--plex-font)", fontWeight: 600,
             fontSize: 16, letterSpacing: "0.02em",
             background: "#F6B817", color: "#0d1a40",
             borderRadius: 4, padding: "16px 28px",
             transition: "transform .15s ease, box-shadow .15s ease" }}
           onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(246,184,23,0.32)"; }}
           onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3.1-.2-.3C4.4 14.8 4 13.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
          </svg>
          Falar no WhatsApp →
        </a>
      </div>
    </section>
  );
}

window.RevendedorPage = { HeroRevendedor, PropostaForm, CtaWhatsapp };
