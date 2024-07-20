import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ContactFields from "./ContactFields";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactContentWrapper, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeader}>
          <div className={styles.getInTouchParent}>
            <h1 className={styles.getInTouch}>Get In Touch</h1>
            <div className={styles.description}>
              <div className={styles.letsWorkTogether}>Lets work together</div>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <b className={styles.name}>Name</b>
          <div className={styles.contactFields}>
            <div className={styles.contactFieldsChild} />
            <div className={styles.exampleemailcom}>example@email.com</div>
          </div>
          <b className={styles.email}>Email</b>
          <TextField
            className={styles.contactFields1}
            placeholder="full name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d6dded" },
              "& .MuiInputBase-root": {
                height: "70px",
                borderRadius: "10px",
                fontSize: "20px",
              },
              "& .MuiInputBase-input": { color: "#8987a1" },
            }}
          />
          <b className={styles.service}>Service</b>
          <ContactFields />
          <b className={styles.message}>Message</b>
          <textarea className={styles.submitBackground} rows={11} cols={35} />
          <Button
            className={styles.submit}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              height: 62,
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
