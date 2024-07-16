import MouseNeon from '../../components/MouseNeon/MouseNeon';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import styles from './App.module.css'
import WaveBordertop from '../../components/waveBorder/WaveBorderTop/WaveBorderTop';
import WaveBorderBottom from '../../components/waveBorder/WaveBorderBottom/WaveBorderBottom';

function App() {

  return (
    <div>
      <MouseNeon />
      <Header />
      <Home />
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
      <div className={styles.projects} id='projects'>
        <div className={styles.collum}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.collum}>
          <div></div>
          <div></div>
        </div>
        
      </div>
      <WaveBordertop />
      <WaveBorderBottom />
      <footer id='contat'>

      </footer>
    </div>
  );
}

export default App;