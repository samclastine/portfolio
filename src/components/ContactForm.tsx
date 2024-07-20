import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ContactFields from "./ContactFields";
import styles from "./ContactForm.module.css";

export type ContactFormType = {
  className?: string;
};

const ContactForm: FunctionComponent<ContactFormType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactForm, className].join(" ")}>
      <div className={styles.formContent}>
        <div className={styles.formHeader}>
          <div className={styles.formTitle}>
            <h1 className={styles.getInTouch}>Get In Touch</h1>
            <div className={styles.formSubtitle}>
              <div className={styles.letsWorkTogether}>Lets work together</div>
            </div>
          </div>
        </div>
        <div className={styles.contactForm1}>
          <b className={styles.name}>Name</b>
          <TextField
            className={styles.formFields}
            placeholder="example@email.com"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#484e53" },
              "& .MuiInputBase-root": {
                height: "70px",
                borderRadius: "10px",
                fontSize: "20px",
              },
              "& .MuiInputBase-input": { color: "#8987a1" },
            }}
          />
          <b className={styles.email}>Email</b>
          <TextField
            className={styles.formFields1}
            placeholder="full name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#484e53" },
              "& .MuiInputBase-root": {
                height: "70px",
                borderRadius: "10px",
                fontSize: "20px",
              },
              "& .MuiInputBase-input": { color: "#8987a1" },
            }}
          />
          <b className={styles.service}>Service</b>
          <ContactFields propBorder="1px solid #484e53" />
          <b className={styles.message}>Message</b>
          <textarea className={styles.contactFormChild} rows={11} cols={35} />
          <Button
            className={styles.submitButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#484e53",
              borderRadius: "10px",
              "&:hover": { background: "#484e53" },
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

export default ContactForm;
