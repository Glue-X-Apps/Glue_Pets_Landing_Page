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
        <p className="text-slate-300 mb-8">Válida para: Aplicación móvil GluePets, landing page y servicios backend asociados (Cumplimiento Ley 21.719 de Chile).</p>

        <div className="prose prose-invert max-w-none">
          <h2>1. Quiénes Somos y Responsable del Tratamiento</h2>
          <p>GluePets opera como <strong>Responsable del Tratamiento</strong> (Data Controller) de los datos personales ingresados por los tutores registrados en la plataforma. Para cualquier consulta sobre la gestión de tus datos o el ejercicio de tus derechos, puedes escribir a nuestro Oficial de Privacidad a <em>contact.gluepets.app@gmail.com</em>.</p>

          <h2>2. Datos que Recopilamos</h2>
          <ul>
            <li><strong>Identidad y Cuenta</strong>: Nombre, correo electrónico, identificador único de cuenta (OAuth de Google/Apple). La captura del número de teléfono celular es opcional y solo requerida bajo perfilamiento progresivo.</li>
            <li><strong>Perfil del Paciente/Mascota</strong>: Nombre, especie, raza, edad, sexo, peso y hábitos de nutrición.</li>
            <li><strong>Trazabilidad de Consentimiento</strong>: Registro inmutable en nuestro <em>Consent Ledger</em> de las autorizaciones otorgadas por el usuario, con fecha, hora e identificador de versión del texto legal.</li>
            <li><strong>Datos Técnicos</strong>: Identificadores de dispositivo, sistema operativo, IP aproximada y registros de seguridad.</li>
          </ul>

          <h2>3. Bases de Licitud del Tratamiento</h2>
          <ul>
            <li><strong>Consentimiento Expreso</strong>: Otorgado de forma libre, informada y granular por el titular para sincronización clínica, notificaciones o analítica.</li>
            <li><strong>Ejecución del Servicio</strong>: Procesamiento estrictamente necesario para prestar las funciones de la app (registro de comidas, metas de peso).</li>
            <li><strong>Cumplimiento Legal</strong>: Atención de requerimientos de la Agencia de Protección de Datos Personales (APDP) u organismos fiscalizadores.</li>
          </ul>

          <h2>4. Derechos ARCO+ (Ley 21.719)</h2>
          <p>Como titular de los datos, la Ley 21.719 te otorga los siguientes derechos irrenunciables:</p>
          <ul>
            <li><strong>Acceso</strong>: Solicitar información sobre qué datos personales tratamos.</li>
            <li><strong>Rectificación</strong>: Corregir datos inexactos o desactualizados.</li>
            <li><strong>Cancelación (Supresión / Derecho al Olvido)</strong>: Solicitar la eliminación física e irreversible de tu cuenta personal en B2C.</li>
            <li><strong>Oposición</strong>: Oponerte al tratamiento de tus datos para finalidades específicas (ej. comunicaciones secundarias).</li>
            <li><strong>Portabilidad</strong>: Solicitar la entrega de tus datos personales en formato estructurado e interoperable.</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, escribe a <em>contact.gluepets.app@gmail.com</em> o utiliza las funciones dedicadas en los ajustes de la aplicación móvil.</p>

          <h2>5. Supresión de Cuenta vs. Conservación Ficha Veterinaria</h2>
          <p>Al solicitar la eliminación de tu cuenta en GluePets, ejecutaremos la <strong>eliminación física (Hard Delete)</strong> de tu identidad personal de nuestros servidores B2C. Si mantuviste atenciones médicas vinculadas con centros veterinarios autorizados, la ficha clínica de tu mascota permanecerá encapsulada de forma anonimizada en el sistema del centro veterinario (en estado de conservación legal / SAG), desvinculando de forma irreversible tus datos personales.</p>

          <h2>6. Seguridad y Encriptación</h2>
          <p>Aplicamos medidas técnicas avanzadas de seguridad, incluyendo cifrado en tránsito (TLS 1.3), cifrado en reposo (Envelope Encryption DEK/KEK) y registros de auditoría inmutables para resguardar la confidencialidad de la información.</p>

          <h2>7. Modificaciones a la Política</h2>
          <p>Toda modificación a esta política actualizará el <code>policyHashVersion</code> en nuestro sistema. Si realizamos cambios sustanciales, la aplicación te solicitará refrendar tu consentimiento antes de continuar utilizando el servicio.</p>

          <h2>8. Contacto</h2>
          <p>Consultas sobre privacidad y ejercicio ARCO+: <em>contact.gluepets.app@gmail.com</em></p>
        </div>
      </section>
    </main>
  );
}
