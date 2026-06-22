'use client'

import { useMatchMedia } from '@/app/hooks/useMatchMedia'
import styles from './Header.module.scss'
import MaxLogo from '@/public/LogoMax.svg'
import MinLogo from '@/public/LogoMini.svg'
import Button from '@ui/Button/Button'

// const nav = [
//   { label: 'Наши машины', href: '#about' },
//   { label: 'Контакты', href: '#contacts' },
//   { label: 'Отзывы', href: '#reviews' },
// ]

const Header = () => {
  const { isMobile } = useMatchMedia()

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <MaxLogo />
        {/* 
        <nav className={styles.nav}>
          {nav.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav> */}

        <Button size="s" href="tel:+79219557808">
          {isMobile ? 'Бесплатная консультация' : 'Получить бесплатную консультацию'}
        </Button>
      </div>
    </div>
  )
}

export default Header
