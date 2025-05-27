import React, { useEffect, useState } from "react";
import "./TypingBlock.css";

export function TypingBlock({ lines, fadeDuration = 1000, displayDuration = 2000 }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout1 = setTimeout(() => setVisible(false), displayDuration); // inicia fade out
    const timeout2 = setTimeout(() => {
      setCurrentLineIndex((prev) => (prev + 1) % lines.length); // muda frase
      setVisible(true); // inicia fade in
    }, displayDuration + fadeDuration); // espera fade out terminar

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentLineIndex, displayDuration, fadeDuration, lines.length]);

  return (
    <h1 className={`fade-text ${visible ? "fade-in" : "fade-out"}`}>
      {lines[currentLineIndex]}
    </h1>
  );
}
