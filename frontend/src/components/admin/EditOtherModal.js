import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel, Input,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup, TextField, Select, MenuItem, InputLabel, Switch
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';

import React, { Fragment, useState, useEffect } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, clearErrors } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'

import PhotoCamera from '@mui/icons-material/PhotoCamera';

function EditOtherModal({ title, openPopup, setOpenPopup}) {

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

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error: updateError, isUpdated } = useSelector(state => state.product);
    const { product } = useSelector(state => state.productDetails)

    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)

    const [price, setPrice] = useState(11)

    const [category, setCategory] = useState(product.category)

    const [activeState, setActiveState] = useState('true');
    const [status, setStatus] = useState('active');

    const [avatar, setAvatar] = useState('')
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

    }, [dispatch, alert, isUpdated, updateError, product])

    const UploadHandler = () => {
        alert.success('Item Added Menu')
        setOpenPopup(false)

        setAvatarPreview('/images/default.png')
        setName('')
        setCategory('')
        setDescription('')
        setPrice('')
    }

    const submitHandler = (e) => {
        // e.preventDefault();
        setOpenPopup(false)
        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('price', price);
        formData.set('avatar', avatar);
        formData.set('status', status)
        dispatch(updateProduct(product._id, formData))
        setAvatarPreview('/images/default.png')
        setName('')
        setDescription('')
        setPrice('')
    }


    const clearHandler = () => {
        setOpenPopup(false)
        // window.location.reload();
        setAvatarPreview('/images/default.png')
        setName('')
        setCategory('')
        setDescription('')
        setPrice('')
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


    console.log(openPopup)

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', zIndex: 1200 }} onClose={clearHandler}>

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
                            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Edit Other Menu Items</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: 1.2 }}>Product Details</Typography>
                            {/* Name and Email */}
                            <TextField
                                label='Name'
                                placeholder='Enter Name' fullWidth required
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />


                            <TextField
                                label='Description'
                                placeholder='Enter Email' fullWidth required multiline

                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />


                            <FormControl fullWidth sx={{ marginTop: 1, marginLeft: 1, marginBottom: 1, }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select

                                   
                                    label="Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value='Beverages'>Beverages</MenuItem>
                                    <MenuItem value='Sauces'>Sauces</MenuItem>

                                </Select>

                            </FormControl>

                            <Typography variant='body1' sx={{ marginTop: 2, fontWeight: 'bold', marginLeft: 1.2 }}>Product Price</Typography>

                            <TextField
                                label='Price '
                                placeholder='Price for Product' fullWidth required
                                defaultValue={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />


                        </Box>
                    </Grid>



                    <Grid display='flex' sx={{ m: 1, mt: 8, p: 1, marginLeft: 3, width: "80%", flexDirection: "column", alignItems: 'center', justifyContent: 'center ' }}>

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

                        <Button fullWidth variant='contained' sx={{ marginTop: 2, marginBottom: 1, }}
                            onClick={submitHandler}>Edit Item</Button>


                    </Grid>

                </Grid>
            </Dialog>


        </>

    )
}

export default EditOtherModal