import { Reveal } from "./Reveal";

export function F4WTestimonial() {
  return (
    <section className="section tight cases">
      <div className="container">
        <Reveal style={{ maxWidth: "820px", margin: "0 auto" }}>
          <article className="case" style={{ borderColor: "var(--blue-soft)" }}>
            <div
              className="case-result"
              style={{
                background: "linear-gradient(180deg, var(--blue-tint), transparent 80%)",
                borderBottomColor: "var(--blue-soft)",
                padding: "32px 40px",
                minHeight: "auto",
              }}
            >
              <div style={{ display: "flex", gap: "32px", alignItems: "center", width: "100%" }}>
                <div>
                  <div className="case-result-num" style={{ color: "var(--blue-text)" }}>2 h</div>
                  <div className="case-result-lbl" style={{ maxWidth: "180px" }}>
                    para tener todo el taller operando en F4W
                  </div>
                </div>
                <div style={{ flex: 1, paddingLeft: "32px", borderLeft: "1px solid var(--blue-soft)" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: "14px",
                    }}
                  >
                    Auto Expert Mecánica Integral · CDMX
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.5,
                      color: "var(--ink)",
                      letterSpacing: "-0.012em",
                      margin: 0,
                    }}
                  >
                    "Empezamos a usar F4W en dos horas. Mis clientes de flota ahora ven todo en tiempo
                    real. Ya no llaman para pedir reportes por separado. El taller se ve más profesional
                    y perdemos menos tiempo."
                  </p>
                </div>
              </div>
            </div>
            <div className="case-body" style={{ padding: "20px 40px" }}>
              <div className="case-author" style={{ border: "none", padding: 0 }}>
                <span className="av" style={{ background: "var(--blue)", color: "var(--ink)", borderColor: "var(--blue)" }}>RM</span>
                <div>
                  <div className="n">Roberto Méndez</div>
                  <div className="r">Propietario · Auto Expert</div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
