import React from 'react'
import DetailButton from '../DetailButton/DetailButton'
import "./ProjectCardButton.css"
function ProjectCardButton({title,name,img,link}) {
  return (
    <div className='projectCardButton'>  
      <img src={img} alt={name} />
            <div className='projectCardTitleBox'>
                <div className='projectCardTextName'>
                    <h4>{name}</h4>
                    <h3>{title}</h3>
                </div>
                <div>
                    <DetailButton toLink={link} />
                </div>
            </div>
      
    </div>
  )
}

export default ProjectCardButton
