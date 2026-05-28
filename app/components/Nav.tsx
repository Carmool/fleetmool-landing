import { Link } from "@remix-run/react";
import { useState, useRef, useCallback } from "react";
import { useNavScrolled } from "~/hooks/useNavScrolled";
import { WhatsAppCta } from "./WhatsAppCta";

type Surface = "fleetmool" | "f4w";

const flootaLinks = [
  { label: "Ecosistema", href: "/#ecosystem" },
  { label: "Plataforma", href: "/#platform" },
  { label: "IA predictiva", href: "/#ai" },
  { label: "Precios", href: "/#pricing" },
];

const f4wLinks = [
  { label: "Funcionalidades", href: "/f4w#features" },
  { label: "Comparación", href: "/f4w#comparacion" },
  { label: "Ecosistema", href: "/f4w#ecosistema" },
  { label: "Precios", href: "/f4w#pricing" },
];

function Chevron() {
  return (
    <svg
      className="nav-chevron"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Nav({ surface }: { surface: Surface }) {
  const scrolled = useNavScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Surface | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((s: Surface) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(s);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 220);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" aria-label="Fleetmool">
            <img
              src="/fleetmool-transparent.png"
              alt="Fleetmool"
              className="nav-logo-img"
            />
          </Link>

          <div className="nav-links" data-open={mobileOpen}>
            {/* Para flotas */}
            <div
              className="nav-product"
              data-active={surface === "fleetmool"}
              data-open={openDropdown === "fleetmool"}
              onMouseEnter={() => openMenu("fleetmool")}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/"
                className="nav-link nav-product-trigger"
                onClick={() => setMobileOpen(false)}
              >
                Para flotas
                <Chevron />
              </Link>
              <div className="nav-dropdown">
                {flootaLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="nav-dropdown-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Para talleres */}
            <div
              className="nav-product"
              data-active={surface === "f4w"}
              data-open={openDropdown === "f4w"}
              onMouseEnter={() => openMenu("f4w")}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/f4w"
                className="nav-link nav-product-trigger"
                onClick={() => setMobileOpen(false)}
              >
                Para talleres
                <Chevron />
              </Link>
              <div className="nav-dropdown">
                {f4wLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="nav-dropdown-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <a href="https://app.fleetmool.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            Iniciar sesión
          </a>
          <WhatsAppCta surface={surface} preset="trial" size="sm">
            {surface === "f4w" ? "Registrar mi taller" : "Comenzar gratis"}
          </WhatsAppCta>
          <button
            className="nav-mobile-toggle"
            aria-label="Menú"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
