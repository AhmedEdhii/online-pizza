import { Drawer, Typography, Box, Grid, Button, Divider, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'

const Cart = (props) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const { openDrawer, setOpenDrawer } = props;

    let count = 0;

    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => { setOpenDrawer(false) }}

        >
            <Fragment>
                <MetaData title={'Your Cart'} />
                {cartItems.length === 0 ?
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                        Your Cart is Empty</Typography>
                    : (
                        <Fragment>
                            <Box p={2} width='350px' height='1200px' display='flex' sx={{ flexDirection: 'column' }}>

                                <Grid spacing={2} >

                                    <Grid display="flex" sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <Grid item >
                                            <Grid >
                                                <Grid item display='flex'  >
                                                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                        Your Cart: {cartItems.length} items </Typography>

                                                </Grid>
                                                <Divider sx={{ marginBottom: 2 }} />

                                                {/* Start of Loop */}
                                                {cartItems.map(item => {
                                                    console.log(count++)
                                                    return (item.category === 'Pizzas' && (item)) ?
                                                        <Fragment>
                                                            <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                                <Grid sx={{ columnDirection: 'column' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        1x {item.name}</Typography>
                                                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                                                        {item.size}</Typography>
                                                                    {/* <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                                                        {item.toppings[0].topping.name}</Typography> */}
                                                                    {/* {item.toppings.map((topping, idx) => (
                                                                        // <p >{data.name}</p>
                                                                        console.log(topping.price)
                                                                    ))} */}
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Extra Toppings</Typography>
                                                                    {item.toppings && item.toppings.map(topping => (
                                                                        <Grid sx={{ columnDirection: 'column' }}>
                                                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                                                {topping.name}
                                                                            </Typography>
                                                                        </Grid>
                                                                    ))}
                                                                </Grid>
                                                                <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Rs. {item.price}</Typography>
                                                                    <IconButton sx={{ p: 0 }}  ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px" }} /></IconButton>
                                                                </Grid>
                                                            </Grid>
                                                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                                        </Fragment>
                                                        : null;
                                                })}
                                                {/* End of Loop */}

                                                {/* Start of Loop */}
                                                {cartItems.map(item => {
                                                    return ((item.category === 'Beverages' || item.category === 'Sauces') && (item)) ?
                                                        <Fragment>
                                                            <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                                <Grid sx={{ columnDirection: 'column' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        1x {item.name}
                                                                    </Typography>
                                                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                                                        {item.description}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                                                    <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                                        Rs. {item.price}</Typography>
                                                                    <IconButton sx={{ p: 0 }}  ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px" }} /></IconButton>
                                                                </Grid>
                                                            </Grid>
                                                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                                        </Fragment>
                                                        : null;
                                                })}
                                                {/* End of Loop */}

                                                {/* Start of Loop */}
                                                {/* <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                                    <Grid sx={{ columnDirection: 'column' }}>
                                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                            1x Chicken Fajita</Typography>
                                                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                                            Small</Typography>
                                                    </Grid>
                                                    <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                            Rs. 299</Typography>
                                                        <IconButton sx={{ p: 0 }}  ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px" }} /></IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                                End of Loop */}

                                            </Grid>


                                        </Grid>



                                        <Grid item display='flex' sx={{ flexDirection: "column", justifyContent: "space-evenly" }}>

                                            {/* {children} */}
                                            <Grid display='flex' fullWidth sx={{ justifyContent: 'space-between' }}>

                                                <Grid item >


                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Total
                                                    </Typography>
                                                </Grid>

                                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>


                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. 299
                                                    </Typography>

                                                </Grid>

                                            </Grid>

                                            <Button type='submit' color='primary' variant="contained" fullWidth sx={{ marginTop: 2 }}

                                            >Add To Cart</Button>
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Box>
                        </Fragment>
                    )}
            </Fragment>
            {/* 
                <Typography variant='body1'> List Item 1</Typography> */}
        </Drawer>
    )
}

export default Cart