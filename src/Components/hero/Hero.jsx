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
    document.documentElement.style.setProperty('--mobile-image', `url(${backgroundHeader})`);
  }, []);

  return (
    <section
      className={`${styles.hero} ${isMobile ? styles.heroMobile : ""}`}
      style={{
        backgroundImage: !isMobile
          ? `linear-gradient(to right, rgba(3, 0, 20, 0.76) 40%, transparent, rgba(3, 0, 20, 0.76) 40%), url(${backgroundHeader})`
          : undefined,
      }}
    >
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>
          Transformamos <br /> dados em estratégias
        </h1>
      </div>
    </section>
  );
}

export default Hero;
