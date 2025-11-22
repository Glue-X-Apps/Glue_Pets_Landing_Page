export const metadata = {
  title: "Política de Privacidad | GluePets",
  description: "Política de Privacidad de GluePets (aplicación móvil y servicios asociados).",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-slate-300 mb-2">Última actualización: 26 de octubre de 2025</p>
        <p className="text-slate-300 mb-8">Válida para: Sitio web (landing), aplicación móvil GluePets y servicios backend asociados (MVP experimental).</p>

        <div className="prose prose-invert max-w-none">
          <h2>1. Quiénes somos</h2>
          <p>GluePets es un <strong>proyecto personal en fase MVP</strong> orientado al cuidado nutricional de mascotas, desarrollado por un <strong>desarrollador independiente</strong> (en adelante, “GluePets”, “nosotros”). Este documento está pensado para facilitar la lectura y comprensión del tratamiento de datos durante pruebas y validación del producto. Para consultas de privacidad, usa el correo de contacto indicado en la app o envía un email a <em>tu_correo_contacto@ejemplo.com</em> (actualiza este dato antes de publicar).</p>

          <h2>2. Ámbito de esta política</h2>
          <p>Esta política describe cómo recopilamos, usamos, compartimos y protegemos datos personales cuando usas la app móvil GluePets, la landing page y nuestras APIs/servicios backend. Si no aceptas esta política, no uses los servicios. Al tratarse de un MVP, algunas funcionalidades pueden cambiar con rapidez; cualquier cambio relevante será reflejado en versiones futuras de esta política.</p>

          <h2>3. Datos que tratamos</h2>
          <ul>
            <li><strong>Cuenta y autenticación</strong>: email, identificadores técnicos, tokens de sesión.</li>
            <li><strong>Perfil de mascota</strong>: nombre, especie/raza, sexo, edad, peso.</li>
            <li><strong>Diario y nutrición</strong>: comidas registradas, cantidades/porciones, horarios, objetivos y progreso de peso.</li>
            <li><strong>Preferencias</strong>: idioma, tema (claro/oscuro), recordatorios locales.</li>
            <li><strong>Datos técnicos</strong>: identificadores de dispositivo, sistema operativo, logs técnicos, IP aproximada, eventos en la app (telemetría de uso básico).</li>
            <li><strong>Landing</strong>: cookies o tecnologías similares para métricas de uso (p.ej. analítica).</li>
          </ul>

          <h2>4. Finalidades del tratamiento</h2>
          <ul>
            <li>Prestar las funcionalidades del servicio (registro de comidas, control de peso, recomendaciones básicas).</li>
            <li>Personalizar la experiencia (idioma, tema) y habilitar recordatorios locales.</li>
            <li>Mejorar el producto, resolver incidencias y mantener seguridad/estabilidad.</li>
            <li>Analítica agregada y métricas de uso para priorizar mejoras (sin perfilarte con fines publicitarios).</li>
            <li>Cumplimiento legal y atención de solicitudes de derechos.</li>
          </ul>

          <h2>5. Bases legales</h2>
          <ul>
            <li><strong>Ejecución de contrato</strong>: prestación del servicio solicitado por ti.</li>
            <li><strong>Interés legítimo</strong>: seguridad, prevención de abusos, mejora del producto con analítica agregada.</li>
            <li><strong>Consentimiento</strong>: cuando la ley lo requiera (p.ej., ciertas cookies/analítica en la web, notificaciones).</li>
          </ul>

          <h2>6. Conservación</h2>
          <p>Conservamos tus datos mientras mantengas una cuenta activa y por el tiempo necesario para cumplir finalidades y obligaciones legales. Puedes solicitar eliminación; borraremos o anonimizaremos salvo conservación exigida por ley o por legítimo interés (p.ej., seguridad, defensa ante reclamaciones).</p>

          <h2>7. Destinatarios y transferencias</h2>
          <ul>
            <li><strong>Proveedores</strong> (encargados de tratamiento): servicios de hosting y base de datos, analítica de uso del sitio/app (si corresponde) y sistemas de distribución de la app. Podremos actualizar estos proveedores cuando sea razonable, manteniendo medidas adecuadas de protección.</li>
            <li><strong>Autoridades</strong> cuando sea requerido por ley o para proteger derechos.</li>
          </ul>
          <p>Tus datos pueden alojarse y tratarse fuera de tu país. Cuando apliquen, usamos mecanismos de transferencia adecuados (p.ej., Cláusulas Contractuales Tipo).</p>

          <h2>8. Seguridad</h2>
          <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos (p.ej., cifrado en tránsito, control de acceso, monitorización). Ningún sistema es 100% seguro; te recomendamos buenas prácticas (contraseñas robustas, mantener tu dispositivo actualizado). Dado el carácter <strong>MVP/Beta</strong> del servicio, podrían existir errores o pérdidas de datos; evita almacenar información crítica y conserva copias de respaldo.</p>

          <h2>9. Tus derechos</h2>
          <p>Según tu jurisdicción, puedes ejercer derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición. Para solicitarlo, escribe al correo de contacto indicado en la app o en el sitio (<em>contact@gluepets.click</em>). También puedes retirar consentimientos otorgados (p. ej., analítica o notificaciones) desde los ajustes.</p>

          <h2>10. Menores</h2>
          <p>GluePets está dirigida a adultos responsables del cuidado de mascotas. No recabamos conscientemente datos personales de menores de 13 años (o la edad mínima aplicable en tu país). Si crees que un menor nos proporcionó datos, contáctanos para eliminarlos.</p>

          <h2>11. Cookies y tecnologías similares</h2>
          <p>La landing puede usar cookies/SDKs para analítica básica y mejorar la experiencia. Donde la ley lo exija, te pediremos consentimiento o te ofreceremos controles para gestionarlas.</p>

          <h2>12. Cambios a esta política</h2>
          <p>Podemos actualizar esta política para reflejar cambios operativos o legales. Publicaremos la versión vigente y la fecha de “Última actualización”. Cambios sustanciales podrán notificarse adicionalmente en la app o por email.</p>

          <h2>13. Contacto</h2>
          <p>Para preguntas o solicitudes sobre privacidad, usa el correo de contacto indicado en la app o sitio (<em>contact@gluepets.click</em>). Sustituye este correo por el tuyo antes de publicar.</p>
        </div>
      </section>
    </main>
  );
}
