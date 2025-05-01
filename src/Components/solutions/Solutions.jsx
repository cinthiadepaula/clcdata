import React, { useState, useEffect } from "react";
import check from "./../../assets/fi.svg"; // Coloque a imagem em src/assets

function Solutions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Verifica se a largura da tela é menor que 768px
    };
    handleResize(); // Verifica o tamanho da tela quando o componente é carregado
    window.addEventListener("resize", handleResize); // Acompanha as mudanças de tamanho da tela
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="solution" style={isMobile ? styles.containerMobile : styles.container}>
      <h1 style={styles.gradientText}>O que<br />Fazemos</h1>
      <div style={styles.textContainer}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          <i>Transformamos dados em soluções sob medida.</i>
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><img src={check} style={{ width: "1rem" }} />Realizamos análises especializadas</li>
          <li><img src={check} style={{ width: "1rem" }} />Interpretamos o comportamento de clientes</li>
          <li><img src={check} style={{ width: "1rem" }} />Mitigamos riscos e otimizamos processos</li>
          <li><img src={check} style={{ width: "1rem" }} />Adaptamos soluções específicas para negócios únicos</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexDirection: "row", // Exibição padrão em linha para telas grandes
    padding: "20px",
  },
  containerMobile: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column", // Em telas pequenas, usamos coluna
    gap: "20px",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
  },
  textContainer: {
    maxWidth: "500px",
    textAlign: "left",
  },
  gradientText: {
    backgroundImage: "linear-gradient(to right,#0090D8, #8FBAFF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "48px",
    fontWeight: "bold",
  },
  // Adicional: ajuste no mobile para texto menor
  textContainerMobile: {
    maxWidth: "100%",
    textAlign: "center", // Centraliza o texto no mobile
  },
};

export default Solutions;
