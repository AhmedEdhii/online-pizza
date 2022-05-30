import { Drawer, Typography, Box, Grid, Button, Divider, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'

const Cart = (props) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const { openDrawer, setOpenDrawer } = props;
    const [sum, setSum] = useState(5)

    const removeCartItemHandler = (id) => {
        //console.log(id)
        dispatch(removeItemFromCart(id))
    }

    const deliveryCharges = 150;

    // const handleTotal = () => {
    //     cartItems.map(item => {
    //         console.log(item.toppings)
    //         item.toppings && item.toppings.map(topping => (
    //             sum = sum + parseInt(topping.price)
    //         ))
    //     })
    //     console.log(sum)
    //     setSum(sum)
    // }

    // useEffect(() => {
    //     const total = 0;
    //     {cartItems.map(item => {
    //         {item.toppings && item.toppings.map(topping => ( 
    //             total = total + topping.price
    //         ))}
    //     })}
    //     console.log(sum)
    //     setSum(total)
    //   }, [sum])

    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => { setOpenDrawer(false) }}
            sx={{ zIndex: 1500 }}

        >
            <Fragment>
                <MetaData title={'Your Cart'} />
                {cartItems.length === 0 ?
                    <Fragment>
                        <Box p={2} width='350px' height='1200px' display='flex' sx={{ flexDirection: 'column', }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                Your Cart is Empty</Typography>
                        </Box>
                    </Fragment>
                    : (
                        <Fragment>
                            <Box p={2} width='350px' height='1200px' display='flex' sx={{ flexDirection: 'column', m: 4 }}>

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
                                                                        {item.name}</Typography>
                                                                    <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                                        {item.size}</Typography>

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

                                                                    <IconButton sx={{ p: 0 }} onClick={() => removeCartItemHandler(index)} ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px", paddingTop: 2 }} /></IconButton>
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
                                                                        Rs. {item.price}</Typography>
                                                                    <IconButton sx={{ p: 0 }} onClick={() => removeCartItemHandler(index)} ><DeleteIcon color='primary' sx={{ width: "20px", height: "20px" }} /></IconButton>
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
                                                        Sub Total
                                                    </Typography>
                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Total
                                                    </Typography>
                                                </Grid>

                                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                                    <Typography variant="body1" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. {cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal, 0).toFixed(2)}
                                                    </Typography>

                                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        Rs. {cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal + deliveryCharges, 0).toFixed(2)}
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