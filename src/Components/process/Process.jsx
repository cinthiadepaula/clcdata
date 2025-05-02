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

  {isMobile ? (
  <div style={styles.timelineMobile}>
    <div style={styles.timelineColumn}>
      {steps
        .filter((_, index) => index % 2 === 0) // textos 1, 3, 5 (índices pares)
        .map((step) => (
          <div key={step.number} style={styles.cardMobile}>
            <h3 style={styles.cardTitleMobile}>{step.title}</h3>
            <p style={styles.cardDescriptionMobile}>{step.description}</p>
          </div>
        ))}
    </div>

    <div style={styles.timelineCenter}>
      
      <svg
        viewBox="0 0 1300 230"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.curvaSvgMobile}
      >
        <path
          d="M10 115C10.3333 86.6666 27 25.7999 91 8.99995C155 -7.80005 199.333 32.6666 213.5 54.9999C219.5 66.6666 231.7 99.9 232.5 139.5C233.5 189 292.5 220.5 320.5 224C348.5 227.5 401.5 228 434.5 171.5C440.333 167.667 453 144.9 457 84.5C465 51.1666 503.9 -10.6001 595.5 8.99995C620.5 15.3333 671.5 45.3999 675.5 115C674.667 151.333 695.7 224 786.5 224C877.3 224 899.333 134 899 89C907.333 57.6666 941.5 -2.2001 1011.5 8.99995C1099 23 1114.5 90.4999 1117 115"
          stroke="#54A8EE"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        {/* círculos */}
        <ellipse cx="11" cy="122.5" rx="11" ry="10.5" fill="#54A8EE" />
        <ellipse cx="1117" cy="115.5" rx="11" ry="10.5" fill="#54A8EE" />

        {/* triângulos */}
        <path d="M231.973 136.618L206.391 103.11L258.399 103.772L231.973 136.618Z" fill="#54A8EE" />
        <path d="M676.027 143.618L650.445 110.11L702.454 110.772L676.027 143.618Z" fill="#54A8EE" />
        <path d="M452.571 85.3814L478.182 118.867L426.173 118.25L452.571 85.3814Z" fill="#54A8EE" />
        <path d="M897.552 90.356L923.163 123.842L871.154 123.225L897.552 90.356Z" fill="#54A8EE" />

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
    </div>

    <div style={styles.timelineColumn}>
      {steps
        .filter((_, index) => index % 2 !== 0) // textos 2, 4 (índices ímpares)
        .map((step) => (
          <div key={step.number} style={styles.cardMobile}>
            <h3 style={styles.cardTitleMobile}>{step.title}</h3>
            <p style={styles.cardDescriptionMobile}>{step.description}</p>
          </div>
        ))}
    </div>
  </div>
) : (
  <>
    {/* versão DESKTOP padrão que você já tinha */}
    <div style={styles.flowWrapper}>
      {steps.slice(0, 2).map((step) => (
        <div key={step.number} style={styles.card}>
          <h3 style={styles.cardTitle}>{step.title}</h3>
          <p style={styles.cardDescription}>{step.description}</p>
        </div>
      ))}
    </div>

    <div style={{ overflowX: "auto", display: "flex", justifyContent: "center" }}>
      <svg
        viewBox="0 0 1300 230"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.curvaSvg}
      >
        <path
          d="M10 115C10.3333 86.6666 27 25.7999 91 8.99995C155 -7.80005 199.333 32.6666 213.5 54.9999C219.5 66.6666 231.7 99.9 232.5 139.5C233.5 189 292.5 220.5 320.5 224C348.5 227.5 401.5 228 434.5 171.5C440.333 167.667 453 144.9 457 84.5C465 51.1666 503.9 -10.6001 595.5 8.99995C620.5 15.3333 671.5 45.3999 675.5 115C674.667 151.333 695.7 224 786.5 224C877.3 224 899.333 134 899 89C907.333 57.6666 941.5 -2.2001 1011.5 8.99995C1099 23 1114.5 90.4999 1117 115"
          stroke="#54A8EE"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        {/* círculos */}
        <ellipse cx="11" cy="122.5" rx="11" ry="10.5" fill="#54A8EE" />
        <ellipse cx="1117" cy="115.5" rx="11" ry="10.5" fill="#54A8EE" />

        {/* triângulos */}
        <path d="M231.973 136.618L206.391 103.11L258.399 103.772L231.973 136.618Z" fill="#54A8EE" />
        <path d="M676.027 143.618L650.445 110.11L702.454 110.772L676.027 143.618Z" fill="#54A8EE" />
        <path d="M452.571 85.3814L478.182 118.867L426.173 118.25L452.571 85.3814Z" fill="#54A8EE" />
        <path d="M897.552 90.356L923.163 123.842L871.154 123.225L897.552 90.356Z" fill="#54A8EE" />
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
    </div>

    <div style={styles.flowWrapper}>
      {steps.slice(2, 5).map((step) => (
        <div key={step.number} style={styles.card}>
          <h3 style={styles.cardTitle}>{step.title}</h3>
          <p style={styles.cardDescription}>{step.description}</p>
        </div>
      ))}
    </div>
  </>
)}

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
    gap: "1rem",
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
    
    width: "75%",
    maxWidth: "250px",
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
margin:"0",
    fontSize: "12px",
    fontWeight: "bold",
    textAlign:"left"
  },
  cardDescription: {
   
    fontSize: "10px",
    textAlign: "left",
  },
  cardDescriptionMobile: {
    margin:"0",
    fontSize: "8px",
    textAlign: "left",
  },
  curvaSvg: {
    width: "50%",
    height: "150px",
    display: "block",
    margin: "0px 0px",
    zIndex: 2, // se quiser sobrepor algo
    position: "relative",
  },  
  
  curvaSvgMobile: {
    width: "100vh", // usa a altura da tela como largura do SVG rotacionado
    height: "70px",
    transform: "rotate(90deg)",
    transformOrigin: "center",
    marginTop: "0rem",
    display: "block",
    overflow: "visible",
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
  timelineMobile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  
  timelineColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "4rem",
    width: "35%",
  },
  
  timelineCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  
};

export default Process;