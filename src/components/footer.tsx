import React,{FC} from 'react';
import {Link} from 'react-router-dom';

import "../assets/css/footer.css";

import { useState, useEffect } from "react";
import { Root } from "../interfaces/categoryinterface";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapMarker,faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faDribbble,faVimeo}  from '@fortawesome/free-brands-svg-icons';
 





export const Footer :FC=()=>{
	const [categories,setCategories]=useState<Root>();
    const warehouse_id = 1;
    const apiKey:any = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6"
  

    useEffect(() => {
        const getCategory = async () => {
          try {
            const config = {
              headers: {
                  "Api-Key": apiKey,
                  "Warehouse-Id": warehouse_id
                },
            };
            const response = await axios.get(`https://uat.ordering-dalle.ekbana.net/api/v4/category`, config);
    
            if (response.status === 200) {
              setCategories(response.data);
            }
          } catch (e) {
            console.log("Error on page", e);
          }
        };
        getCategory();
    
      },[categories]);
     return(
         <>
          <div className="footer">
	        	<div className="container">
				<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><FontAwesomeIcon icon={faMapMarker} aria-hidden='true' className="contacticons"/> 1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><FontAwesomeIcon icon={ faEnvelope} aria-hidden="true" className="contacticons"/><a href="mailto:info@example.com">info@example.com</a></li>
						<li><FontAwesomeIcon icon={faPhone} aria-hidden="true" className="contacticons"/> +1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" className="arrowIcon"/><Link to='/aboutus'> About Us</Link> </li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to='/contact'>Contact Us</Link></li>
						
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/faq">FAQ's</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/products">Special Products</Link></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						{/* <li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to='/groceries'>Groceries</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/household">Household</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/personalcare">Personal Care</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/packagedfoods">Packaged Foods</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/beverages">Beverages</Link></li> */}

						{categories && categories.data.map((category)=>
						(
						<li>	<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" className='arrowIcon'/> <Link to ={"/" + category.title.toLocaleLowerCase()}>{category.title[0]+ category.title.slice(1).toLowerCase()}</Link></li>
						))}
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/products">Store</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/checkout">My Cart</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/login">Login</Link></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><Link to="/registered">Create Account</Link></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2017 Super Market. All rights reserved | Design by <a href="http://.socialmedia{
                                                                  border:50%;w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><FontAwesomeIcon icon={faFacebook} aria-hidden='true' className="socialmedia"/></li>
						<li><FontAwesomeIcon icon={faTwitter} aria-hidden='true' className="socialmedia"/></li>
						<li><FontAwesomeIcon icon={faDribbble} aria-hidden='true' className="socialmedia"/></li>
						<li><FontAwesomeIcon icon={faVimeo} aria-hidden='true' className="socialmedia"/></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src={require("../assets/images/card.png")} alt=" " className="img-responsive"/>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
         </>
     )
 }