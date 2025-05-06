import React from "react";
import curva from "./../../assets/curva_bottom.svg";
import curva_top from "./../../assets/curva_top.svg";
import Container from "../container/Container";
import "./Process.css"; // Mantém seus estilos

const steps = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

const svgPositions = [
  { x: 120, y: 115 },
  { x: 340, y: 115 },
  { x: 560, y: 115 },
  { x: 780, y: 115 },
  { x: 1000, y: 115 },
];

const stylesInline = {
  circle: {
    filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))",
  },
  circleText: {
    fontSize: "5rem",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  },
};

const Process = () => {
  return (
    <>
      <div className="curved-dividertop-svg">
        <img src={curva_top} alt="Divisor Curvado" />
      </div>

      <section id="process">
        <Container>
          <div className="contentWrapper">
            <h2>
              Nossos <br /> Processos
            </h2>

            <div className="process-flow">
              <div className="process-card analistas">
                <h3>2. Analista de dados</h3>
                <p>
                  Analistas estruturam e treinam classificadores de dados
                  específicos para cada cliente. Os analistas de dados realizam
                  verificações frequentes de qualidade.
                </p>
              </div>

              <div className="process-card especialistas">
                <h3>4. Especialistas</h3>
                <p>
                  Especialistas recebem dados organizados por meio de dashboards
                  e criam análises baseadas em narrativas.
                </p>
              </div>
            </div>

            <div style={{ overflowX: "auto", display: "flex", justifyContent: "center" }}>
          <svg
            viewBox="0 0 1300 230"
            xmlns="http://www.w3.org/2000/svg"
            className="process-svg"
          >
            <path
              d="M10 115C10.3333 86.6666 27 25.7999 91 8.99995C155 -7.80005 199.333 32.6666 213.5 54.9999C219.5 66.6666 231.7 99.9 232.5 139.5C233.5 189 292.5 220.5 320.5 224C348.5 227.5 401.5 228 434.5 171.5C440.333 167.667 453 144.9 457 84.5C465 51.1666 503.9 -10.6001 595.5 8.99995C620.5 15.3333 671.5 45.3999 675.5 115C674.667 151.333 695.7 224 786.5 224C877.3 224 899.333 134 899 89C907.333 57.6666 941.5 -2.2001 1011.5 8.99995C1099 23 1114.5 90.4999 1117 115"
              stroke="#54A8EE"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="11" cy="122.5" rx="11" ry="10.5" fill="#54A8EE" />
            <ellipse cx="1117" cy="115.5" rx="11" ry="10.5" fill="#54A8EE" />
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
                      style={stylesInline.circle}
                    />
                    <text
                      x={svgPositions[index].x - 20}
                      y={svgPositions[index].y + 20}
                      fill="#fff"
                      style={stylesInline.circleText}
                    >
                      {step.number}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="process-flow_2">
              <div className="process-card dados">
                <h3>1. Dados</h3>
                <p>Os dados são coletados através de diversas fontes.</p>
              </div>
              <div className="process-card ia">
                <h3>3. IA</h3>
                <p>
                  A equipe de IA desenvolve agentes com base no trabalho dos analistas
                  de dados, realizando verificações frequentes de controle de qualidade.
                </p>
              </div>
              <div className="process-card produtos">
                <h3>5. Produtos e soluções</h3>
                <p>
                  A equipe de desenvolvimento cria produtos em tempo real adaptados às
                  necessidades dos clientes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="curved-divider-svg">
        <img src={curva} alt="Divisor Curvado" />
      </div>
    </>
  );
};

export default Process;
