import Header from '../../components/Header/Header';
import Home from './Home/Home';
import WaveBordertop from '../../components/waveBorder/WaveBorderTop/WaveBorderTop';
import WaveBorderBottom from '../../components/waveBorder/WaveBorderBottom/WaveBorderBottom';
import About from './About/About';
import Projects from './Projects/Projects';
import Footter from './Footer/Footer';

function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <WaveBordertop />
      <WaveBorderBottom />
      <Footter />
    </div>
  );
}

export default App;