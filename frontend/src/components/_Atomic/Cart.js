import { Drawer, Typography, Box, Grid, Button, Divider, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const cart = (props) => {

    const { openDrawer, setOpenDrawer } = props;

    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => { setOpenDrawer(false) }}

        >
            <Box p={2} width='350px' height='1200px' display='flex' sx={{ flexDirection: 'column' }}>

                <Grid spacing={2} >

                    <Grid display="flex" sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                        <Grid item >
                            <Grid >
                                <Grid item display='flex'  >
                                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                        Your Cart</Typography>

                                </Grid>
                                <Divider sx={{ marginBottom: 2 }} />

                                {/* Start of Loop */}
                                <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                    <Grid sx={{ columnDirection: 'column' }}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            1x Chicken Fajita</Typography>
                                        <Typography variant="body1"  component="div" sx={{ flexGrow: 1 }}>
                                            Small</Typography>
                                    </Grid>
                                    <Grid item display='flex'alignContent='right' sx={{flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            Rs. 299</Typography>
                                            <IconButton sx={{p:0}}  ><DeleteIcon color='primary'  sx={{width: "20px", height:"20px"}}/></IconButton>
                                    </Grid>
                                    

                                </Grid>

                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                {/* End of Loop */}
                                 {/* Start of Loop */}
                                 <Grid display='flex' sx={{ justifyContent: 'space-between', }}>
                                    <Grid sx={{ columnDirection: 'column' }}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            1x Chicken Fajita</Typography>
                                        <Typography variant="body1"  component="div" sx={{ flexGrow: 1 }}>
                                            Small</Typography>
                                    </Grid>
                                    <Grid item display='flex'alignContent='right' sx={{flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <Typography variant="body1" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                            Rs. 299</Typography>
                                            <IconButton sx={{p:0}}  ><DeleteIcon color='primary'  sx={{width: "20px", height:"20px"}}/></IconButton>
                                    </Grid>
                                    

                                </Grid>

                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                {/* End of Loop */}
                               
                            </Grid>


                        </Grid>

                        

                        <Grid item display='flex' sx={{  flexDirection: "column", justifyContent: "space-evenly" }}>

                            {/* {children} */}
                            <Grid display='flex' fullWidth sx={{justifyContent: 'space-between'}}>

                                <Grid item >

                             
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                                        Total
                                    </Typography>
                                </Grid>

                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                   
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1,}}>
                                        Rs. 299
                                    </Typography>
                                  
                                </Grid>

                            </Grid>
                            
                            <Button type='submit' color='primary' variant="contained" fullWidth sx={{marginTop:2}}
                            
                            >Add To Cart</Button>
                        </Grid>

                    </Grid>
                </Grid>

            </Box>
            {/* 
                <Typography variant='body1'> List Item 1</Typography> */}
        </Drawer>
    )
}

export default cart