import React, { useEffect, useState } from "react";
import backgroundHeader from "./../../assets/background_header.png";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        height: "90vh",
        backgroundImage: `linear-gradient(to right, rgba(3, 0, 20, 0.76) 40%, transparent, rgba(3, 0, 20, 0.76) 40%), url(${backgroundHeader})`,
        backgroundSize: isMobile ? "cover" : "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "flex-start",
        padding: "2rem",
        textAlign: isMobile ? "left" : "left",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "25px" : "48px",
          fontWeight: "bold",
          color: "rgba(105, 197, 255, 1)",
          margin:"15rem"
        }}
      >
        Transformamos <br /> dados em estratégias
      </h1>
    </section>
  );
}

export default Hero;
