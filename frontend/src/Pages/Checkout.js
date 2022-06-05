import { Typography, Grid } from '@mui/material'
import Deliverydetails from '../checkout components/Deliverydetails'
import OrderSummary from '../checkout components/OrderSummary'
import MetaData from '../components/layout/MetaData'
import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, clearErrors } from '../actions/userActions'


const Checkout = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch, alert])
    console.log("checkout" + user)
    return (
        <>
            <MetaData title={'Checkout'} />
            <Grid container md={12} display='flex' sx={{ justifyContent: 'center' }}>

                <Grid item >
                    <Deliverydetails user={user} />
                </Grid>
                <Grid item >
                    <OrderSummary />
                </Grid>

            </Grid>

        </>
    )
}

export default Checkout