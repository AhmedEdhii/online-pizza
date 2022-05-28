import React from 'react'
import MetaData from '../components/layout/MetaData'
import HeaderTest from '../components/layout/HeaderTest'
import ShowProducts from '../components/layout/ShowProducts'
import BannerCarousel from '../components/_Atomic/BannerCarousel'

function Homepage() {
  return (
    <><div>
      <MetaData title={'Home Page'} />
      <BannerCarousel />
      <ShowProducts />

    </div></>
  )
}

export default Homepage