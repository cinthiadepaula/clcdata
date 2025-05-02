import React, { useState, useEffect } from "react";
import "./Process.css";
import curva from './../../assets/curva_bottom.svg'
import curva_top from './../../assets/curva_top.svg'

const svgPositions = [
  { x: 120, y: 115 },
  { x: 340, y: 115 },
  { x: 560, y: 115 },
  { x: 780, y: 115 },
  { x: 1000, y: 115 },
];

const steps = [
  {
    number: 1,
    title: "Dados",
    subtitle: "Dados",
    description: "Os dados são coletados através de diversas fontes.",
  },
  {
    number: 2,
    title: "Analista de dados",
    subtitle: "IA",
    description:
      "Analistas estruturam e treinam classificadores de dados específicos para cada cliente. Os analistas de dados realizam verificações frequentes de qualidade.",
  },
  {
    number: 3,
    title: "IA",
    subtitle: "IA",
    description:
      "A equipe de IA desenvolve agentes com base no trabalho dos analistas de dados, realizando verificações frequentes de controle de qualidade.",
  },
  {
    number: 4,
    title: "Especialistas",
    subtitle: "Especialistas",
    description:
      "Especialistas recebem dados organizados por meio de dashboards e criam análises baseadas em narrativas.",
  },
  {
    number: 5,
    title: "Produtos e soluções",
    subtitle: "Produtos e soluções",
    description:
      "A equipe de desenvolvimento cria produtos em tempo real adaptados às necessidades dos clientes.",
  },
];

const Process = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta para detectar dispositivos móveis
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="curved-dividertop-svg">
        <img src={curva_top} alt="Divisor Curvado" />
      </div>
      <section id="process" style={isMobile ? styles.containerMobile : styles.container}>
        <h2 style={isMobile ? styles.titleMobile : styles.title}>
          Nossos <br /> Processos
        </h2>

        <div style={isMobile ? styles.flowWrapperMobile : styles.flowWrapper}>
          {steps.slice(0, 2).map((step, index) => (
            <div
              key={step.number}
              style={isMobile ? styles.cardMobile : styles.card}
            >
              <h3 style={isMobile ? styles.cardTitleMobile : styles.cardTitle}>
                {step.title}
              </h3>
              <p style={isMobile ? styles.cardDescriptionMobile : styles.cardDescription}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 1300 230"
          xmlns="http://www.w3.org/2000/svg"
          style={isMobile ? styles.curvaSvgMobile : styles.curvaSvg}
        >
          <path
            d="M10 115C10.3333 86.6666 27 25.7999 91 8.99995C155 -7.80005 199.333 32.6666 213.5 54.9999C219.5 66.6666 231.7 99.9 232.5 139.5C233.5 189 292.5 220.5 320.5 224C348.5 227.5 401.5 228 434.5 171.5C440.333 167.667 453 144.9 457 84.5C465 51.1666 503.9 -10.6001 595.5 8.99995C620.5 15.3333 671.5 45.3999 675.5 115C674.667 151.333 695.7 224 786.5 224C877.3 224 899.333 134 899 89C907.333 57.6666 941.5 -2.2001 1011.5 8.99995C1099 23 1114.5 90.4999 1117 115"
            stroke="#54A8EE"
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          />
          {steps.map((step, index) => (
            <g key={step.number}>
              <circle
                cx={svgPositions[index].x}
                cy={svgPositions[index].y}
                r="70"
                fill="#040A25"
                style={styles.circle}
              />
              <text
                x={svgPositions[index].x - 20}
                y={svgPositions[index].y + 20}
                fill="#fff"
                style={styles.circleText}
              >
                {step.number}
              </text>
            </g>
          ))}
        </svg>

        <div style={isMobile ? styles.flowWrapperMobile : styles.flowWrapper}>
          {steps.slice(2, 5).map((step, index) => (
            <div
              key={step.number}
              style={isMobile ? styles.cardMobile : styles.card}
            >
              <h3 style={isMobile ? styles.cardTitleMobile : styles.cardTitle}>
                {step.title}
              </h3>
              <p style={isMobile ? styles.cardDescriptionMobile : styles.cardDescription}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="curved-divider-svg">
        <img src={curva} alt="Divisor Curvado" />
      </div>
    </>
  );
};

const styles = {
  container: {
    
    backgroundColor: "#D9D9D9",
    padding: "2rem 2rem",
    fontFamily: "Arial, sans-serif",
    color: "#000",
    height: "100%",
  },
  containerMobile: {

    backgroundColor: "#D9D9D9",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    color: "#000",
    height: "auto",
  },
  title: {
    textAlign: "left",
    fontSize: "35px",
    fontWeight: "bold",
    color: "#0d1e40",
    marginLeft: "20rem",
    marginBottom: "2rem",
  },
  titleMobile: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0d1e40",
    marginBottom: "2rem",
  },
  flowWrapper: {
    
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "4rem",
    margin: "0 15rem",
  },
  flowWrapperMobile: {
   
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  card: {
    
    width: "10rem",
    height: "7rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },
  cardMobile: {
    
    width: "90%",
    maxWidth: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  cardTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  cardTitleMobile: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  cardDescription: {
   
    fontSize: "10px",
    textAlign: "left",
  },
  cardDescriptionMobile: {
    fontSize: "12px",
    textAlign: "center",
  },
  curvaSvg: {
    width: "50%",
    height: "100%",
    index: 2,
  },
  curvaSvgMobile: {
    width: "100%",
    height: "auto",
    marginTop: "2rem",
  },
  circle: {
    color: "#fff",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  circleText: {
    fontSize: "4rem",
    alignItems: "center",
    fontWeight: "bold",
  },
};

export default Process;