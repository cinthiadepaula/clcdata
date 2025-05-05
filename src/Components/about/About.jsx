import React from "react";
import styles from "./About.module.css";
import iconseta from "./../../assets/seta_about.svg";

function About() {
  return (
    <>
      <div className={styles.glow}></div>
      <section id="about" className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.gradientText}>
            Quem<br />Somos
          </h2>
          <img src={iconseta} alt="Ícone" className={styles.iconSeta} />
        </div>
        <p className={styles.paragraph}>
          Somos especialistas em transformar dados em soluções sob medida. Trabalhamos de forma estratégica, utilizando relatórios e ferramentas personalizadas para identificar problemas, gerenciar situações desafiadoras e entender a fundo o ambiente digital de cada cliente.
          Acompanhamos campanhas, analisamos tendências e fornecemos informações valiosas para que nossos clientes se comuniquem de maneira eficaz e forte na internet.
          Nosso compromisso é encontrar o melhor caminho para o sucesso, com inteligência, precisão e visão estratégica.
        </p>
      </section>
    </>
  );
}



export default About;
