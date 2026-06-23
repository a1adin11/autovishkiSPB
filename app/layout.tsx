import type { Metadata, Viewport } from 'next'
import React from 'react'

import { Inter } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'

import '@scss/App.scss'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// TODO: замените на реальный домен перед деплоем
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://avtovyshki-spb.ru'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Аренда автовышки в Санкт-Петербурге',
    default: 'Аренда автовышки в Санкт-Петербурге и Ленинградской области',
  },
  description:
    'Аренда автовышки в Санкт‑Петербурге и Ленинградской области. Высота подъёма от 9 до 75 м. Работаем 24/7, с опытным оператором, по СПб и ЛО. Звоните: +7 (921) 955-78-08',
  keywords: [
    'аренда автовышки',
    'автовышка СПб',
    'аренда автовышки Санкт-Петербург',
    'автовышка Ленинградская область',
    'аренда вышки с оператором',
    'автовышка цена',
    'заказать автовышку',
    'телескопическая вышка',
    'коленчатая вышка',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Аренда автовышки СПб',
    title: 'Аренда автовышки в Санкт-Петербурге и ЛО — от 9 до 75 м',
    description:
      'Автовышки в аренду по СПб и Ленинградской области. Работаем 24/7, с опытным оператором. Подача в течение 30–60 минут.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда автовышки в Санкт-Петербурге',
    description: 'Автовышки от 9 до 75 м. Работаем 24/7 по СПб и ЛО.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
