import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardColumns.module.css";

export type CardColumnsType = {
  className?: string;
  dataAnalyticsVisualizatio?: string;
  fromDataInceptionToAction?: string;
  imageSrc?: string;  // Optional image source

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CardColumns: FunctionComponent<CardColumnsType> = ({
  className = "",
  dataAnalyticsVisualizatio,
  fromDataInceptionToAction,
  imageSrc,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const cardColumnsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={[styles.cardColumns, className].join(" ")}
      style={cardColumnsStyle}
    >
      {imageSrc && (
        <div className={styles.cardImages}>
          <img
            className={styles.cardImage}
            loading="lazy"
            alt=""
            src={imageSrc}
          />
        </div>
      )}
      <div className={styles.cardContentContainers}>
        <img
          className={styles.cardContentIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.dataAnalytics}>{dataAnalyticsVisualizatio}</div>
        <div className={styles.fromDataInceptionContainer}>
          <p className={styles.fromDataInception}>
            {fromDataInceptionToAction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardColumns;
