import React from 'react'
import './profileCard.css';
import DetailButton from '../DetailButton/DetailButton';
import {profileData} from "../../Data/Data"
function ProfileCard() {
    return (
        <div className='profileCard'>
            <img className='profilFoto' src={profileData[0].img} alt='face' />
            <div className='profileCardText' >
                <h3>A Front-End Developer</h3>
                <h1>Edebali Erman</h1>
                <h4>I am Front-End Developer based in Sakarya</h4>
            </div>
            <div className='profileSvg'>
                <DetailButton toLink={'/about'} />
            </div>
        </div>
    )
}

export default ProfileCard
