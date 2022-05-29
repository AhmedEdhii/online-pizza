import { Typography, Grid, Divider } from '@mui/material'
import React from 'react'

function AdminDashboardMenu() {
    return (
        <>
            <Grid>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                    Menu
                </Typography>


            </Grid>
            <Divider sx={{ marginTop: 1, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
            <Grid item xs={12} >
            <Typography variant="h4">
                    grid
                </Typography>
            </Grid>
           
            </Grid>
        </>
    )
}

export default AdminDashboardMenu