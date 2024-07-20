import { FunctionComponent } from "react";
import styles from "./FooterContact.module.css";

export type FooterContactType = {
  className?: string;
};

const FooterContact: FunctionComponent<FooterContactType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerContact, className].join(" ")}>
      <div className={styles.footerContactContainer}>
        <div className={styles.footerCollaboration}>
          <div className={styles.footerConnect}>
            <h1 className={styles.letsWorkTogetherContainer}>
              <p className={styles.lets}>{`Let’s `}</p>
              <p className={styles.workTogether}>{`Work Together - `}</p>
            </h1>
            <div className={styles.footerConnectInner}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.emailIcon}>
                  <img
                    className={styles.skillIconsgmailLight}
                    alt=""
                    src="/skilliconsgmaillight.svg"
                  />
                </div>
                <div className={styles.georgygmailcom}>Georgy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerDivider} />
      </div>
      <div className={styles.copyrightSocial}>
        <div className={styles.copyrightSocialContainer}>
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
              src="/group-4832561.svg"
            />
            <img
              className={styles.socialIconsItem}
              loading="lazy"
              alt=""
              src="/group-4832521.svg"
            />
            <img
              className={styles.socialIconsInner}
              loading="lazy"
              alt=""
              src="/group-4832581.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-4832571.svg"
            />
            <img
              className={styles.socialIconsChild1}
              loading="lazy"
              alt=""
              src="/group-4832541.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
