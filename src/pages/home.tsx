import React,{FC} from 'react';

import {Slider} from "../components/slider";
import {Slideshow} from '../components/slideShowImages';
import { Brandstore} from '../components/brandstore';
import {DisplayImages} from "../components/displayimages";
import { NewOffer } from '../components/newoffers';
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