/* Home — seções 3 a 8 (Marcas, Cobertura, PorQue, Categorias, DualCta, Footer) */

const { SectionLabel, CtaPrimary, CtaSecondary, wrap, sectionPad, HOME_INK } = window.HomeShared;

// ------- 3. Marcas -------
function Marcas({ theme }) {
  const t = theme.marcas;
  const onDark = t.bg === "#0d1a40";
  const titleC = onDark ? "#FFFFFF" : "#253875";
  const bodyC  = onDark ? "rgba(255,255,255,0.85)" : "#1A1A1A";
  const mute = onDark ? "rgba(255,255,255,0.7)" : "#5C5F77";
  const line = onDark ? "rgba(255,255,255,0.12)" : t.line;
  const surface = t.surface;
  return (
    <section style={{ background: t.bg, color: t.text }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="02" title="Marcas que distribuímos" color={onDark ? "#F6B817" : "#F6B817"} />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 48px)",
          lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 900, textWrap: "balance",
          color: titleC }}>
          Marcas que distribuímos com seriedade.
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.6, color: bodyC,
          maxWidth: 680, marginTop: 20, textWrap: "pretty" }}>
          Cada parceria que firmamos é um compromisso assumido com a cadeia produtiva — e com o varejista que confia em nós.
        </p>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 20 }}>
          {/* Reyplast — destaque + marca da casa PlexAmerica */}
          <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 6,
            padding: 32, display: "flex", flexDirection: "column", gap: 24, minHeight: 260 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <img src={window.__resources.logoColor} alt="PlexAmerica"
                     style={{ height: 28, width: "auto", display: "block", objectFit: "contain", opacity: 0.85 }} />
                <span style={{ width: 1, height: 36, background: "rgba(246,184,23,0.6)" }}></span>
                <img src={window.__resources.logoReyplast} alt="Reyplast"
                     style={{ height: 80, width: "auto", display: "block", objectFit: "contain" }} />
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#F6B817", border: "1px solid #F6B817", padding: "5px 10px", borderRadius: 3, whiteSpace: "nowrap" }}>
                Distribuidor exclusivo
              </div>
            </div>
            <div style={{ fontSize: 14, color: bodyC, lineHeight: 1.55 }}>
              Linha completa de utilidades domésticas. Cobertura plena em <strong style={{ color: onDark ? "#FFF" : "#253875" }}>RO • AC • AM</strong>.
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: 20, fontSize: 12,
              letterSpacing: "0.08em", textTransform: "uppercase", color: mute }}>
              <span><strong style={{ color: onDark ? "#FFF" : "#253875" }}>[120+]</strong> SKUs</span>
              <span><strong style={{ color: onDark ? "#FFF" : "#253875" }}>9</strong> categorias</span>
              <span>desde 2024</span>
            </div>
          </div>
          {/* Em breve x2 */}
          {[1, 2].map(i => (
            <div key={i} style={{ background: "transparent", border: `1px dashed ${line}`, borderRadius: 6,
              padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
              minHeight: 260, color: mute, textAlign: "center", gap: 12 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                color: onDark ? "rgba(246,184,23,0.7)" : "#253875" }}>Em breve</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Nova marca em estruturação</div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>[placeholder · marca {i + 1}]</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, fontSize: 14, color: mute }}>
          É fabricante e busca distribuição na Amazônia Ocidental?{" "}
          <a style={{ color: onDark ? "#F6B817" : "#253875", fontWeight: 500, textDecoration: "none", borderBottom: `1px solid ${onDark ? "rgba(246,184,23,0.5)" : "rgba(37,56,117,0.5)"}` }}>
            Conheça nossa proposta de representação →
          </a>
        </div>
      </div>
    </section>
  );
}

// ------- 4. Cobertura -------
function Cobertura({ theme }) {
  const t = theme.cobertura;
  const onDark = t.bg === "#0d1a40";
  const mute = onDark ? "rgba(255,255,255,0.72)" : t.mute;
  const line = onDark ? "rgba(255,255,255,0.1)" : t.line;
  const surface = onDark ? "rgba(255,255,255,0.03)" : t.surface;
  return (
    <section style={{ background: t.bg, color: t.text, borderTop: `1px solid ${line}` }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="03" title="Cobertura logística" color={onDark ? "#F6B817" : "#253875"} />
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.3fr", gap: 56, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 48px)",
              lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, textWrap: "balance" }}>
              Cobertura plena na Amazônia Ocidental.
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.6, color: mute,
              marginTop: 24, textWrap: "pretty" }}>
              Distribuímos em Rondônia, Acre e Amazonas a partir de Guajará-Mirim, na fronteira do Brasil com a Bolívia. Posição estratégica que combina logística amazônica com vantagem fiscal da Área de Livre Comércio.
            </p>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px",
              fontSize: 13, color: mute }}>
              {[
                ["Guajará-Mirim/RO", "Sede e CD"],
                ["Porto Velho/RO", "Cobertura"],
                ["Ji-Paraná/RO", "Cobertura"],
                ["Cacoal/RO", "Cobertura"],
                ["Vilhena/RO", "Cobertura"],
                ["Rio Branco/AC", "Cobertura"],
                ["Manaus/AM", "Cobertura"],
                ["Guayaramerín/Bol.", "Expansão"],
              ].map(([city, role]) => (
                <div key={city} style={{ display: "flex", justifyContent: "space-between",
                  paddingBottom: 12, borderBottom: `1px solid ${line}`, gap: 8 }}>
                  <span style={{ color: onDark ? "#FFF" : HOME_INK, fontWeight: 500 }}>{city}</span>
                  <span style={{ color: role === "Sede e CD" ? "#F6B817" : mute, fontSize: 12,
                    letterSpacing: "0.08em", textTransform: "uppercase" }}>{role}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 6,
            padding: 16, aspectRatio: "1000 / 680" }}>
            <PlexAmazoniaMap variant={onDark ? "default" : "default"} showLabels={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ------- 5. Por que comprar -------
function PorQue({ theme }) {
  const t = theme.porQue;
  const onDark = t.bg === "#0d1a40";
  const titleC = onDark ? "#FFFFFF" : "#253875";
  const bodyC  = onDark ? "rgba(255,255,255,0.78)" : "#1A1A1A";
  const line = onDark ? "rgba(255,255,255,0.1)" : t.line;
  const cards = [
    { kicker: "01 · Vantagem fiscal", title: "Vantagem fiscal repassada",
      body: "Operamos sob a Área de Livre Comércio de Guajará-Mirim e somos registrados na SUFRAMA. Isso se converte em preço competitivo para você, varejista." },
    { kicker: "02 · Logística", title: "Logística que entende a região",
      body: "Estrutura preparada para o Norte do Brasil. Conhecemos as rotas, os prazos e os limites — e fazemos a distribuição chegar onde precisa, quando precisa." },
    { kicker: "03 · Atendimento", title: "Atendimento humano e direto",
      body: "Sem call center, sem robô, sem fila. Você fala com gente que conhece o produto, o preço e o seu negócio." },
  ];
  return (
    <section style={{ background: t.bg, color: t.text, borderTop: `1px solid ${line}` }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="04" title="Por que comprar da PlexAmerica" color="#F6B817" />
        <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 48px)",
          lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 900, textWrap: "balance",
          color: titleC }}>
          Caminhos estratégicos fazem parte de uma boa prática comercial.
        </h2>
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {cards.map(c => (
            <div key={c.kicker} style={{ borderTop: `2px solid #F6B817`, paddingTop: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                color: onDark ? "rgba(246,184,23,0.85)" : "#F6B817", fontWeight: 600, marginBottom: 16 }}>
                {c.kicker}
              </div>
              <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 600, fontSize: 22,
                lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.01em",
                color: titleC }}>{c.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: bodyC, margin: 0, textWrap: "pretty" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------- 6. Categorias Reyplast -------
function Categorias({ theme }) {
  const t = theme.categorias;
  const mute = "#5C5F77";
  const bodyC = "#1A1A1A";
  const titleC = "#253875";
  const line = t.line;
  const cats = [
    ["Organização", "Potes herméticos, cestos, organizadores"],
    ["Cozinha", "Escorredores, lixeiras de pia, mantimentos"],
    ["Banho", "Cestos, porta-shampoo, lixeiras"],
    ["Utilidades gerais", "Baldes, bacias, jarras"],
    ["Linha kids", "Em breve · placeholder"],
    ["Linha jardim", "Em breve · placeholder"],
  ];
  return (
    <section style={{ background: t.bg, color: t.text, borderTop: `1px solid ${line}` }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="05" title="Categorias Reyplast em destaque" color="#F6B817" />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 48px)",
            lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 760, textWrap: "balance",
            color: titleC }}>
            Linha Reyplast — utilidades para a casa que vendem todos os dias.
          </h2>
          <a style={{ color: "#253875", fontWeight: 500, fontSize: 14, textDecoration: "none",
            borderBottom: "1px solid rgba(37,56,117,0.4)", whiteSpace: "nowrap" }}>
            Ver catálogo completo →
          </a>
        </div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {cats.map(([name, desc], i) => (
            <div key={name} style={{ background: t.surface || "#FFF", border: `1px solid ${line}`,
              borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* placeholder de foto rotulado */}
              <div style={{ aspectRatio: "16 / 10", background: "#EDEAE0",
                display: "grid", placeItems: "center", borderBottom: `1px solid ${line}`, position: "relative" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#9A8E68", textAlign: "center", lineHeight: 1.5 }}>
                  [foto categoria]<br/>{name}
                </div>
                <div style={{ position: "absolute", top: 12, left: 12, fontSize: 10,
                  letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5F77",
                  background: "#FFF", padding: "3px 8px", borderRadius: 2 }}>0{i+1}</div>
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 600, fontSize: 18,
                  margin: 0, color: titleC, letterSpacing: "-0.01em" }}>{name}</h3>
                <p style={{ fontSize: 13, color: bodyC, margin: "6px 0 0", lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------- 7. Dual CTA -------
function DualCta({ theme }) {
  const t = theme.dualCta;
  const isLightCard = t.bg !== "#0d1a40" && t.bg !== "#253875";
  return (
    <section style={{ background: t.bg, color: t.text }}>
      <div style={{ ...wrap, ...sectionPad }}>
        <SectionLabel num="06" title="Próximos passos" color="#F6B817" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 6, padding: "clamp(28px, 3.5vw, 48px)" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(246,184,23,0.85)", marginBottom: 18 }}>Para varejistas</div>
            <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(24px, 2.6vw, 36px)",
              lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Quer ser revendedor?</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.78)",
              margin: "0 0 32px", textWrap: "pretty" }}>
              Cadastre-se em 2 minutos e fale direto com nossa equipe comercial.
            </p>
            <CtaPrimary>Quero ser revendedor →</CtaPrimary>
          </div>
          <div style={{ background: "rgba(246,184,23,0.06)", border: "1px solid rgba(246,184,23,0.3)",
            borderRadius: 6, padding: "clamp(28px, 3.5vw, 48px)" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#F6B817", marginBottom: 18 }}>Para fabricantes</div>
            <h3 style={{ fontFamily: "var(--plex-font)", fontWeight: 700, fontSize: "clamp(24px, 2.6vw, 36px)",
              lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.02em" }}>É fabricante e quer ser representado?</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.78)",
              margin: "0 0 32px", textWrap: "pretty" }}>
              Apresente sua marca e descubra como podemos abrir caminhos para você na Amazônia Ocidental.
            </p>
            <CtaPrimary>Apresente sua marca →</CtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------- 8. Footer -------
function Footer({ theme }) {
  const t = theme.footer;
  return (
    <footer style={{ background: t.bg, color: t.text, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ ...wrap, padding: "64px clamp(16px, 3vw, 32px) 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <img src={window.__resources.logoWhite} alt="PlexAmerica"
                 style={{ height: 36, width: "auto", display: "block", objectFit: "contain", marginBottom: 24 }} />
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              Indústria e Comércio Ltda<br/>
              Distribuição estratégica para a Amazônia Ocidental.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#F6B817", marginBottom: 18 }}>Contato</div>
            <div style={{ fontSize: 13, lineHeight: 2, color: "rgba(255,255,255,0.78)" }}>
              WhatsApp Business <span style={{ opacity: 0.55 }}>[a confirmar]</span><br/>
              comercial@plexamerica.com.br<br/>
              representacoes@plexamerica.com.br<br/>
              Telefone <span style={{ opacity: 0.55 }}>[a confirmar]</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#F6B817", marginBottom: 18 }}>Sede</div>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.78)" }}>
              Av. Princesa Isabel, 4441<br/>
              Bairro Liberdade<br/>
              Guajará-Mirim/RO<br/>
              Seg–Sex 8h–18h · Sáb 8h–12h
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#F6B817", marginBottom: 18 }}>Navegação</div>
            <div style={{ fontSize: 13, lineHeight: 2, color: "rgba(255,255,255,0.78)",
              display: "flex", flexDirection: "column" }}>
              <span>Catálogo Reyplast</span>
              <span>Sobre a PlexAmerica</span>
              <span>Para Fabricantes</span>
              <span>Seja Revendedor</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
          <div>
            CNPJ 34.462.929/0001-54 · IE 257.338 · Reg. Esp. nº 88 · Lei Estadual nº 5.598/2023 · Registro SUFRAMA — ALCGM
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.HomeSections = { Marcas, Cobertura, PorQue, Categorias, DualCta, Footer };
