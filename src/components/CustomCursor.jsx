import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import './CustomCursor.css';

const CustomCursor = () => {
  const { reduceMotion } = useMotionPrefs();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', mouseMove, { passive: true });
    document.addEventListener('mouseleave', mouseLeave);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, .project-card, .skill-tag'
    );

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'tween', duration: 0.08 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? 'rgba(0, 210, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(0, 210, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'tween', duration: 0.12 }}
      />
    </>
  );
};

export default CustomCursor;
