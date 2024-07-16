import React, { useState, useEffect } from "react";
import styles from './ShowPhrases.module.css'

interface ShowPhrasesProps {
  phrases: Array<String>; 
}

export default function ShowPhrases({phrases = []}: ShowPhrasesProps) {

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showPhrase, setShowPhrase] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPhrase(false);
      setTimeout(() => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setShowPhrase(true);
      }, 900);
    }, 2500);

  return () => clearTimeout(timeout);
  }, [phraseIndex, phrases.length]);

  return (
    <span className={`${showPhrase ? null : styles.fadeOut} ${styles.homeTitle}`}>{phrases[phraseIndex]}</span>
  );

}