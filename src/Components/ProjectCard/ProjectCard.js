import React from 'react'
import DetailButton from '../DetailButton/DetailButton'
import "./ProjectCard.css"
function ProjectCard() {
    return (
        <div className='projectCard'>
            <img src='https://static.thenounproject.com/png/1326791-200.png' alt='brain' />
            <div className='projectCardTitle'>
                <div className='projectCardTitleText'>
                    <h3>SHOWCASE</h3>
                    <h4>Projects</h4>
                </div>
                <div>
                    <DetailButton toLink={'/projects'} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
