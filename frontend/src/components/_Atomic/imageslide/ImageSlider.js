import React,  { useEffect, useState } from 'react';
import { Slider_image } from './Slider_image';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const ImageSlider = ({slides})=>{
const [current, setCurrent] =useState(0);
const length = slides.length;
const autoScroll = true;
let slideinterval;
let intervalTime=3000;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};

function auto(){
    slideinterval = setInterval(nextSlide, intervalTime)
}
useEffect(() => {
setCurrent(0);
},[]);

useEffect(() => {
    if (autoScroll){
        auto();
    }
    return () => clearInterval(slideinterval);
    },[current]);



if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

return(
<section className='slider'>
    {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/> */}
    {Slider_image.map((slide, index) => {
        return (
        <div 
        classname ={index === current ? 'slide active' : 'slide'} 
        key={index}
        >
        {index === current && (
            <img src={slide.image} alt='travel image' className='image'/>
        )}
        </div>
        );
    })}
    </section>


);

};


export default ImageSlider;