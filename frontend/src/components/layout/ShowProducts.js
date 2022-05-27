import { Container, Divider, Grid, Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import ProductCard from '../_Atomic/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'


function ShowProducts() {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products)


  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    //alert.success('Success')
    dispatch(getProducts());
  }, [dispatch, alert, error])

  return (
    <>
      {!loading && (
        <Container display="flex" sx={{ margin: 'auto' }}>

          <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>Pizzas</Typography>
          <Divider sx={{ marginBottom: 5 }} />

          <Grid display="flex" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{ marginBottom: 8 }}>
            {products && products.map(product => {
              return (product.category === 'Pizzas' && (product)) ?
                <Grid item xs={12} sm={6}>
                  <ProductCard key={product._id} product={product} />
                </Grid>
                : null;
            })}
          </Grid>

          <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>Drinks</Typography>
          <Divider sx={{ marginBottom: 5 }} />

          <Grid display="flex" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{ marginBottom: 8 }}>
          {products && products.map(product => {
              return (product.category === 'Beverages' && (product) ) ?
                <Grid item xs={12} sm={6}>
                  <ProductCard key={product._id} product={product} />
                </Grid>
                : null;
            })}
          </Grid>

          <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>Sauces</Typography>
          <Divider sx={{ marginBottom: 5 }} />

          <Grid display="flex" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{ marginBottom: 8 }}>
          {products && products.map(product => {
              return (product.category === 'Sauces' && (product)) ?
                <Grid item xs={12} sm={6}>
                  <ProductCard key={product._id} product={product} />
                </Grid>
                : null;
            })}
          </Grid>

        </Container>
      )}
    </>
  )
}

export default ShowProducts