import React from "react";
import check from "./../../assets/fi.svg";
import styles from "./Solutions.module.css";
import Container from "../container/Container";

const topics = [
  {
    title: "Monitorar",
    items: [
      "Monitoramento contínuo 24/7 de redes sociais, imprensa, blogs, podcasts e discursos públicos",
      "Ferramentas proprietárias e uso de IA para leitura, análise e cruzamento de grandes volumes de dados",
      "Coleta de dados em tempo real, com alertas de risco, oportunidades e tendências"
    ]
  },
  {
    title: "Entender",
    items: [
      "Diagnóstico aprofundado de marcas, pessoas e cenários digitais",
      "Dashboards customizados, interativos e atualizados em tempo real",
      "Análise de sentimento, reputação e performance em diferentes canais",
      "Interpretação estratégica feita por especialistas em dados e contexto político-social"
    ]
  },
  {
    title: "Agir",
    items: [
      "Planejamento estratégico de comunicação e reputação com base nos dados coletados",
      "Planos de ação para mitigação de riscos e blindagem reputacional",
      "Estratégias para momentos sensíveis, lançamentos, crises ou campanhas",
      "Equipe de interação estratégica (community managers) para atuação direta nos canais digitais",
      "Gestão de Crise"
    ]
  },
  {
    title: "Consultoria em Inovação",
    items: [
      "Acompanhamento das principais tendências em tecnologia e comportamento digital",
      "Mapeamento e recomendação de novas ferramentas, plataformas e formatos de comunicação",
      "Apoio para posicionar marcas e lideranças de forma atualizada e relevante no ambiente digital",
      "Diagnóstico de presença digital com foco em inovação, diferenciação e impacto"
    ]
  }
];

function Solutions() {
  return (
    <>
      <section id="solution" className={styles.section}>
        <Container>
          <div className={styles.glow}></div>
          <div className={styles.contentWrapper}>
            <h1 className={styles.gradientText}>O que fazemos</h1>
            <p className={styles.subTitle}>
              Na CLC Data, oferecemos uma solução completa de inteligência e ação estratégica, que pode ser contratada de forma integrada ou por etapas específicas:
            </p>

            <div className={styles.textContainer}>
              <ul className={styles.topicsGrid}>
                {topics.map((topic, index) => (
                  <li className={styles.topicWrapper} key={index}>
                    <div className={styles.topicTitle}>{topic.title}</div>
                    <ul className={styles.subItemsAlwaysOpen}>
                      {topic.items.map((item, idx) => (
                        <li key={idx} className={styles.listItem}>
                          <img src={check} className={styles.icon} alt="check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.glow2}></div>
        </Container>
      </section>

      <div className={styles.text_rodape}>
        <p>
          Nosso trabalho é dinâmico, estratégico e <br />
          orientado a resultado.
        </p>
      </div>
    </>
  );
}

export default Solutions;
