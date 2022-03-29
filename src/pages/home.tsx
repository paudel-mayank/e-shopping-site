import React,{FC} from 'react';



import {Header} from "../components/header";
import {Slider} from "../components/slider";
import {Footer} from "../components/footer";
import {Navigation} from '../components/navbar'
import {Slideshow} from '../components/slideShowImages';
import { Brandstore} from '../components/brandstore'

export  const Home: FC=()=>{
    return(
        <>
           <Header/>
           <Navigation/>
           <Slider/>
           < Slideshow/>
           <Brandstore/>
           <Footer/>
         
        </>
    )
}