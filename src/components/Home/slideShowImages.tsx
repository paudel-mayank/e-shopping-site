import React,{FC} from 'react';


import { Carousel } from 'react-bootstrap';


export  const Slideshow :FC=()=>{
    return(
        <>
        <Carousel  >
     <Carousel.Item interval={1000} >
    <img
      className="d-block h-75 w-100"
      src={require('../../assets/images/b1.jpg')}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-75 w-100"
      src={require("../../assets/images/b3.jpg")}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-75 w-100"
      src={require("../../assets/images/b1.jpg")}
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
        </>
    )
} 