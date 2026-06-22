import { type PropsWithChildren, type ReactElement, type ElementType } from 'react'
import styles from "./Container.module.scss";

interface IProps extends PropsWithChildren {
    className?: string;
    subClassName?: string;
    as?: ElementType
}


export const Container = ({ children, subClassName, className, as: Tag = 'div' }: IProps): ReactElement => {
    return (
        <Tag className={`${styles.root}${className ? ` ${className}` : ''}`}>
            <div className={`${styles.wrapper}${subClassName ? ` ${subClassName}` : ''}`}>{children}</div>
        </Tag>
    )
}