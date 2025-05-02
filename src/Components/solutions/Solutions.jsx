import React, { useState, useEffect } from "react";
import check from "./../../assets/fi.svg";
import styles from "./Solutions.module.css";

function Solutions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="solution" className={isMobile ? styles.containerMobile : styles.container}>
      <h1 className={isMobile ? styles.gradientTextMobile : styles.gradientText}>
        O que<br />Fazemos
      </h1>

      <div className={isMobile ? styles.textContainerMobile : styles.textContainer}>
        <h2 className={isMobile ? styles.subTitleMobile : styles.subTitle}>
          <i>Transformamos dados em soluções sob medida.</i>
        </h2>
        <ul className={isMobile ? styles.ulMobile : styles.ul}>
          <li><img src={check} className={styles.icon} alt="check" /> Realizamos análises especializadas</li>
          <li><img src={check} className={styles.icon} alt="check" /> Interpretamos o comportamento de clientes</li>
          <li><img src={check} className={styles.icon} alt="check" /> Mitigamos riscos e otimizamos processos</li>
          <li><img src={check} className={styles.icon} alt="check" /> Adaptamos soluções específicas para negócios únicos</li>
        </ul>
      </div>
    </section>
  );
}

export default Solutions;
