import React,{FC} from 'react';

import "../assets/css/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faMapMarker,faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faDribbble,faVimeo}  from '@fortawesome/free-brands-svg-icons';
 
export const Footer:FC=()=>{
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
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" className="arrowIcon"/><a href="about.html">About Us</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="contact.html">Contact Us</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="short-codes.html">Short Codes</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="faq.html">FAQ's</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="products.html">Special Products</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="groceries.html">Groceries</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="household.html">Household</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="personalcare.html">Personal Care</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="beverages.html">Beverages</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="products.html">Store</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="checkout.html">My Cart</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="login.html">Login</a></li>
						<li><FontAwesomeIcon icon={faArrowRight} aria-hidden="true"className="arrowIcon"/><a href="registered.html">Create Account</a></li>
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