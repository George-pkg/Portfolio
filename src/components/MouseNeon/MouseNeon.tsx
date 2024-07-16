import React, { useState, useEffect } from 'react';
import './MouseNeon.css';

const MouseNeon = () => {
  const [style, setStyle] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      
      const x = event.pageX;
      const y = event.pageY;
      
      const newStyle = {
        left: `${x}px`,
        top: `${y}px`,
      };

      setIsVisible(true);
      setStyle(newStyle);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Executa somente uma vez após a montagem do componente

  return isVisible ? <div className={"neon-circle"} style={style}></div> : null;
};

export default MouseNeon;
