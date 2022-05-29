import {
    Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Collapse, IconButton, Grid, Button, Box, Item
} from '@mui/material'
import React, { Fragment } from 'react'
import { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductModal from '../_Atomic/ProductModal'
import OtherProductsModal from './OtherProductsModal';


function ProductCard({ product, toppings }) {

    const [openPopup, setOpenPopup] = useState(false)

    return (
        <>
            <Card sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                borderRadius: '1.5rem',
                boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)'
            }}>

                <Grid container spacing={2} sx={{ alignItems: 'center' }}>


                    <Grid item xs={12} sm container >
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs sx={{ paddingBottom: 0 }}>
                                <CardContent>

                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>

                                </CardContent>
                                <CardContent >
                                    {product.category === 'Pizzas' && (
                                        <Typography variant="h6" component="div" >
                                            Rs {product.PizzaDetails.size.small} <IconButton size='large' color='warning'
                                                onClick={() => { setOpenPopup(true); }}
                                            ><AddCircleIcon /></IconButton>
                                        </Typography>
                                    )}
                                    {product.category === 'Beverages' && (
                                        <Typography variant="h6" component="div" >
                                            Rs {product.BeverageDetails.price} <IconButton size='large' color='warning'
                                                onClick={() => { setOpenPopup(true); }}
                                            ><AddCircleIcon /></IconButton>
                                        </Typography>
                                    )}
                                    {product.category === 'Sauces' && (
                                        <Typography variant="h6" component="div" >
                                            Rs {product.SauceDetails.price} <IconButton size='large' color='warning'
                                                onClick={() => { setOpenPopup(true); }}
                                            ><AddCircleIcon /></IconButton>
                                        </Typography>
                                    )}

                                </CardContent>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sx={{ height: '100%', margin: 'auto', p: 2, }}>




                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="170"
                            image={product.url}
                        />



                    </Grid>


                </Grid>

            </Card>
            {product.category === 'Pizzas' && (
                <ProductModal
                    title="Employee Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    product={product}
                    toppings={toppings}
                >
                    <Typography variant='h2'>my anme is modal</Typography>
                </ProductModal>
            )}
            {(product.category === 'Beverages' || product.category === 'Sauces') && (
                <OtherProductsModal
                    title="Employee Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    product={product}
                    toppings={toppings}
                >
                    <Typography variant='h2'>my anme is modal</Typography>
                </OtherProductsModal>
            )}
        </>
    )
}

export default ProductCard