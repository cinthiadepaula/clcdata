import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/logo.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Logo" />
        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.hamburger}>
            ☰
          </button>
        ) : (
          <nav className={styles.navDesktop}>
            <a href="#about" className={styles.link}>Quem somos</a>
            <a href="#solution" className={styles.link}>O que fazemos</a>
            <a href="#process" className={styles.link}>Nossos Processos</a>
            <a href="#contact" className={styles.link}>Contato</a>
          </nav>
        )}
      </div>
      {isMobile && menuOpen && (
        <div className={styles.drawer}>
          <nav className={styles.navMobile}>
            <a href="#about" className={styles.link} onClick={() => setMenuOpen(false)}>Quem somos</a>
            <a href="#solution" className={styles.link} onClick={() => setMenuOpen(false)}>O que fazemos</a>
            <a href="#process" className={styles.link} onClick={() => setMenuOpen(false)}>Nossos Processos</a>
            <a href="#contact" className={styles.link} onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
