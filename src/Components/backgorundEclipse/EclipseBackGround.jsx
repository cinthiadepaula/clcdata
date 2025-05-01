// src/Components/EclipseBackground.jsx
import React from "react";
import eclipse from "./../../assets/eclipse.png"; // ajuste o caminho conforme seu projeto

const EclipseBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${eclipse})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%", // altura ajustável
        zIndex: 1, // fica atrás do conteúdo
        pointerEvents: "none", // garante que não bloqueie cliques
      }}
    />
  );
};

export default EclipseBackground;
