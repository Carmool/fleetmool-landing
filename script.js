/* ============================================================
   FLEETMOOL — v2 JS
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  es: {
    meta: { title_index: "Fleetmool — Inteligencia operacional para tu flota" },
    nav: { platform: "Plataforma", ecosystem: "Ecosistema", workshops: "Para talleres", pricing: "Precios", signin: "Iniciar sesión", cta: "Comenzar gratis" },
    hero: {
      new: "Nuevo",
      badge: "IA predictiva — Anticipa fallas con 7 días",
      h1a: "Inteligencia operacional",
      h1b: "para tu flota.",
      subtitle: "Conecta tu operación con los talleres que mantienen tu flota. Mantenimiento predictivo, diagnósticos en tiempo real y visibilidad total — sin complejidad.",
      cta1: "Comenzar gratis por WhatsApp",
      cta2: "Ver demo en vivo",
      meta1: "Sin tarjeta de crédito",
      meta2: "Onboarding en 30 minutos",
      meta3: "Soporte en español"
    },
    dash: { ai_status_t: "3 alertas predictivas", ai_status_s: "Última revisión hace 2 min" },
    trust: { label: "Operaciones de flota en todo México confían en Fleetmool" },
    ecosystem: {
      label: "Ecosistema",
      title: "Una operación, dos lados.",
      title2: "Sin fricción entre ellos.",
      subtitle: "Fleetmool para gestores de flota. F4W para los talleres que las mantienen. Mismos datos, en tiempo real, sin correos ni PDFs.",
      tab_fleet: "Fleetmool",
      tab_fleet_role: "Para flotas",
      tab_workshop_role: "Para talleres",
      fleet_chip: "Para gestores de flota",
      fleet_title: "Visibilidad total de tu flota, en una sola pantalla.",
      fleet_desc: "Estado en tiempo real, historial completo de mantenimiento y conexión directa con los talleres que te atienden. Sin hojas de cálculo, sin grupos de WhatsApp inacabables.",
      fleet_f1_t: "Seguimiento de vehículos.",
      fleet_f1_d: "Estado, ubicación y kilometraje al instante.",
      fleet_f2_t: "Historial completo.",
      fleet_f2_d: "Cada servicio, diagnóstico y reparación documentado.",
      fleet_f3_t: "Cotizaciones y aprobaciones.",
      fleet_f3_d: "Aprueba servicios con un clic, sin perder el control.",
      fleet_f4_t: "Alertas predictivas con IA.",
      fleet_f4_d: "Anticipa fallas antes de que paren tu operación.",
      fleet_cta: "Explorar Fleetmool →",
      workshop_chip: "Para talleres",
      workshop_title: "Digitaliza tu taller y conéctate con flotas que ya te buscan.",
      workshop_desc: "Registra servicios, genera cotizaciones y alimenta datos operacionales directo a tus clientes de flota. Sin instalación, listo en minutos.",
      workshop_f1_t: "Ingreso de servicios.",
      workshop_f1_d: "Diagnóstico, piezas y mano de obra en segundos.",
      workshop_f2_t: "Cotizaciones instantáneas.",
      workshop_f2_d: "Envío por WhatsApp con un toque.",
      workshop_f3_t: "Conexión automática con flotas.",
      workshop_f3_d: "Tus clientes ven el progreso en tiempo real.",
      workshop_f4_t: "Onboarding en minutos.",
      workshop_f4_d: "Cualquier dispositivo, sin instalaciones.",
      workshop_cta: "Explorar F4W →"
    },
    features: {
      label: "Para flotas",
      title: "Tres herramientas que cambian",
      title2: "cómo operas tu flota.",
      subtitle: "Visibilidad, coordinación con talleres e inteligencia operacional. Para gestores que necesitan respuestas — no más sistemas.",
      s1_chip: "Visibilidad",
      s1_chip_live: "En vivo",
      s1_title: "Cada vehículo, cada estado, cada kilómetro.",
      s1_desc: "Una sola pantalla con el estado real de tu flota. Filtra por sucursal, tipo de vehículo o estado. Encuentra cualquier vehículo, su historial y documentación en segundos.",
      s1_p1_t: "Estado en tiempo real.",
      s1_p1_d: "Ubicación, kilometraje y disponibilidad sin actualizar.",
      s1_p2_t: "Documentación al día.",
      s1_p2_d: "Pólizas, verificaciones, permisos y vencimientos en un lugar.",
      s1_p3_t: "Multi-flota.",
      s1_p3_d: "Maneja varias empresas o sucursales desde una cuenta.",
      s2_chip: "Coordinación",
      s2_title: "Del taller a tu tablero, sin un solo correo.",
      s2_desc: "Cuando un taller usa F4W para registrar un servicio, aparece automáticamente en tu plataforma. Cotizaciones, aprobaciones y avances en tiempo real — todo documentado.",
      s2_p1_t: "Cotizaciones digitales.",
      s2_p1_d: "Aprueba o rechaza sin llamar al taller.",
      s2_p2_t: "Historial auditable.",
      s2_p2_d: "Cada conversación, foto y diagnóstico queda registrado.",
      s2_p3_t: "Múltiples talleres.",
      s2_p3_d: "Conecta los talleres que ya usas, en el orden que prefieras.",
      s3_chip: "Inteligencia",
      s3_title: "Decisiones de flota basadas en datos, no en sensaciones.",
      s3_desc: "Costos por vehículo, tiempos de paro, frecuencia de servicios, comparativo de talleres. Los reportes que necesitas para presupuestar y negociar, no para llenar una carpeta.",
      s3_p1_t: "Costo por kilómetro.",
      s3_p1_d: "Sabrás cuánto cuesta operar cada vehículo.",
      s3_p2_t: "Tiempo de paro.",
      s3_p2_d: "Identifica qué vehículos y talleres te frenan.",
      s3_p3_t: "Exportable.",
      s3_p3_d: "CSV, PDF y conexión vía API."
    },
    ai: {
      label: "IA Operacional",
      title: "La IA trabaja antes de que llegue el problema.",
      subtitle: "Cada kilometraje, cada diagnóstico, cada condición de uso entrena el modelo. Detectamos señales de desgaste con días de anticipación — y te avisamos donde ya operas: WhatsApp.",
      stat1: "días de anticipación promedio",
      stat2: "reducción de paros no programados",
      stat3: "ahorro al consolidar servicios",
      n1_t: "Sensor",
      n1_d: "Kilometraje, ciclos de uso y diagnósticos del taller.",
      n2_t: "Predicción",
      n2_d: "Cambio de aceite en 5 días. Confianza 94%.",
      n3_t: "Alerta",
      n3_d: "ECO-004 agendado con Auto Expert.",
      n3_action: "WhatsApp · Notificado"
    },
    connected: {
      label: "Integración",
      title: "Del taller a tu tablero,",
      title2: "en tiempo real.",
      subtitle: "Cuando un taller registra un servicio en F4W, esa información aparece automáticamente en tu plataforma Fleetmool. Sin correos, sin PDFs, sin WhatsApp sin registro.",
      cta1: "Conocer F4W →",
      cta2: "Ver cómo funciona →",
      s1_t: "Taller registra el servicio",
      s1_d: "El mecánico captura diagnóstico, piezas y mano de obra en F4W.",
      s2_t: "Cotización automática",
      s2_d: "Llega a tu plataforma con foto, diagnóstico y desglose para aprobar con un clic.",
      s3_t: "Aprobación y coordinación",
      s3_d: "Apruebas el servicio desde Fleetmool y el taller comienza a trabajar.",
      s4_t: "Historial actualizado",
      s4_d: "Al finalizar, el historial del vehículo se actualiza automáticamente.",
      s2_chip: "Pendiente",
      s3_chip: "Aprobado",
      s4_chip: "Completado",
      ev1: "Cambio aceite + pastillas delanteras",
      ev2_total: "Total",
      ev2_meta: "3 piezas · 1 foto adjunta",
      ev3_pre: "Aprobado por",
      ev4_pre: "Historial",
      ev4_count: "+1 servicio"
    },
    metrics: {
      label: "Resultados",
      m1_l: "Flotas activas", m1_s: "en México y LATAM",
      m2_l: "Reducción en costos", m2_s: "promedio por flota",
      m3_l: "Disponibilidad SLA", m3_s: "garantizada por contrato",
      m4_l: "Vehículos gestionados", m4_s: "y creciendo"
    },
    cases: {
      label: "Historias",
      title: "Operaciones reales.",
      title2: "Resultados medibles.",
      c1_company: "Logística Noroeste",
      c1_result: "en tiempos de paro durante el primer trimestre",
      c1_quote: '"Redujimos los tiempos de mantenimiento a la mitad y ahora tenemos visibilidad completa de cada vehículo. El equipo lo adoptó en días."',
      c1_name: "Guillermo Torres", c1_role: "Director de Operaciones",
      c2_company: "Transportes del Golfo",
      c2_result: "trazabilidad: todo documentado y auditable",
      c2_quote: '"La integración con nuestros talleres cambió todo. Ya no hay comunicación por WhatsApp sin registro. Todo queda documentado."',
      c2_name: "Ana Ramírez", c2_role: "Gerente de Flota",
      c3_company: "Distribuidora Central MX",
      c3_result: "fallas mayores evitadas en un mes con IA predictiva",
      c3_quote: '"El mantenimiento predictivo evitó tres fallas mayores en un mes. El ROI fue evidente desde las primeras semanas."',
      c3_name: "Carlos Mendizábal", c3_role: "Gerente de Operaciones"
    },
    pricing: {
      label: "Precios",
      title: "Transparente. Sin sorpresas.",
      subtitle: "Sin contratos anuales. Sin costos de implementación. Empieza hoy.",
      p1_name: "Prueba", p1_price: "Gratis", p1_cycle: "14 días · hasta 10 vehículos",
      p1_desc: "Para conocer Fleetmool sin compromiso. Sin tarjeta de crédito.",
      p1_f1: "Hasta 10 vehículos", p1_f2: "Historial de mantenimiento", p1_f3: "Alertas básicas", p1_f4: "1 taller conectado",
      p1_cta: "Comenzar gratis",
      p2_name: "Standard", p2_badge: "Más popular", p2_cycle: "MXN / mes · hasta 20 vehículos",
      p2_desc: "Para flotas en operación con visibilidad completa y mantenimiento predictivo.",
      p2_f1: "Hasta 20 vehículos", p2_f2: "IA predictiva completa", p2_f3: "Talleres ilimitados",
      p2_f4: "Reportes operacionales", p2_f5: "Alertas WhatsApp + email",
      p2_cta: "Comenzar gratis",
      p3_name: "Enterprise", p3_price: "Personalizado", p3_cycle: "Para flotas de 20+ vehículos",
      p3_desc: "Solución a medida con soporte dedicado, SLA garantizado y onboarding asistido.",
      p3_f1: "Vehículos ilimitados", p3_f2: "Soporte dedicado 24/7", p3_f3: "SLA de disponibilidad",
      p3_f4: "Integraciones API", p3_f5: "Onboarding asistido",
      p3_cta: "Hablar con ventas"
    },
    cta: {
      label: "Empieza hoy",
      title: "Tu operación de flota, reinventada.",
      subtitle: "Únete a más de 500 flotas que ya operan con inteligencia. Sin setup complejo. Sin contratos largos.",
      b1: "Sin tarjeta de crédito requerida",
      b2: "Onboarding en 30 minutos",
      b3: "Soporte dedicado en español",
      cta1: "Comenzar gratis por WhatsApp",
      plan_label: "Plan recomendado",
      plan_name: "Standard",
      plan_desc: "Para flotas de hasta 20 vehículos con visibilidad completa y IA predictiva.",
      plan_cycle: "MXN / mes",
      pf1: "Hasta 20 vehículos", pf2: "IA predictiva completa", pf3: "Talleres ilimitados", pf4: "Alertas WhatsApp + email",
      card_cta: "Comenzar prueba gratuita",
      card_note: "Sin tarjeta de crédito · 14 días gratis"
    },
    footer: {
      desc: "Plataforma de inteligencia operacional para gestión de flotas y talleres en México y LATAM.",
      col1: "Plataforma",
      l1_1: "Fleetmool", l1_2: "F4W (Talleres)", l1_3: "Integraciones", l1_4: "API",
      col2: "Empresa",
      l2_1: "Acerca de", l2_2: "Blog", l2_3: "Trabaja con nosotros", l2_4: "Contacto",
      col3: "Soporte",
      l3_1: "Documentación", l3_2: "Status", l3_3: "Comunidad", l3_4: "Seguridad",
      copy: "© 2026 Fleetmool. Todos los derechos reservados.",
      privacy: "Privacidad", terms: "Términos"
    },
    f4w_nav: { cta: "Registrar mi taller" },
    f4w_hero: {
      new: "F4W",
      badge: "Fleetmool for Workshops — 3 meses gratis",
      h1a: "Tu taller,",
      h1b: "digitalizado en minutos.",
      subtitle: "Gestiona servicios, cotiza en 90 segundos y conecta tu taller directamente con flotas. Sin instalación, sin capacitación compleja.",
      cta1: "Registrar mi taller gratis",
      cta2: "Ver demo en vivo",
      meta1: "3 meses gratis",
      meta2: "Sin tarjeta de crédito",
      meta3: "Configuración en 30 minutos"
    },
    f4w_trust: { label: "Más de 2,000 talleres usan F4W en México" },
    f4w_features: {
      label: "Para talleres",
      title: "Tres herramientas que cambian",
      title2: "cómo trabaja tu taller.",
      subtitle: "Ingreso de servicios, cotizaciones instantáneas y conexión con flotas. Listo en minutos, no en semanas.",
      s1_chip: "Cotizaciones",
      s1_title: "Cotiza en 90 segundos. Envía con un toque.",
      s1_desc: "Captura diagnóstico, piezas y mano de obra. F4W genera la cotización con tu formato, lista para enviar por WhatsApp o aprobar dentro de Fleetmool.",
      s1_p1_t: "Plantillas inteligentes.",  s1_p1_d: "Servicios frecuentes y piezas precargadas.",
      s1_p2_t: "PDF profesional.",          s1_p2_d: "Con tu logo, dirección y datos fiscales.",
      s1_p3_t: "Aprobación digital.",       s1_p3_d: "El cliente aprueba en línea — todo queda registrado.",
      s2_chip: "Ecosistema",
      s2_title: "Conecta con flotas — sin cambiar cómo trabajas.",
      s2_desc: "Tus clientes de flota ven en tiempo real cada servicio que pasa por tu taller en su plataforma Fleetmool. Tú sigues operando F4W como siempre.",
      s2_p1_t: "Cero captura doble.",       s2_p1_d: "Lo que registras en F4W aparece en Fleetmool.",
      s2_p2_t: "Cliente más confiado.",     s2_p2_d: "Trazabilidad completa, fotos y diagnósticos auditables.",
      s2_p3_t: "Más flotas te buscan.",     s2_p3_d: "Aparece en la red de talleres conectados de Fleetmool.",
      s3_chip: "WhatsApp",
      s3_title: "Donde ya hablas con tus clientes.",
      s3_desc: "F4W trabaja sobre WhatsApp. Envía cotizaciones, recibe aprobaciones y avisa cuando el vehículo está listo — desde donde tu cliente ya te escribe.",
      s3_p1_t: "Cotizaciones por chat.",    s3_p1_d: "Un mensaje con PDF, monto y botón de aprobación.",
      s3_p2_t: "Notificaciones automáticas.", s3_p2_d: "'Tu vehículo está listo' sin tocar el teléfono.",
      s3_p3_t: "Todo queda registrado.",    s3_p3_d: "Conversaciones, fotos y aprobaciones — auditable."
    },
    f4w_compare: {
      label: "Comparación",
      title: "La manera tradicional", title2: "vs. con F4W.",
      subtitle: "Así opera la mayoría de los talleres en México hoy. F4W cambia cada uno de esos pasos.",
      them: "Manera tradicional",  us: "Con F4W",
      r1_l: "Cotizaciones",                r1_t: "A mano o en Excel",       r1_u: "En 90 segundos",
      r2_l: "Historial de vehículos",       r2_t: "Cuaderno o de memoria",    r2_u: "Centralizado al instante",
      r3_l: "Comunicación con flotas",       r3_t: "WhatsApp sin registro",    r3_u: "Sincronizado en tiempo real",
      r4_l: "Aprobación de servicios",       r4_t: "Verbal, sin evidencia",    r4_u: "Digital con trazabilidad",
      r5_l: "Avisar al cliente",            r5_t: "Llamada manual",          r5_u: "WhatsApp automático",
      r6_l: "Tiempo de inicio",             r6_t: "Semanas de capacitación", r6_u: "Tu equipo listo en 30 min",
      r7_l: "Costo mensual",                r7_t: "Software caro o nada",    r7_u: "$69/mes · 3 meses gratis"
    },
    f4w_testimonial: {
      metric_lbl: "para tener todo el taller operando en F4W",
      workshop: "Auto Expert Mecánica Integral · CDMX",
      quote: '"Empezamos a usar F4W en dos horas. Mis clientes de flota ahora ven todo en tiempo real. Ya no llaman para pedir reportes por separado. El taller se ve más profesional y perdemos menos tiempo."',
      name: "Roberto Méndez", role: "Propietario · Auto Expert"
    },
    f4w_pricing: {
      label: "Precios",
      title: "Precios diseñados para talleres.",
      subtitle: "3 meses gratis. Luego $69/mes — sin importar el tamaño de tu taller.",
      p1_name: "Prueba", p1_price: "Gratis", p1_cycle: "3 meses · todas las funciones Pro",
      p1_desc: "Empieza sin riesgo. Todo Pro incluido durante 3 meses, sin tarjeta.",
      p1_f1: "Todas las funciones Pro", p1_f2: "Órdenes ilimitadas", p1_f3: "Cotizaciones + WhatsApp", p1_f4: "Conexiones de flota",
      p1_cta: "Registrar mi taller",
      p2_name: "Pro", p2_badge: "Más popular", p2_cycle: "MXN / mes · sin importar el tamaño",
      p2_desc: "Para talleres en operación. Todo incluido, para cualquier volumen — un solo precio.",
      p2_f1: "Órdenes ilimitadas", p2_f2: "Cotizaciones + WhatsApp", p2_f3: "Conexiones de flota ilimitadas",
      p2_f4: "Historial completo de vehículos", p2_f5: "Reportes y soporte prioritario",
      p2_cta: "Comenzar 3 meses gratis",
      p3_name: "Multi-sucursal", p3_price: "Personalizado", p3_cycle: "Para cadenas de talleres",
      p3_desc: "Para grupos con 2+ sucursales que necesitan gestión centralizada y reportes consolidados.",
      p3_f1: "Sucursales ilimitadas", p3_f2: "Dashboard centralizado", p3_f3: "Reportes consolidados",
      p3_f4: "Gestión de personal", p3_f5: "Soporte dedicado",
      p3_cta: "Hablar con ventas"
    },
    f4w_eco: {
      label: "Ecosistema",
      title: "¿Tus clientes manejan flotas?",
      subtitle: "Invítalos a Fleetmool. La conexión es automática — y tu taller se vuelve indispensable para sus operaciones.",
      f1_t: "Servicios sincronizados.", f1_d: "Automáticamente, en tiempo real.",
      f2_t: "Cliente más confiado.",     f2_d: "Trazabilidad completa de cada servicio.",
      f3_t: "Aparece en la red.",        f3_d: "Las flotas conectadas pueden encontrarte.",
      f4_t: "Sin configuración extra.",  f4_d: "F4W detecta y conecta automáticamente.",
      cta: "Conocer Fleetmool para flotas →"
    },
    f4w_cta: {
      label: "Empieza hoy",
      title: "Digitaliza tu taller hoy.",
      subtitle: "Únete a más de 2,000 talleres que ya operan con F4W. Empieza gratis en minutos.",
      b1: "3 meses gratis · sin tarjeta de crédito",
      b2: "Configuración en 30 minutos",
      b3: "Soporte dedicado en español",
      cta1: "Registrar mi taller gratis",
      plan_label: "Plan recomendado",
      plan_name: "Pro · 3 meses gratis",
      plan_desc: "Para talleres en operación. Todo incluido, un solo precio — sin importar tu volumen.",
      plan_cycle: "MXN / mes · después de 3 meses gratis",
      pf1: "Órdenes ilimitadas", pf2: "Cotizaciones + WhatsApp", pf3: "Conexiones de flota ilimitadas", pf4: "Soporte prioritario",
      card_cta: "Comenzar 3 meses gratis",
      card_note: "Sin tarjeta de crédito · cancela cuando quieras"
    }
  },
  en: {
    meta: { title_index: "Fleetmool — Operational intelligence for your fleet" },
    nav: { platform: "Platform", ecosystem: "Ecosystem", workshops: "For workshops", pricing: "Pricing", signin: "Sign in", cta: "Get started" },
    hero: {
      new: "New",
      badge: "Predictive AI — Catch failures 7 days early",
      h1a: "Operational intelligence",
      h1b: "for your fleet.",
      subtitle: "Connect your fleet operations with the workshops that keep them running. Predictive maintenance, real-time diagnostics, and complete visibility — without complexity.",
      cta1: "Get started on WhatsApp",
      cta2: "Watch live demo",
      meta1: "No credit card",
      meta2: "30-minute onboarding",
      meta3: "Support in Spanish"
    },
    dash: { ai_status_t: "3 predictive alerts", ai_status_s: "Last check 2 min ago" },
    trust: { label: "Fleet operations across Mexico trust Fleetmool" },
    ecosystem: {
      label: "Ecosystem",
      title: "One operation, two sides.",
      title2: "No friction between them.",
      subtitle: "Fleetmool for fleet managers. F4W for the workshops that maintain them. Same data, in real time — no emails, no PDFs.",
      tab_fleet: "Fleetmool",
      tab_fleet_role: "For fleets",
      tab_workshop_role: "For workshops",
      fleet_chip: "For fleet managers",
      fleet_title: "Complete fleet visibility, on one screen.",
      fleet_desc: "Real-time status, full maintenance history, and direct connection with the workshops that serve you. No spreadsheets, no endless WhatsApp groups.",
      fleet_f1_t: "Vehicle tracking.",
      fleet_f1_d: "Status, location, and mileage at a glance.",
      fleet_f2_t: "Full history.",
      fleet_f2_d: "Every service, diagnosis, and repair documented.",
      fleet_f3_t: "Quotes and approvals.",
      fleet_f3_d: "Approve services with one click — without losing control.",
      fleet_f4_t: "AI predictive alerts.",
      fleet_f4_d: "Catch failures before they stop your operation.",
      fleet_cta: "Explore Fleetmool →",
      workshop_chip: "For workshops",
      workshop_title: "Digitalize your workshop, connect with fleets already looking for you.",
      workshop_desc: "Log services, generate quotes, and feed operational data straight to your fleet clients. No installation, ready in minutes.",
      workshop_f1_t: "Service intake.",
      workshop_f1_d: "Diagnosis, parts, and labor in seconds.",
      workshop_f2_t: "Instant quotes.",
      workshop_f2_d: "Send via WhatsApp with one tap.",
      workshop_f3_t: "Automatic fleet connection.",
      workshop_f3_d: "Your clients see progress in real time.",
      workshop_f4_t: "Onboarding in minutes.",
      workshop_f4_d: "Any device, no installation.",
      workshop_cta: "Explore F4W →"
    },
    features: {
      label: "For fleets",
      title: "Three tools that change",
      title2: "how you run your fleet.",
      subtitle: "Visibility, workshop coordination, and operational intelligence. For managers who need answers — not more systems.",
      s1_chip: "Visibility",
      s1_chip_live: "Live",
      s1_title: "Every vehicle, every status, every kilometer.",
      s1_desc: "One screen with the real state of your fleet. Filter by branch, vehicle type or status. Find any vehicle, its history and documentation in seconds.",
      s1_p1_t: "Real-time status.",
      s1_p1_d: "Location, mileage, and availability — no refresh.",
      s1_p2_t: "Documentation up to date.",
      s1_p2_d: "Policies, inspections, permits and expirations in one place.",
      s1_p3_t: "Multi-fleet.",
      s1_p3_d: "Manage multiple companies or branches from one account.",
      s2_chip: "Coordination",
      s2_title: "From the workshop to your dashboard — without a single email.",
      s2_desc: "When a workshop uses F4W to log a service, it appears automatically in your platform. Quotes, approvals, and progress in real time — all documented.",
      s2_p1_t: "Digital quotes.",
      s2_p1_d: "Approve or reject without calling the workshop.",
      s2_p2_t: "Auditable history.",
      s2_p2_d: "Every conversation, photo and diagnosis logged.",
      s2_p3_t: "Multiple workshops.",
      s2_p3_d: "Connect the workshops you already use, in your preferred order.",
      s3_chip: "Intelligence",
      s3_title: "Fleet decisions based on data, not gut feel.",
      s3_desc: "Cost per vehicle, downtime, service frequency, workshop comparisons. The reports you need to budget and negotiate — not to fill a folder.",
      s3_p1_t: "Cost per kilometer.",
      s3_p1_d: "Know exactly what each vehicle costs to operate.",
      s3_p2_t: "Downtime tracking.",
      s3_p2_d: "Identify which vehicles and workshops are slowing you down.",
      s3_p3_t: "Exportable.",
      s3_p3_d: "CSV, PDF, and API connection."
    },
    ai: {
      label: "Operational AI",
      title: "AI that works before the problem arrives.",
      subtitle: "Every mileage reading, every diagnosis, every usage condition trains the model. We detect wear signals days in advance — and notify you where you already operate: WhatsApp.",
      stat1: "days of average lead time",
      stat2: "fewer unplanned downtimes",
      stat3: "savings by consolidating services",
      n1_t: "Sensor",
      n1_d: "Mileage, usage cycles, and workshop diagnostics.",
      n2_t: "Prediction",
      n2_d: "Oil change in 5 days. 94% confidence.",
      n3_t: "Alert",
      n3_d: "ECO-004 scheduled with Auto Expert.",
      n3_action: "WhatsApp · Notified"
    },
    connected: {
      label: "Integration",
      title: "From the workshop to your dashboard,",
      title2: "in real time.",
      subtitle: "When a workshop logs a service in F4W, that data appears automatically in your Fleetmool platform. No emails, no PDFs, no untracked WhatsApp messages.",
      cta1: "Learn about F4W →",
      cta2: "See how it works →",
      s1_t: "Workshop logs the service",
      s1_d: "The mechanic captures the diagnosis, parts, and labor in F4W.",
      s2_t: "Automatic quote",
      s2_d: "Arrives in your platform with photo, diagnosis and breakdown — ready to approve.",
      s3_t: "Approval and coordination",
      s3_d: "You approve from Fleetmool and the workshop starts work.",
      s4_t: "History updated",
      s4_d: "When done, the vehicle history is updated automatically.",
      s2_chip: "Pending",
      s3_chip: "Approved",
      s4_chip: "Completed",
      ev1: "Oil change + front brake pads",
      ev2_total: "Total",
      ev2_meta: "3 parts · 1 photo attached",
      ev3_pre: "Approved by",
      ev4_pre: "History",
      ev4_count: "+1 service"
    },
    metrics: {
      label: "Results",
      m1_l: "Active fleets", m1_s: "in Mexico & LATAM",
      m2_l: "Cost reduction", m2_s: "average per fleet",
      m3_l: "Uptime SLA", m3_s: "guaranteed by contract",
      m4_l: "Vehicles managed", m4_s: "and growing"
    },
    cases: {
      label: "Stories",
      title: "Real operations.",
      title2: "Measurable results.",
      c1_company: "Logística Noroeste",
      c1_result: "downtime in the first quarter",
      c1_quote: '"We cut maintenance downtime in half and now have complete visibility of every vehicle. The team adopted it in days."',
      c1_name: "Guillermo Torres", c1_role: "Operations Director",
      c2_company: "Transportes del Golfo",
      c2_result: "traceability — everything logged and auditable",
      c2_quote: '"The workshop integration changed everything. No more untracked WhatsApp messages. It is all documented."',
      c2_name: "Ana Ramírez", c2_role: "Fleet Manager",
      c3_company: "Distribuidora Central MX",
      c3_result: "major failures prevented in one month with predictive AI",
      c3_quote: '"Predictive maintenance prevented three major failures in one month. The ROI was clear from the first few weeks."',
      c3_name: "Carlos Mendizábal", c3_role: "Operations Manager"
    },
    pricing: {
      label: "Pricing",
      title: "Transparent. No surprises.",
      subtitle: "No annual contracts. No implementation fees. Start today.",
      p1_name: "Trial", p1_price: "Free", p1_cycle: "14 days · up to 10 vehicles",
      p1_desc: "Try Fleetmool with no commitment. No credit card required.",
      p1_f1: "Up to 10 vehicles", p1_f2: "Maintenance history", p1_f3: "Basic alerts", p1_f4: "1 workshop connection",
      p1_cta: "Get started free",
      p2_name: "Standard", p2_badge: "Most popular", p2_cycle: "MXN / month · up to 20 vehicles",
      p2_desc: "For operating fleets that need complete visibility and predictive maintenance.",
      p2_f1: "Up to 20 vehicles", p2_f2: "Full predictive AI", p2_f3: "Unlimited workshops",
      p2_f4: "Operational reports", p2_f5: "WhatsApp + email alerts",
      p2_cta: "Get started free",
      p3_name: "Enterprise", p3_price: "Custom", p3_cycle: "For fleets of 20+ vehicles",
      p3_desc: "Tailored solution with dedicated support, guaranteed SLA, and assisted onboarding.",
      p3_f1: "Unlimited vehicles", p3_f2: "Dedicated 24/7 support", p3_f3: "Uptime SLA",
      p3_f4: "API integrations", p3_f5: "Assisted onboarding",
      p3_cta: "Talk to sales"
    },
    cta: {
      label: "Start today",
      title: "Your fleet operations, reinvented.",
      subtitle: "Join 500+ fleets already operating with intelligence. No complex setup. No long contracts.",
      b1: "No credit card required",
      b2: "30-minute onboarding",
      b3: "Dedicated support in Spanish",
      cta1: "Get started on WhatsApp",
      plan_label: "Recommended plan",
      plan_name: "Standard",
      plan_desc: "For fleets up to 20 vehicles with complete visibility and predictive AI.",
      plan_cycle: "MXN / month",
      pf1: "Up to 20 vehicles", pf2: "Full predictive AI", pf3: "Unlimited workshops", pf4: "WhatsApp + email alerts",
      card_cta: "Start free trial",
      card_note: "No credit card · 14-day free trial"
    },
    footer: {
      desc: "Operational intelligence platform for fleet management and workshops in Mexico and LATAM.",
      col1: "Platform",
      l1_1: "Fleetmool", l1_2: "F4W (Workshops)", l1_3: "Integrations", l1_4: "API",
      col2: "Company",
      l2_1: "About", l2_2: "Blog", l2_3: "Careers", l2_4: "Contact",
      col3: "Support",
      l3_1: "Documentation", l3_2: "Status", l3_3: "Community", l3_4: "Security",
      copy: "© 2026 Fleetmool. All rights reserved.",
      privacy: "Privacy", terms: "Terms"
    },
    f4w_nav: { cta: "Register my workshop" },
    f4w_hero: {
      new: "F4W",
      badge: "Fleetmool for Workshops — 3 months free",
      h1a: "Your workshop,",
      h1b: "digitalized in minutes.",
      subtitle: "Manage services, quote in 90 seconds, and connect your workshop directly with fleets. No installation, no complex training.",
      cta1: "Register my workshop free",
      cta2: "Watch live demo",
      meta1: "3 months free",
      meta2: "No credit card",
      meta3: "30-minute setup"
    },
    f4w_trust: { label: "2,000+ workshops use F4W in Mexico" },
    f4w_features: {
      label: "For workshops",
      title: "Three tools that change",
      title2: "how your workshop works.",
      subtitle: "Service intake, instant quotes, and fleet connection. Ready in minutes — not weeks.",
      s1_chip: "Quotes",
      s1_title: "Quote in 90 seconds. Send with one tap.",
      s1_desc: "Capture diagnosis, parts, and labor. F4W generates a polished quote, ready to send via WhatsApp or approve inside Fleetmool.",
      s1_p1_t: "Smart templates.",         s1_p1_d: "Frequent services and parts preloaded.",
      s1_p2_t: "Professional PDF.",        s1_p2_d: "With your logo, address, and tax info.",
      s1_p3_t: "Digital approval.",        s1_p3_d: "The client approves online — everything logged.",
      s2_chip: "Ecosystem",
      s2_title: "Connect with fleets — without changing how you work.",
      s2_desc: "Your fleet clients see every service that runs through your workshop, in real time on their Fleetmool platform. You keep working in F4W. Sync is automatic.",
      s2_p1_t: "Zero double-entry.",        s2_p1_d: "What you log in F4W shows up in Fleetmool.",
      s2_p2_t: "More confident clients.",   s2_p2_d: "Full traceability, photos, and auditable diagnostics.",
      s2_p3_t: "More fleets find you.",     s2_p3_d: "Appear in Fleetmool's connected workshop network.",
      s3_chip: "WhatsApp",
      s3_title: "Where you already talk to your clients.",
      s3_desc: "F4W works through WhatsApp. Send quotes, get approvals, and notify pickup — from where your client already messages you.",
      s3_p1_t: "Quotes via chat.",          s3_p1_d: "A message with PDF, total, and approval button.",
      s3_p2_t: "Automatic notifications.",  s3_p2_d: "'Your vehicle is ready' without lifting the phone.",
      s3_p3_t: "Everything logged.",        s3_p3_d: "Conversations, photos, and approvals — auditable."
    },
    f4w_compare: {
      label: "Comparison",
      title: "The traditional way", title2: "vs. with F4W.",
      subtitle: "This is how most workshops in Mexico operate today. F4W changes every one of these steps.",
      them: "Traditional way", us: "With F4W",
      r1_l: "Quotes",                    r1_t: "By hand or in Excel",        r1_u: "In 90 seconds",
      r2_l: "Vehicle history",           r2_t: "Notebook or memory",         r2_u: "Centralized, instant",
      r3_l: "Fleet communication",       r3_t: "Untracked WhatsApp",         r3_u: "Real-time sync",
      r4_l: "Service approval",          r4_t: "Verbal, no evidence",        r4_u: "Digital, fully traceable",
      r5_l: "Notify the client",         r5_t: "Manual phone call",          r5_u: "Automatic WhatsApp",
      r6_l: "Time to start",             r6_t: "Weeks of training",          r6_u: "Your team ready in 30 min",
      r7_l: "Monthly cost",              r7_t: "Expensive software or none", r7_u: "$69/month · 3 months free"
    },
    f4w_testimonial: {
      metric_lbl: "to have the entire workshop running on F4W",
      workshop: "Auto Expert Mecánica Integral · Mexico City",
      quote: '"We started using F4W in two hours. My fleet clients now see everything in real time. They no longer call to ask for separate reports. The workshop looks more professional and we lose less time."',
      name: "Roberto Méndez", role: "Owner · Auto Expert"
    },
    f4w_pricing: {
      label: "Pricing",
      title: "Pricing built for workshops.",
      subtitle: "3 months free. Then $69/month — no matter the size of your workshop.",
      p1_name: "Trial", p1_price: "Free", p1_cycle: "3 months · all Pro features",
      p1_desc: "Start risk-free. All Pro features included for 3 months — no credit card.",
      p1_f1: "All Pro features", p1_f2: "Unlimited orders", p1_f3: "Quotes + WhatsApp", p1_f4: "Fleet connections",
      p1_cta: "Register my workshop",
      p2_name: "Pro", p2_badge: "Most popular", p2_cycle: "MXN / month · any size",
      p2_desc: "For operating workshops. Everything included, any volume — one price.",
      p2_f1: "Unlimited orders", p2_f2: "Quotes + WhatsApp", p2_f3: "Unlimited fleet connections",
      p2_f4: "Full vehicle history", p2_f5: "Reports and priority support",
      p2_cta: "Start 3 months free",
      p3_name: "Multi-location", p3_price: "Custom", p3_cycle: "For workshop chains",
      p3_desc: "For groups with 2+ locations that need centralized management and consolidated reports.",
      p3_f1: "Unlimited locations", p3_f2: "Centralized dashboard", p3_f3: "Consolidated reports",
      p3_f4: "Staff management", p3_f5: "Dedicated support",
      p3_cta: "Talk to sales"
    },
    f4w_eco: {
      label: "Ecosystem",
      title: "Do your clients run fleets?",
      subtitle: "Invite them to Fleetmool. The connection is automatic — and your workshop becomes essential to their operations.",
      f1_t: "Synced services.",        f1_d: "Automatically, in real time.",
      f2_t: "More confident clients.", f2_d: "Full traceability of every service.",
      f3_t: "Appear in the network.",  f3_d: "Connected fleets can find you.",
      f4_t: "No extra setup.",         f4_d: "F4W detects and connects automatically.",
      cta: "Learn about Fleetmool for fleets →"
    },
    f4w_cta: {
      label: "Start today",
      title: "Digitalize your workshop today.",
      subtitle: "Join 2,000+ workshops already operating with F4W. Get started free in minutes.",
      b1: "3 months free · no credit card",
      b2: "30-minute setup",
      b3: "Dedicated support in Spanish",
      cta1: "Register my workshop free",
      plan_label: "Recommended plan",
      plan_name: "Pro · 3 months free",
      plan_desc: "For operating workshops. Everything included, one price — no matter your volume.",
      plan_cycle: "MXN / month · after 3 months free",
      pf1: "Unlimited orders", pf2: "Quotes + WhatsApp", pf3: "Unlimited fleet connections", pf4: "Priority support",
      card_cta: "Start 3 months free",
      card_note: "No credit card · cancel anytime"
    }
  }
};

const getNested = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

/* ── LANGUAGE — geo-based ─────────────────────────────────── */
let currentLang = localStorage.getItem('fm-lang') || null;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('fm-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = getNested(T[lang], key);
    if (val !== undefined) el.textContent = val;
  });

  const page = document.body.getAttribute('data-page');
  if (page === 'index' && T[lang].meta?.title_index) document.title = T[lang].meta.title_index;
  if (page === 'f4w'   && T[lang].f4w_hero) document.title = (lang === 'es' ? 'F4W — Tu taller, digitalizado en minutos' : 'F4W — Your workshop, digitalized in minutes');
}

// Detect: stored pref > browser locale > timezone heuristic > default ES
function detectLanguage() {
  // 1. User pref stored
  if (currentLang === 'es' || currentLang === 'en') return currentLang;

  // 2. Timezone heuristic (Mexico → ES, US/CA → EN)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/Mexico|Tijuana|Hermosillo|Mazatlan|Chihuahua|Monterrey|Merida|Cancun|Bahia_Banderas/i.test(tz)) return 'es';
    if (/America\/(New_York|Los_Angeles|Chicago|Denver|Phoenix|Anchorage|Toronto|Vancouver)/i.test(tz)) return 'en';
  } catch (e) { /* ignore */ }

  // 3. Browser language
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  if (/^es/i.test(nav)) return 'es';
  if (/^en/i.test(nav)) return 'en';

  // 4. Default: Spanish (LATAM-first product)
  return 'es';
}

/* ── NAV SCROLL STATE ─────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 16);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── REVEAL ───────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ── COUNTERS ─────────────────────────────────────────────── */
function animateCounter(el, target, duration = 1600, suffix = '') {
  const start = performance.now();
  const to = parseFloat(target.toString().replace(/[^0-9.]/g, '')) || 0;
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = Math.round(to * eased);
    el.textContent = v.toLocaleString('en-US') + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
function initCounters() {
  const els = document.querySelectorAll('[data-counter]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = '1';
        animateCounter(e.target, e.target.getAttribute('data-counter'), 1600, e.target.getAttribute('data-counter-suffix') || '');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  els.forEach(el => obs.observe(el));
}

/* ── ECOSYSTEM TABS ───────────────────────────────────────── */
function initEcoTabs() {
  const switcher = document.getElementById('eco-switcher');
  if (!switcher) return;
  const slider = document.getElementById('eco-slider');
  const tabs = switcher.querySelectorAll('.eco-tab');
  const panels = document.querySelectorAll('.eco-panel');

  function position() {
    const active = switcher.querySelector('.eco-tab.active');
    if (!active || !slider) return;
    slider.style.width = active.offsetWidth + 'px';
    slider.style.transform = `translateX(${active.offsetLeft - 4}px)`;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const side = tab.getAttribute('data-side');
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.getAttribute('data-side') === side));
      position();
    });
  });

  // Position slider on load + resize + after fonts load
  position();
  setTimeout(position, 50);
  setTimeout(position, 300);
  window.addEventListener('resize', position);
  if (document.fonts?.ready) document.fonts.ready.then(position);
}

/* ── AI ANIMATION ─────────────────────────────────────────── */
function initAiAnimation() {
  const viz = document.getElementById('ai-viz');
  if (!viz) return;
  const nodes = viz.querySelectorAll('.ai-node');
  const bars = viz.querySelectorAll('.ai-sensor-bar');
  let stepIdx = 0;
  let started = false;

  function setBars() {
    bars.forEach(b => {
      const h = 30 + Math.random() * 65;
      b.style.height = h + '%';
    });
  }

  function tick() {
    nodes.forEach((n, i) => n.classList.toggle('active', i === stepIdx));
    if (stepIdx === 0) setBars();
    stepIdx = (stepIdx + 1) % nodes.length;
  }

  // Start animation when section enters viewport
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        tick();
        setInterval(tick, 1900);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  obs.observe(viz);
}

/* ── ANCHOR SCROLL ────────────────────────────────────────── */
/* AUTOPLAY FOR CONNECTED WORKFLOW */
function initFlowAutoplay() {
  const list = document.getElementById('flow-list');
  if (!list) return;
  const steps = list.querySelectorAll('.flow-step');
  if (!steps.length) return;

  let idx = 0;
  steps.forEach((s, i) => { if (s.classList.contains('is-active')) idx = i; });
  let interval = null;
  let stopped = false;
  const DURATION = 4000;

  function activate(i) {
    idx = i;
    steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
  }

  function tick() {
    if (stopped) return;
    activate((idx + 1) % steps.length);
  }

  function startAutoplay() {
    if (interval || stopped) return;
    interval = setInterval(tick, DURATION);
  }

  function stopAutoplay() {
    stopped = true;
    list.classList.add('user-stopped');
    if (interval) { clearInterval(interval); interval = null; }
  }

  steps.forEach((s, i) => {
    const select = () => { stopAutoplay(); activate(i); };
    s.addEventListener('click', select);
    s.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && interval) { clearInterval(interval); interval = null; }
    else if (!document.hidden && !stopped) startAutoplay();
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !stopped) startAutoplay();
      else if (interval) { clearInterval(interval); interval = null; }
    });
  }, { threshold: 0.35 });
  obs.observe(list);
}

function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

/* ── MOBILE NAV ──────────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  let open = false;
  toggle.addEventListener('click', () => {
    open = !open;
    links.style.cssText = open
      ? `display:flex;flex-direction:column;align-items:flex-start;position:absolute;top:64px;left:0;right:0;background:rgba(13,11,10,0.96);backdrop-filter:blur(14px);padding:16px 28px;border-bottom:1px solid var(--line-2);z-index:99;gap:8px;`
      : '';
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(detectLanguage());

  initNav();
  initReveal();
  initCounters();
  initEcoTabs();
  initAiAnimation();
  initFlowAutoplay();
  initAnchors();
  initMobileNav();
});
