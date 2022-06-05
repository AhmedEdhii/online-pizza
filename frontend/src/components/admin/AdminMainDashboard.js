import { Typography, Card, Grid, Box, CardActions, CardContent, Button, Container, Divider } from '@mui/material'
import MetaData from '../layout/MetaData'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdminSidebar from './AdminSidebar';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminDashboardMenu from './AdminDashboardMenu';
import AdminManageOrders from './AdminManageOrders';
import Admin_ManageUsers from './Admin_ManageUsers';

function AdminMainDashboard({ products, users, orders}) {

    const today = new Date();

    const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()

    const [Dashboard, setDashboard] = useState(true)
    const [menu, setMenu] = useState(false)
    const [order, setOrder] = useState(false)
    const [user, setUser] = useState(false)

    console.log("Dashboard " + Dashboard)
    const dispatch = useDispatch();

    let activeproducts = 0;
    products && products.forEach(product => {
        if (product.product_status === 'active') {
            activeproducts += 1;
        }
    })

    let activeusers = 0;
    users && users.forEach(user => {
        if (user.account_status === 'active') {
            activeusers += 1;
        }
    })

    let openorders = 0;
    orders && orders.forEach(order => {
        if (order.orderStatus === 'Processing') {
            openorders += 1;
        }
    })

    const routeHandler = (navLabel) => {

        if (navLabel === 1) {
            setOrder(true)
            setDashboard(false)
            setMenu(false)
            setUser(false)
        }
        else if (navLabel === 2) {
            setMenu(true)
            setDashboard(false)
            setOrder(false)
            setUser(false)
        }
        else if (navLabel === 3) {
            setUser(true)
            setDashboard(false)
            setOrder(false)
            setMenu(false)
        }
    }


    return (
        <>
            {Dashboard && (
                <>
                    <Grid>
                        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 2 }}>
                            Dashboard
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 1 }}>
                            {date}
                        </Typography>
                    </Grid>

                    <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
                    <Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
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
                                                {openorders}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                                {orders && orders.length}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => routeHandler(1)} fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
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
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                                                Total Products
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                                                Categories
                                            </Typography>

                                        </Grid>
                                        <Grid sx={{ flexDirection: "column" }}>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                                                {products && products.length}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                                                3
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => routeHandler(2)} fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
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
                                                {users && users.length}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', }}>
                                                {activeusers}
                                            </Typography>


                                        </Grid>
                                    </Grid>
                                    <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => routeHandler(3)} fullWidth size="large" endIcon={<ChevronRightIcon />} sx={{ color: '#000', }}>View Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    </Grid>
                </>
            )}
            <Grid display='flex' sx={{ m: 5, marginTop: 2, width: "100%", flexDirection: "column" }}>
                {(menu === true) && (
                    <AdminDashboardMenu products={products} />
                )}
                {(order === true) && (
                    <AdminManageOrders orders={orders} />
                )}
                {(user === true) && (
                    <Admin_ManageUsers users={users} />
                )}
            </Grid>
        </>
    )
}

export default AdminMainDashboard