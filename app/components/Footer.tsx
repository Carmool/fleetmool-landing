import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-mark">
              <Link to="/" className="nav-logo" aria-label="Fleetmool">
                <img src="/fleetmool-transparent.png" alt="Fleetmool" className="nav-logo-img" />
              </Link>
            </div>
            <p className="footer-desc">
              Plataforma de inteligencia operacional para gestión de flotas y talleres en México y LATAM.
            </p>
          </div>
          <div className="footer-col">
            <h5>Plataforma</h5>
            <ul>
              <li><Link to="/">Fleetmool</Link></li>
              <li><Link to="/f4w">F4W · Talleres</Link></li>
              <li><a href="/#pricing">Precios</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/fleetmool/about/" target="_blank" rel="noopener noreferrer">Acerca de</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/fleetmool/posts/" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/fleetmool/jobs/" target="_blank" rel="noopener noreferrer">Trabaja con nosotros</a>
              </li>
              <li>
                <a href="https://wa.me/525573221028" target="_blank" rel="noopener noreferrer">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Fleetmool. Todos los derechos reservados.</span>
          <div className="links">
            <Link to="/aviso-de-privacidad">Privacidad</Link>
            <Link to="/terminos-y-condiciones">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
