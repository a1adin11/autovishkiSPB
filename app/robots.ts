import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.xn----7sbeca0bn4antf8eub.online'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
