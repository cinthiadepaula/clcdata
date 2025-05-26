import React, { useEffect, useState } from "react";

export function TypingBlock({ lines, typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 1000 }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[currentLineIndex];

    let timeout;

    if (!isDeleting && displayedText.length < currentLine.length) {
      // Digitar letra a letra
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentLine.length) {
      // Aguarda antes de começar a apagar
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayedText.length > 0) {
      // Apaga letra a letra
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Vai para a próxima palavra e começa a digitar
      setIsDeleting(false);
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentLineIndex, lines, typingSpeed, deletingSpeed, delayBetweenWords]);

  return <h1>{displayedText}<span className="cursor">|</span></h1>;
}
