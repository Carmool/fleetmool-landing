const LOGOS = [
  { text: "LOGÍSTICA NOROESTE", cls: "" },
  { text: "Transportes del Golfo", cls: "serif" },
  { text: "DISTRIBUIDORA CENTRAL", cls: "" },
  { text: "flota-monterrey", cls: "mono" },
  { text: "OPERACIONES BAJÍO", cls: "" },
  { text: "Muebles Nacional", cls: "serif" },
];

export function TrustBar() {
  return (
    <section className="trust">
      <div className="trust-label">
        Operaciones de flota en todo México confían en Fleetmool
      </div>
      <div className="trust-logos">
        {/* Two identical sets — second is aria-hidden so screen readers don't double-read */}
        <div className="trust-logos-inner">
          {LOGOS.map((l, i) => (
            <span key={i} className={`trust-logo${l.cls ? ` ${l.cls}` : ""}`}>
              {l.text}
            </span>
          ))}
          {LOGOS.map((l, i) => (
            <span key={`dup-${i}`} aria-hidden="true" className={`trust-logo${l.cls ? ` ${l.cls}` : ""}`}>
              {l.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
