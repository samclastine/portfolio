import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type navbarType = {
  className?: string;
  frame70?: string;
  group?: string;
  heroImage?: string;

  /** Style props */
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onGroupIconClick?: () => void;
};

const NavbarComponent: FunctionComponent<navbarType> = ({
  className = "",
  frame70,
  group,
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
    </section>
  );
};

export default NavbarComponent;
