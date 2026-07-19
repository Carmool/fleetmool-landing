const LOGOS = [
  { text: "AUTO EXPERT", cls: "" },
  { text: "Mecánica Premium", cls: "serif" },
  { text: "SERVICIO RÁPIDO MTY", cls: "" },
  { text: "mecanica-central", cls: "mono" },
  { text: "TECH SERVICE MX", cls: "" },
  { text: "Llantera del Bajío", cls: "serif" },
];

export function F4WTrustBar() {
  return (
    <section className="trust">
      <div className="trust-label">
        Más de 2,000 talleres usan F4W en México
      </div>
      <div className="trust-logos">
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
