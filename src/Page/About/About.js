import React from 'react'
import "./About.css"
import SocialProfileCard from '../../Components/SocialProfileCard/SocialProfile'
import DetailCard from '../../Components/DetailCard/DetailCard'
import DowloadCvButton from '../../Components/DowloadCvButton/DowloadCvButton'
import { profileData } from '../../Data/Data'
function About() {
  return (
    <div className='about'>
      {profileData.map((profile, key) => <div key={key}>
        <div className='aboutItem'>
          <div className='aboutImageCard'>
            <img className='profilFoto' src={profile.img} alt='face' />
          </div>
          <div className='aboutInfoCard'>
            <h1>SELF-SUMMARY</h1>
            <div className='aboutInfoCardItem'>

              <h2>{profile.name}</h2>
              <h3>
                {profile.about}
              </h3>

            </div>
          </div>
        </div>
        <div className='aboutItem'>
          <div className='aboutCertificatesCard' >
            <h3>EDUCATION</h3>
            <div className='aboutCertificates'>
              <div>
                <h4>{profile.education.year[0]}</h4>
                <h3>{profile.education.school[0]}</h3>
              </div>
              <div>
              <h4>{profile.education.year[1]}</h4>
                <h3>{profile.education.school[1]}</h3>
              </div>
            </div>
          </div>
          <div className='aboutCertificatesCard' >
            <h3>CERTIFICATE</h3>
            <div className='aboutCertificates'>
              <div>
                <h4>2023-2023</h4>
                <h3>{profile.certificate[0]}</h3>
              </div>
              <div>
                <h4>2023-2023</h4>
                <h3>{profile.certificate[1]}</h3>
              </div>
              <div>
                <h4>2023-2023</h4>
                <h3>{profile.certificate[2]}</h3>
              </div>
            </div>
          </div>

        </div>
      </div>)}
      <div className='aboutItem'>
        <SocialProfileCard />
        <DetailCard />
        <DowloadCvButton />
      </div>
    </div>
  )
}

export default About
