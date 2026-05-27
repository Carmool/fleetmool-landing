import { Link } from "@remix-run/react";
import { Reveal } from "./Reveal";

export function F4WEcoCallout() {
  return (
    <section className="section ecosystem" id="ecosistema">
      <div className="container">
        <Reveal className="sec-head centered">
          <div className="eyebrow" style={{ color: "#E78892" }}>
            <span style={{ background: "#E78892" }}></span>
            <span>Ecosistema</span>
          </div>
          <h2 className="h1">¿Tus clientes manejan flotas?</h2>
          <p className="lede">
            Invítalos a Fleetmool. La conexión es automática — y tu taller se vuelve indispensable
            para sus operaciones.
          </p>
        </Reveal>

        <Reveal stagger={1} className="eco-stage" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ padding: "56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
            <div>
              <ul className="eco-features">
                <li className="eco-feat">
                  <span className="eco-feat-mk" style={{ background: "var(--green-tint)", borderColor: "var(--green-soft)", color: "var(--green-bright)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Servicios sincronizados.</strong>{" "}
                    <span>Automáticamente, en tiempo real.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk" style={{ background: "var(--green-tint)", borderColor: "var(--green-soft)", color: "var(--green-bright)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Cliente más confiado.</strong>{" "}
                    <span>Trazabilidad completa de cada servicio.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk" style={{ background: "var(--green-tint)", borderColor: "var(--green-soft)", color: "var(--green-bright)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Aparece en la red.</strong>{" "}
                    <span>Las flotas conectadas pueden encontrarte.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk" style={{ background: "var(--green-tint)", borderColor: "var(--green-soft)", color: "var(--green-bright)" }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Sin configuración extra.</strong>{" "}
                    <span>F4W detecta y conecta automáticamente.</span>
                  </span>
                </li>
              </ul>
              <div style={{ marginTop: "28px" }}>
                <Link to="/" className="btn btn-secondary">
                  Conocer Fleetmool para flotas →
                </Link>
              </div>
            </div>

            {/* Visual: F4W → Fleetmool connection */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: "var(--r-md)" }}>
              <div style={{ background: "var(--surface)", border: "1px solid var(--blue-soft)", borderRadius: "10px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "7px", background: "var(--blue)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: 700 }}>W</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 600 }}>Tu taller · F4W</div>
                  <div style={{ fontSize: "11.5px", color: "var(--blue-text)" }}>Registra servicios · envía cotizaciones</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <svg width="2" height="14" viewBox="0 0 2 14" fill="none">
                  <line x1="1" y1="0" x2="1" y2="14" stroke="var(--green-soft)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                <div style={{ padding: "3px 10px", background: "var(--green-tint)", border: "1px solid var(--green-soft)", borderRadius: "99px", fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--green-bright)" }}>
                  Sincronizado
                </div>
                <svg width="2" height="14" viewBox="0 0 2 14" fill="none">
                  <line x1="1" y1="0" x2="1" y2="14" stroke="var(--green-soft)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
              <div style={{ background: "var(--surface)", border: "1px solid rgba(231,136,146,0.28)", borderRadius: "10px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "7px", background: "#9F1F2E", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: 700 }}>F</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 600 }}>Tu cliente · Fleetmool</div>
                  <div style={{ fontSize: "11.5px", color: "#E78892" }}>Ve servicios · aprueba cotizaciones</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
