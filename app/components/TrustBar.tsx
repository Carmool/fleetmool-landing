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
    name: "Logística Noroeste",
    mark: (
      <svg {...markProps}>
        <path d="M4 12.5L10 6.5L16 12.5" />
        <path d="M4 16L10 10L16 16" opacity={0.45} />
      </svg>
    ),
  },
  {
    name: "Transportes del Golfo",
    mark: (
      <svg {...markProps}>
        <circle cx="10" cy="10" r="6.5" />
        <path d="M3.5 12H16.5" />
      </svg>
    ),
  },
  {
    name: "Distribuidora Central",
    mark: (
      <svg {...markProps}>
        <rect x="4" y="4" width="5" height="5" />
        <rect x="11" y="4" width="5" height="5" opacity={0.45} />
        <rect x="4" y="11" width="5" height="5" opacity={0.45} />
        <rect x="11" y="11" width="5" height="5" />
      </svg>
    ),
  },
  {
    name: "Flota Monterrey",
    mark: (
      <svg {...markProps}>
        <path d="M3 15.5L8 7L11 12L13.5 8.5L17 15.5H3Z" />
      </svg>
    ),
  },
  {
    name: "Operaciones Bajío",
    mark: (
      <svg {...markProps}>
        <circle cx="10" cy="10" r="6.5" />
        <circle cx="10" cy="10" r="2.5" opacity={0.45} />
      </svg>
    ),
  },
  {
    name: "Muebles Nacional",
    mark: (
      <svg {...markProps}>
        <rect x="4" y="4" width="12" height="12" rx="3" />
        <path d="M4 10H16" opacity={0.45} />
      </svg>
    ),
  },
];

export function TrustBar() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-label">Operaciones de flota en todo México confían en Fleetmool</div>
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
