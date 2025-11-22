import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliminación de Cuenta | GluePets',
  description: 'Información sobre cómo eliminar tu cuenta y datos de GluePets',
};

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <a href="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a GluePets
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Eliminación de Cuenta</h1>
            <p className="text-gray-600">GluePets - Control Nutricional para Mascotas</p>
          </div>

          {/* How to Request Deletion */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">📧</span>
              Cómo solicitar la eliminación de tu cuenta
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Envía un correo electrónico a: <a href="mailto:support@gluepets.click" className="font-semibold text-orange-600 hover:text-orange-700 underline">support@gluepets.click</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Asunto del correo: <strong>&quot;Solicitud de eliminación de cuenta - GluePets&quot;</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Incluye en el mensaje tu <strong>dirección de email registrada</strong> en GluePets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Procesaremos tu solicitud en un plazo máximo de <strong>30 días hábiles</strong></span>
                </li>
              </ol>
            </div>
          </div>

          {/* Data that will be deleted */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">🗑️</span>
              Datos que se eliminarán permanentemente
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">Al eliminar tu cuenta, se borrarán de forma <strong>permanente e irreversible</strong>:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Tu perfil de usuario</strong> (nombre completo, dirección de email, foto de perfil)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Información de tus mascotas</strong> (nombre, especie, raza, peso, edad, fotos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Historial completo de comidas</strong> registradas en el diario nutricional</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Historial de peso y mediciones</strong> de tus mascotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Objetivos de peso</strong> configurados</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Tokens de autenticación</strong> y sesiones activas</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Preferencias y configuraciones</strong> de la aplicación</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Información de suscripción</strong> (si aplica)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data that will be retained */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-600">⚠️</span>
              Datos que se conservarán (anónimos)
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">Por razones legales, de seguridad y analíticas, conservaremos de forma <strong>anónima y agregada</strong>:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Estadísticas agregadas de uso</strong> (sin información que te identifique personalmente)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Logs técnicos de transacciones</strong> (requerido por normativas fiscales y contables - período de retención: 7 años)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Datos de auditoría de seguridad</strong> (sin identificadores personales)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Nota: Estos datos se conservan de forma agregada y anónima, sin ninguna información que permita identificarte personalmente.
              </p>
            </div>
          </div>

          {/* Future feature */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🚀</span>
              Eliminación desde la aplicación (próximamente)
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                Estamos trabajando en implementar la eliminación de cuenta directamente desde la aplicación para mayor comodidad.
              </p>
              <p className="text-gray-700">
                Próximamente podrás eliminar tu cuenta desde: <strong className="text-blue-700">Perfil → Configuración → Eliminar cuenta</strong>
              </p>
            </div>
          </div>

          {/* Important notes */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">ℹ️</span>
              Información importante
            </h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>La eliminación de cuenta es <strong>permanente e irreversible</strong>. No podremos recuperar tus datos una vez procesada la solicitud.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Te enviaremos un <strong>correo de confirmación</strong> antes de proceder con la eliminación definitiva.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Si tienes una <strong>suscripción activa</strong>, se cancelará automáticamente. No se realizarán reembolsos por tiempo no utilizado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Plazo máximo de procesamiento: <strong>30 días hábiles</strong> desde la recepción de tu solicitud.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="text-center pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Tienes dudas?</h3>
            <p className="text-gray-600 mb-4">
              Si necesitas ayuda o tienes preguntas sobre la eliminación de tu cuenta, contáctanos:
            </p>
            <a 
              href="mailto:support@gluepets.click" 
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@gluepets.click
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 GluePets. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/privacy" className="hover:text-orange-600 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="/terms" className="hover:text-orange-600 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
