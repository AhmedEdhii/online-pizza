import {
    Typography, Card, Grid, Box, CardActions, CardContent, List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer, Button, Container, Divider
} from '@mui/material'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, clearErrors } from '../actions/orderActions'

const UserDashboardMain = ({ user }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, order } = useSelector(state => state.myLatestOrder);
    console.log("main" + order.deliverycharges)
    // useEffect(() => {
    //     dispatch(getmyLatestOrder());

    //     console.log(order.deliverycharges)

    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors())
    //     }
    // }, [dispatch, alert, error])

    const PlaceOrderHandler = () => {
            //console.log(order)
            alert.success('Order Placed!')
            dispatch(createOrder(order))
    }


    return (
        <>
            <Grid>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
                    Welcome, <Typography variant="h4" component="span" sx={{ color: '#f30c1c', fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                        {user && user.name}
                    </Typography>
                </Typography>


            </Grid>
            <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
            <Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                <Grid item xs={12} sm={5}>


                    <Card sx={{
                        p: 1,

                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: '1.5rem',
                        boxShadow: '0 18px 24px 0 rgba(0,0,0,0.05)',
                        backgroundColor: "#E9E9EB"
                    }}>

                        <CardContent sx={{ paddingBottom: 0, marginBottom: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f30c1c' }} gutterBottom>
                                Order Again
                            </Typography>
                            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />

                            {order.orderItems && order.orderItems.map(item => (
                                <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                    <Grid sx={{ columnDirection: 'column' }}>
                                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            {item.name}
                                        </Typography>
                                        {item.category === 'Pizzas' && (
                                            <Fragment>
                                                <Typography variant="body1" gutterBottom color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                    {item.size}
                                                </Typography>
                                            </Fragment>
                                        )}
                                        {item.toppings && item.toppings.map(topping => (
                                            <Fragment>
                                                <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                    Extra Toppings
                                                </Typography>

                                                <Grid sx={{ columnDirection: 'column' }}>
                                                    <Typography variant="body2" color='text.secondary' component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                                        {topping.name}
                                                    </Typography>
                                                </Grid>
                                            </Fragment>
                                        ))}
                                    </Grid>

                                    <Grid item display='flex' alignContent='right' sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingBottom: 5 }}>
                                            Rs. {item.price}
                                        </Typography>
                                        {item.toppings && item.toppings.map(topping => (
                                            <Typography variant="body2" color='text.secondary' component="div" sx={{ flexGrow: 1 }}>
                                                Rs. {topping.price}
                                            </Typography>
                                        ))}
                                    </Grid>
                                </Grid>
                            ))}


                            <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
                        </CardContent>
                        <CardActions>
                            <Button fullWidth size="large" endIcon={<ChevronRightIcon />} variant='contained'
                                sx={{
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 18px 24px 0 rgba(0,0,0,0.05)',
                                    backgroundColor: '#f30c1c',
                                    '&:hover': {
                                        backgroundColor: '#FCAB04',
                                        boxShadow: 'none',
                                    },
                                }}
                                onClick={() => PlaceOrderHandler()}
                                >
                                Order Now</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default UserDashboardMain