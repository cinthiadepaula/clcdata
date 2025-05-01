import React from "react";


function Contact() {
  return (
    <section id="contact" style={styles.container} >
       <hr style={styles.line} /> {/* LINHA SUPERIOR */}
      <div style={styles.glow}></div>
      <div style={styles.contentWrapper}>    
      <h1 style={styles.gradientText}>Contato</h1>
      
      <div style={styles.textContainer}>
          <p style={styles.contactLine}><span style={styles.background}> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg></span> adm@clcdata.com.br</p>
          <p style={styles.contactLine}><span style={styles.background}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>
</span>(xx)xxxxx-xxxx</p>

      </div>
    
      </div>
      
    </section>
  );
}

const styles = {
  container: {
    scrollMarginTop: "6rem",
   position:"relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // alinha tudo à esquerda
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden", // evita scroll do glow
   
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // alinha os textos à esquerda dentro do bloco central
    padding:"0",
    

  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    
  },
  gradientText: {
    backgroundImage: 'linear-gradient(to right,#0090D8, #8FBAFF)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontSize: '48px',
    fontWeight: 'bold',
  },
  background: {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0090D8",
    borderRadius: "50%",
    flexShrink: 0
  },
  contactLine: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "18px",
    color: "#fff"
  },
  glow: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)", // centraliza
    width: "800px",
    height: "800px",
    background: "radial-gradient(circle, rgba(0,144,216,0.4) 0%, rgba(0,0,0,0) 60%)",
  
    filter: "blur(100px)",
    pointerEvents: "none",
  },
  line: {
    width: "80%",
    height: "1px",
    background: "linear-gradient(to right, transparent, #1a1a2e, transparent)",
    border: "none",
    margin: "20px 0",
  },
  
};


export default Contact;
