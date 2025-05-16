import React, { useEffect, useState } from "react";
import backgroundHeader from "../../assets/background_header.png";
import styles from "./Hero.module.css";
import { TypingBlock } from "./TypingBlock.jsx";
import Container from "../container/Container.jsx";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--desktop-image', `url(${backgroundHeader})`);
    document.documentElement.style.setProperty('--mobile-image', `url(${backgroundHeader})`);
  }, []);

  const heroClasses = `${styles.hero} ${isMobile ? styles.heroMobile : ""}`;

  return (
    <header className={heroClasses}>
      <Container>
        <div className={styles.hero__textContainer}>
          <TypingBlock lines={["Monitorar", "Entender", "Agir"]} />
          
        </div>
      </Container>
    </header>
  );
}

export default Hero;
