// TypingBlock.jsx
import { useEffect, useState } from 'react';
import { TypingLine } from './TypingLine.jsx';

export function TypingBlock({ lines }) {
  const [visibleCount, setVisibleCount] = useState(0);

  const charDelay = 0.05;
  const charDuration = 0.1;

  // Quebrar todas as linhas em palavras, achatar em um array só
  const words = lines.flatMap(line => line.split(' '));

  useEffect(() => {
    if (visibleCount >= words.length) return;

    const currentWordLength = words[visibleCount].length;
    const typingTime = currentWordLength * (charDelay + charDuration);

    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, typingTime * 1000 + 300); 

    return () => clearTimeout(timeout);
  }, [visibleCount, words]);

  return (
    <div>
      {words.slice(0, visibleCount + 1).map((word, index) => (
        <div key={index} style={{ whiteSpace: 'nowrap' }}>
          <TypingLine text={word} />
        </div>
      ))}
    </div>
  );
}

