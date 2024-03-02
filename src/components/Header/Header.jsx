import React from "react";
import styles from "./Header.module.css";

export default function Header() {

  return ( 
    <header className={styles.header}>
      <nav className={styles.navegation}>

        <div>
          <a href="#"><h2 class={styles.logo}>FIVE</h2></a>
        </div>

        <div class={styles.contentNav}>
          <ul id="nav-menu" class={styles.navMenu}>
              <li><a href="#about" className={styles.link}>Quem sou</a></li>
              <li><a href="#projects" className={styles.link}>Projetos</a></li>
              <li><a href="#services" className={styles.link}>Serviços</a></li>
              <li><a href="#skills" className={styles.link}>Contato</a></li>
          </ul>
        </div>

      </nav>
    </header>
  );
}