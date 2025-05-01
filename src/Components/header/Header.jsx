import React, { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Fecha o menu ao voltar para desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.wrapper}>
      <div style={styles.header}>
  <img src={logo} style={styles.logo} alt="Logo" />
  
  {isMobile ? (
    <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
      ☰
    </button>
  ) : (
    <nav style={styles.navDesktop}>
      <a href="#about" style={styles.link}>Quem somos</a>
      <a href="#process" style={styles.link}>Nossos Processos</a>
      <a href="#solution" style={styles.link}>O que fazemos</a>
      <a href="#contact" style={styles.link}>Contato</a>
    </nav>
  )}
</div>


      {/* Mobile Menu Drawer */}
      {isMobile && menuOpen && (
        <div style={styles.drawer}>
          <nav style={styles.navMobile}>
            <a href="#about" style={styles.link} onClick={() => setMenuOpen(false)}>Quem somos</a>
            <a href="#process" style={styles.link} onClick={() => setMenuOpen(false)}>Nossos Processos</a>
            <a href="#solution" style={styles.link} onClick={() => setMenuOpen(false)}>O que fazemos</a>
            <a href="#contact" style={styles.link} onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        </div>
      )}

     
     
    </header>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    zIndex: 10,
    top: 0,
  },
  header: {
    width: "100%",
    maxWidth: "1200px",
    height: "5rem",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "0 0 16px 16px",
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxSizing: "border-box",
  },
  
  logo: {
    width: "10rem",
    zIndex: 2,
  },
  hamburger: {
    fontSize: "24px",
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    zIndex: 20,
  },
  navDesktop: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "250px",
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    zIndex: 15,
    boxSizing: "border-box",
    overflowY: "auto",
    transform: "translateX(0)", // Inicialmente visível
    transition: "transform 0.3s ease-in-out", // Animação suave
  },
  navMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  link: {
    fontSize: "12px",
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
