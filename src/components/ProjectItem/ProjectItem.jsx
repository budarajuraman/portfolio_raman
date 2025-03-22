import React, { useState } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ name, image, g_url, about }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="project-card">
      <img src={image} alt={name} />
      <div className="project-item-contents">
        <h2>{name}</h2>
      </div>
      
      <div className="project-demo-btn">
        <button className="btn-1">
          <a href={g_url} target="_blank" rel="noopener noreferrer">GitHub</a>
        </button>
        <button className="btn-2" onClick={togglePopup}>About</button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <h3>{name}</h3>
            <p>{about}</p>
            <button className="close-btn" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
