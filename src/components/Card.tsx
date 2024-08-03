import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  image,
  title,
  description,
}) => {
  return (
    <div className={[styles.card01, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headlineSubhead}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.vuesaxlinearsend}>
          <a href="https://www.researchgate.net/publication/377746822_Machine_Reading_Comprehension_using_SQUAD">
          <img
            className={styles.vuesaxlinearsendIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearsend.svg"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
