import React from 'react'
import './BedSheet.css'
import images from '../../constants/images'
function BedSheet() {
  return (
      <div className='bedsheet_container'>
          <div className='bedsheet_info_card'>
              <div className='bedsheet_headline'>Bedsheet Sets</div>
              <div className='bedsheet_price'>
                  <span className='current'>$50</span>
                  <strike className='prev'>$220</strike>
              </div>
              <div className='bedsheet_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              <button className='btn_transparent'>VIEW DETAILS</button>
          </div>
    </div>
  )
}

export default BedSheet