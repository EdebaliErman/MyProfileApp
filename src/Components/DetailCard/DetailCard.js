import React from 'react'
import DetailButton from '../DetailButton/DetailButton'
import "./DetailCard.css"
function DetailCard() {
  return (
    <div className='detailCard'>
         <img src='https://cdn-icons-png.flaticon.com/512/5685/5685071.png' alt='detail' />
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
