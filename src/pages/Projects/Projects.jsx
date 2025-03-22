import React from 'react'
import './Projects.css'
import { project_list } from '../../assets/assets'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

const Projects = () => {
  return (
    <div className="project">
        <div className="project-title-section">   
            <h1>My <span>Projects</span></h1>
        </div>
        <div className="project-display-list">
          {
            project_list.map((project)=>{
              return <ProjectItem key={project.id} name={project.title} image={project.img} g_url={project.git_view} about={project.description} />
            })
          }
        </div>
      
    </div>
  )
}

export default Projects
