import { MetadataRoute } from 'next'

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://gluepets.cl',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://gluepets.cl/veterinarias',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://gluepets.cl/privacy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://gluepets.cl/terms',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://gluepets.cl/account-deletion',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://gluepets.cl/subprocessors',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ]
}
