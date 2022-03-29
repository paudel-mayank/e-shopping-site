import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom';


import {Home} from "./pages/home";
import {Offer} from './pages/offers';
import {Register } from './pages/registered';
import { Products} from './pages/products'



function App() {
  return (
    
  <BrowserRouter>  
      <Home/>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Offers" element={<Offer/>} />
            <Route path="/Registered" element={<Register />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
  </BrowserRouter>
   
      
  
      
        
    
    
  )
  }


export default App;
