import React from "react";
import styles from "./Contact.module.css";
import Container from "../container/Container"; 
import logo from '../../assets/logo.png'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      
       <div className={styles.contentWrapper}>
      <div className={styles.contact}> 
      <img src={logo} className={styles.logo}/>
      <span>
       <p>Telefone: (xx) xxxx-xxxx</p>
       <p>WhatsApp: (xx) xxxx-xxxx</p>
       <p>Email: adm@clcdata.com.br</p>
       </span>
       </div>

       <div className={styles.politic}>
        <button className={styles.button}>Fale conosco</button>

        <span>
       <p><a>Política de Privacidade</a></p>
        <p><a>Política de Cookies</a></p>
        </span>
        
       </div>
</div>
        
      
      
    </section>
  );
}

export default Contact;
