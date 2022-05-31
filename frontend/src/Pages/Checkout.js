import { Typography, Grid } from '@mui/material'
import React from 'react'
import Deliverydetails from '../checkout components/Deliverydetails'
import OrderSummary from '../checkout components/OrderSummary'


function Checkout() {
    return (
        <>
            <Grid container md={12} display='flex' sx={{ justifyContent: 'center' }}>

                <Grid item >
                    <Deliverydetails />
                </Grid>
                <Grid item >
                    <OrderSummary />
                </Grid>

            </Grid>

        </>
    )
}

export default Checkout