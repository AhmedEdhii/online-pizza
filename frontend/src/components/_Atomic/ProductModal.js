import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getToppings } from '../../actions/toppingActions';
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'

function ProductModal({ title, openPopup, setOpenPopup, product, toppings }) {

    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 300,
        padding: 10,
        margin: 4
    });

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const[selectSize, setSelectSize] = useState('')

    const [selectToppings, setSelectToppings] = useState('')

    const handleToggle = (value) => () => {
      const currentIndex = selectToppings.indexOf(value);
      const newChecked = [...selectToppings];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(selectToppings, 1);
      }
  
      setSelectToppings(newChecked);
    };

    console.log(selectToppings);

    const ATCbuttonHandler = () => {
        // console.log(product._id)
        //removeItemFromCart(product._id)
        dispatch(addItemToCart(product._id, quantity, 400, selectSize, ["623c3eafd3b63a766ce3c506", "623c3ed6d3b63a766ce3c508"]));
        // dispatch(addItemToCart(product._id, quantity, 400, "small", [{name: "Mushrooms", price: 50}, {name: "Olives", price: 30}]));
        alert.success('Item Added to Cart')
        setOpenDrawer(true);
        setOpenPopup(false);
        console.log(selectSize);
        console.log(selectToppings);
    }



    const alert = useAlert();
    const dispatch = useDispatch();
    
    const [quantity, setQuantity] = useState(1)

    // const { loading, toppings, error, toppingsCount } = useSelector(state => state.toppings)

    // useEffect(() => {
    //     if (error) {
    //         return alert.error(error)
    //     }
    //     // dispatch(getToppings());
    //     //alert.success('Success')
    // }, [alert, error])

    // const addToCart = () => {
    //     dispatch(addItemToCart(product._id, quantity, 400, "small", {name: "Mushrooms", price: 40}));
    //     alert.success('Item Added to Cart')
    // }

    return ( 
        <>
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
                                    {product.description}
                                </Typography>


                                {product.category === 'Pizzas' && (
                                    <Grid item sx={{ p: 2 }}></Grid>
                                )}
                                {product.category === 'Pizzas' && (
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {/* {title} */}
                                        Sizes
                                    </Typography>
                                )}

                                <Divider sx={{ marginBottom: 1 }} />

                                <Grid display='flex' fullwidth="true" >

                                    {product.category === 'Pizzas' && (
                                        <Grid item sx={{ marginRight: 10 }}>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="small"
                                                    name="radio-buttons-group"
                                                    onChange={(e) => setSelectSize(e.target.value)}
                                                >
                                                    <FormControlLabel value="Small" control={<Radio />} label="Small" />
                                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                                                    <FormControlLabel value="Large" control={<Radio />} label="Large" />
                                                    <FormControlLabel value="Jumbo" control={<Radio />} label="Jumbo" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    )}



                                    {product.category === 'Pizzas' && (
                                        <Grid item display='flex' sx={{ flexDirection: 'column' }}>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.PizzaDetails.size.small}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.PizzaDetails.size.regular}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.PizzaDetails.size.large}
                                            </Typography>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.PizzaDetails.size.jumbo}
                                            </Typography>
                                        </Grid>
                                    )}
                                    {product.category === 'Beverages' && (
                                        <Grid item display='flex' sx={{ flexDirection: 'column' }}>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.BeverageDetails.price}
                                            </Typography>
                                        </Grid>
                                    )}
                                    {product.category === 'Sauces' && (
                                        <Grid item display='flex' sx={{ flexDirection: 'column' }}>
                                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                Rs. {product.SauceDetails.price}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>


                                <Grid item sx={{ p: 1 }}></Grid>
                                
                                {product.category === 'Pizzas' && (
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {/* {title} */}
                                        Extra Toppings
                                    </Typography>
                                )}
                                {product.category === 'Pizzas' && (
                                    <Divider sx={{ marginBottom: 1 }} />
                                )}
                                {product.category === 'Pizzas' && (
                                    <Grid display='flex' fullwidth="true" >
                                        <Grid item sx={{ marginRight: 7 }}>
                                        <FormGroup>
                                            <FormControl>
                                                {toppings && toppings.map(topping => (
                                                    <FormControlLabel
                                                        value={topping.name}
                                                        control={<Checkbox />}
                                                        onChange={handleToggle(topping)}
                                                        checked={selectToppings.indexOf(topping) !== -1}
                                                        label={topping.name} />
                                                ))}
                                            </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item display='flex' sx={{ flexDirection: 'column' }}>
                                            {toppings && toppings.map(topping => (
                                                <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                                                    Rs. {topping.price}
                                                </Typography>
                                            ))}
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>

                        <Grid item sx={{ p: 3 }}></Grid>

                        <Grid item display='flex' sx={{ marginRight: 4, flexDirection: "column", justifyContent: "space-evenly" }}>

                            {/* {children} */}
                            <Img alt="complex" src={product.url} />
                            {/* <div align='center'>
                                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', }}> Cart Price</Typography>
                                <Typography variant="h5" sx={{ flexGrow: 1, }}> Rs. 299</Typography>
                            </div> */}
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

export default ProductModal