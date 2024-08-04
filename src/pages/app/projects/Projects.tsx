import { useLayoutEffect } from "react";
import styles from './Projects.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.${styles.projects}`, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.title}`,
        start: "top 600px",
        end: "bottom 550px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf(`.${styles.container}`);
    }
  }, [])

  return (
    <div className={styles.projects} id='projects'>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.collum}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}