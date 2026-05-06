import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState} from 'react';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const handleNextImage = (e) => {
    if (hasImages && project.images.length > 1) {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  return (
    <div className="project-grid-container"> 

    {/* Left Side: Image Preview */}
    <div className="project-display-box" onClick={handleNextImage}>
      {hasImages ? (
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="project-main-image"
        />

      ):(
        <div className="project-placeholder">Coming Soon.</div>
      )}
    </div>
      
      {/* Right Side: Text & Links*/}

      <div className="project-info-box">
        <h3 className="project-title-alt">{project.title}</h3>
        <p className="project-desc-alt">{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>

      <div className="project-action-row">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="link-icon">
            <FiGithub size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;