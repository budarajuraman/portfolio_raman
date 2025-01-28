import React from 'react'
import './ProjectItem.css'

const ProjectItem = ({name,image,g_url,l_url}) => {
  return (
    <div className="project-card">
        <img src={image} alt="" />
        <div className="project-item-contents">
            <h2>{name}</h2>
        </div>
        <div className="project-demo-btn">
            <button className="btn-1"><a href={g_url}>GitHub</a></button>
            {/* <button className="btn-2"><a href={l_url}>View Demo</a></button> */}
        </div>
      
    </div>
  )
}

export default ProjectItem
