export const metadata = {
  title: "Términos y Condiciones | GluePets",
  description: "Términos de uso del sitio y de la aplicación GluePets.",
};

export default function TermsPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="text-slate-300 mb-2">Última actualización: 25 de julio de 2026</p>

        <div className="prose prose-invert max-w-none">
          <h2>1. Aceptación de los Términos</h2>
          <p>Al registrarte, acceder o usar la aplicación móvil y el sitio web de GluePets (en adelante, los “Servicios”), declaras haber leído y aceptado expresamente estos Términos y Condiciones. El tratamiento de tus datos personales se rige por nuestra Política de Privacidad.</p>

          <h2>2. Descripción del Servicio y Descargo Médico Veterinario</h2>
          <p>GluePets ofrece herramientas de software para el registro de hábitos nutricionales, control de peso y seguimiento del bienestar de tus mascotas. GluePets <strong>no presta servicios veterinarios ni reemplaza el diagnóstico, tratamiento o asesoramiento de un profesional médico veterinario</strong>. Consulta siempre a tu médico veterinario de confianza para cualquier decisión sobre la salud de tu mascota.</p>
          <p>GluePets no se hace responsable por diagnósticos, recetas o tratamientos emitidos por profesionales o centros veterinarios externos que interactúen con la plataforma.</p>

          <h2>3. Sincronización Voluntaria con Centros Veterinarios</h2>
          <p>GluePets permite la sincronización voluntaria del perfil de tu mascota con centros veterinarios autorizados expresamente por ti. Al autorizar dicha vinculación, reconoces que los datos de atención generados en la clínica formarán parte de la ficha médica del prestador, conservándose de manera independiente conforme a las normas de salud animal.</p>

          <h2>4. Registro y Seguridad de la Cuenta</h2>
          <ul>
            <li>Debes proporcionar información veraz y mantener tus credenciales de acceso seguras.</li>
            <li>Eres responsable de las actividades realizadas desde tu cuenta.</li>
            <li>Podemos suspender o cerrar cuentas por incumplimiento de estos Términos o uso indebido de los Servicios.</li>
          </ul>

          <h2>5. Uso Permitido y Propiedad Intelectual</h2>
          <ul>
            <li><strong>Tu Contenido</strong>: Conservas la propiedad de los datos que ingresas sobre tus mascotas. Nos otorgas una autorización revocable únicamente para procesarlos con el fin de prestarte el Servicio.</li>
            <li><strong>Nuestra Propiedad</strong>: El software, diseño, marcas e imagen visual son propiedad exclusiva de GluePets. Queda prohibida su copia, modificación o extracción no autorizada.</li>
          </ul>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>Los Servicios se proporcionan “tal cual” y “según disponibilidad”. En la máxima medida permitida por la ley, la responsabilidad de GluePets por cualquier inconveniente derivado del uso del servicio se limita al importe pagado por el usuario en los doce (12) meses anteriores, o cero en caso de servicios gratuitos.</p>

          <h2>7. Eliminación de Cuenta</h2>
          <p>Puedes solicitar la eliminación de tu cuenta en cualquier momento desde el menú de perfil en la aplicación móvil o escribiendo a <em>soporte@gluepets.cl</em>. La eliminación de tu perfil y datos personales se ejecutará de forma permanente conforme a nuestra Política de Privacidad.</p>

          <h2>8. Ley Aplicable</h2>
          <p>Estos Términos se rigen e interpretan conforme a las leyes aplicables y la legislación de protección al consumidor, garantizando siempre tus derechos como usuario.</p>

          <h2>9. Contacto</h2>
          <p>Para cualquier consulta legal o de soporte: <em>contacto@gluepets.cl</em> | <em>soporte@gluepets.cl</em></p>
        </div>
      </section>
    </main>
  );
}
