import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const { reduceMotion } = useMotionPrefs();

  const springScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const directScale = useTransform(scrollYProgress, (v) => v);
  const scaleX = reduceMotion ? directScale : springScale;

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
