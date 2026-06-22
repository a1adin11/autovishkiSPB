import Image from "next/image";
import styles from "./ContactItem.module.scss";
import { ReactElement } from "react";

export interface IContactItem {
  img: string;
  info: string;
  desc: string;
  circleColor: string;
  href: string;
  external?: boolean;
}

const ContactItem = ({ img, info, desc, circleColor, href, external }: IContactItem): ReactElement => {
  return (
    <a
      className={styles.root}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className={styles.circle} style={{ backgroundColor: circleColor }}>
        <Image src={img} alt={info} width={24} height={24} />
      </div>

      <div className={styles.info}>
        <span>{info}</span>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default ContactItem;
