import {
    Typography, Card, Grid, Box, CardActions, CardContent, List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer, Button, Container, Divider
} from '@mui/material'



import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React, { useState } from 'react'


import AdminSidebar from './AdminSidebar';


function Admin_ManageUsers() {




    return (
        <>

            <Grid display='flex'>

                <AdminSidebar />

                <Grid display='flex' sx={{ m: 5, marginTop: 2, width: "80%", flexDirection: "column" }}>
                    <Grid>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
                            All Users
                        </Typography>


                    </Grid>
                    <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
                    <Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                    <Grid item xs={12} sm={5}>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
                            All users admin Page
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



        </>
    )
}

export default Admin_ManageUsers