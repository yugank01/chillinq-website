"use client"
import { useState, useEffect } from "react";

function N3xt({ text, element }) {
    const [animating, setAnimating] = useState(false);
  
    useEffect(() => {
      const sample = document.querySelector(element);
  
      if (animating) return;
  
      const sampleH = 50; // Replace with the desired height or use sample.offsetHeight
      const sampleT = sample.textContent; // Old text
      const sampleNT = text; // New text
  
      setAnimating(true);
      sample.style.height = `${sampleH}px`;
  
      // Original text element
      const samO = document.createElement('div');
      samO.style.transformOrigin = `0 ${sampleH / 2}px -${sampleH / 2}px`;
      samO.classList.add('t3xt');
      samO.textContent = sampleT;
  
      // New text element
      const samN = samO.cloneNode();
      samN.textContent = sampleNT;
      sample.textContent = '';
      sample.appendChild(samO);
      sample.appendChild(samN);
  
      samO.classList.add('t3xt-out');
      samN.classList.add('t3xt-in');
  
      samN.addEventListener('animationend', function (event) {
        sample.removeChild(samO);
        sample.removeChild(samN);
        sample.textContent = sampleNT;
        setAnimating(false);
      });
    }, [text, element, animating]);
  
    return null;
  }
  
  function Text() {
    const t3xts = [
      ['No!', 'This is', 'Patrick!'],
      ["I can't", 'see my', 'forehead'],
      ['Is mayonnaise', 'an instrument?'],
      ['F stands', 'for Fun', '🎶'],
      ['I wumbo', 'you wumbo', 'he/she/me wumbo'],
      ["It may be", "stupid, but", "it's also dumb"],
      ['Moss always', 'points to', 'civilization'],
    ];
  
    const [phraseIndex, setPhraseIndex] = useState(1);
    const [wordIndex, setWordIndex] = useState(0);
  
    const changetext = () => {
      if (wordIndex > 2) {
        setWordIndex(0);
        setPhraseIndex((prevPhraseIndex) => prevPhraseIndex + 1);
      }
  
      if (phraseIndex >= t3xts.length) {
        setPhraseIndex(0);
      }
  
      const term = t3xts[phraseIndex][wordIndex];
      N3xt(term, `.t3xt-${wordIndex + 1}`);
  
      if (wordIndex === 2) {
        setTimeout(changetext, 2000);
      } else {
        setTimeout(changetext, 150);
      }
      setWordIndex((prevWordIndex) => prevWordIndex + 1);
    };
  
    useEffect(() => {
      // Start it off
      setTimeout(changetext, 200);
    }, []);
  
    return (
      <div className="App">
        {/* Add elements for each text container like .t3xt-1, .t3xt-2, etc. */}
      </div>
    );
  }
  
  export default Text;