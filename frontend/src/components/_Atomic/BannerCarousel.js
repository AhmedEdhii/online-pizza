import React from 'react';
import './imageslide/BannerCarousel.css'
import { Box, Grid } from '@mui/material'
import ImageSlider from './imageslide/ImageSlider';
import {Slider_image} from './imageslide/Slider_image';

function BannerCarousel() {
  
    {/*
      
      
      <Grid sx={{flexGrow: 1}} >
      <Grid item>
      <Box
        sx={{
          marginBottom:3,
          
          width: '100%',
          height: 450,
          

          
          backgroundColor: '#F0F0F0',
          '&:hover': {
            backgroundColor: '#D8D8D8',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </Grid>
      </Grid>*/}
      
      return <ImageSlider slides={Slider_image} />
}

export default BannerCarousel