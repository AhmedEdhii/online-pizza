import React, { Fragment } from 'react'
import { Typography, Grid, Divider, Box, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'

import { removeItemFromCart } from '../actions/cartActions'


function OrderSummary() {

    const RedirectBtnHandler = () => {

        // dispatch(addItemToCart(product._id, quantity, sizePrice, selectSize, selectToppings));

        alert.success('Redirecting')
    }

    const removeCartItemHandler = (id) => {
        console.log(id)
        dispatch(removeItemFromCart(id))
        alert.error('Deleted')
    }
    const deliveryCharges = 150;
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    return (

        <Grid display='flex'>
            <Box sm={12} sx={{ width: '500px', m: 5, p: 5, border: 1, borderColor: 'grey.300' }}>

                <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Order Summary</Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

                <Box display='flex' sx={{ flexDirection: 'column', m: 4 }}>

                    <Grid spacing={2} >

                        <Grid display="flex" sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                            <Grid item >
                                <Grid >
                                    <Grid item display='flex'  >
                                        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            Your Cart : {cartItems.length} items
                                        </Typography>
                                    </Grid>
                                    <Divider sx={{ marginBottom: 2 }} />

                                    {/* Start of Loop */}
                                    {cartItems.map((item, index) => {
                                        return (item.category === 'Pizzas' && (item)) ?
                                            <Fragment>
                                                <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                    <Grid sx={{ columnDirection: 'column' }}>
                                                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                            {item.size}
                                                        </Typography>

                                                        {(item.toppings.length > 0) && (
                                                            <Typography variant="body2" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                Extra Toppings
                                                            </Typography>
                                                        )}
                                                        {item.toppings && item.toppings.map(topping => (
                                                            <Grid sx={{ columnDirection: 'column' }}>
                                                                <Typography variant="body2" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                                    {topping.name}
                                                                </Typography>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                    <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingBottom: 5 }}>
                                                            Rs. {item.price}
                                                        </Typography>

                                                        {/* Toppings price */}
                                                        {item.toppings && item.toppings.map(topping => (
                                                            <Typography variant="body2" color='text.secondary' component="div" sx={{ flexGrow: 1 }}>
                                                                Rs. {topping.price}
                                                            </Typography>
                                                        ))}
                                                        <Fragment>
                                                            <IconButton sx={{ p: 0 }} onClick={() => removeCartItemHandler(index)} ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px", paddingTop: 2 }} /></IconButton>
                                                        </Fragment>

                                                    </Grid>
                                                </Grid>
                                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                            </Fragment>
                                            : null;
                                    })}
                                    {/* End of Loop */}

                                    {/* Start of Loop */}
                                    {cartItems.map((item, index) => {
                                        return ((item.category === 'Beverages' || item.category === 'Sauces') && (item)) ?
                                            <Fragment>
                                                <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                    <Grid sx={{ columnDirection: 'column' }}>
                                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                            {item.description}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>


                                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                            Rs. {item.price}
                                                        </Typography>

                                                        <Fragment>
                                                            <IconButton sx={{ p: 0 }} onClick={() => removeCartItemHandler(index)} ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px", paddingTop: 2 }} /></IconButton>
                                                        </Fragment>

                                                    </Grid>
                                                </Grid>
                                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                            </Fragment>
                                            : null;
                                    })}
                                    {/* End of Loop */}
                                </Grid>
                            </Grid>

                            <Grid item display='flex' sx={{ flexDirection: "column", justifyContent: "space-evenly" }}>

                                {/* {children} */}
                                <Grid display='flex' fullWidth sx={{ justifyContent: 'space-between' }}>

                                    <Grid item >
                                        <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                            Delivery Charges
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                            Total
                                        </Typography>
                                    </Grid>

                                    <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                        <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                            Rs. {deliveryCharges.toFixed(2)}
                                        </Typography>

                                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                            Rs. {cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal, deliveryCharges).toFixed(2)}
                                        </Typography>


                                    </Grid>

                                </Grid>

                                <Button type='submit' variant="outlined" fullWidth
                                    sx={{ m: 1, mt: 2, height: 50 }}
                                    onClick={() => RedirectBtnHandler()}
                                >Continue Shopping</Button>
                            </Grid>

                        </Grid>
                    </Grid>

                </Box>

            </Box>




        </Grid>

    )
}

export default OrderSummary