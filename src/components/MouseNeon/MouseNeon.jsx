import React, { useState, useEffect } from 'react';
import './MouseNeon.css'; // Estilo CSS para o efeito neon

const MouseNeon = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Define o atraso
      const delay = 15;
      
      // Calcula as coordenadas do mouse com um leve atraso
      const x = event.clientX; // Ajuste opcional para o centro do elemento
      const y = event.clientY; // Ajuste opcional para o centro do elemento
      
      // Atualiza o estilo com o atraso
      const newStyle = {
        left: `${x}px`,
        top: `${y}px`,
      };

      // Aplica o atraso
      setTimeout(() => {
        setStyle(newStyle);
      }, delay);
    };

    // Adiciona o event listener para seguir o mouse
    document.addEventListener('mousemove', handleMouseMove);

    // Remove o event listener quando o componente é desmontado
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Executa somente uma vez após a montagem do componente

  return <div className="neon-circle" style={style}></div>;
};

export default MouseNeon;
