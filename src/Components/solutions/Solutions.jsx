import React from "react";
import check from "./../../assets/fi.svg";
import styles from "./Solutions.module.css";

function Solutions() {
  return (
    <section id="solution" className={styles.container}>
      <h1 className={styles.gradientText}>
        O que<br />Fazemos
      </h1>

      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>
          <i>Transformamos dados em soluções sob medida.</i>
        </h2>
        <ul className={styles.ul}>
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
