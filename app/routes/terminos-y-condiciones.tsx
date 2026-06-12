import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => [
  { title: "Términos y Condiciones | Fleetmool" },
  { name: "description", content: "Términos y Condiciones de uso de la plataforma Fleetmool." },
];

export default function TerminosYCondiciones() {
  return (
    <>
      <Nav surface="fleetmool" />
      <main style={{ padding: "80px 0 100px" }}>
        <div className="container narrow">
          <h1 className="h2" style={{ marginBottom: 8 }}>Términos y Condiciones de Uso</h1>
          <p className="body-sm text-ink-3" style={{ marginBottom: 48 }}>Última actualización: 15 de julio de 2025</p>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>1. Información General</h2>
            <p className="body">
              TECNOLOGÍAS CARMOOL, S.A.P.I. DE C.V. ("Fleetmool", "nosotros" o "la empresa"), con domicilio en
              Av. Cuautepec No. 70, Col. Jorge Negrete, Gustavo A. Madero, Ciudad de México, C.P. 07280, es la
              titular y operadora de la plataforma Fleetmool, accesible a través de www.fleetmool.com y
              app.fleetmool.com, así como de la plataforma F4W para talleres.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>2. Servicios Ofrecidos</h2>
            <p className="body">
              Fleetmool ofrece una plataforma de inteligencia operacional para la gestión de flotas vehiculares,
              que incluye seguimiento de mantenimiento, historial de vehículos, gestión de proveedores y análisis
              operacional. F4W es una plataforma complementaria orientada a talleres mecánicos que deseen digitalizar
              sus operaciones y conectarse con flotas.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>3. Aceptación de los Términos</h2>
            <p className="body">
              Al acceder y utilizar cualquiera de nuestros servicios, el usuario acepta los presentes Términos y
              Condiciones. Si no está de acuerdo con alguno de ellos, deberá abstenerse de utilizar la plataforma.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>4. Registro y Cuenta</h2>
            <p className="body">
              Para acceder a las funcionalidades de la plataforma, el usuario deberá crear una cuenta. Es
              responsabilidad del usuario mantener la confidencialidad de sus credenciales de acceso. Fleetmool
              no se responsabiliza por el uso no autorizado de cuentas derivado de la falta de custodia de
              las credenciales.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>5. Uso Adecuado</h2>
            <p className="body">
              El usuario se compromete a utilizar la plataforma exclusivamente para fines lícitos y conforme a la
              ley. Queda prohibido el uso fraudulento, la suplantación de identidad, la interferencia con sistemas
              de terceros y cualquier actividad que cause daño a Fleetmool o a otros usuarios. Fleetmool se reserva
              el derecho de suspender o cancelar cuentas que infrinjan estos términos.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>6. Datos Personales</h2>
            <p className="body">
              El tratamiento de datos personales se rige por nuestro{" "}
              <a href="/aviso-de-privacidad" style={{ color: "var(--red-text)", textDecoration: "underline" }}>
                Aviso de Privacidad
              </a>
              . Los usuarios pueden ejercer sus derechos ARCO enviando una solicitud a{" "}
              <a href="mailto:contacto@carmool.com" style={{ color: "var(--red-text)", textDecoration: "underline" }}>
                contacto@carmool.com
              </a>
              .
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>7. Limitación de Responsabilidad</h2>
            <p className="body">
              Fleetmool no garantiza la disponibilidad permanente de la plataforma ni la ausencia de errores.
              La empresa no será responsable por daños directos, indirectos, incidentales o consecuentes derivados
              del uso o la imposibilidad de uso de la plataforma.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>8. Modificaciones</h2>
            <p className="body">
              Fleetmool se reserva el derecho de modificar los presentes Términos en cualquier momento. Las
              modificaciones entrarán en vigor desde su publicación en el sitio web. Se recomienda al usuario
              revisar periódicamente este documento.
            </p>
          </section>

          <section style={{ marginBottom: 0 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>9. Legislación Aplicable</h2>
            <p className="body">
              Los presentes Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier
              controversia, las partes se someten a la jurisdicción de los tribunales competentes de la
              Ciudad de México.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
