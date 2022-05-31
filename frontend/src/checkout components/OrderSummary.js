import React from 'react'
import { Typography, Grid, Divider, Box, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';




function orderSummary() {


    const RedirectBtnHandler = () => {

        // dispatch(addItemToCart(product._id, quantity, sizePrice, selectSize, selectToppings));

        alert.success('Redirecting')


    }


    const removeCartItemHandler = (id) => {
        alert.success('Deleted')
        // dispatch(removeItemFromCart(id))
    }


  return (
    
    <Grid display='flex'>
    <Box sm={12} sx={{ width: '500px', m: 5,  p:5, border:1, borderColor: 'grey.300' }}>

        <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Order Summary</Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        
        <Box display='flex' sx={{ flexDirection: 'column', m: 4 }}>

                                <Grid spacing={2} >

                                    <Grid display="flex" sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <Grid item >
                                            <Grid >
                                                <Grid item display='flex'  >
                                                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                        Your Cart : 2 items
                                                    </Typography>
                                                </Grid>
                                                <Divider sx={{ marginBottom: 2 }} />

                                                {/* Start of Loop */}
                                                {/* {cartItems.map((item, index) => {
                                                    return (item.category === 'Pizzas' && (item)) ?
                                                        <Fragment> */}
                                                            <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                                <Grid sx={{ columnDirection: 'column' }}>
                                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Chicken Fajita</Typography>
                                                                    <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                                        Small</Typography>

                                                                    {/* {(item.toppings.length > 0) && ( */}
                                                                        <Typography variant="body2" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                            Extra Toppings
                                                                        </Typography>
                                                                    {/* )} */}
                                                                    {/* {item.toppings && item.toppings.map(topping => ( */}
                                                                        <Grid sx={{ columnDirection: 'column' }}>
                                                                            <Typography variant="body2" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                                                Cheese
                                                                            </Typography>
                                                                        </Grid>
                                                                    {/* ))} */}
                                                                </Grid>
                                                                <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingBottom: 5 }}>
                                                                        Rs. 400
                                                                    </Typography>

                                                                    {/* Toppings price */}
                                                                    {/* {item.toppings && item.toppings.map(topping => ( */}
                                                                        <Typography variant="body2" color='text.secondary' component="div" sx={{ flexGrow: 1 }}>
                                                                            Rs. 40
                                                                        </Typography>
                                                                    {/* ))} */}

                                                                    <IconButton sx={{ p: 0 }}  ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px", paddingTop: 2 }} /></IconButton>

                                                                    {/* onClick={() => removeCartItemHandler(index)} */}
                                                                </Grid>
                                                            </Grid>
                                                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                                        {/* </Fragment>
                                                        : null;
                                                })} */}
                                                {/* End of Loop */}

                                                {/* Start of Loop */}
                                                {/* {cartItems.map((item, index) => {
                                                    return ((item.category === 'Beverages' || item.category === 'Sauces') && (item)) ?
                                                        <Fragment> */}
                                                            <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                                <Grid sx={{ columnDirection: 'column' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Pepsi
                                                                    </Typography>
                                                                    <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                                        150 ml
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>


                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Rs. 50</Typography>



                                                                    <IconButton sx={{ p: 0 }}  ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px" }} /></IconButton>


                                                                    {/* onClick={() => removeCartItemHandler(index)} */}
                                                                </Grid>
                                                            </Grid>
                                                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                                        {/* </Fragment>
                                                        : null;
                                                })} */}
                                                {/* End of Loop */}



                                            </Grid>


                                        </Grid>



                                        <Grid item display='flex' sx={{ flexDirection: "column", justifyContent: "space-evenly" }}>

                                            {/* {children} */}
                                            <Grid display='flex' fullWidth sx={{ justifyContent: 'space-between' }}>

                                                <Grid item >
                                                    <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Sub Total
                                                    </Typography>
                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Total
                                                    </Typography>
                                                </Grid>

                                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                                    {/* <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. {cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal, 0).toFixed(2)}
                                                    </Typography> */}
                                                                                                        <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. 200
                                                    </Typography>

                                                    {/* <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. {cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal, deliveryCharges).toFixed(2)}
                                                    </Typography> */}

<Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. 1200
                                                    </Typography>

                                                </Grid>

                                            </Grid>

                                            <Button type='submit'  variant="outlined" fullWidth
                        sx={{ m: 1, mt:2, height: 50 }} 
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

export default orderSummary