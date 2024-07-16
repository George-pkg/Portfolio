import ShowPhrases from "../ShowPhrases/ShowPhrases";
import styles from './Home.module.css'

function Home() {
    return (
      <main className={styles.home} >
        <h1 className={styles.homeTitle}>
          <ShowPhrases phrases={["Olá", "Hello", "Hola", "こんにちは"]}/>
          <br />me chamo<br/>
          <span className={styles.homeTitle}>George</span>
        </h1>
      </main>
    );
}

export default Home;