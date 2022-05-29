import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled,
} from '@mui/material'
import React, { useState, useEffect } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'
// import { borderRadius } from '@mui/material/node_modules/@mui/system';

function OtherProductsModal({ title, openPopup, setOpenPopup, product, toppings }) {

    // const { title, children, product, openPopup, setOpenPopup } = props;

    const alert = useAlert();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState('');

    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 300,
        padding: 10,
        margin: 4,
        borderRadius: '1.5rem'
    });

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const ATCbuttonHandler = () => {
        if (product.category === 'Beverages') {
            setPrice(product.BeverageDetails.price)
        }
        else {
            setPrice(product.SauceDetails.price)
        }
        dispatch(addItemToCart(product._id, quantity, price, "", {}));
        // dispatch(addItemToCart(product._id, quantity, 400, "small", [{name: "Mushrooms", price: 50}, {name: "Olives", price: 30}]));
        alert.success('Item Added to Cart')
        setOpenDrawer(true);
        setOpenPopup(false);

    }

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem',zIndex: 1500 }} onClose={() => { setOpenPopup(false) }}>

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
                                    {product.description}
                                </Typography>

                                <Grid item sx={{ p: 2 }}></Grid>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {/* {title} */}
                                    Price
                                </Typography>
                                <Divider sx={{ marginBottom: 1 }} />
                                {product.category === 'Beverages' && (
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. {product.BeverageDetails.price}
                                    </Typography>
                                )}
                                {product.category === 'Sauces' && (
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                        Rs. {product.SauceDetails.price}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>

                        <Grid item sx={{ p: 3 }}></Grid>

                        <Grid item display='flex' sx={{ marginRight: 4, flexDirection: "column", justifyContent: "space-evenly" }}>

                            {/* {children} */}
                            <Img alt="complex" src={product.url} />
                            <div align='center'>
                                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', }}> Cart Price</Typography>
                                <Typography variant="h5" sx={{ flexGrow: 1, }}> Rs. 299</Typography>
                            </div>
                            <Button type='submit' color='primary' variant="contained" fullWidth
                                sx={{ m: 1, height: 50 }} onClick={() => ATCbuttonHandler()}>Add To Cart</Button>
                        </Grid>

                    </Grid>
                </Grid>
                {/* <IconButton size='large' color='warning' onClick={() => { setOpenPopup(false) }}><CloseIcon /></IconButton> */}
            </Dialog>

            <Cart
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}>
            </Cart>
        </>

    )
}

export default OtherProductsModal