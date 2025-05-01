import React from "react";
import iconseta from "./../../assets/seta_about.svg";

function About() {
  return (
    <>
    <div style={styles.glow}></div> {/* Efeito de luz azul */}
    <section id="about" style={styles.container}>
      
      <div style={styles.textContainer}>
        <h2 style={styles.gradientText}>
          Quem<br />Somos
        </h2>
        <img src={iconseta} alt="Ícone" style={{ width: "50px" }} />
      </div>
      <p style={styles.paragraph}>
        Somos especialistas em transformar dados em soluções sob medida. Trabalhamos de forma estratégica, utilizando relatórios e ferramentas personalizadas para identificar problemas, gerenciar situações desafiadoras e entender a fundo o ambiente digital de cada cliente.
        Acompanhamos campanhas, analisamos tendências e fornecemos informações valiosas para que nossos clientes se comuniquem de maneira eficaz e forte na internet.
        Nosso compromisso é encontrar o melhor caminho para o sucesso, com inteligência, precisão e visão estratégica.
      </p>
    </section>
    </>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "40px",
    overflow: "hidden",
    flexWrap: "wrap",
    zIndex: 1,
  },
  glow: {
    position: "absolute",
    right: "-30px",
    top:"35rem",
    width: "60rem",
    height: "400px",
    background: "radial-gradient(circle, #00305D 10%, rgba(0,0,0,0) 60%)",
    zIndex: 1,
    pointerEvents: "none",
    filter: "blur(80px)",
  },
  textContainer: {
    maxWidth: "400px",
    textAlign: "left",
    zIndex: 10,
  },
  gradientText: {
    fontSize: "48px",
    marginBottom: "20px",
    backgroundImage: "linear-gradient(to right,#0090D8, #8FBAFF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  },
  paragraph: {
    width: "20rem",
    textAlign: "left",
    fontFamily: "Inter",
    fontSize: "12px",
    lineHeight: "1.6",
    zIndex: 2,
  },
};

export default About;
