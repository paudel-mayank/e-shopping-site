import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css'

import {Header} from './components/header';
import { Navigation } from './components/navbar';
import {Home} from "./pages/home";

import {Offer} from './pages/offers';
import { Register } from './pages/registered';
import { Products} from './pages/products'; 
import {Login} from "./pages/login";
import {Footer } from './components/footer';




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
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={< Login/>}/>
          </Routes>
          <Footer/>
  </Router>
  </div>
  )
  }


export default App;
