import { Typography, Container, Grid, Box } from '@mui/material'
import React from 'react'
import Mylogin from '../components/user/Mylogin'
import MySignup from '../components/user/MySignup'
import { Route } from 'react-router-dom'
import MetaData from '../components/layout/MetaData'

const LoginandSignup = () => {
    return (
        <container display="flex" sx={{ margin: 'auto' }}>
            <MetaData title={'Login/Signup'} />
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ marginTop: 5, marginBottom: 2 }}>
                <Grid item>
                    {/* <Mylogin /> */}
                    <Route render={({ history }) => <Mylogin history={history} />} />
                </Grid>
                <Grid item >
                    {/* <MySignup /> */}
                    <Route render={({ history }) => <MySignup history={history} />} />
                </Grid>
            </Grid>

        </container>

    )
}

export default LoginandSignup