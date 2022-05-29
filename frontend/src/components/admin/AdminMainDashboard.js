import { Typography, Card, Grid, Box, CardActions, CardContent, Button, Container, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import AdminSidebar from './AdminSidebar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function AdminMainDashboard() {
    return (
        <>
            <Grid>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 2 }}>
                    Dashboard
                </Typography>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 1 }}>
                    12.05.2022
                </Typography>

            </Grid><Divider sx={{ marginTop: 1, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                <Grid item xs={12} sm={4}>


                    <Card sx={{
                        p: 1,

                        maxWidth: "100%",

                        flexGrow: 1,
                        borderRadius: '1.5rem',
                        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
                        backgroundColor: "#FCAB0F"
                    }}>
                        <CardContent sx={{ paddingBottom: 0, marginBottom: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }} gutterBottom>
                                Today's Orders
                            </Typography>
                            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
                            <Grid display='flex' sx={{ justifyContent: 'space-between' }}>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        Open Orders
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        Total  Orders
                                    </Typography>
                                </Grid>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        2
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        20
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                        </CardContent>
                        <CardActions>
                            <Button fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={4}>

                    <Card sx={{
                        p: 1,

                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: '1.5rem',
                        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
                    }}>
                        <CardContent sx={{ paddingBottom: 0, marginBottom: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', }} gutterBottom>
                                Products
                            </Typography>
                            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
                            <Grid display='flex' sx={{ justifyContent: 'space-between' }}>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        Total Products
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                        50
                                    </Typography>

                                </Grid>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        50
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>

                                    </Typography>





                                </Grid>
                            </Grid>
                            <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                        </CardContent>
                        <CardActions>
                            <Button fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={4}>

                    <Card sx={{
                        p: 1,

                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: '1.5rem',
                        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
                    }}>
                        <CardContent sx={{ paddingBottom: 0, marginBottom: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', }} gutterBottom>
                                Users
                            </Typography>
                            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
                            <Grid display='flex' sx={{ justifyContent: 'space-between' }}>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        Total Users
                                    </Typography>

                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        Active Users
                                    </Typography>


                                </Grid>
                                <Grid sx={{ flexDirection: "column" }}>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        500
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                        5
                                    </Typography>


                                </Grid>
                            </Grid>
                            <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                        </CardContent>
                        <CardActions>
                            <Button fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
                        </CardActions>
                    </Card>

                </Grid>

            </Grid>
        </>

    )
}

export default AdminMainDashboard