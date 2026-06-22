import Image, { type StaticImageData } from 'next/image'
import styles from './WorkCard.module.scss'

interface IProps {
  src: StaticImageData
  title: string
}

export const WorkCard = ({ src, title }: IProps) => {
  return (
    <div className={styles.root}>
      <Image src={src} alt={title} fill className={styles.image} />
      <div className={styles.overlay}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}
