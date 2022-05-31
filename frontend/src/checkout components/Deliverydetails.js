import { Typography, Grid, Divider, Box, TextField, FormControl, Radio, RadioGroup,FormControlLabel, Button } from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'


function Deliverydetails() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [altNumber, setAltNumber] = useState('')
    const [address, setAddress] = useState('')

    const [paymentMethod, setPaymentMethod] = useState('COD')

    const [additionalInstructions, setMediumPrice] = useState('')

    const paymentMethodHandler = (value) => {
        
        setPaymentMethod(value);
        
    }
    

    const PlaceOrderHandler = () => {

        // dispatch(addItemToCart(product._id, quantity, sizePrice, selectSize, selectToppings));

        alert.success('Order Placed!')


    }

    const alert = useAlert();

    return (


        <Grid display='flex'>
            <Box sm={12} sx={{ width: '500px', m: 5,  p:5, border:1, borderColor: 'grey.300' }}>

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
                    <Typography variant='body2' sx={{ fontWeight: 'bold', mt:1, mb:1, marginLeft: 1.2 }}>Enter Delivery Deatils</Typography>
                    <TextField
                        label='Name'
                        placeholder='Enter Name' fullWidth required
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        label='Phone Number'
                        placeholder='Enter Phone Number' fullWidth required
                        defaultValue={number}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label='Delivery Address'
                        placeholder='Enter Delivery Address' fullWidth required multiline
                        defaultValue={number}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label='Delivery Instructionss'
                        placeholder='Delivery Instructions' fullWidth required multiline
                        defaultValue={number}
                        onChange={(e) => setName(e.target.value)}

                    />
                    <Typography variant='body2' sx={{ fontWeight: 'bold', mt:1, marginLeft: 1.2 }}>Select Payment Method</Typography>
                    
                    <FormControl sx={{ mt:1, marginLeft: 1.2 }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="COD"
                            name="radio-buttons-group"
                            onChange={(e) => paymentMethodHandler(e.target.value)} 
                        >
                            <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery"/>

                        </RadioGroup>
                    </FormControl>
                                
                                


                </Box>
                <Button type='submit'  variant="contained" fullWidth
                                sx={{ m: 1, mt:2, height: 50 }} 
                                onClick={() => PlaceOrderHandler()} 
                                >Place Order</Button>
            </Box>




        </Grid>


    )
}

export default Deliverydetails