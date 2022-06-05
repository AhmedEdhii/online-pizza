import React from 'react';
import './imageslide/BannerCarousel.css'
import { Box, Grid } from '@mui/material'
import ImageSlider from './imageslide/ImageSlider';
import {Slider_image} from './imageslide/Slider_image';

function BannerCarousel() {
  
    
      
      

      
      return (

        <Grid sx={{flexGrow: 1}} >
        <Grid item>
        <Box
          sx={{
            marginBottom:3,
            
            width: '100%',
            height: 450,
            
  
            
           
            '&:hover': {
              cursor: 'pointer',
              boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
            },
          }}
        >
           <ImageSlider slides={Slider_image} />
           </Box>
      </Grid>
        </Grid>


       
      )
}

export default BannerCarousel