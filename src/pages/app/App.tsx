import MouseNeon from '../../components/MouseNeon/MouseNeon';
import Header from '../../components/Header/Header';
import Home from './Home/Home';
import styles from './App.module.css'
import WaveBordertop from '../../components/waveBorder/WaveBorderTop/WaveBorderTop';
import WaveBorderBottom from '../../components/waveBorder/WaveBorderBottom/WaveBorderBottom';
import About from './about/About';
import Projects from './projects/Projects';

function App() {

  return (
    <div>
      <MouseNeon />
      <Header />
      <Home />
      <About />
      <Projects />
      <WaveBordertop />
      <WaveBorderBottom />
      <footer id='contat'>

      </footer>
    </div>
  );
}

export default App;