import { motion } from 'framer-motion';
import './BackgroundElements.css';

const BackgroundElements = () => {
  return (
    <div className="background-container">
      <motion.div 
        className="bg-blob blob-1"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="bg-blob blob-2"
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, -100, 0, 100, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
      <motion.div 
        className="bg-blob blob-3"
        animate={{
          x: [0, 50, -50, 100, 0],
          y: [0, 150, 50, -50, 0],
          scale: [1, 0.8, 1.2, 1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      />
    </div>
  );
};

export default BackgroundElements;
