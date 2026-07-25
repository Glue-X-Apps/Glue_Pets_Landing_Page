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
          <h2>1. Aceptación</h2>
          <p>Al registrarte, acceder o usar el sitio y/o la aplicación móvil GluePets (en adelante, los “Servicios”), declaras haber leído y aceptado expresamente estos Términos y Condiciones. El tratamiento de tus datos personales se rige por nuestra Política de Privacidad y el marco de la Ley 21.719 de Protección de Datos Personales de Chile.</p>

          <h2>2. Descripción del Servicio y Descargo Veterinario</h2>
          <p>GluePets ofrece herramientas de software para el registro de hábitos nutricionales, control de peso y seguimiento del bienestar de mascotas. GluePets <strong>no presta servicios veterinarios ni reemplaza el diagnóstico, tratamiento o asesoramiento de un profesional médico veterinario</strong>. Consulta a tu médico veterinario de confianza para decisiones relativas a la salud de tu mascota.</p>
          <p>GluePets no se hace responsable por diagnósticos, recetas o tratamientos emitidos por profesionales veterinarios o centros de atención externos que interactúen con la plataforma.</p>

          <h2>3. Sincronización Voluntaria con Centros Veterinarios</h2>
          <p>GluePets podrá permitir la sincronización o vinculación voluntaria del perfil de tu mascota con centros veterinarios autorizados expresamente por ti. Al autorizar dicha vinculación, reconoces que los datos clínicos y fichas médicas generadas en el centro de atención formarán parte del legajo clínico del prestador, conservándose de forma independiente para dar cumplimiento a sus obligaciones sanitarias y legales.</p>

          <h2>4. Registro y Seguridad de la Cuenta</h2>
          <ul>
            <li>Debes proporcionar información veraz y mantener tus credenciales de acceso seguras.</li>
            <li>Eres responsable de todas las actividades realizadas desde tu cuenta.</li>
            <li>Podemos suspender o cerrar cuentas por incumplimiento de estos Términos, requerimiento legal o actividades maliciosas.</li>
          </ul>

          <h2>5. Uso Permitido y Propiedad Intelectual</h2>
          <ul>
            <li><strong>Tu Contenido</strong>: Conservas la titularidad de los datos que ingresas sobre tus mascotas. Nos otorgas una licencia no exclusiva y revocable para procesarlos con el fin único de prestar los Servicios.</li>
            <li><strong>Nuestra Propiedad</strong>: El software, diseño, marcas y códigos son propiedad exclusiva de GluePets. Queda prohibida la ingeniería inversa, scraping o explotación no autorizada.</li>
          </ul>

          <h2>6. Garantías y Limitación de Responsabilidad</h2>
          <p>Los Servicios se proporcionan “tal cual” y “según disponibilidad”. En la máxima medida permitida por la ley, la responsabilidad total acumulada de GluePets por cualquier reclamación derivada del uso de los Servicios se limita al importe efectivamente pagado por el usuario en los doce (12) meses anteriores al evento, o cero (0) en caso de uso gratuito.</p>

          <h2>7. Ejercicio de Derechos ARCO+ y Supresión de Cuenta</h2>
          <p>Puedes solicitar la eliminación de tu cuenta en cualquier momento desde la app o escribiendo a <em>contact.gluepets.app@gmail.com</em>. La supresión de tu identidad personal B2C se ejecutará de forma física e irreversible conforme a nuestra Política de Privacidad y la Ley 21.719.</p>

          <h2>8. Ley Aplicable y Jurisdicción</h2>
          <p>Estos Términos se rigen e interpretan conforme a las leyes de la República de Chile, en particular la Ley 21.719 de Protección de Datos Personales y la legislación de protección al consumidor, sin perjuicio de los derechos imperativos no renunciables.</p>

          <h2>9. Contacto</h2>
          <p>Para consultas legales o de soporte: <em>contact.gluepets.app@gmail.com</em></p>
        </div>
      </section>
    </main>
  );
}
