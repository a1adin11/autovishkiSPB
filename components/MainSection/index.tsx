import styles from './MainSection.module.scss'
import Button from '@ui/Button/Button'
import ContactItem from './components/ContactItem'
import StripLine from './components/StripLine'
import { Container } from '@components/Container'

const MainSection = () => {
  const contacts = [
    {
      img: '/icons/call.svg',
      info: '+7 (921) 955-78-08',
      circleColor: '#FFFFFF',
      desc: 'Позвонить',
      href: 'tel:+79219557808',
    },
    {
      img: '/icons/telegram.svg',
      info: '@avtovyshki_spb',
      circleColor: '#0088FF',
      desc: 'Написать в Telegram',
      href: 'https://t.me/autovishki_spb',
      external: true,
    },
    {
      img: '/icons/whatsapp.svg',
      info: '+7 (921) 955-78-08',
      circleColor: '#34C759',
      desc: 'Связаться в WhatsApp',
      href: 'https://wa.me/79219557808',
      external: true,
    },
  ]

  return (
    <section className={styles.root}>
      <Container className={styles.wrapper} subClassName={styles.innerWrapper}>
        <div className={styles.bgImage} aria-hidden="true" />
        <div className={styles.text}>
          <h1>Аренда автовышки</h1>

          <p>
            Доставим технику точно к сроку. Работаем по Санкт-Петербургу и Ленинградской области.
            Гарантируем исправность и опытных операторов!
          </p>

          <Button href="tel:+79219557808">Узнать стоимость</Button>
        </div>
        <div className={styles.contacts}>
          {contacts.map((contact, index) => (
            <ContactItem {...contact} key={index} />
          ))}
        </div>
      </Container>
      <StripLine />
    </section>
  )
}

export default MainSection
