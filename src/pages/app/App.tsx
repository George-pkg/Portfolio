import React from 'react';
import './App.css';
import MouseNeon from '../../components/MouseNeon/MouseNeon';
import Header from '../../components/Header/Header';
import Home from './Home/Home';

function App() {

  return (
    <div className="App">
      <MouseNeon />
      <Header />
      <Home id="home"/>
    </div>
  );
}

export default App;