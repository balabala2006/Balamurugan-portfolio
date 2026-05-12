import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Job Recommendation System',
      description: 'Developed a Job Recommendation System that suggests relevant jobs based on user skills, preferences, and profile data. Implemented filtering and matching logic to improve recommendation accuracy and user experience.',
      tags: ['React', 'Python', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Animal Type Classification',
      description: 'Built an image-based classification model to distinguish between cattle and buffaloes using visual features. Focused on improving accuracy through feature extraction and model training.',
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      image: '/animal-type-classification.png'
    },
    {
      title: 'Social Community App',
      description: 'Designed and developed a social community application to promote networking and content sharing among users. Ensured smooth navigation and interactive user experience.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="app-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#" className="project-link"><Code size={20} /></a>
                  <a href="#" className="project-link"><ExternalLink size={20} /></a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
