import React, { useState, useEffect } from 'react';
import './App.css';
import MouseNeon from '../../components/MouseNeon/MouseNeon';

function App() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["Olá", "Hello", "Hola"];
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGreeting(false);
      setTimeout(() => {
        setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setShowGreeting(true);
      }, 900);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [greetingIndex]);

  return (
    <div className="App">
      <main className='main-title'>
        <h2 className='testScroll'>
          <span className={`${showGreeting ? '' : 'fade-out'}`}>{greetings[greetingIndex]}</span>, eu me chamo<br />

          <span className='neon-title'>George</span>
        </h2>
        <MouseNeon />
      </main>
    </div>
  );
}

export default App;