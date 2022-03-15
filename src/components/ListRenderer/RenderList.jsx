
import { BiStar } from 'react-icons/bi'
import React from 'react'
import './RenderList.css'
function RenderList(props) {
  return (
      <div className='list-container'>
          <img className='list-img' src={props.image} alt={props.description} width={ 198}/>
          <div className='list-detail'>
                <div className='list-description p-cap-smid'>{props.description}</div>
                <div>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                </div>
                <div className='list-price p-cap-lmid'>${ props.price}</div>
         </div>
    </div>
  )
}

export default RenderList