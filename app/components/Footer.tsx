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
            <p className="footer-desc" data-t="footer.desc">
              Plataforma de inteligencia operacional para gestión de flotas y talleres en México y LATAM.
            </p>
          </div>
          <div className="footer-col">
            <h5 data-t="footer.col1">Plataforma</h5>
            <ul>
              <li><Link to="/" data-t="footer.l1_1">Fleetmool</Link></li>
              <li><Link to="/f4w" data-t="footer.l1_2">F4W (Talleres)</Link></li>
              <li><a href="#ecosystem" data-t="footer.l1_3">Integraciones</a></li>
              <li><a href="#" data-t="footer.l1_4">API</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 data-t="footer.col2">Empresa</h5>
            <ul>
              <li><a href="#" data-t="footer.l2_1">Acerca de</a></li>
              <li><a href="#" data-t="footer.l2_2">Blog</a></li>
              <li><a href="#" data-t="footer.l2_3">Trabaja con nosotros</a></li>
              <li>
                <a
                  href="https://wa.me/525573221028"
                  target="_blank"
                  rel="noopener"
                  data-t="footer.l2_4"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 data-t="footer.col3">Soporte</h5>
            <ul>
              <li><a href="#" data-t="footer.l3_1">Documentación</a></li>
              <li><a href="#" data-t="footer.l3_2">Status</a></li>
              <li><a href="#" data-t="footer.l3_3">Comunidad</a></li>
              <li><a href="#" data-t="footer.l3_4">Seguridad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span data-t="footer.copy">© 2026 Fleetmool. Todos los derechos reservados.</span>
          <div className="links">
            <a href="#" data-t="footer.privacy">Privacidad</a>
            <a href="#" data-t="footer.terms">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
