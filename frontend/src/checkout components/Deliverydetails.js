import { Typography, Grid, Divider, Box, TextField, FormControl, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, clearErrors } from '../actions/orderActions'
import { Link } from 'react-router-dom';


function DeliveryDetails({ user }) {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)
    // const { user } = useSelector(state => state.auth)

    const [name, setName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    // const [altNumber, setAltNumber] = useState('')
    const [deliveryaddress, setDeliveryAddress] = useState('')

    const [paymentmethod, setPaymentMethod] = useState('COD')

    const [additionalInstructions, setAdditionalInstructions] = useState('')
    const deliverycharges = 150;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, deliverycharges)

    useEffect(() => {
       // console.log(user)
        // if (user) {
        //     setName(user.name);
        //     setPhoneNumber(user.phonenumber);
        //     setDeliveryAddress(user.deliveryaddress);
        // }
    }, user)

    const paymentMethodHandler = (value) => {

        setPaymentMethod(value);

    }


    const PlaceOrderHandler = () => {
        // const formData = new FormData();
        // dispatch(addItemToCart(product._id, quantity, sizePrice, selectSize, selectToppings));
        // formData.set('orderItems', cartItems);
        // formData.set('deliverycharges', deliverycharges);
        // formData.set('totalPrice', totalPrice);
        // formData.set('paymentmethod', paymentmethod);
        // formData.set('deliveryaddress', deliveryaddress);
        // formData.set('additionalInstructions', additionalInstructions);
        // console.log(formData)
        // dispatch(createOrder(formData))
        // const orderItems = []

        // {
        //     cartItems.map((item, index) => {
        //         orderItems.push(item)
        //     })
        // }
        // for (let i = 0; i < cartItems.length; i++) {
        //     orderItems.push(cartItems[i])
        //     console.log(orderItems[i]);
        // }
        // cartItems.forEach(function (Item) {  // For every element of pageData from   client.
        //     orderItems.push(Item)  // This pushes each and every pagedata given from the client into PagesData.
        // })
        // var orderItems = [];
        // cartItems.forEach(function (item) {
        //     var object = {
        //         "name": item.name,
        //         "price": item.price,
        //         "size": item.size,
        //         "product": item.product
        //     }
        //     orderItems.push(object);
        // });

        const order = {
            orderItems: cartItems,
            deliverycharges,
            totalPrice,
            paymentmethod,
            deliveryaddress,
            additionalInstructions
        }
        //console.log(order)
        alert.success('Order Placed!')
        dispatch(createOrder(order))
    }

    return (


        <Grid display='flex'>
            <Box sm={12} sx={{ width: '500px', m: 5, p: 5, border: 1, borderColor: 'grey.300' }}>

                <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Delivery Information</Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Box container display='flex'
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, },


                        flexDirection: 'column',

                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 1, mb: 1, marginLeft: 1.2 }}>Enter Delivery Details</Typography>
                    <TextField
                        label='Name'
                        placeholder='Enter Name' fullWidth required
                        defaultValue={(user && user.name)}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        label='Phone Number'
                        placeholder='Enter Phone Number' fullWidth required
                        defaultValue={(user && user.phonenumber)}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <TextField
                        label='Delivery Address'
                        placeholder='Enter Delivery Address' fullWidth required multiline
                        defaultValue={user && user.deliveryaddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                    <TextField
                        label='Delivery Instructions'
                        placeholder='Delivery Instructions' fullWidth required multiline
                        defaultValue={additionalInstructions}
                        onChange={(e) => setAdditionalInstructions(e.target.value)}

                    />
                    <Typography variant='body2' sx={{ fontWeight: 'bold', mt: 1, marginLeft: 1.2 }}>Select Payment Method</Typography>

                    <FormControl sx={{ mt: 1, marginLeft: 1.2 }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="COD"
                            name="radio-buttons-group"
                            onChange={(e) => paymentMethodHandler(e.target.value)}
                        >
                            <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />

                        </RadioGroup>
                    </FormControl>




                </Box>
                <Fragment>
                    <Button component={Link} type='submit' variant="contained" fullWidth
                        sx={{ m: 1, mt: 2, height: 50 }}
                        onClick={() => PlaceOrderHandler()}

                    >Place Order</Button>
                </Fragment>
            </Box>




        </Grid>


    )
}

export default DeliveryDetails