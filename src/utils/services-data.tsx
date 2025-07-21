export const services = [
  // === TARJETAS GENERALES ===
  {
    title: "Digitalización de procesos",
    description:
      "Transformamos tareas manuales en flujos automáticos, eliminando papeleo y errores humanos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6" />
      </svg>
    ),
  },
  {
    title: "Gestión eficiente de tareas",
    description:
      "Automatizamos tareas internas que consumen tiempo, mejorando la productividad de tu equipo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
      </svg>
    ),
  },
  {
    title: "Conexión entre sistemas",
    description:
      "Integramos las herramientas que ya usas (correo, planillas, carpetas) para que trabajen juntas automáticamente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5" />
      </svg>
    ),
  },

  // === APLICACIONES ESPECÍFICAS ===
  {
    title: "AutoDocumentos",
    description:
      "Genera automáticamente contratos, certificados, informes o cualquier documento repetitivo con plantillas inteligentes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16.5V20h3.5l9.793-9.793a1 1 0 000-1.414l-2.086-2.086a1 1 0 00-1.414 0L4 16.5z" />
      </svg>
    ),
  },
  {
    title: "AutoCorreo",
    description:
      "Envío automático de correos a clientes, equipos o proveedores cuando se cumplan condiciones específicas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5l-9 6-9-6" />
      </svg>
    ),
  },
  {
    title: "AutoArchivo",
    description:
      "Organiza y mueve archivos automáticamente a carpetas por cliente, mes, tipo o responsable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 015.25 4.5H8.5L10 6h8.25A2.25 2.25 0 0120.5 8.25v9A2.25 2.25 0 0118.25 19.5H5.25A2.25 2.25 0 013 17.25v-10.5z" />
      </svg>
    ),
  },
  {
    title: "PlanillaBot",
    description:
      "Actualiza, unifica y limpia planillas de Excel o Google Sheets de forma automática y sin errores.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5h15v15h-15v-15z" />
      </svg>
    ),
  },
  {
    title: "AutoReporte",
    description:
      "Crea reportes periódicos en PDF, Excel o Power BI y los envía automáticamente a quien corresponda.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25V6.75m6 10.5V9.75m-3 7.5v-3" />
      </svg>
    ),
  },
  {
    title: "BotAtiende",
    description:
      "Automatiza respuestas por WhatsApp o correo. Atiende, deriva o entrega información sin intervención humana.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75v-3.375m0-9V3.75m-3.375 3.375l6.75 6.75M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
      </svg>
    ),
  },
  {
    title: "Escaneo Inteligente",
    description:
      "Detecta y extrae información de documentos escaneados (como RUT, montos, fechas) automáticamente con OCR.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h6v6H3v-6zm12 0h6v6h-6v-6zM3 13.5h6v6H3v-6zm12 0h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    title: "FormFlow",
    description:
      "Automatiza el procesamiento de formularios: clasifica, responde o activa flujos sin intervención.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: "FlujoInteligente",
    description:
      "Automatiza cadenas de pasos entre áreas: si algo se aprueba o cambia, se genera una acción siguiente automáticamente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5m-10.5 0l3.75-3.75m-3.75 3.75l3.75 3.75" />
      </svg>
    ),
  },
  {
    title: "Control de Asistencia",
    description:
      "Extrae, analiza y consolida los datos de asistencia desde múltiples fuentes para generar reportes automáticos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6" />
      </svg>
    ),
  },
  {
    title: "Emisión de Boletas",
    description:
      "Automatiza la emisión de boletas o facturas en SII desde planillas, formularios o sistemas de ventas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m2 0a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h10z" />
      </svg>
    ),
  },
  {
    title: "Conciliación Bancaria",
    description:
      "Cruza automáticamente tus registros contables con comprobantes de pago o cartolas para detectar errores o diferencias.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
];
