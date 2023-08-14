import React from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import DetailCard from '../../Components/DetailCard/DetailCard'
import SocialProfileCard from '../../Components/SocialProfileCard/SocialProfile'
import TotalCard from '../../Components/TotalCard/TotalCard'
import DowloadCvButton from '../../Components/DowloadCvButton/DowloadCvButton'


function Home() {

  return (
    <div className='home'>
      <div className='homeItem'>
        <ProfileCard />
        <DetailCard />
        <ProjectCard />
      </div>
      <div className='homeItem'>
        <SocialProfileCard />
        <TotalCard />
        <DowloadCvButton />
      </div>

    </div>
  )
}

export default Home
