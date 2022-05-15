import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert';

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const Home = ({ match }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products)

  const keyword = match.params.keyword

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    //alert.success('Success')
    dispatch(getProducts(keyword));
  }, [dispatch, alert, error, keyword])

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={'Home Page'} />
          <section id="products" className="container mt-4">
          <h1 id="products_heading">Pizza Flavours</h1>
            <div className="row">
              {products && products.map(product => (
                <Product key={product._id} product={
                  product.category === 'Pizzas' && (product) } />
              ))}
            </div>
          </section>
          <section id="products" className="container mt-5">
          <h1 id="products_heading">Beverages</h1>
            <div className="row">
              {products && products.map(product => (
                <Product key={product._id} product={product.category === 'Beverages' && (product) } />
              ))}
            </div>
          </section>
          <section id="products" className="container mt-5">
          <h1 id="products_heading">Sauces</h1>
            <div className="row">
              {products && products.map(product => (
                <Product key={product._id} product={product.category === 'Sauces' && (product) } />
              ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home