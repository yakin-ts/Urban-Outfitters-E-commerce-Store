import React from 'react'
import './ShopItem.css'
import { items } from '../../constants/items.js'
import ItemDescription from './ItemDescription'
function ShopItem() {
  return (
      <div className='shopitem_container'>
          {items.map((item) => {
              return (
                <div className='shopitem'>
                    <div className='item_img'>
                      <img src={item.image} alt='item' />
                  </div>
                  <ItemDescription
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                      />
             </div>
             )
          })}
      </div>
  )
}

export default ShopItem