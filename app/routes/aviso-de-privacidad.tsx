import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => [
  { title: "Aviso de Privacidad — Fleetmool" },
  { name: "description", content: "Aviso de Privacidad de Fleetmool conforme a la LFPDPPP." },
];

export default function AvisoDePrivacidad() {
  return (
    <>
      <Nav surface="fleetmool" />
      <main style={{ padding: "80px 0 100px" }}>
        <div className="container narrow">
          <h1 className="h2" style={{ marginBottom: 8 }}>Aviso de Privacidad</h1>
          <p className="body-sm text-ink-3" style={{ marginBottom: 48 }}>Última actualización: 15 de julio de 2025</p>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>1. Identidad del Responsable</h2>
            <p className="body">
              TECNOLOGÍAS CARMOOL, S.A.P.I. DE C.V., con domicilio en Av. Cuautepec No. 70, Col. Jorge Negrete,
              Gustavo A. Madero, Ciudad de México, C.P. 07280, es responsable del tratamiento de sus datos
              personales conforme a lo establecido en la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares (LFPDPPP) y su Reglamento.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>2. Datos Personales Recabados</h2>
            <p className="body" style={{ marginBottom: 12 }}>
              Para la prestación de nuestros servicios, podemos recabar los siguientes datos:
            </p>
            <ul className="body" style={{ paddingLeft: 24, lineHeight: 2 }}>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>RFC o CURP (cuando aplique)</li>
              <li>Placas vehiculares y número de serie (VIN)</li>
              <li>Historial de mantenimiento y servicios (fechas, diagnósticos, kilometraje, servicios realizados)</li>
              <li>Información operativa de la flota</li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>3. Finalidades del Tratamiento</h2>
            <p className="body" style={{ marginBottom: 8 }}><strong>Primarias</strong> (necesarias para el servicio):</p>
            <ul className="body" style={{ paddingLeft: 24, lineHeight: 2, marginBottom: 16 }}>
              <li>Creación y administración de su cuenta en la plataforma</li>
              <li>Gestión del historial de vehículos y flotilla</li>
              <li>Comunicación relacionada con el servicio contratado</li>
            </ul>
            <p className="body" style={{ marginBottom: 8 }}><strong>Secundarias</strong> (opcionales):</p>
            <ul className="body" style={{ paddingLeft: 24, lineHeight: 2 }}>
              <li>Envío de comunicaciones comerciales y novedades de la plataforma</li>
              <li>Mejora de nuestros servicios</li>
            </ul>
            <p className="body" style={{ marginTop: 16 }}>
              Para oponerse a las finalidades secundarias, puede enviar su solicitud a{" "}
              <a href="mailto:contacto@carmool.com" style={{ color: "var(--red-text)", textDecoration: "underline" }}>
                contacto@carmool.com
              </a>
              .
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>4. Herramientas Técnicas</h2>
            <p className="body">
              Utilizamos automatización a través de WhatsApp para el envío de recordatorios y notificaciones
              de servicio, sujetos a las políticas de privacidad de WhatsApp / Meta.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>5. Almacenamiento de Datos</h2>
            <p className="body">
              Sus datos son almacenados en servidores seguros de Google Cloud Platform (GCP) y servidores
              privados virtuales (VPS), con medidas de seguridad técnicas y organizativas adecuadas para
              proteger su información.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>6. Transferencias a Terceros</h2>
            <p className="body" style={{ marginBottom: 12 }}>Sus datos podrán ser compartidos con:</p>
            <ul className="body" style={{ paddingLeft: 24, lineHeight: 2 }}>
              <li>Proveedores de infraestructura en la nube (Google Cloud Platform)</li>
              <li>Plataformas de mensajería para notificaciones (WhatsApp / Meta)</li>
              <li>Autoridades competentes cuando así lo requiera la ley</li>
            </ul>
            <p className="body" style={{ marginTop: 16 }}>
              Estas transferencias son necesarias para la prestación del servicio y no requieren su consentimiento
              expreso conforme al artículo 37 de la LFPDPPP.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>7. Derechos ARCO</h2>
            <p className="body">
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos
              personales. Para ejercer estos derechos, envíe su solicitud a{" "}
              <a href="mailto:contacto@carmool.com" style={{ color: "var(--red-text)", textDecoration: "underline" }}>
                contacto@carmool.com
              </a>
              . Daremos respuesta en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>8. Retención de Datos</h2>
            <p className="body">
              Sus datos serán conservados durante el tiempo necesario para cumplir con las finalidades descritas
              en este aviso o conforme lo exija la ley aplicable. Una vez cumplidas dichas finalidades,
              procederemos a su eliminación o anonimización.
            </p>
          </section>

          <section style={{ marginBottom: 0 }}>
            <h2 className="h4" style={{ marginBottom: 12 }}>9. Modificaciones al Aviso</h2>
            <p className="body">
              Fleetmool se reserva el derecho de actualizar el presente Aviso de Privacidad en cualquier
              momento. Cualquier modificación será publicada en{" "}
              <a href="/aviso-de-privacidad" style={{ color: "var(--red-text)", textDecoration: "underline" }}>
                www.fleetmool.com/aviso-de-privacidad
              </a>{" "}
              y, en su caso, notificada por medios electrónicos.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
