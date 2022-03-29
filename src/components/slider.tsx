import React,{FC} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';


export  const Slider :FC=()=>{
    return(
        <>
        <Carousel  >
                <Carousel.Item interval={3000} >
    <img
      className="d-block h-75 w-100"
      src={require('../assets/images/44.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>WHOLE SPECIES PRODUCTS ARE NOW ONLINE WITH US</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-75 w-100"
      src={require("../assets/images/11.jpg")}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>BUY RICE PRODUCTS ARE NOW ONLINE WITH US</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-75 w-100"
      src={require("../assets/images/22.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>WHOLE SPECIES PRODUCTS ARE NOW ONLIINE WITH US</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
} 