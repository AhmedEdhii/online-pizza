import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider,
    Radio, FormLabel, FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, Input,
    FormGroup, TextField, Select, MenuItem, InputLabel, Switch
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import React, { Fragment, useState, useEffect, useReducer } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, clearErrors } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'


function EditPizzaModal({ title, openPopup, setOpenPopup, dashboard}) {

    const Input = styled('input')({
        display: 'none',
    });

    const Img = styled('img')({
        alignItems: "center",

        width: 200,
        height: 200,
        padding: 10,
        margin: 4,

        borderRadius: '1.5rem',
    });

    // const UploadHandler = () => {
    //     alert.success('Picture Uploaded')
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         console.log(reader.readyState)
    //         if (reader.readyState === 2) {
    //             setAvatarPreview(reader.result)
    //             setAvatar(reader.result)
    //         }
    //     }
    //     // reader.readAsDataURL(e.target.files[0])
    //     // setOpenPopup(false)
    // }

    const alert = useAlert();
    const dispatch = useDispatch();
    const [value, forceUpdate] = useReducer(x => x + 1);

    const { error: updateError, isUpdated } = useSelector(state => state.product);
    const { product } = useSelector(state => state.productDetails)

    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)

    const [smallPrice, setSmallPrice] = useState(product.PizzaDetails.size.small)
    const [mediumPrice, setMediumPrice] = useState(product.PizzaDetails.size.regular)
    const [largePrice, setLargePrice] = useState(product.PizzaDetails.size.large)
    const [jumboPrice, setJumboPrice] = useState(product.PizzaDetails.size.jumbo)


    const [category, setCategory] = useState("Pizzas")

    const [activeState, setActiveState] = useState(false);
    const [status, setStatus] = useState('active');

    const [avatar, setAvatar] = useState('/images/default.png')
    const [avatarPreview, setAvatarPreview] = useState((product.url) || ('/images/default.png'))

    useEffect(() => {
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success('Product updated successfully');
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }
    }, [dispatch, alert, isUpdated, updateError, value, dashboard])


    const submitHandler = (e) => {
        e.preventDefault();
        setOpenPopup(false)
        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('small', smallPrice);
        formData.set('regular', mediumPrice);
        formData.set('large', largePrice);
        formData.set('jumbo', jumboPrice);
        formData.set('avatar', avatar);
        formData.set('status', status)
        dispatch(updateProduct(product._id, formData))
        setAvatarPreview('/images/default.png')
        setName('')
        setDescription('')
        setSmallPrice('')
        setMediumPrice('')
        setLargePrice('')
        setJumboPrice('')
        // forceUpdate();
    }

    const clearHandler = () => {
        setOpenPopup(false)
        // forceUpdate();
        window.location.reload();
        setAvatarPreview('/images/default.png')
        setName('')
        setDescription('')
        setSmallPrice('')
        setMediumPrice('')
        setLargePrice('')
        setJumboPrice('')
        return openPopup;
    }

    const openHandler = () => {
        console.log(product + "hello")
        setOpenPopup(true)
        setAvatarPreview((product.url || '/images/default.png'))
        setName(product.name)
        setDescription(product.description)
        setSmallPrice('')
        setMediumPrice('')
        setLargePrice('')
        setJumboPrice('')
        return openPopup;
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            console.log("444" + e.target.value)
            reader.onload = () => {
                console.log(reader.readyState)
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }


    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '5rem', zIndex: 1200 }} onClose={clearHandler}>

                <Grid display='flex' sm={12} sx={{ p: 2, }}>

                    <Grid display='flex' sx={{ flexDirection: 'column', p: 1 }}>
                        <Box container display='flex'
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, },

                                width: '300px',
                                flexDirection: 'column',

                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Edit Pizza</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: 1.2 }}>Pizza Details</Typography>
                            {/* Name and Email */}
                            <TextField
                                label='Name'
                                placeholder='Enter Name' fullWidth required
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />


                            <TextField
                                label='Description'
                                placeholder='Enter Description' fullWidth required multiline

                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />


                            <FormControl fullWidth sx={{ marginTop: 1, marginLeft: 1, marginBottom: 1, }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select

                                    defaultValue='Pizzas'
                                    label="Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value='Pizzas'>Pizzas</MenuItem>

                                </Select>

                            </FormControl>

                            <Typography variant='body1' sx={{ marginTop: 2, fontWeight: 'bold', marginLeft: 1.2 }}>Pizza Price</Typography>

                            <TextField
                                label='Price for Small'
                                placeholder='Price for Small Pizza' fullWidth required
                                defaultValue={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                            />

                            <TextField
                                label='Price for Medium'
                                placeholder='Price for Medium Pizza' fullWidth required
                                defaultValue={mediumPrice}
                                onChange={(e) => setMediumPrice(e.target.value)}
                            />

                            <TextField
                                label='Price for Large'
                                placeholder='Price for Large Pizza' fullWidth required
                                defaultValue={largePrice}
                                onChange={(e) => setLargePrice(e.target.value)}
                            />

                            <TextField
                                label='Price for Jumbo'
                                placeholder='Price for Jumbo Pizza' fullWidth required
                                defaultValue={jumboPrice}
                                onChange={(e) => setJumboPrice(e.target.value)}
                            />
                        </Box>
                    </Grid>



                    <Grid display='flex' sx={{ m: 1, p: 1, marginLeft: 3, width: "80%", flexDirection: "column", alignItems: 'center', justifyContent: 'center ' }}>

                        <Img alt="complex" src={avatarPreview} />

                        <Fragment>
                            <Input name='avatar' accept="image/*" id="contained-button-file" type="file"
                                onChange={onChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button fullWidth variant='contained' component="span" startIcon={<PhotoCamera />}
                                    sx={{ marginTop: 2, marginBottom: 2, }}>Change Picture</Button>
                            </label>


                        </Fragment>

                        <Typography
                            variant='body1'
                            sx={{ fontWeight: 'bold', textAlign: 'left' }}>Set Product Active</Typography>
                        <Switch
                            defaultChecked={activeState} size='medium'
                            checked={activeState}
                            onChange={(e) => setActiveState(e.target.checked)}

                        />

                        <Button fullWidth variant='contained' sx={{ marginTop: 2, marginLeft: 1, marginBottom: 1, }}
                            onClick = {submitHandler}>Edit Item</Button>


                    </Grid>

                </Grid>
            </Dialog>


        </>

    )
}

export default EditPizzaModal