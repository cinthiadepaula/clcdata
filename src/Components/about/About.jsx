import React from "react";
import styles from "./About.module.css";
import iconseta from "./../../assets/seta_about.svg";
import Container from "../container/Container.jsx";
import group from "./../../assets/group.png";
import curva_top from "./../../assets/curva_top.svg";
function About() {
  return (
    <>
      <div className={styles.glow}></div>
       <img src={curva_top}className={styles.curva_top} />
      <section id="about" aria-labelledby="about-heading">
        <Container>
          <div className={styles.contentWrapper}>
          
              <img src={group} alt="tecnologias" className={styles.iconGroup} />
            
            <div className={styles.textContainer}>
              <div className={styles.title}>
  <h2 id="about-heading" className={styles.gradientText}>
    Quem somos
  </h2>
 
</div>


              <p className={styles.paragraph}>
                A CLC Data é uma empresa de inteligência de dados e
                monitoramento que transforma informação em estratégia com
                agilidade, precisão e profundidade.
                <br />
                <br />
                Coletamos e analisamos dados de todo o ecossistema digital:
                redes sociais, veículos de imprensa, blogs, fóruns, podcasts,
                plataformas públicas, discursos oficiais e bastidores políticos.
                Utilizamos as tecnologias mais avançadas do mercado, incluindo
                ferramentas proprietárias, inteligência artificial e soluções
                modernas de coleta e leitura de dados, para garantir uma análise
                profunda, em tempo real, das conversas que moldam percepções,
                reputações e contextos.
                <br />
                <br />
                Nosso maior diferencial está na combinação entre tecnologia de
                ponta e capital humano altamente qualificado.
                <br />
                <br />
                Nosso time é formado por cientistas políticos, estrategistas,
                analistas de dados e especialistas em BI que atuam de forma
                integrada para interpretar dados com profundidade, construir
                diagnósticos, prever cenários e propor ações estratégicas
                concretas, seja em momentos de crise, posicionamento de marca,
                lançamentos ou construção de autoridade.
                <br />
                <br />
                Nosso lema resume nossa forma de atuação: monitorar, entender e
                agir.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
