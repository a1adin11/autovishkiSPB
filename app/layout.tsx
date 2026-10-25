import type { Metadata, Viewport } from 'next'
import React from 'react'
import Script from 'next/script'

import { Inter } from 'next/font/google'

import '@scss/App.scss'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://xn----7sbeca0bn4antf8eub.online'

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
    'Аренда автовышки в Санкт‑Петербурге и Ленинградской области. Высота подъёма от 9 до 75 м. Работаем 24/7, с опытным оператором. Быстрая подача по СПб и ЛО.',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
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
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111365480','ym');
          ym(111365480, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/111365480" style={{position:'absolute',left:'-9999px'}} alt="" /></div>
        </noscript>
      </body>
    </html>
  )
}
