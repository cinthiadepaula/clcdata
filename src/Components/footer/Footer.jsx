import React from "react";
import styles from "./Footer.module.css";
import iconBw from "./../../assets/bw_icon.png";

function Footer() {
  return (
    <section className={styles.footerSection}>
      <hr className={styles.line} />

      <div className={styles.footerContent}>
        <p>© Copyright 2024. Todos os direitos reservados.</p>
       <a href="https://www.instagram.com/bw.comunica/" target="_blank"> <img src={iconBw} className={styles.footerIcon} alt="BW Icon" /></a>
      </div>
    </section>
  );
}

export default Footer;
