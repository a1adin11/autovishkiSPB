
import img1 from "../../public/pictures/About/Image1.png";
import img2 from "../../public/pictures/About/Image2.png";
import img3 from "../../public/pictures/About/Image3.png";
import img4 from "../../public/pictures/About/Image4.png";
import img5 from "../../public/pictures/About/Image5.png";
import img6 from "../../public/pictures/About/Image6.png";

import { Container } from "../Container";
import { Chip } from "../ui/Chip";
import styles from "./AboutSection.module.scss";
import { AutoCard } from "./components/AutoCard";

export const AboutSection = () => {


    const items = [{
        title: "Телескопические",
        src: img1
    },
    {
        title: "Телескопические с гуськом",
        src: img2
    },
    {
        title: "Коленчатые",
        src: img3
    },
    {
        title: "Коленчато-телескопические",
        src: img4
    },
    {
        title: "Понтограф",
        src: img5
    },
    {
        title: "Мостовые",
        src: img6
    }]

    return (
        <Container className={styles.wrapper} as={"section"} subClassName={styles.root}>
            <h2 className={styles.title}>
                Наша компания предоставляет автовышки в аренду для любых видов работ
            </h2>
            <div className={styles.subTitle}>
                <span>Автовышки бывают различных высотностей и конструкций подъёмного устройства.</span>
                <Chip>от 9 до 75 м</Chip>
            </div>
            <div className={styles.cards}>
                {items.map((item) => <AutoCard key={item.title} title={item.title} src={item.src} />)}
            </div>
        </Container>
    )
}