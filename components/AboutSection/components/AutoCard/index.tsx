import { type ReactElement } from 'react'
import Image, { type StaticImageData } from 'next/image'
import styles from './AutoCard.module.scss'

interface IProps {
    src: StaticImageData;
    title: string;
}

export const AutoCard = ({ src, title }: IProps): ReactElement => {
    return (
        <div className={styles.root}>
            <Image src={src} alt={title} className={styles.image} />
            <span className={styles.title}>{title}</span>
        </div>
    )
}