import WaveBorderBottom from "../../../components/waveBorder/WaveBorderBottom/WaveBorderBottom";
import WaveBordertop from "../../../components/waveBorder/WaveBorderTop/WaveBorderTop";
import styles from "./About.module.css";

export default function About() {
  return(
    <div>
      <WaveBordertop />
      <div className={styles.about} id='about'>
        <div className={styles.title}>
          <h1>Quem sou</h1>
        </div>
        <div className={styles.text}>
          <p>
          Olá, tenho 20 anos e sou apaixonado por astronomia e programação, em consequência, me tornei um programador fascinado por conhecimento.<br /><br />
          Tenho em minha bagagem de linguagens: <span>Node.js, Flutter, React, Python e MongoDB </span>com banco de Dados.<br /><br />
          Atualmente estou cursando Análise e Desenvolvimento de Sistemas e trabalho como full-stack na Tyconnex, mas tenho foco no back-end.
          </p>
        </div>
      </div>
      <WaveBorderBottom />
    </div>
  );
};