// components/TypingLine.jsx
import { motion } from 'framer-motion';
import styles from './TypingLine.module.css'; // CSS para o cursor

export function TypingLine({ text, delay = 0 }) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        delay,
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={styles.typingLine}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className={styles.char}
          variants={child}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      <span className={styles.cursor}>|</span>
    </motion.div>
  );
}
