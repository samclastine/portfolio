import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContactFields.module.css";

export type ContactFieldsType = {
  className?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const ContactFields: FunctionComponent<ContactFieldsType> = ({
  className = "",
  propBorder,
}) => {
  const contactFieldsStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={[styles.contactFields, className].join(" ")}
      style={contactFieldsStyle}
    >
      <div className={styles.contactFieldsChild} />
      <div className={styles.selectAService}>Select a service</div>
      <div className={styles.inputIcon}>
        <img className={styles.icon} alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

export default ContactFields;
