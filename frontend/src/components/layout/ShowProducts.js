import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../_Atomic/ProductCard'


function ShowProducts() {
  return (
      
    <>
    <Container display="flex" sx={{margin: 'auto'}}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom:2, marginTop:2 }}>Pizzas</Typography>
        <Divider sx={{ marginBottom:5}} />

     <Grid  display="flex" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{marginBottom: 8}}>
     <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
        
    </Grid>

    <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom:2 }}>Drinks</Typography>
        <Divider sx={{ marginBottom:5}} />

     <Grid  display="flex" container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{marginBottom: 8}}>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
         <Grid item xs={12} sm={6}>
         <ProductCard />
         </Grid>
        
    </Grid>
    </Container>
    </>
  )
}

export default ShowProducts