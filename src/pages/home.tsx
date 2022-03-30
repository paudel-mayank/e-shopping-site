import React,{FC} from 'react';




import {Slider} from "../components/slider";
import {Slideshow} from '../components/slideShowImages';
import { Brandstore} from '../components/brandstore'

export  const Home: FC=()=>{
    return(
        <>
           
           
           <Slider/>
           <Slideshow/>
           <Brandstore/>
           
         
        </>
    )
}