import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes, Route} from 'react-router-dom';


import {Header} from './components/header';
import { Navigation } from './components/navbar';
import {Home} from "./pages/home";
import {Contact} from './pages/contact';
import {Offer} from './pages/offers';
import { Register } from './pages/registered';

import {Login} from "./pages/login";
import {Footer } from './components/footer';
import {Faq} from "./pages/faq";
import {AboutUs} from "./pages/aboutus";



function App() {
  return (
   <div className="App" >
  <Router>  
  <Header/>
  <Navigation/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Offers" element={<Offer/>} />
            <Route path="/registered" element={<Register />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/login" element={< Login/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path ='/faq' element ={<Faq/>}/>
            
          </Routes>
          <Footer/>
  </Router>
  </div>
  )
  }


export default App;
