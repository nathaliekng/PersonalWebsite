import React from 'react'
import ProjectButton from '../../components/ProjectButton';
import '../Pages.css';
import './Projects.css';
import careerCraftPreview from '../../assets/projects/CareerCraftAIPreview.png'

const projects = [
  {name:"CareerCraftAI", preview: careerCraftPreview, to: "https://pollen-reason-fb3.notion.site/CareerCraftAI-Stage-1-d4ba5eb1f91447b8950396bdaeed4d2d?pvs=4", className:"projectitem-container"},
  
];

function Projects() {
  return (
    <div className="pages">
      <div className = "page-header">
        <div className="heading">Projects</div>
        <div className="heading-details">
            Click to view details on my projects
          </div>
        <div>
          {
                projects.map((projectItem, index) => (
                  <ProjectButton
                    key={index} 
                    name={projectItem.name}
                    preview={projectItem.preview}
                    to={projectItem.to}
                    className={projectItem.className}
                  />
                ))
            }
        </div>  
      </div>
      
  </div>
  )
}

export default Projects