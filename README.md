# GluePets Landing Page

Una landing page moderna y escalable para la aplicación GluePets, construida con Next.js 16, TypeScript y Tailwind CSS .

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── app/
│   └── page.tsx                 # Componente principal refactorizado
├── components/
│   ├── sections/                # Secciones de la landing page
│   │   ├── index.ts            # Exportaciones de secciones
│   │   ├── HeroSection.tsx     # Sección principal con CTA
│   │   ├── AboutSection.tsx    # Información sobre GluePets
│   │   ├── FeaturesSection.tsx # Características principales
│   │   ├── PremiumSection.tsx  # Sección de premium
│   │   └── FooterSection.tsx   # Pie de página
│   ├── ui/                     # Componentes de UI reutilizables
│   └── NavigationDots.tsx      # Navegación por puntos
├── hooks/
│   └── useSectionNavigation.ts # Hook personalizado para navegación
└── types/
    └── index.ts                # Definiciones de tipos TypeScript
```

### Características de la Arquitectura

- **Componentes Modulares**: Cada sección es un componente independiente y reutilizable
- **Separación de Responsabilidades**: Lógica de navegación extraída en hooks personalizados
- **TypeScript Estricto**: Tipos bien definidos para mejor mantenibilidad
- **Escalabilidad**: Fácil agregar nuevas secciones o modificar existentes
- **Rendimiento**: Componentes optimizados con lazy loading potencial

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📱 Navegación

La landing page incluye navegación intuitiva mediante:

- **Scroll del mouse**: Desplazamiento vertical suave entre secciones
- **Toques en móviles**: Gestos de swipe para navegación táctil
- **Teclado**: Flechas arriba/abajo para navegación por teclado
- **Puntos de navegación**: Clic en los puntos del lado derecho (desktop)

## 🎨 Características Técnicas

- **Next.js 16** con App Router
- **React 19** con hooks modernos
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Responsive Design** para todos los dispositivos

## 🔧 Desarrollo

### Agregar una Nueva Sección

1. Crear el componente en `components/sections/`
2. Exportarlo en `components/sections/index.ts`
3. Importarlo y agregarlo en `app/page.tsx`
4. Actualizar el hook `useSectionNavigation` si es necesario

### Modificar la Navegación

Editar `hooks/useSectionNavigation.ts` para cambiar el comportamiento de navegación, constantes de timing, o agregar nuevas funcionalidades.

## 📄 Licencia

© 2025 GluePets. Todos los derechos reservados.
