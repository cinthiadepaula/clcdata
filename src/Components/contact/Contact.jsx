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
       <p>Telefone: (11) 94006-1609</p>
       <p>WhatsApp: (11) 94006-1609</p>
       <p>Email: adm@clcdata.com.br</p>
       </span>
       </div>

       <div className={styles.politic}>
        <button className={styles.button}><a href="https://api.whatsapp.com/send/?phone=5511940061609&text&type=phone_number&app_absent=0" target="_blank">Fale conosco</a></button>

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
