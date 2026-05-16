import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import { fadeInViewX, sectionHeaderMotion } from '../utils/sectionMotion';
import './Experience.css';

const Experience = () => {
  const { reduceMotion } = useMotionPrefs();

  const experiences = [
    {
      type: 'work',
      title: 'Founder & Developer',
      organization: 'TREVOX TECH',
      date: 'Present',
      description: 'A startup providing software solutions.',
      icon: <Briefcase />,
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate (HSC)',
      organization: 'Kongu National Higher Secondary School, Erode',
      date: '2023',
      description: 'Completed with an aggregate percentage of 80%.',
      icon: <GraduationCap />,
    },
    {
      type: 'education',
      title: 'Secondary School Leaving Certificate (SSLC)',
      organization: 'Kongu National Higher Secondary School, Erode',
      date: '2021',
      description: 'Finished with an aggregate percentage of 84%.',
      icon: <GraduationCap />,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="app-container">
        <motion.div className="section-header" {...sectionHeaderMotion(reduceMotion)}>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              {...fadeInViewX(reduceMotion, index % 2 === 0, {
                delay: reduceMotion ? 0 : index * 0.1,
              })}
            >
              <div className="timeline-content glass">
                <div className="timeline-icon">{exp.icon}</div>
                <div className="timeline-body">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-org text-gradient">{exp.organization}</h4>
                  <div className="timeline-date">{exp.date}</div>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
