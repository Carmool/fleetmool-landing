import { Link } from "@remix-run/react";
import { useState } from "react";
import { useNavScrolled } from "~/hooks/useNavScrolled";
import { WhatsAppCta } from "./WhatsAppCta";

type Surface = "fleetmool" | "f4w";

export function Nav({ surface }: { surface: Surface }) {
  const scrolled = useNavScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" aria-label="Fleetmool">
            <span className="nav-logo-mark">F</span>
            <span>Fleetmool</span>
          </Link>
          <div className="nav-links" data-open={mobileOpen}>
            <Link to={surface === "f4w" ? "/" : "/#platform"} className="nav-link">
              Plataforma
            </Link>
            <Link to={surface === "f4w" ? "/#ecosystem" : "#ecosystem"} className="nav-link">
              Ecosistema
            </Link>
            <Link to="/f4w" className="nav-link">
              Para talleres
            </Link>
            <Link to="#pricing" className="nav-link">
              Precios
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <WhatsAppCta surface={surface} preset="signin" variant="ghost" size="sm">
            Iniciar sesión
          </WhatsAppCta>
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
