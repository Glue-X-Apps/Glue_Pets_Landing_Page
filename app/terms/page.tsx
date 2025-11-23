export const metadata = {
  title: "Términos y Condiciones | GluePets",
  description: "Términos de uso del sitio y de la aplicación GluePets.",
};

export default function TermsPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="text-slate-300 mb-2">Última actualización: 26 de octubre de 2025</p>

        <div className="prose prose-invert max-w-none">
          <h2>1. Aceptación</h2>
          <p>Al acceder o usar el sitio y/o la app GluePets (en adelante, los “Servicios”), aceptas estos Términos. Si no estás de acuerdo, no uses los Servicios. Ten en cuenta que el producto está en <strong>fase MVP experimental</strong> y puede cambiar rápidamente.</p>

          <h2>2. Descripción del servicio</h2>
          <p>GluePets ofrece herramientas para registrar comidas de mascotas, controlar peso y brindar recomendaciones nutricionales básicas. GluePets <strong>no</strong> reemplaza asesoramiento veterinario profesional. Consulta a tu veterinario para decisiones de salud. El servicio es desarrollado por un <strong>desarrollador independiente</strong> con fines de prueba y validación.</p>

          <h2>3. Registro y cuenta</h2>
          <ul>
            <li>Debes proporcionar información veraz y mantener tus credenciales seguras.</li>
            <li>Eres responsable de la actividad realizada desde tu cuenta.</li>
            <li>Podemos suspender o cerrar cuentas por incumplimiento de estos Términos o por actividades abusivas.</li>
          </ul>

          <h2>4. Uso permitido</h2>
          <ul>
            <li>No usar los Servicios para actividades ilícitas, spam, scraping no autorizado ni intentos de intrusión.</li>
            <li>No descompilar, realizar ingeniería inversa ni eludir medidas de seguridad.</li>
            <li>Respetar derechos de propiedad intelectual de GluePets y de terceros.</li>
          </ul>

          <h2>5. Contenido y propiedad</h2>
          <ul>
            <li><strong>Tu contenido</strong>: mantienes la titularidad de los datos que subes (p. ej., perfil de mascota, registros). Nos concedes una licencia no exclusiva, mundial y revocable para usarlo en la medida necesaria para prestar los Servicios.</li>
            <li><strong>Nuestro contenido</strong>: el software, marcas, logos y materiales pertenecen al desarrollador independiente y/o a sus licenciantes. No se te transfiere ningún derecho salvo los expresamente otorgados.</li>
          </ul>

          <h2>6. Disponibilidad y cambios</h2>
          <p>Podemos modificar, suspender o discontinuar funciones (especialmente en fase MVP) sin obligación de continuidad, informando cuando sea razonable. Realizamos esfuerzos razonables para estabilidad y soporte, sin garantías de disponibilidad permanente.</p>

          <h2>7. Planes, pagos y suscripciones</h2>
          <p>El MVP puede ofrecerse de forma gratuita. Las suscripciones o funciones de pago podrían activarse en el futuro. De ser así, los precios, periodos de facturación, renovaciones y cancelaciones se comunicarán claramente antes de la compra y se regirán por las políticas de la tienda (p. ej., Google Play).</p>

          <h2>8. Privacidad</h2>
          <p>El uso de los Servicios está sujeto a la <a href="/privacy">Política de Privacidad</a>. Lee detenidamente cómo tratamos tus datos personales.</p>

          <h2>9. Garantías y descargos</h2>
          <p>Los Servicios se proporcionan “tal cual” y “según disponibilidad”. En la medida permitida por la ley, declinamos garantías de comerciabilidad, idoneidad para un propósito particular y no infracción. No garantizamos resultados específicos (p. ej., pérdida de peso) ni que el servicio esté libre de errores o disponible ininterrumpidamente.</p>

          <h2>10. Limitación de responsabilidad</h2>
          <p>En la medida permitida por la ley, GluePets y el desarrollador independiente no serán responsables por daños indirectos, incidentales, especiales o consecuentes, ni por pérdida de datos, ingresos o reputación derivados del uso o imposibilidad de uso de los Servicios.</p>
          <p>La <strong>responsabilidad total agregada</strong> de GluePets y del desarrollador independiente por cualquier reclamación relacionada con los Servicios, ya sea contractual, extracontractual (incluida negligencia) o de otro tipo, se limita, en la medida legalmente posible, al importe efectivamente pagado por el usuario por los Servicios en los <strong>doce (12) meses</strong> anteriores a la reclamación; si el servicio fue gratuito durante dicho periodo, el límite será <strong>cero (0)</strong>.</p>

          <h2>11. Indemnidad</h2>
          <p>Te comprometes a indemnizar y mantener indemne a GluePets (y al desarrollador independiente) frente a reclamaciones de terceros derivadas de tu uso de los Servicios en violación de estos Términos o de la ley.</p>

          <h2>12. Terminación</h2>
          <p>Podemos suspender o terminar tu acceso por incumplimientos o riesgos de seguridad. Puedes dejar de usar los Servicios en cualquier momento y solicitar eliminación de tu cuenta y datos conforme a la Política de Privacidad. En fase <strong>MVP/Beta</strong>, no garantizamos continuidad ni preservación de datos; realiza copias de respaldo si fuera necesario.</p>

          <h2>13. Ley aplicable y disputas</h2>
          <p>Estos Términos se interpretarán sin limitar derechos imperativos de consumidores. Dado que se trata de un proyecto personal, no se establece una jurisdicción única; las controversias se someterán a la legislación imperativa que resulte aplicable al usuario y a los mecanismos de resolución amistosa que las partes acuerden. Nada en este documento limita derechos que no puedan ser renunciados por ley.</p>

          <h2>14. Cambios a los Términos</h2>
          <p>Podemos actualizar estos Términos para reflejar cambios en el servicio o la ley. Publicaremos la versión vigente y la fecha de “Última actualización”. Cambios sustanciales podrán notificarse adicionalmente.</p>

          <h2>15. Contacto</h2>
          <p>Soporte y consultas: usa el correo indicado en la app o en el sitio (<em>contact.gluepets.app@gmail.com</em>). Sustituye este correo por el tuyo antes de publicar.</p>
        </div>
      </section>
    </main>
  );
}
