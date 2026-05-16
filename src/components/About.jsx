import { motion } from 'framer-motion';
import { User, BookOpen, Target } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import { sectionHeaderMotion } from '../utils/sectionMotion';
import './About.css';

const About = () => {
  const { reduceMotion } = useMotionPrefs();

  const containerVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12 },
        },
      };

  const itemVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
      };

  return (
    <section id="about" className="about-section">
      <div className="app-container">
        <motion.div className="section-header" {...sectionHeaderMotion(reduceMotion)}>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          className="about-content glass"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: reduceMotion ? '0px' : '-100px' }}
        >
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-image-container">
              <div className="about-image-wrapper glass">
                <img src="/profile.png" alt="Balamurugan M" className="about-img" loading="lazy" />
              </div>
            </motion.div>

            <div className="about-text-section">
              <div className="about-text-container">
                <motion.p variants={itemVariants} className="about-text">
                  I am a motivated and responsible individual with a strong interest in learning new
                  skills and applying them effectively in real-world environments.
                </motion.p>
                <motion.p variants={itemVariants} className="about-text">
                  As a dedicated team player with a positive attitude, I strive to build innovative
                  solutions that solve real problems.
                </motion.p>
              </div>

              <div className="about-cards">
                <motion.div variants={itemVariants} className="about-card glass">
                  <User className="about-icon" />
                  <h3>Dedicated</h3>
                  <p>Committed to delivering high-quality results.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="about-card glass">
                  <Target className="about-icon" />
                  <h3>Motivated</h3>
                  <p>Always looking for the next challenge.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="about-card glass">
                  <BookOpen className="about-icon" />
                  <h3>Adaptable</h3>
                  <p>Quick to learn and apply new technologies.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
