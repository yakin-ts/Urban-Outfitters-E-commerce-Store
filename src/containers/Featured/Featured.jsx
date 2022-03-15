import React from 'react'
import './Featured.css'
import images from '../../constants/images.js'
function Featured() {
  return (
      <div className='featured_container'>
        <div style={{backgroundColor:'#FAFAFA'}} className='featured_item'>
          <div className='featured_item_img'>
            <img src={images.featuredChair}  width ={353} alt='featured chair' /> 
        </div>
        <div className='featured_item_desc'>
          <p>Iny Vintage Chair</p>
          <button className='btn_transparent'>VIEW DETAILS</button>
        </div>
        </div>
      <div style={{backgroundColor:'#EAE9E7'}} className='featured_item'>
        <div className='featured_item_img'>
              <img src={images.featuredPot} width={246} height={368} alt='featured Pot' /> 
          </div>
          <div className='featured_item_desc'>
            <p>Large Terracoat Vase</p>
            <button className='btn_transparent'>VIEW DETAILS</button>
        </div>
      </div>
      </div>
  )
}

export default Featured