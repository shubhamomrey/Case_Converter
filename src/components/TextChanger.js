import React, { useState, useEffect } from 'react';
import '../App.css';

function TextRotator() {
  const [wordIndex, setWordIndex] = useState(0);
  const texts = ["UPPER CASE", "lower case", "Title Case", "Reverse String", "Download Text"];
  const [currentWord, setCurrentWord] = useState(texts[wordIndex]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < currentWord.length - 1) {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1); // Display the whole word letter by letter
      } else {
        // When all letters are displayed, wait for 2 seconds
        clearInterval(interval);
        setTimeout(() => {
          // After waiting, move to the next word
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % texts.length);
          setCurrentWord(texts[wordIndex]);
          setCurrentLetterIndex(0); // Reset the letter index
        }, 3000); // Wait for 2 seconds
      }
    }, 100); // Display each letter every 200 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [texts, currentWord, wordIndex, currentLetterIndex]);

  return (
    <div className='my-3 textchange'>
      <h1>
        Enter your text here for <span style={{ color: "blue" }}>{currentWord.substring(0, currentLetterIndex + 1)}</span>
      </h1>
    </div>
  );
}

export default TextRotator;


  