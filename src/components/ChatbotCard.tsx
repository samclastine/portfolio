import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ChatbotCard.module.css";

export type ChatbotCardType = {
  className?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const ChatbotCard: FunctionComponent<ChatbotCardType> = ({
  className = "",
  propGap,
}) => {
  const chatbotCardStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.chatbotCard, className].join(" ")}
      style={chatbotCardStyle}
    >
      <div className={styles.chatbotContent}>
        <div className={styles.chatbotImage} />
        <div className={styles.chatbotDetails}>
          <div className={styles.chatbotIconsParent}>
            <div className={styles.chatbotIcons}>
              <div className={styles.chatbotIconsInner}>
                <div className={styles.frameChild} />
              </div>
              <img
                className={styles.arcticonspoeAiChat}
                loading="lazy"
                alt=""
                src="/arcticonspoeaichat.svg"
              />
            </div>
            <div className={styles.aiChatbots}>AI Chatbots</div>
            <div className={styles.fromDesignTo}>
              From design to deployment, I build AI Chatbots that enhance
              customer interactions, streamline processes, and elevate your
              brand's engagement, bringing innovative solutions to your
              audience's fingertips
            </div>
          </div>
        </div>
        <img
          className={styles.machineLearningCard}
          loading="lazy"
          alt=""
          src="/rectangle-40@2x.png"
        />
      </div>
      <div className={styles.machineLearningContent}>
        <div className={styles.machineLearningImage} />
        <div className={styles.machineLearningIcon}>
          <img
            className={styles.carbonmachineLearningIcon}
            loading="lazy"
            alt=""
            src="/carbonmachinelearning.svg"
          />
        </div>
        <div className={styles.machineLearning}>Machine Learning</div>
        <div className={styles.fromConceptToContainer}>
          <p className={styles.fromConceptTo}>
            From concept to automation, I craft Machine Learning solutions that
            decode patterns and optimize performance, driving your business into
            the era of intelligent automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotCard;
