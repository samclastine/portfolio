import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./ProjectsHeader.module.css";

export type ProjectsHeaderType = {
  className?: string;
};

const ProjectsHeader: FunctionComponent<ProjectsHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.projectsHeader, className].join(" ")}>
      <div className={styles.projectsHeader1}>
        <div className={styles.projectsTitleContainer}>
          <div className={styles.projectTitle}>
            <h1 className={styles.projects}>Projects</h1>
            <div className={styles.someOfMyWorkWrapper}>
              <div className={styles.someOfMy}>Some of my Work</div>
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <Button
            className={styles.skillItems}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f5f5f5",
              fontSize: "16",
              background: "#484e53",
              borderRadius: "50px",
              "&:hover": { background: "#484e53" },
              width: 193,
              height: 55,
            }}
          >
            Machine learning
          </Button>
          <Button
            className={styles.skillItems1}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#a9a9a9",
              fontSize: "16",
              borderColor: "#484e53",
              borderRadius: "50px",
              "&:hover": { borderColor: "#484e53" },
              width: 141,
              height: 55,
            }}
          >
            Sql
          </Button>
          <Button
            className={styles.skillItems2}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#a9a9a9",
              fontSize: "16",
              borderColor: "#484e53",
              borderRadius: "50px",
              "&:hover": { borderColor: "#484e53" },
              width: 129,
              height: 55,
            }}
          >
            Power BI
          </Button>
          <Button
            className={styles.skillItems3}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#a9a9a9",
              fontSize: "16",
              borderColor: "#484e53",
              borderRadius: "50px",
              "&:hover": { borderColor: "#484e53" },
              width: 129,
              height: 55,
            }}
          >
            AI/LLMs
          </Button>
          <Button
            className={styles.specialization}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#a9a9a9",
              fontSize: "16",
              borderColor: "#484e53",
              borderRadius: "50px",
              "&:hover": { borderColor: "#484e53" },
              width: 224,
              height: 56,
            }}
          >
            Spatial Data Science
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
