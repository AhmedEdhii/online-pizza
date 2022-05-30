import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getToppings } from '../../actions/toppingActions';


function MenuItemModal({ title, openPopup, setOpenPopup, }) {

    const Img = styled('img')({
        alignItems: "center",

        height: 300,
        padding: 10,
        margin: 4
    });



    const ATCbuttonHandler = () => {

        alert.success('Item Added to Cart')
        setOpenPopup(false) 
    }



    const alert = useAlert();
    const dispatch = useDispatch();

    console.log(openPopup)

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', }} onClose={() => { setOpenPopup(false) }}>

                <Grid spacing={2} sx={{ p: 2, alignItems: 'center', }}>

                <Typography variant='h6'>my name is modal</Typography>
                <Button variant='contained' onClick={ATCbuttonHandler}>Hello</Button>
                </Grid>
               
            </Dialog>


        </>

    )
}

export default MenuItemModal