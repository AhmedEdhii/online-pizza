import { Typography, Card, Grid, Box, CardActions, CardContent, Button, Container, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import AdminSidebar from './AdminSidebar'

import AdminMainDashboard from './AdminMainDashboard';
import AdminDashboardMenu from './AdminDashboardMenu';

function Dashboard({ navState }) {
        

    return (
        <>

            <Grid display='flex'>

                <AdminSidebar />

                <Grid display='flex' sx={{ m: 5, marginTop: 0, width: "80%", flexDirection: "column" }}>
                    <AdminMainDashboard />
                    {/* <AdminDashboardMenu /> */}
                </Grid>





            </Grid>



        </>
    )
}

export default Dashboard