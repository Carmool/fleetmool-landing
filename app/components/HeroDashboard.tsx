export function HeroDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="hero-dashboard-frame">
        <div className="dash">
          {/* Sidebar */}
          <aside className="dash-side">
            <div className="dash-side-logo">
              <span className="mk">F</span>
              <span>Fleetmool</span>
            </div>
            <div className="dash-side-section">
              <div className="dash-side-section-label">Operación</div>
              <div className="dash-side-item active">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 12l9-8 9 8M5 10v10h4v-6h6v6h4V10" />
                </svg>
                <span>Dashboard</span>
                <span className="count">3</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="12" rx="2" />
                  <path d="M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <span>Vehículos</span>
                <span className="count">48</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M14 7l-5 5 5 5M19 12H9" />
                </svg>
                <span>Mantenimiento</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
                </svg>
                <span>Talleres</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 17l5-5 4 4 8-8" />
                  <path d="M14 8h6v6" />
                </svg>
                <span>Reportes</span>
              </div>
            </div>
            <div className="dash-side-section">
              <div className="dash-side-section-label">Cuenta</div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0116 0" />
                </svg>
                <span>Equipo</span>
              </div>
              <div className="dash-side-item">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
                <span>Configuración</span>
              </div>
            </div>
            <div className="dash-side-foot">
              <div className="lab"><span>IA activa</span></div>
              <div className="ti">3 alertas predictivas</div>
              <div className="sub">Última revisión hace 2 min</div>
            </div>
          </aside>

          {/* Main */}
          <div className="dash-main">
            <div className="dash-top">
              <div className="dash-crumb">
                <span>Operación</span>
                <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 16 16">
                  <path d="M6 4l4 4-4 4" />
                </svg>
                <b>Resumen</b>
              </div>
              <div className="dash-top-right">
                <div className="dash-search">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="5" />
                    <path d="M14 14l-3-3" />
                  </svg>
                  <span>Buscar vehículo, taller…</span>
                  <span className="k">⌘K</span>
                </div>
                <div className="dash-av">GT</div>
              </div>
            </div>

            <div className="dash-body">
              <div className="dash-stats">
                <div className="dash-stat">
                  <div className="lab">Total vehículos</div>
                  <div className="v">48</div>
                  <div className="delta">↑ 2 este mes</div>
                </div>
                <div className="dash-stat">
                  <div className="lab">
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)" }}></span>
                    Activos
                  </div>
                  <div className="v">42</div>
                  <div className="delta">87% disponibilidad</div>
                  <svg className="dash-spark" viewBox="0 0 60 24" fill="none">
                    <path d="M0 18 L8 14 L16 16 L24 10 L32 12 L40 6 L48 8 L60 4" stroke="#15803D" strokeWidth="1.4" />
                  </svg>
                </div>
                <div className="dash-stat">
                  <div className="lab">En taller</div>
                  <div className="v" style={{ color: "var(--amber-bright)" }}>6</div>
                  <div className="delta down">2 sobre la media</div>
                </div>
                <div className="dash-stat alert">
                  <div className="lab">Alertas IA</div>
                  <div className="v">3</div>
                  <div className="delta down">Requieren acción</div>
                </div>
              </div>

              <div>
                <div className="dash-section-h">
                  <div>
                    <h3>Flota activa</h3>
                    <div className="meta">Actualizado hace 2 min · 48 vehículos</div>
                  </div>
                  <div className="tabs">
                    <div className="tab active">Todos</div>
                    <div className="tab">En ruta</div>
                    <div className="tab">En taller</div>
                    <div className="tab">Alertas</div>
                  </div>
                </div>
                <div className="dash-table">
                  <div className="dash-table-h">
                    <span>Vehículo</span>
                    <span>Modelo</span>
                    <span>Estado</span>
                    <span>Kilometraje</span>
                    <span></span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">T</span><span className="id">ECO-001</span></div>
                    <span className="model">Toyota Hilux 2022</span>
                    <div className="status ok"><span className="dot"></span>En ruta · CDMX</div>
                    <span className="km">45,230 km</span>
                    <span className="action">Ver →</span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">F</span><span className="id">ECO-002</span></div>
                    <span className="model">Ford Transit 2023</span>
                    <div className="status ok"><span className="dot"></span>En ruta · MTY</div>
                    <span className="km">23,100 km</span>
                    <span className="action">Ver →</span>
                  </div>
                  <div className="dash-row">
                    <div className="veh"><span className="mk-mini">C</span><span className="id">ECO-003</span></div>
                    <span className="model">Chevrolet Silverado 2021</span>
                    <div className="status warn"><span className="dot"></span>En taller · Auto Expert</div>
                    <span className="km">67,800 km</span>
                    <span className="action">Ver →</span>
                  </div>
                  <div className="dash-row flagged">
                    <div className="veh"><span className="mk-mini">N</span><span className="id">ECO-004</span></div>
                    <span className="model">Nissan NP300 2022</span>
                    <div className="status alert"><span className="dot"></span>Mantto. requerido</div>
                    <span className="km">89,450 km</span>
                    <span className="action">Agendar →</span>
                  </div>
                </div>
              </div>

              <div className="dash-ai">
                <div className="mk">IA</div>
                <div className="txt">
                  <div className="t1">Alerta predictiva · hace 4 minutos</div>
                  <div className="t2">ECO-004 requiere cambio de aceite en 5 días, según 89,450 km y ciclos de uso. Agendar ahora reduce el riesgo de paro no programado en 94%.</div>
                </div>
                <button className="btn-mini">Agendar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
