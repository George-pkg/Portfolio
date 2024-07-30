import styles from "./Header.module.css";

export default function Header() {

  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
        <ul id="nav-menu" className={styles.navMenu}>
            <li><a href="#about" className={styles.link}>Quem sou</a></li>
            <li><a href="#projects" className={styles.link}>Projetos</a></li>
            <li><a href="#contat" className={styles.link}>Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}