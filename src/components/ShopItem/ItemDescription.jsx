import React from 'react'
import { BiStar } from 'react-icons/bi'
import './ItemDesc.css'
function ItemDescription(props) {
  return (
      <div className='itemdesc_wrapper'>
          <p className='item_description p-cap-smid'>{props.description }</p>
          <div>
             <BiStar/>
             <BiStar/>
             <BiStar/>
             <BiStar/>
             <BiStar/>
          </div>
          <p className='item_rating p-cap-lmid'> $ { props.price}</p>
      </div>
  )
}

export default ItemDescription