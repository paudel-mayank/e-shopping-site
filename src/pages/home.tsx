import React,{FC} from 'react';




import {Slider} from "../components/slider";
import {Slideshow} from '../components/slideShowImages';
import { Brandstore} from '../components/brandstore';
import {DisplayImages} from "../components/displayimages";

export  const Home: FC=()=>{
    return(
        <>
           
           
           <Slider/>
           <Slideshow/>
           <DisplayImages/>
           <Brandstore/>
           
         
        </>
    )
}