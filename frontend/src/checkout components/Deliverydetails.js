import { Typography, Grid, Divider, Box, TextField, FormControl, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, clearErrors } from '../actions/orderActions'
import { Link } from 'react-router-dom';

const  Deliverydetails = ({ user }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)
    // const { user } = useSelector(state => state.auth)

    const [name, setName] = useState(user && user.name)
    const [phonenumber, setPhoneNumber] = useState(user && user.phonenumber)
    // const [altNumber, setAltNumber] = useState('')
    const [deliveryaddress, setDeliveryAddress] = useState(user && user.deliveryaddress)

    const [paymentmethod, setPaymentMethod] = useState('COD')

    const [additionalInstructions, setAdditionalInstructions] = useState('')
    const deliverycharges = 150;
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price) + item.toppingstotal, deliverycharges).toFixed(2)

  //  useEffect(() => {
        // console.log(user)
        // if (user) {
        //     setName(user.name);
        //     setPhoneNumber(user.phonenumber);
        //     setDeliveryAddress(user.deliveryaddress);
        // }
   // }, user)

   console.log(user && user.phonenumber)

    const paymentMethodHandler = (value) => {

        setPaymentMethod(value);

    }


    const PlaceOrderHandler = () => {
        if (user) {
            const customer_id = user._id
            const order = {
                orderItems: cartItems,
                deliverycharges,
                totalPrice,
                paymentmethod,
                deliveryaddress,
                additionalInstructions,
                customer_id
            }
            //console.log(order)
            alert.success('Order Placed!')
            dispatch(createOrder(order))
        }
        else {
            const order = {
                orderItems: cartItems,
                deliverycharges,
                totalPrice,
                paymentmethod,
                deliveryaddress,
                additionalInstructions,
            }
            //console.log(order)
            alert.success('Order Placed!')
            dispatch(createOrder(order))
        }
        window.localStorage.clear();
        window.location.href = "/homepage";
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

                    <Button component={Link} to="/" type='submit' variant="contained" fullWidth
                        sx={{ m: 1, mt: 2, height: 50 }}
                        onClick={() => PlaceOrderHandler()}

                    >Place Order</Button>
                </Fragment>
            </Box>




        </Grid>


    )
}

export default Deliverydetails