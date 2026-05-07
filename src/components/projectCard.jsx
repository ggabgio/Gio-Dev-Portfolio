import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { FaYoutube } from "react-icons/fa";
import { useState} from 'react';
import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const handleNextImage = (e) => {
    if (hasImages && project.images.length > 1) {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrevImage = (e) => {
    if (hasImages && project.images.length > 1) {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 +  project.images.length) % project.images.length);
    }
  };

  return (
    <div className="project-grid-container"> 

    {/* Left Side: Image Preview */}
    <div className="project-display-box">
      {hasImages ? (
        <>
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="project-main-image"
        />
        
        {/* pagination ui*/}
        {project.images.length > 1 && (
          <div className="pagination-controls">
            <button className="nav-arrow" onClick={handlePrevImage}>
              <FiChevronLeft />
            </button>

            <div className="dot-container">
              {project.images.map((_, index)=> (
              <div
                key={index}
                className={`dot ${index === currentIndex ?'active' : ''}`}
              />
          ))}
          </div>

        <button className="nav-arrow" onClick={handleNextImage}>
          <FiChevronRight />
        </button>
        </div>
      )}
      </>
        
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
        {project.live &&(
          <a href={project.live} target="_blank" rel="noreferrer" className="link-icon">
           <FiExternalLink size={20}/>
          </a>
        )}
        {project.youtube &&(
          <a href={project.youtube} target="_blank" rel="noreferrer" className="link-icon">
            <FaYoutube size={20}/>
          </a>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;