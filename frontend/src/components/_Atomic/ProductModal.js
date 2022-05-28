import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled,
} from '@mui/material'
import React from 'react'

import CloseIcon from '@mui/icons-material/Close';

function ProductModal(props) {

    const { title, children, product, openPopup, setOpenPopup } = props;


    const Img = styled('img')({


        alignItems: "center",
        maxwidth: "100%",
        height: 300,
        padding: 10,
        margin: 4
    });
    return (
        <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', }} onClose={() => { setOpenPopup(false) }}>

            <Grid spacing={2} sx={{ p: 2, alignItems: 'center', }}>

                <Grid display="flex" container sx={{
                    flexWrap: ' nowrap',


                }}>


                    <Grid item sm={8} sx={{ marginTop: 2, marginBottom: 2, marginLeft: 4 }}  >
                        <Grid sx={{ maxWidth: "300px" }}>
                            <Grid item display='flex'  >

                                <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                    {/* {title} */}
                                    {product.name}
                                </Typography>
                            </Grid>


                            <Typography variant="body2" paragraph='true' component="div" sx={{ flexGrow: 1 }}>

                                Buffalo Chicken, Tikka, Sweet Corns, Green Onions, Jalapenos ,BBQ Ranch Sauce And Mozzarella
                            </Typography>

                            <Grid item sx={{ p: 2 }}></Grid>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {/* {title} */}
                                Sizes
                            </Typography>
                            <Divider sx={{ marginBottom: 1 }} />
                            <Grid display='flex' fullWidth >

                                <Grid item sx={{ marginRight: 10 }}>

                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="small"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="small" control={<Radio />} label="Small" />
                                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                            <FormControlLabel value="large" control={<Radio />} label="Large" />
                                            <FormControlLabel value="jumbo" control={<Radio />} label="Jumbo" />
                                        </RadioGroup>
                                    </FormControl>

                                </Grid>

                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 299
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 599
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 799
                                    </Typography>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 1199
                                    </Typography>
                                </Grid>

                            </Grid>


                            <Grid item sx={{ p: 1 }}></Grid>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {/* {title} */}
                                Extra Toppings
                            </Typography>
                            <Divider sx={{ marginBottom: 1 }} />

                            <Grid display='flex' fullWidth >
                                <Grid item sx={{ marginRight: 7 }}>

                                    <FormControl>


                                        <FormControlLabel value="cheese" control={<Checkbox />} label="Cheese" />
                                        <FormControlLabel value="olives" control={<Checkbox />} label="Olives" />
                                        <FormControlLabel value="mushrooms" control={<Checkbox />} label="Mushrooms" />
                                        <FormControlLabel value="chicken" control={<Checkbox />} label="Chicken" />


                                    </FormControl>
                                </Grid>
                                <Grid item display='flex' sx={{ flexDirection: 'column' }}>

                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 80
                                    </Typography>
                                    
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 80
                                    </Typography>
                                    
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 80
                                    </Typography>
                                    
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. 80
                                    </Typography>
                                    
                                    
                                </Grid>
                            </Grid>






                        </Grid>
                    </Grid>

                    <Grid item sx={{ p: 3 }}></Grid>

                    <Grid item display='flex' sx={{ marginRight: 4, flexDirection: "column", justifyContent: "space-evenly" }}>

                        {/* {children} */}
                        <Img alt="complex" src="images/pizza.jpg" />
                        <div align='center'>
                            <Typography variant="h5"  sx={{ flexGrow: 1, fontWeight: 'bold', }}> Cart Price</Typography>
                            <Typography variant="h5"  sx={{ flexGrow: 1,  }}> Rs. 299</Typography>
                            </div>
                        <Button type='submit' color='primary' variant="contained" fullWidth
                            sx={{ m: 1, height: 50 }} >Add To Cart</Button>
                    </Grid>

                </Grid>
            </Grid>



            {/* <IconButton size='large' color='warning' onClick={() => { setOpenPopup(false) }}><CloseIcon /></IconButton> */}

        </Dialog>

    )
}

export default ProductModal