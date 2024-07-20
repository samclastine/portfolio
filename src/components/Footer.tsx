import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerWrap}>
          <div className={styles.footerCallToAction}>
            <h1 className={styles.letsWorkTogetherContainer}>
              <p className={styles.lets}>{`Let’s `}</p>
              <p className={styles.workTogether}>{`Work Together - `}</p>
            </h1>
            <div className={styles.footerContact}>
              <TextField
                className={styles.georgygmailcomWrapper}
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "27px", marginRight: "15px" }}
                    >
                      <img
                        width="24px"
                        height="24px"
                        src="/skilliconsgmaillight.svg"
                      />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{ IconComponent: () => null }}
                sx={{
                  borderColor: "#484e53",
                  borderStyle: "SOLID",
                  borderTopWidth: "1.5559844970703125px",
                  borderRightWidth: "1.5559844970703125px",
                  borderBottomWidth: "1.5559844970703125px",
                  borderLeftWidth: "1.5559844970703125px",
                  borderRadius: "15px",
                  width: "100%",
                  height: "76.2px",
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root": { height: "100%" },
                  "& .MuiInputBase-input": {
                    color: "#c9c9c9",
                    fontSize: 24.9,
                    fontWeight: "Regular",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <MenuItem value={1}>Georgy@gmail.com</MenuItem>
              </TextField>
            </div>
          </div>
        </div>
        <div className={styles.footerContentChild} />
      </div>
      <div className={styles.copyrightSocial}>
        <div className={styles.copyrightSocialWrap}>
          <div className={styles.copyright}>
            <div className={styles.allRightsReservedContainer}>
              <p className={styles.allRightsReserved}>
                © 2023 All rights reserved.
              </p>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <img
              className={styles.socialIconsChild}
              loading="lazy"
              alt=""
              src="/group-483256.svg"
            />
            <img
              className={styles.socialIconsItem}
              loading="lazy"
              alt=""
              src="/group-483252.svg"
            />
            <img
              className={styles.socialIconsInner}
              loading="lazy"
              alt=""
              src="/group-483258.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-483257.svg"
            />
            <img
              className={styles.socialIconsChild1}
              loading="lazy"
              alt=""
              src="/group-483254.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
