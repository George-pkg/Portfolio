import styles from './Footer.module.css';
import linkedin from '../../../assets/img/linkedin.png';
import email from '../../../assets/img/o-email.png';
import contato from '../../../assets/img/contato.png';
import github from '../../../assets/img/github.png';

export default function Footter() {
  return  (
    <footer id='contat' className={styles.footer}>
      <h1 className={styles.title}>Contatos</h1>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src={email} alt="linkedin"  className={styles.img}/>
        </div>
        <div className={styles.icon}>
          <img src={contato} alt="linkedin"  className={styles.img}/>
        </div>
        <div className={styles.icon}>
          <img src={linkedin} alt="linkedin"  className={styles.img}/>
        </div>
        <div className={styles.icon}>
          <img src={github} alt="linkedin"  className={styles.img}/>
        </div>
      </div>
    </footer>
  )
}