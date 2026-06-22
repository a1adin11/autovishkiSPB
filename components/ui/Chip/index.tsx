import { type PropsWithChildren } from 'react'
import styles from "./Chip.module.scss"

interface IProps extends PropsWithChildren {
    variant?: "point" | "chip"
}

export const Chip = ({ children, variant = "chip" }: IProps) => {
    return (
        <div className={`${styles.root} ${variant === "point" ? styles.point : ''}`}>{children}</div>
    )
}