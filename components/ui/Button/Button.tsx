import React from 'react'
import styles from './Button.module.scss'
import ArrowIcon from '@/public/icons/arrow.svg'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'close'
  size?: 'm' | 's'
  isOpen?: boolean
  href?: string
}

const Button: React.FC<IButton> = ({
  className,
  children,
  variant = 'default',
  size = 'm',
  isOpen,
  href,
  ...props
}) => {
  const sizeClass = size === 's' ? styles.sizeS : styles.sizeM
  const cn = `${variant === 'default' ? `${styles.root} ${sizeClass}` : styles.circle} ${className ?? ''} ${isOpen ? styles.open : ''}`
  const content = variant === 'default' ? children : <ArrowIcon className={styles.chevron} width={14} height={9} />

  if (href) {
    return <a href={href} className={cn}>{content}</a>
  }

  return (
    <button className={cn} {...props}>
      {content}
    </button>
  )
}

export default Button
