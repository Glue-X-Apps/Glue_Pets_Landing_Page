export const metadata = {
  title: "Política de Privacidad | GluePets",
  description: "Política de Privacidad de la plataforma y aplicación móvil GluePets.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-slate-300 mb-2">Última actualización: 25 de julio de 2026</p>
        <p className="text-slate-300 mb-8">Válida para la aplicación móvil GluePets y sitio web oficial.</p>

        <div className="prose prose-invert max-w-none">
          <h2>1. Quiénes Somos y Protección de Datos</h2>
          <p>GluePets opera como responsable del tratamiento de los datos personales ingresados por los tutores registrados en la plataforma. Para cualquier consulta sobre la gestión de tus datos o el ejercicio de tus derechos, puedes escribir a nuestro equipo de privacidad a <em>contacto@gluepets.cl</em>.</p>

          <h2>2. Datos que Recopilamos</h2>
          <ul>
            <li><strong>Identidad y Cuenta</strong>: Nombre, correo electrónico e inicio de sesión con Google o Apple. La captura de tu teléfono celular es opcional y solo requerida si deseas vincular datos adicionales.</li>
            <li><strong>Perfil de la Mascota</strong>: Nombre, especie, raza, edad, sexo, peso y hábitos de nutrición.</li>
            <li><strong>Trazabilidad de Consentimiento</strong>: Registro seguro e inmutable de las autorizaciones otorgadas por el usuario, con fecha y hora de la aceptación.</li>
            <li><strong>Datos Técnicos</strong>: Identificadores de dispositivo, sistema operativo e información de seguridad básica para garantizar el funcionamiento.</li>
          </ul>

          <h2>3. Finalidad del Tratamiento de Datos</h2>
          <ul>
            <li><strong>Consentimiento Expreso</strong>: Otorgado libremente para la sincronización clínica voluntaria con veterinarias, notificaciones o análisis de rendimiento.</li>
            <li><strong>Prestación del Servicio</strong>: Procesamiento estrictamente necesario para brindar las funciones de la aplicación (registro de dietas, seguimiento de peso y recordatorios).</li>
            <li><strong>Seguridad y Cumplimiento Legal</strong>: Resguardo de tu información conforme a las exigencias normativas vigentes.</li>
          </ul>

          <h2>4. Tus Derechos de Privacidad</h2>
          <p>Como usuario registrado, tienes los siguientes derechos sobre tus datos personales:</p>
          <ul>
            <li><strong>Acceso</strong>: Solicitar información sobre qué datos personales conservamos.</li>
            <li><strong>Rectificación</strong>: Corregir datos inexactos o desactualizados en tu perfil.</li>
            <li><strong>Eliminación</strong>: Solicitar la supresión permanente e irreversible de tu cuenta y datos asociados.</li>
            <li><strong>Oposición</strong>: Desactivar autorizaciones opcionales como notificaciones o analíticas en cualquier momento.</li>
            <li><strong>Portabilidad</strong>: Solicitar la entrega de tus datos registrados en un formato estándar.</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, escribe a <em>contacto@gluepets.cl</em> o utiliza las opciones en el menú de perfil de la aplicación móvil.</p>

          <h2>5. Eliminación de Cuenta e Historial Médico</h2>
          <p>Al solicitar la eliminación de tu cuenta en GluePets, ejecutaremos la eliminación permanente e irreversible de tu perfil de nuestros servidores. Si utilizaste la aplicación en centros veterinarios vinculados, las atenciones clínicas se mantendrán anonimizadas en el centro médico conforme a la normativa de registros de salud animal, desvinculando por completo tus datos personales.</p>

          <h2>6. Seguridad de la Información</h2>
          <p>Aplicamos medidas de seguridad avanzadas, incluyendo cifrado de datos en tránsito y en reposo, resguardando la confidencialidad de tu información en todo momento.</p>

          <h2>7. Modificaciones a esta Política</h2>
          <p>Si realizamos cambios significativos en esta política, te informaremos a través de la aplicación móvil para que puedas revisar y confirmar tus preferencias antes de continuar utilizando el servicio.</p>

          <h2>8. Contacto</h2>
          <p>Para consultas sobre privacidad o el ejercicio de tus derechos: <em>contacto@gluepets.cl</em> | <em>soporte@gluepets.cl</em></p>
        </div>
      </section>
    </main>
  );
}
