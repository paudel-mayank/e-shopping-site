import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes, Route} from 'react-router-dom';


import {Header} from './components/header';
import  {Navigation } from './components/navbar';
import {Home} from "./pages/home";
import {Contact} from './pages/contact';
import {Offer} from './pages/offers';
import  Register from './pages/register';
import Products from './pages/products';
import {Login} from "./pages/login";
import {Footer } from './components/footer';
import {Faq} from "./pages/faq";
import {AboutUs} from "./pages/aboutus";
import Groceries from './pages/groceries';
import Household from './pages/household';
import Gourmet from './pages/gourmet';
import Beverages from './pages/beverages';
import PersonalCare from './pages/personalcare';



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
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path ='/faq' element ={<Faq/>}/>
            <Route path="/groceries" element={<Groceries/>}/>
            <Route path="/household" element={<Household/>}/>
            <Route path="/gourmet" element={<Gourmet/>}/>
            <Route path='/personalcare' element={<PersonalCare/>}/>

            <Route path='/beverages' element={<Beverages/>}/>
          </Routes>
        
          <Footer/>
  </Router>
  </div>
  )
  }


export default App;
