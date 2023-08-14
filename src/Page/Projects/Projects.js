import React from 'react'
import ProjectCardButton from '../../Components/ProjectCardButton/ProjectCardButton'
import "./Projects.css"
import SocialProfileCard from '../../Components/SocialProfileCard/SocialProfile'
import { projectData } from '../../Data/Data'
function Projects() {
  
  return (
    <div className='projects'>
      {projectData &&
        projectData.map((item, key) => <ProjectCardButton
          key={key}
          name={item.name}
          title={item.title}
          img={item.img}
          link={item.link}
        />
        )}
      <SocialProfileCard />

    </div>
  )
}

export default Projects
