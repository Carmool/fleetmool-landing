type TrustBrand = {
  name: string;
  mark: JSX.Element;
};

const markProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  "aria-hidden": true,
} as const;

const BRANDS: TrustBrand[] = [
  {
    name: "Auto Expert",
    mark: (
      <svg {...markProps}>
        <circle cx="10" cy="10" r="6.5" />
        <path d="M10 3.5V7M10 13V16.5M3.5 10H7M13 10H16.5" />
      </svg>
    ),
  },
  {
    name: "Mecánica Premium",
    mark: (
      <svg {...markProps}>
        <path d="M10 3L16 6.5V13.5L10 17L4 13.5V6.5L10 3Z" />
        <circle cx="10" cy="10" r="2" opacity={0.45} />
      </svg>
    ),
  },
  {
    name: "Servicio Rápido MTY",
    mark: (
      <svg {...markProps}>
        <path d="M11.5 3L5 11.5H9.5L8.5 17L15 8.5H10.5L11.5 3Z" />
      </svg>
    ),
  },
  {
    name: "Mecánica Central",
    mark: (
      <svg {...markProps}>
        <circle cx="10" cy="10" r="6.5" />
        <circle cx="10" cy="10" r="2.5" opacity={0.45} />
        <path d="M10 3.5V6M10 14V16.5" />
      </svg>
    ),
  },
  {
    name: "Tech Service MX",
    mark: (
      <svg {...markProps}>
        <rect x="4" y="4" width="12" height="12" rx="2.5" />
        <path d="M7.5 8L6 10L7.5 12M12.5 8L14 10L12.5 12" opacity={0.7} />
      </svg>
    ),
  },
  {
    name: "Llantera del Bajío",
    mark: (
      <svg {...markProps}>
        <circle cx="10" cy="10" r="6.5" />
        <circle cx="10" cy="10" r="3.25" opacity={0.45} />
      </svg>
    ),
  },
];

export function F4WTrustBar() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-label">Más de 2,000 talleres usan F4W en México</div>
        <div className="trust-logos">
          {BRANDS.map((brand) => (
            <span key={brand.name} className="trust-logo">
              {brand.mark}
              <span>{brand.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
