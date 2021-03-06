import {
    Typography, Card, Grid, Box, CardActions, CardContent, List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer, Button, Container, Divider
} from '@mui/material'

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, clearErrors } from '../../actions/productActions'
import { allOrders } from '../../actions/orderActions'
import { allUsers } from '../../actions/userActions'
import MetaData from '../layout/MetaData'
import AdminSidebar from './AdminSidebar'

import AdminMainDashboard from './AdminMainDashboard';
import AdminDashboardMenu from './AdminDashboardMenu';
import AdminManageOrders from './AdminManageOrders';
import AdminToppings from './AdminToppings';
import Admin_ManageUsers from './Admin_ManageUsers';
const drawerWidth = 240;


function AdminDashboard() {

    const [colorchange, setColorChange] = useState('#f30c1c')
    const [dashboard, setDashboard] = useState(true)
    const [menu, setMenu] = useState(false)
    const [topping, setTopping] = useState(false)
    const [order, setOrder] = useState(false)
    const [user, setUser] = useState(false)

    const dispatch = useDispatch();
    const { error, products } = useSelector(state => state.products);
    const { users } = useSelector(state => state.allUsers)
    const { orders } = useSelector(state => state.allOrders)

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(allUsers())
        dispatch(allOrders())
    }, [dispatch])

    var sidebarNav = [
        { id: 'dashboard', state: true, color: '#f30c1c' },
        { id: 'menu', state: false, color: '#f30c1c' },
        { id: 'toppings', state: false, color: '#f30c1c' },
        { id: 'orders', state: false, color: '#f30c1c' },
        { id: 'users', state: false, color: '#f30c1c' }
    ];

    const sidebarHandler = (navLabel) => {

        if (navLabel === 0) {
            setDashboard(true)
            setMenu(false)
            setTopping(false)
            setOrder(false)
            setUser(false)
            window.location.reload();
        }
        else if (navLabel === 1) {
            setMenu(true)
            setDashboard(false)
            setTopping(false)
            setOrder(false)
            setUser(false)
        }
        else if (navLabel === 2) {
            setTopping(true)
            setMenu(false)
            setDashboard(false)
            setOrder(false)
            setUser(false)
        }
        else if (navLabel === 3) {
            setOrder(true)
            setTopping(false)
            setMenu(false)
            setDashboard(false)
            setUser(false)
        }
        else if (navLabel === 4) {
            setUser(true)
            setOrder(false)
            setTopping(false)
            setMenu(false)
            setDashboard(false)
        }
        // const checkTrue = sidebarNav.find(nav => nav.state === true);
        // checkTrue.state = false;

        // sidebarNav[navLabel].state = true;

        // const check = sidebarNav.find(nav => nav.state === true);
        // if (sidebarNav[navLabel].state === true) {
        //     sidebarNav[navLabel].color = '#db0b19'
        //     console.log(sidebarNav[navLabel])
        // }
        // console.log('success')
        // console.log(sidebarNav)
    }

    return (
        <>
            <MetaData title={'Admin Dashboard'} />
            <Grid display='flex'>

                <Drawer
                    sx={{
                        position: 'sticky',
                        width: drawerWidth,
                        flexShrink: 0,

                        '& .MuiDrawer-paper': {
                            paddingTop: '86px',
                            zIndex: '0',
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#f30c1c',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >

                    <List>


                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(0)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>



                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(1)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <LocalPizzaIcon />
                                </ListItemIcon>
                                <ListItemText primary="Menu" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(2)}  >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RestaurantMenuIcon />
                                </ListItemIcon>
                                <ListItemText primary="Toppings" />
                            </ListItemButton>
                        </ListItem>



                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(3)}  >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </ListItem>



                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(4)} >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItemButton>
                        </ListItem>




                    </List>
                </Drawer>

                <Grid display='flex' sx={{ m: 5, marginTop: 2, width: "80%", flexDirection: "column" }}>
                    {(dashboard === true) && (
                        <AdminMainDashboard products={products} users={users} orders = {orders}/>
                    )}
                    {(menu === true) && (
                        <AdminDashboardMenu products={products} />
                    )}
                    {(topping === true) && (
                        <AdminToppings products={products} />
                    )}
                    {(order === true) && (
                        <AdminManageOrders products={products} />
                    )}
                    {(user === true) && (
                        <Admin_ManageUsers users={users} />
                    )}

                </Grid>

            </Grid>



        </>
    )
}

export default AdminDashboard