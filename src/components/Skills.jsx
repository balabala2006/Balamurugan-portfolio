import { motion } from 'framer-motion';
import { Code, Monitor, Heart, Globe } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code />,
      skills: ['C', 'C++', 'Java', 'Python']
    },
    {
      title: 'Web Technologies',
      icon: <Monitor />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React']
    },
    {
      title: 'Soft Skills',
      icon: <Heart />,
      skills: ['Adaptability', 'Responsible', 'Disciplined', 'Team Player']
    },
    {
      title: 'Languages',
      icon: <Globe />,
      skills: ['English', 'Tamil']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="app-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="skill-header">
                <div className="skill-icon text-gradient">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 210, 255, 0.1)' }}
                  >
                    {skill}
                  </motion.span>
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
