import { AboutSection } from '@/components/AboutSection'
import styles from './mainPage.module.scss'
import MainSection from '@/components/MainSection'
import { FAQSection } from '@/components/FAQSection'
import { WorksSection } from '@/components/WorksSection'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://avtovyshki-spb.ru'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Аренда автовышки в Санкт-Петербурге',
      telephone: '+79219557808',
      url: SITE_URL,
      description:
        'Аренда автовышки в Санкт-Петербурге и Ленинградской области. Высота подъёма от 9 до 75 м. Работаем 24/7 с опытным оператором.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Санкт-Петербург',
        addressRegion: 'Ленинградская область',
        addressCountry: 'RU',
      },
      areaServed: [
        { '@type': 'City', name: 'Санкт-Петербург' },
        { '@type': 'AdministrativeArea', name: 'Ленинградская область' },
      ],
      openingHours: 'Mo-Su 00:00-23:59',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+79219557808',
        contactType: 'customer service',
        availableLanguage: 'Russian',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Можно ли арендовать автовышку без оператора?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Нет, вся техника предоставляется только с нашим опытным оператором. Это гарантирует безопасность и соблюдение правил эксплуатации.',
          },
        },
        {
          '@type': 'Question',
          name: 'Как рассчитывается стоимость аренды?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Цена зависит от высоты подъёма и длительности аренды. Минимальный заказ — от 3 часов. Точная стоимость рассчитывается индивидуально, исходя из ваших задач и локации.',
          },
        },
        {
          '@type': 'Question',
          name: 'Можно ли заказать автовышку в выходные или ночью?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Да, мы работаем круглосуточно, 24/7. Подача техники возможна в любое время — по предварительной договорённости.',
          },
        },
        {
          '@type': 'Question',
          name: 'Работаете ли вы по области или только в черте города?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Мы выполняем заказы по городу Санкт-Петербургу и Ленинградской области. Стоимость выезда рассчитывается индивидуально в зависимости от расстояния.',
          },
        },
        {
          '@type': 'Question',
          name: 'Насколько заранее нужно оформлять заказ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Желательно за 1–2 дня до работы, чтобы гарантировать наличие нужной автовышки. Но при срочных заказах можем подать технику в течение 30–60 минут (в зависимости от местоположения).',
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.root}>
        <MainSection />
        <AboutSection />
        <WorksSection />
        <FAQSection />
      </div>
    </>
  )
}
