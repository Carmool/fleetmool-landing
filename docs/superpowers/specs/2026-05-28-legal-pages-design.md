---
name: legal-pages-design
description: Two new legal pages (Términos y Condiciones, Aviso de Privacidad) + footer link wiring
metadata:
  type: project
---

# Legal Pages — Design Spec

**Date:** 2026-05-28  
**Branch:** footer-empresa-linkedin-links (continuing on same branch)

---

## Scope

Add two static legal pages to the Fleetmool landing site and wire them into the footer.

---

## Pages

### 1. `/terminos-y-condiciones`
Route: `app/routes/terminos-y-condiciones.tsx`

**Sections:**
1. Información General
2. Servicios Ofrecidos — Fleetmool (gestión de flotas) and F4W (talleres)
3. Uso del Servicio — businesses and fleet managers; must be of legal age with authority
4. Registro y Cuenta — user responsible for credentials
5. Datos Personales y Privacidad — name, phone, email, vehicle/fleet data; ARCO rights reference
6. Uso Adecuado — no illegal/fraudulent use; right to suspend
7. Limitación de Responsabilidad — no guaranteed uptime, not liable for indirect damages
8. Modificaciones — company may update terms at any time
9. Legislación Aplicable — Mexican law, Mexico City courts

### 2. `/aviso-de-privacidad`
Route: `app/routes/aviso-de-privacidad.tsx`

**Sections:**
1. Identidad del Responsable
2. Datos Personales Recabados — name, email, phone, tax IDs, vehicle plates/VIN, fleet/service history
3. Finalidades del Tratamiento — primary (service delivery) and secondary (communications)
4. Herramientas Técnicas — WhatsApp automation only; **no** Facebook Pixel or Google Analytics
5. Almacenamiento — Google Cloud Platform and private VPS
6. Transferencias a Terceros — cloud providers, messaging platforms
7. Derechos ARCO — 20 business days; contacto@carmool.com
8. Retención de Datos — deleted or anonymized when purpose is fulfilled
9. Modificaciones — notice may be updated at any time

---

## Legal Entity (same for both pages)

- **Razón social:** TECNOLOGÍAS CARMOOL, S.A.P.I. DE C.V.
- **Domicilio:** Av. Cuautepec No. 70, Col. Jorge Negrete, Gustavo A. Madero, Ciudad de México, C.P. 07280
- **Correo:** contacto@carmool.com
- **Última actualización:** 15 de julio de 2025

---

## Page Structure (per route)

```tsx
// No handle export — no accent theming needed for neutral legal pages
// Nav surface="fleetmool" + <main class="legal-page"> prose + Footer
```

- `<Nav surface="fleetmool" />` — standard nav, no accent theming
- `<main>` with a `container` wrapper and prose typography using existing CSS token classes
- `<Footer />` — standard footer
- `meta` export with title + description for each page

---

## Footer Update

`app/components/Footer.tsx` — bottom links section:

| Link text | Current href | New href |
|-----------|-------------|----------|
| Privacidad | `#` | `/aviso-de-privacidad` |
| Términos | `#` | `/terminos-y-condiciones` |

Use Remix `<Link>` (internal navigation, no full page reload).

---

## What Is NOT changing

- No new dependencies
- No markdown parser
- No changes to existing routes or components beyond `Footer.tsx`
- No Facebook Pixel or Google Analytics references in the Aviso
- No new CSS — use existing token-based classes from `globals.css`
