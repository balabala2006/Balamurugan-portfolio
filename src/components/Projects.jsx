import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import { fadeInView, sectionHeaderMotion } from '../utils/sectionMotion';
import './Projects.css';

const Projects = () => {
  const { reduceMotion } = useMotionPrefs();

  const projects = [
    {
      title: 'Job Recommendation System',
      description:
        'Developed a Job Recommendation System that suggests relevant jobs based on user skills, preferences, and profile data. Implemented filtering and matching logic to improve recommendation accuracy and user experience.',
      tags: ['React', 'Python', 'Machine Learning'],
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/balabala2006/Job-Recommendation-Website',
    },
    {
      title: 'Animal Type Classification',
      description:
        'Built an image-based classification model to distinguish between cattle and buffaloes using visual features. Focused on improving accuracy through feature extraction and model training.',
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      image: '/animal-type-classification.png',
      github: 'https://github.com/balabala2006/SIH-Cow-Breed-Classification',
    },
    {
      title: 'Social Community App',
      description:
        'Designed and developed a social community application to promote networking and content sharing among users. Ensured smooth navigation and interactive user experience.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: null,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="app-container">
        <motion.div className="section-header" {...sectionHeaderMotion(reduceMotion)}>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              {...fadeInView(reduceMotion, { delay: reduceMotion ? 0 : index * 0.08 })}
              {...(!reduceMotion && { whileHover: { y: -8 } })}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                <div className="project-overlay">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Code size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} repository`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    className="project-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
