import React, { useEffect, useState } from "react";
import backgroundHeader from "./../../assets/background_header.png";
import styles from "./Hero.module.css";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--desktop-image', `url(${backgroundHeader})`);
    document.documentElement.style.setProperty('--mobile-image', `url(${backgroundHeader})`);
  }, []);

  return (
    <header
      className={`${styles.hero} ${isMobile ? styles.heroMobile : ""}`}
    >
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>
          Transformamos <br /> dados em estratégias
        </h1>
      </div>
    </header>
  );
}

export default Hero;
