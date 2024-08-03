import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./WhoiamComponent.module.css";

export type whoiamType = {
  heroImage?: string;
};

const WhoiamComponent: FunctionComponent<whoiamType> = ({
  heroImage,
}) => {
  return (
    <div className={styles.heroContentWrapper}>
      <div className={styles.heroContent}>
        <div className={styles.heroContentInner}>
          <div className={styles.frameParent}>
            <div className={styles.profilePictureWrapper}>
              <img
                className={styles.profilePictureIcon}
                loading="lazy"
                alt=""
                src="/Ellipse 3.png"
              />
            </div>
            <h1 className={styles.georgyGeorgy} >Sam Clastine</h1>
            <div className={styles.dataSorcererWrapper}>
              <h2 className={styles._dataSorcerer}>Data Alchemist </h2> <h2 className={styles.dataSorcererEmoji}> 🤖️</h2>
            </div>
          </div>
        </div>
        <div className={styles.asAPassionateDataScientistWrapper}>
          <h3 className={styles.asAPassionate}>
          A highly skilled Data Scientist with an MSc in Data Science from City, University of London, I thrive on exploring complex data landscapes. My academic and professional journey is distinguished by top grades and a proven track record in innovative machine learning projects. With expertise in  Machine Learning, AI, Data Analytics and Software Development, I uncover meaningful patterns that drive innovation.
          </h3>
        </div>
        <div className={styles.heroContact}>
          <Button
            className={styles.heroContactChild}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "#4fc3f7",
              borderRadius: "75px",
              "&:hover": { borderColor: "#4fc3f7" },
              width: 187,
              height: 55,
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhoiamComponent;
