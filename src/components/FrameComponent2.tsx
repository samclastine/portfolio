import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  frame70?: string;
  group?: string;
  heroImage?: string;

  /** Style props */
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onGroupIconClick?: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frame70,
  group,
  heroImage,
  rectangleDivBackgroundColor,
  onGroupIconClick,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const navigate = useNavigate();

  const onGroupIconClick1 = useCallback(() => {
    navigate("/light-theme-portfolio");
  }, [navigate]);

  return (
    <section
      className={[styles.rectangleParent, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.frameChild} />
      <header className={styles.georgyParent}>
        <a className={styles.georgy}>Sam Clastine</a>
        <nav className={styles.frameWrapper}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <a className={styles.projects}>Projects</a>
            <a className={styles.services}>Services</a>
            <a className={styles.resume}>Resume</a>
          </nav>
        </nav>
        <Button
          className={styles.frameItem}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            borderColor: "#4fc3f7",
            borderRadius: "9px",
            "&:hover": { borderColor: "#4fc3f7" },
            width: 126,
            height: 45,
          }}
        >
          {frame70}
        </Button>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src={group}
            onClick={onGroupIconClick}
          />
        </div>
      </header>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <img className={styles.heroImageIcon} alt="" src={heroImage} />
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
              <h1 className={styles.georgyGeorgy}>{`Sam Clastine`}</h1>
              <div className={styles.dataSorcererWrapper}>
                <h2 className={styles.dataSorcerer}>Data Sorcerer 🧙‍♂️</h2>
              </div>
            </div>
          </div>
          <div className={styles.asAPassionateDataScientistWrapper}>
            <h3 className={styles.asAPassionate}>
              As a passionate data scientist, with expertise in machine
              learning, AI, and data analytics, I thrive on the challenges of
              exploring complex data landscapes and uncovering meaningful
              patterns that drive innovation
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
    </section>
  );
};

export default FrameComponent2;
