import React,{FC} from 'react';

import {Slider} from "../components/Home/slider";
import {Slideshow} from '../components/Home/slideShowImages';
import { Brandstore} from '../components/Home/brandstore';
import {DisplayImages} from "../components/Home/displayimages";
import { NewOffer } from '../components/Home/newoffers';
import Breadcrumb from '../components/breadcrumbs';

export  const Home: FC=()=>{
    return(
        <>
           
           <Breadcrumb currentPage=""/>
           <Slider/>
           <Slideshow/>
           <DisplayImages/>
           
           <Brandstore/>
           <NewOffer/>
           
         
        </>
    )
}