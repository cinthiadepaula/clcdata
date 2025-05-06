import React from "react";
import check from "./../../assets/fi.svg";
import styles from "./Solutions.module.css";
import Container from "../container/Container"; 

function Solutions() {
  return (
    <section id="solution" className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.gradientText}>
            O que<br />Fazemos
          </h1>

          <div className={styles.textContainer}>
            <h2 className={styles.subTitle}>
              <i>Transformamos dados em soluções sob medida.</i>
            </h2>
            <ul className={styles.ul}>
              <li className={styles.listItem}>
                <img src={check} className={styles.icon} alt="check" />
                Realizamos análises especializadas
              </li>
              <li className={styles.listItem}>
                <img src={check} className={styles.icon} alt="check" />
                Interpretamos o comportamento de clientes
              </li>
              <li className={styles.listItem}>
                <img src={check} className={styles.icon} alt="check" />
                Mitigamos riscos e otimizamos processos
              </li>
              <li className={styles.listItem}>
                <img src={check} className={styles.icon} alt="check" />
                Adaptamos soluções específicas para negócios únicos
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
