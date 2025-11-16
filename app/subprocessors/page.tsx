export const metadata = {
  title: "Subprocesadores | GluePets",
  description: "Listado transparente de subprocesadores y proveedores de GluePets (MVP).",
};

export default function SubprocessorsPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Subprocesadores</h1>
        <p className="text-slate-300 mb-6">Última actualización: 26 de octubre de 2025</p>

        <div className="prose prose-invert max-w-none">
          <p>
            Esta página lista a los proveedores que pueden tratar datos personales en nombre de GluePets como
            encargados de tratamiento. El listado puede cambiar a medida que el MVP evoluciona. Antes de usar nuevos
            subprocesadores, actualizaremos esta página.
          </p>

          <h2>Lista actual</h2>
          <ul>
            <li>
              <strong>Proveedor de hosting y base de datos</strong> — Infraestructura en la nube para alojar servicios y
              datos. Ubicación/región puede variar según disponibilidad.
            </li>
            <li>
              <strong>Distribución de app</strong> — Tienda de aplicaciones para publicación y distribución de la app
              móvil (p. ej., tienda del fabricante / Google Play). Puede recabar datos técnicos propios.
            </li>
            <li>
              <strong>Analítica</strong> (si se habilita) — Medición de uso agregada para mejorar el producto. Se aplicarán
              controles de consentimiento cuando la ley lo requiera.
            </li>
          </ul>

          <h2>Notificaciones de cambios</h2>
          <p>
            Cualquier cambio sustancial en esta lista se reflejará aquí con una nueva fecha de actualización. Cuando sea
            razonable, podremos notificar cambios relevantes por canales adicionales.
          </p>
        </div>
      </section>
    </main>
  );
}
