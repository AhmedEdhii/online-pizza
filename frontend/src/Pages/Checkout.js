import { Typography, Grid } from '@mui/material'
import DeliveryDetails from '../checkout components/DeliveryDetails'
import OrderSummary from '../checkout components/OrderSummary'
import MetaData from '../components/layout/MetaData'
import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'


function Checkout() {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)

    return (
        <>
            <MetaData title={'Checkout'} />
            <Grid container md={12} display='flex' sx={{ justifyContent: 'center' }}>

                <Grid item >
                    <DeliveryDetails user = {user}/>
                </Grid>
                <Grid item >
                    <OrderSummary />
                </Grid>

            </Grid>

        </>
    )
}

export default Checkout