import { useLayoutEffect } from "react";
import styles from './Footer.module.css';
import linkedin from '../../../assets/img/linkedin.png';
import email from '../../../assets/img/o-email.png';
import contato from '../../../assets/img/contato.png';
import github from '../../../assets/img/github.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footter() {
  function openLink(url: string): void {
    const win = window.open(url, '_blank');
    win?.focus();
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.${styles.footer}`, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.titleContacts}`,
        start: "top 600px",
        end: "bottom 550px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf(`.${styles.footer}`);
    }
  }, [])
  


  return  (
    <footer id='contat' className={styles.footer}>
      <h1 className={styles.titleContacts}>Contatos</h1>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={() => openLink("mailto:george.guiro@gmail.com")}>
          <img src={email} alt="E-mail" className={styles.img}/>
          <h2>E-mail</h2>
          <h2 className={styles.subtitle}>george.guiro@gmail.com</h2>
        </div>
        <div className={styles.icon} onClick={() => openLink("https://wa.me/5538998302973")}>
          <img src={contato} alt="Telefone" className={styles.img}/>
          <h2>Telefone</h2>
          <h2 className={styles.subtitle}>(38) 99830-2973</h2>
        </div>
        <div className={styles.icon} onClick={() => openLink("https://www.linkedin.com/in/george-rocha-a5949a251/")}>
          <img src={linkedin} alt="linkedin" className={styles.img}/>
          <h2>LinkedIn</h2>
          <h2 className={styles.subtitle}>@george-rocha</h2>
        </div>
        <div className={styles.icon} onClick={() => openLink("https://github.com/George-pkg")}>
          <img src={github} alt="GitHub" className={styles.img}/>
          <h2>GitHub</h2>
          <h2 className={styles.subtitle}>@George-pkg</h2>
        </div>
      </div>
    </footer>
  )
}