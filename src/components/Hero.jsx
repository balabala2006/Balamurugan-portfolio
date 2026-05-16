import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Mail } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import './Hero.css';

const Hero = () => {
  const { reduceMotion } = useMotionPrefs();

  const contentMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } }
    : { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };

  const imageMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } }
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: 'easeOut' },
      };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div className="hero-content" {...contentMotion}>
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name text-gradient">BALAMURUGAN M</h1>
          <h3 className="role">Software Developer & Founder</h3>
          <p className="bio">
            Motivated and responsible individual with a strong interest in learning new skills
            and applying them effectively in real-world environments.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="/Balamurugan_Resume.pdf"
              download="Balamurugan_M_Resume.pdf"
              className="btn btn-secondary glass"
            >
              Download Resume <FileDown size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-image-container" {...imageMotion}>
          <div className="image-blob glass">
            <img src="/profile.png" alt="Balamurugan M" className="profile-img" />
          </div>
          {!reduceMotion && (
            <>
              <div className="float-element e1 glass hero-float" />
              <div className="float-element e2 glass hero-float hero-float--slow" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
