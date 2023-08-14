import React from 'react'
import DetailButton from '../DetailButton/DetailButton'
import "./DetailCard.css"
function DetailCard() {
  return (
    <div className='detailCard'>
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
      </svg>
      <div className='detailCardTitle'>
        <div className='detailCardTitleText'>
          <h3>MORE ABOUT ME</h3>
          <h4>Credentials</h4>
        </div>
        <div>
          <DetailButton toLink={'/about/detail'} />
        </div>
      </div>
    </div>
  )
}

export default DetailCard
