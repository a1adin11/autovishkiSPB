import styles from './WorksSection.module.scss'
import { WorkCard } from './components/WorkCard'
import { Container } from '../Container'

import img1 from '@/public/pictures/WorkSection/1.webp'
import img2 from '@/public/pictures/WorkSection/2.webp'
import img3 from '@/public/pictures/WorkSection/3.webp'
import img4 from '@/public/pictures/WorkSection/4.webp'
import img5 from '@/public/pictures/WorkSection/5.webp'
import img6 from '@/public/pictures/WorkSection/6.webp'
import img7 from '@/public/pictures/WorkSection/7.webp'
import img8 from '@/public/pictures/WorkSection/8.webp'
import img21 from '@/public/pictures/WorkSection/21.webp'
import img22 from '@/public/pictures/WorkSection/22.webp'
import img23 from '@/public/pictures/WorkSection/23.webp'
import img24 from '@/public/pictures/WorkSection/24.webp'
import img25 from '@/public/pictures/WorkSection/25.webp'
import img26 from '@/public/pictures/WorkSection/26.webp'
import img27 from '@/public/pictures/WorkSection/27.webp'

const itemsOne = [
  { title: 'Монтаж закладных', src: img1 },
  { title: 'Монтаж металлоконструкций', src: img2 },
  { title: 'Монтаж рекламы', src: img3 },
  { title: 'Фасадные работы', src: img4 },
  { title: 'Киносъёмки', src: img5 },
  { title: 'Мойка окон', src: img6 },
  { title: 'Мойка фасадов зданий', src: img7 },
  { title: 'Электромонтажные работы', src: img8 },
]

const itemsTwo = [
  { title: 'Монтаж стеклопакетов', src: img21 },
  { title: 'Обрезка деревьев', src: img22 },
  { title: 'Обслуживание антенн', src: img23 },
  { title: 'Обслуживание осветительного оборудования', src: img24 },
  { title: 'Обслуживание кондиционеров', src: img25 },
  { title: 'Торжественные мероприятия', src: img26 },
  { title: 'Устройство ограждений', src: img27 },
]

export const WorksSection = () => {
  const doubled = [...itemsOne, ...itemsTwo]

  return (
    <Container as="section" className={styles.root} subClassName={styles.inner}>
      <div className={styles.header}>
        <h2 className={styles.title}>Под любой запрос!</h2>
        <p className={styles.subtitle}>Автовышки применяются для различных видов работ:</p>
      </div>
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          {doubled.map((item, i) => (
            <div key={i} className={styles.card}>
              <WorkCard title={item.title} src={item.src} />
            </div>
          ))}
        </div>

        <div className={`${styles.track} ${styles.trackReverse}`}>
          {doubled.map((item, i) => (
            <div key={i} className={styles.card}>
              <WorkCard title={item.title} src={item.src} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
