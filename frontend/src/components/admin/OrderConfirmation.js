import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel, Input,DialogContentText, DialogActions,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup, TextField, Select, MenuItem, InputLabel, Switch
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getToppings } from '../../actions/toppingActions';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function OrderConfirmation({ title, openPopup, setOpenPopup }) {

 
  
    const handleClose = () => {
        setOpenPopup(false);
    };

    const DeleteHandler = () => {

        alert.success('Order Delivered')
        setOpenPopup(false)

   
    }

    const closeHandler = () => {

        setOpenPopup(false)

    }



    const alert = useAlert();
    const dispatch = useDispatch();

    console.log(openPopup)

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', zIndex: 1200 }} onClose={closeHandler}>

                

                    <DialogTitle id="alert-dialog-title" sx={{fontWeight: 500}}>
                        Delivery Popup
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" >
                           Mark Order ID 2019 as delivered
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        
                        <Button onClick={closeHandler} autoFocus>
                            cancel
                        </Button>
                        <Button onClick={DeleteHandler} variant='contained'>Confirm</Button>
                    </DialogActions>



               
            </Dialog>


        </>

    )
}

export default OrderConfirmation