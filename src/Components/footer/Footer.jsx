import React from "react";
import styles from "./Footer.module.css";
import iconBw from "./../../assets/bw_icon.png";

function Footer() {
  return (
    <section className={styles.footerSection}>
      <hr className={styles.line} />

      <div className={styles.footerContent}>
        <p>© Copyright 2024. Todos os direitos reservados.</p>
        <img src={iconBw} className={styles.footerIcon} alt="BW Icon" />
      </div>
    </section>
  );
}

export default Footer;
