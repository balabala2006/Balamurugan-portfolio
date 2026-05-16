import { motion } from 'framer-motion';
import { Code, Monitor, Heart, Globe } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import { fadeInView, sectionHeaderMotion } from '../utils/sectionMotion';
import './Skills.css';

const Skills = () => {
  const { reduceMotion } = useMotionPrefs();

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code />,
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      title: 'Web Technologies',
      icon: <Monitor />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    },
    {
      title: 'Soft Skills',
      icon: <Heart />,
      skills: ['Adaptability', 'Responsible', 'Disciplined', 'Team Player'],
    },
    {
      title: 'Languages',
      icon: <Globe />,
      skills: ['English', 'Tamil'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="app-container">
        <motion.div className="section-header" {...sectionHeaderMotion(reduceMotion)}>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card glass"
              {...fadeInView(reduceMotion, { delay: reduceMotion ? 0 : index * 0.08 })}
            >
              <div className="skill-header">
                <div className="skill-icon text-gradient">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
