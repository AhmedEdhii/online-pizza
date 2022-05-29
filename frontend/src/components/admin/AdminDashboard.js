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

import React, { useState } from 'react'
import MetaData from '../layout/MetaData'
import AdminSidebar from './AdminSidebar'

import AdminMainDashboard from './AdminMainDashboard';
import AdminDashboardMenu from './AdminDashboardMenu';

const drawerWidth = 240;


function AdminDashboard() {

    const [colorchange, setColorChange] = useState('#f30c1c')

    var sidebarNav = [
        { id: 'dashboard', state: true, color: '#f30c1c' },
        { id: 'menu', state: false, color: '#f30c1c' },
        { id: 'toppings', state: false, color: '#f30c1c' },
        { id: 'orders', state: false, color: '#f30c1c' },
        { id: 'users', state: false, color: '#f30c1c' }
    ];

    const sidebarHandler = (navLabel) => {

        const checkTrue = sidebarNav.find(nav => nav.state === true);
        checkTrue.state = false;

        sidebarNav[navLabel].state = true;

        const check = sidebarNav.find(nav => nav.state === true);
        if (sidebarNav[navLabel].state === true) {
            sidebarNav[navLabel].color = '#db0b19'
            console.log(sidebarNav[navLabel])
           
        }
        console.log('success')
    }

    return (
        <>

            <Grid display='flex'>

                <Drawer
                    sx={{
                        position: 'sticky',
                        width: drawerWidth,
                        flexShrink: 0,

                        '& .MuiDrawer-paper': {
                            paddingTop:'86px',
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
                            <ListItemButton onClick={() => sidebarHandler(0)}   sx={{ backgroundColor: sidebarNav[0].color }} >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                   


                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(1)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RestaurantMenuIcon />
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
                    {/* <AdminMainDashboard /> */}
                    <AdminDashboardMenu />
                </Grid>





            </Grid>



        </>
    )
}

export default AdminDashboard