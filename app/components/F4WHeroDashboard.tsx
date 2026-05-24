export function F4WHeroDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="hero-dashboard-frame">
        <div className="dash">
          {/* Sidebar */}
          <aside className="dash-side">
            <div className="dash-side-logo">
              <span className="mk">W</span>
              <span>F4W</span>
            </div>
            <div className="dash-side-section">
              <div className="dash-side-section-label">Taller</div>
              <div className="dash-side-item active">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
                <span>Órdenes</span>
                <span className="count">8</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="12" rx="2" />
                  <path d="M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <span>Vehículos</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  <path d="M16 3v5h5M8 13h8M8 17h6" />
                </svg>
                <span>Cotizaciones</span>
                <span className="count">3</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="4" />
                  <path d="M3 21a6 6 0 0112 0M17 11a3 3 0 100-6M22 21a5 5 0 00-8-4" />
                </svg>
                <span>Clientes</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="dash-side-section">
              <div className="dash-side-section-label">Negocio</div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 17l5-5 4 4 8-8" />
                  <path d="M14 8h6v6" />
                </svg>
                <span>Ingresos</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
                <span>Configuración</span>
              </div>
            </div>
            <div className="dash-side-foot" style={{ background: "rgba(37,211,102,0.06)", borderColor: "rgba(37,211,102,0.25)" }}>
              <div className="lab" style={{ color: "#25D366" }}>
                <span style={{ background: "#25D366", boxShadow: "0 0 8px rgba(37,211,102,0.5)" }}></span>
                <span>WhatsApp</span>
              </div>
              <div className="ti">2 cotizaciones enviadas</div>
              <div className="sub">1 aprobación pendiente</div>
            </div>
          </aside>

          {/* Main */}
          <div className="dash-main">
            <div className="dash-top">
              <div className="dash-crumb">
                <span>Taller</span>
                <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 16 16">
                  <path d="M6 4l4 4-4 4" />
                </svg>
                <b>Órdenes activas</b>
              </div>
              <div className="dash-top-right">
                <div className="dash-search">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="5" />
                    <path d="M14 14l-3-3" />
                  </svg>
                  <span>Buscar orden, placa…</span>
                  <span className="k">⌘K</span>
                </div>
                <button className="btn btn-primary btn-sm">+ Nueva orden</button>
                <div className="dash-av">RM</div>
              </div>
            </div>

            <div className="dash-body">
              <div className="dash-stats">
                <div className="dash-stat">
                  <div className="lab">Órdenes hoy</div>
                  <div className="v">8</div>
                  <div className="delta">↑ 2 vs ayer</div>
                </div>
                <div className="dash-stat">
                  <div className="lab">
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)" }}></span>
                    En proceso
                  </div>
                  <div className="v">5</div>
                  <div className="delta">2 entregando hoy</div>
                  <svg className="dash-spark" viewBox="0 0 60 24" fill="none">
                    <path d="M0 16 L8 18 L16 14 L24 10 L32 12 L40 8 L48 4 L60 6" stroke="var(--blue)" strokeWidth="1.4" />
                  </svg>
                </div>
                <div className="dash-stat">
                  <div className="lab">Cotizando</div>
                  <div className="v" style={{ color: "var(--amber-bright)" }}>3</div>
                  <div className="delta down">2 esperan aprobación</div>
                </div>
                <div className="dash-stat">
                  <div className="lab">Facturado · hoy</div>
                  <div className="v" style={{ fontFamily: "var(--font-mono)", fontSize: "22px" }}>$24.3k</div>
                  <div className="delta">↑ 14% vs media</div>
                </div>
              </div>

              <div>
                <div className="dash-section-h">
                  <div>
                    <h3>Órdenes de servicio</h3>
                    <div className="meta">8 activas · 3 pendientes de aprobación · hoy</div>
                  </div>
                  <div className="tabs">
                    <div className="tab active">Todas</div>
                    <div className="tab">En curso</div>
                    <div className="tab">Cotizando</div>
                    <div className="tab">Completadas</div>
                  </div>
                </div>
                <div className="dash-table">
                  <div className="dash-table-h">
                    <span>Orden</span>
                    <span>Servicio</span>
                    <span>Estado</span>
                    <span>Monto</span>
                    <span></span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">T</span><span className="id">OS-2847</span></div>
                    <span className="model">Cambio aceite + filtros</span>
                    <div className="status ok"><span className="dot"></span>En progreso</div>
                    <span className="km">$1,850</span>
                    <span className="action">Ver →</span>
                  </div>
                  <div className="dash-row flagged">
                    <div className="veh"><span className="mk-mini">C</span><span className="id">OS-2846</span></div>
                    <span className="model">Frenos + manguera</span>
                    <div className="status warn"><span className="dot"></span>Por aprobar</div>
                    <span className="km">$4,280</span>
                    <span className="action">Enviar →</span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">F</span><span className="id">OS-2844</span></div>
                    <span className="model">Afinación menor</span>
                    <div className="status ok"><span className="dot" style={{ background: "#34B765" }}></span>Entregando</div>
                    <span className="km">$2,150</span>
                    <span className="action">Ver →</span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">N</span><span className="id">OS-2842</span></div>
                    <span className="model">Diagnóstico inyectores</span>
                    <div className="status ok"><span className="dot" style={{ background: "var(--blue)" }}></span>Cotizando</div>
                    <span className="km">$8,200</span>
                    <span className="action">Ver →</span>
                  </div>
                </div>
              </div>

              {/* Quick quote panel */}
              <div className="dash-ai" style={{ background: "var(--blue-tint)", borderColor: "var(--blue-soft)" }}>
                <div className="mk" style={{ color: "var(--blue-text)", borderColor: "var(--blue-soft)", background: "rgba(0,0,0,0.4)" }}>$</div>
                <div className="txt">
                  <div className="t1">Cotización lista — OS-2846 · Silverado ECO-003</div>
                  <div className="t2">3 conceptos · Total $4,280 MXN · Aprobada por cliente en F4W llegará a Fleetmool automáticamente.</div>
                </div>
                <button className="btn-mini" style={{ background: "#25D366", borderColor: "#25D366", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.8-.4-1.7-.9-2.4-1.6-.7-.8-1.3-1.7-1.5-2.5-.1-.3 0-.4.2-.6l.7-.7c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.2-.2-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
