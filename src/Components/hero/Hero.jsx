import React, { useEffect, useState } from "react";
import backgroundHeader from "./../../assets/background_header.png";
import styles from "./Hero.module.css";
import { TypingLine } from "./TypingLine.jsx";

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
    <header className={`${styles.hero} ${isMobile ? styles.heroMobile : ""}`}>
      <div className={styles.heroTextContainer}>
        <TypingLine text="Transformamos" delay={0.5} />
        <TypingLine text="dados em estratégias" delay={2} />
      </div>
    </header>
  );
}

export default Hero;
