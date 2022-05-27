import React from 'react'
import MetaData from '../components/layout/MetaData'
import HeaderTest from '../components/layout/HeaderTest'
import ShowProducts from '../components/layout/ShowProducts'


function Homepage() {
  return (
    <><div>
      <MetaData title={'Home Page'} />
      <ShowProducts />

    </div></>
  )
}

export default Homepage