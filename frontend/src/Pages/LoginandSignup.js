import { Typography, Container, Grid, Box } from '@mui/material'
import React from 'react'
import Mylogin from '../components/user/Mylogin'
import MySignup from '../components/user/MySignup'

const LoginandSignup = () => {
    return (

        <container display="flex" sx={{margin: 'auto'}}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{marginTop: 5, marginBottom:2}}>
                    <Grid item>
                <Mylogin />
                </Grid>
                <Grid item >
                <MySignup />
                </Grid>
            </Grid>

        </container>

    )
}

export default LoginandSignup