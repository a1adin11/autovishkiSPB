'use client'

import { useState } from 'react'
import { Container } from '../Container'
import styles from "./FAQSection.module.scss"
import { QuestionItem } from './components/QuestionItem'

const data = [
        {
            title: 'Можно ли арендовать автовышку без оператора?',
            text: 'Нет, вся техника предоставляется только с нашим опытным оператором. Это гарантирует безопасность и соблюдение правил эксплуатации.'
        },
        {
            title: 'Как рассчитывается стоимость аренды?',
            text: 'Цена зависит от высоты подъёма и длительности аренды. Минимальный заказ — от 3 часов. Точная стоимость рассчитывается индивидуально, исходя из ваших задач и локации.'
        },
        {
            title: 'Можно ли заказать автовышку в выходные или ночью?',
            text: 'Да, мы работаем круглосуточно, 24/7. Подача техники возможна в любое время — по предварительной договорённости.'
        },
        {
            title: 'Работаете ли вы по области или только в черте города?',
            text: 'Мы выполняем заказы по городу Санкт-Петербургу и Ленинградской области. Стоимость выезда рассчитывается индивидуально в зависимости от расстояния.'
        },
        {
            title: 'Насколько заранее нужно оформлять заказ?',
            text: 'Желательно за 1–2 дня до работы, чтобы гарантировать наличие нужной автовышки. Но при срочных заказах можем подать технику в течение 30–60 минут (в зависимости от местоположения).'
        }
]

export const FAQSection = () => {
    const [openId, setOpenId] = useState<number | null>(null)

    const handleToggle = (id: number) => {
        setOpenId(prev => (prev === id ? null : id))
    }

    return (
        <Container as={"section"} className={styles.root} subClassName={styles.inner}>
            <h2 className={styles.title}>Часто задаваемые вопросы</h2>
            <div className={styles.questions}>
                {data.map((item, index) => (
                    <QuestionItem
                        key={index}
                        id={index + 1}
                        title={item.title}
                        text={item.text}
                        isOpen={openId === index + 1}
                        onToggle={() => handleToggle(index + 1)}
                    />
                ))}
            </div>
        </Container>
    )
}