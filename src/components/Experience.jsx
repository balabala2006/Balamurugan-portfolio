import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Founder & Developer',
      organization: 'TREVOX TECH',
      date: 'Present',
      description: 'A startup providing software solutions.',
      icon: <Briefcase />
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate (HSC)',
      organization: 'Kongu National Higher Secondary School, Erode',
      date: '2023',
      description: 'Completed with an aggregate percentage of 80%.',
      icon: <GraduationCap />
    },
    {
      type: 'education',
      title: 'Secondary School Leaving Certificate (SSLC)',
      organization: 'Kongu National Higher Secondary School, Erode',
      date: '2021',
      description: 'Finished with an aggregate percentage of 84%.',
      icon: <GraduationCap />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="app-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content glass">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
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
