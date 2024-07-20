import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.aboutContentWrapper, className].join(" ")}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutIntro}>
          <div className={styles.aboutHeader}>
            <div className={styles.aboutMe}>About Me</div>
            <div className={styles.getToKnowMeWrapper}>
              <div className={styles.getToKnow}>Get to know me</div>
            </div>
          </div>
        </div>
        <div className={styles.hiThereImContainer}>
          <p className={styles.hiThereIm}>
            Hi there! I'm [Your Name], a data scientist specializing in data
            analytics, predictive modeling, natural language processing, machine
            learning, and AI chatbots. With a passion for unraveling insights
            from complex datasets, I'm dedicated to helping businesses make
            informed decisions and stay ahead in today's data-driven world.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.iBringA}>
            I bring a blend of technical expertise, hands-on experience, and a
            commitment to clear communication to every project. Whether it's
            uncovering hidden patterns, predicting future trends, or automating
            processes with AI, I'm here to help you harness the full potential
            of your data.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.letsWorkTogether}>
            Let's work together to transform your data into actionable insights
            that drive real results. Get in touch, and let's start unlocking the
            power of your data today!
          </p>
        </div>
        <div className={styles.aboutContact}>
          <Button
            className={styles.aboutContactChild}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "#4fc3f7",
              borderRadius: "55px",
              "&:hover": { borderColor: "#4fc3f7" },
              width: 216,
              height: 55,
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
