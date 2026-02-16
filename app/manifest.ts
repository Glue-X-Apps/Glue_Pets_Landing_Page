import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GluePets - Cuidado Integral de Mascotas',
        short_name: 'GluePets',
        description: 'La App para el cuidado integral de tu mascota. Nutrición, salud y conexión veterinaria.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#22c55e',
        icons: [
            {
                src: '/img/GluePetsLogo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/img/GluePetsLogo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
