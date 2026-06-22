import { type ReactElement } from 'react'
import styles from './QuestionItem.module.scss'
import { Chip } from '@/components/ui/Chip'
import Button from '@/components/ui/Button/Button'

interface IProps {
  id: number
  title: string
  text: string
  isOpen: boolean
  onToggle: () => void
}

export const QuestionItem = ({ id, title, text, isOpen, onToggle }: IProps): ReactElement => {
  return (
    <div className={styles.root}>
      <div className={styles.header} onClick={onToggle}>
        <div className={styles.left}>
          <Chip variant="point">{id}</Chip>
          <span className={styles.title}>{title}</span>
        </div>
        <Button variant="close" isOpen={isOpen} />
      </div>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
        <div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}
