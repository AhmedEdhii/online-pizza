import {
    Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Collapse, IconButton, Grid, Button, Box, Item
} from '@mui/material'
import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';



function ProductCard() {
    return (
        <Card sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            borderRadius: '1.5rem',
            boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)'
        }}>

            <Grid container spacing={2} sx={{ alignItems: 'center' }}>

                <Grid item xs={12} sm container >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    Fajita Chicken Supreme
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Buffalo Chicken, Tikka, Sweet Corns, Green
                                    Onions, Jalapenos ,BBQ Ranch Sauce And
                                    Mozzarella
                                </Typography>

                            </CardContent>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" >
                                    Rs 299
                                </Typography>

                            </CardContent>

                            <IconButton size='large' color='warning' ><AddCircleIcon />
                            </IconButton>

                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sx={{ height: '100%', margin: 'auto', p: 2, }}>



                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="170"
                        image="images/pizza.jpg"
                    />



                </Grid>

            </Grid>

        </Card>




    )
}

export default ProductCard