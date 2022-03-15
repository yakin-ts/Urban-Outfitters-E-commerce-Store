import React from 'react'
import './TopAd.css'
import images from '../../constants/images';


function TopAd() {
  return (
      <div className='topad_container'>
          <div className='topad_item'>
              <img src={images.shipping} alt='shipping icon' />
              <span className='p-up-vsml-trans'> Free Shipping</span>
          </div>
          <div className='topad_item'>
              <img src={images.money_back} alt='money-back icon' />
              <span className='p-up-vsml-trans'> Money Back</span>
          </div>
          <div className='topad_item'>
              <img src={images.support}  alt='support icon' />
              <span className='p-up-vsml-trans'> Support</span>
          </div>
      </div>
  )
}

export default TopAd