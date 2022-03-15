import React from 'react'
import './TopRating.css'
import { rating } from '../../constants/rating'
import RenderList from '../../components/ListRenderer/RenderList'
import LoadMore from '../../components/LoadMore/LoadMore'


  
function TopRating() {
  return (
    <div className='toprating_container'>
    <div className='toprating_title'>TOP RATING</div>
    <div className='toprating_items_container'>
      {
        
        rating.map((rating, i) => {
          return (
            <RenderList
            image={rating.image}
            description={rating.description}
            rating={rating.rating}
            price={rating.price}
          />
          );
        })
        }
      </div>
      <LoadMore/>
    </div>
  )
}

export default TopRating