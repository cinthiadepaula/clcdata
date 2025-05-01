import React from "react";
import iconBw from './../../assets/bw_icon.png';

function Footer() {
  return (
    <section>
      <hr style={styles.line} /> {/* LINHA SUPERIOR */}

      <div style={styles.footerContent}>
        <p style={{opacity:"50%"}}>© Copyright 2024. Todos os direitos reservados.</p>
        <img src={iconBw} style={styles.img} alt="BW Icon" />
      </div>
    </section>
  );
}

const styles = {
  line: {
    width: "80%",
    height: "1px",
    background: "linear-gradient(to right, transparent, #1a1a2e, transparent)",
    border: "none",
    margin: "20px 0",
  },
  img: {
    width: "80px",
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    color: "#fff",
    fontSize:"10px",
  },
};

export default Footer;
