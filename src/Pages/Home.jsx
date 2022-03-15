import React from 'react'
import BedSheet from '../containers/BedSheets/BedSheet'
import Featured from '../containers/Featured/Featured'
import Footer from '../containers/Footer/Footer'
import HotDeals from '../containers/HotDeals/HotDeals'
import ShopItems from '../containers/ShopItems/ShopItems'
import Subscribe from '../containers/Subscribe/Subscribe'
import TopRating from '../containers/TopRating/TopRating'

function Home() {
  return (
      <div className='app_homepage'>
          <HotDeals/>
          <Featured />
          <ShopItems />
          <BedSheet />
      <TopRating />
      <Subscribe />
      </div>
  )
}

export default Home