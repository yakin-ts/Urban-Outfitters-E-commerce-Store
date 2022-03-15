import React from 'react'
import images from '../../constants/images';
import './HotDeals.css';

function HotDeals() {
  return (
      <div className='hotdeals_container'>
            <div className='hotdeals_image'>
                <img src={images.hotdeal} alt='chiar furniture' />
            </div>
            <div className='hotdeals_info'>
                  <p className='hotdeals_info_title'>Hot Deals This Week</p>
                  <p className='hotdeals_info_body'>Sale up 50% Modern Furniture</p>
                  <button className='btn_transparent'>VIEW NOW</button>
            </div>
      </div>
  )
}

export default HotDeals