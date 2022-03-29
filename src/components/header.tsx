import React,{FC} from 'react';
import {Link} from "react-router-dom";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//css file
import '../assets/css/header.css';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown as Cart } from '@fortawesome/free-solid-svg-icons';

export const Header : FC = ()=>{
    return(
        <>
        <div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . 
                    <a href="products.html" className="link-success">SHOP NOW</a></p>
			</div>
			<div className="agile-login">
				<ul className='header_links'>
					<li><a href="registered.html"> Create Account </a></li>
					<li><a href="login.html">Login</a></li>
					<li><a href="contact.html">Help</a></li>
					
				</ul>
			</div>
			<div className="product_list_header">  
					<form action="#" method="post" className="last"> 
						<input type="hidden" name="cmd" value="_cart"/>
						<input type="hidden" name="display" value="1"/>
						<button className="w3view-cart" type="submit" name="submit" value="">
                        <FontAwesomeIcon icon={Cart} aria-hidden='true' size='lg' color="white" className="CartArrowDown" />
                            </button>
					</form>  
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><FontAwesomeIcon icon={faPhone}  size='lg' aria-hidden="true" />
                        Order online or call us : (+0123) 234 567</li>	
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><Link to="/home"/>super Market</h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." />
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<FontAwesomeIcon icon={faSearch} aria-hidden='true' className="searchIcon"/>
				</button>
				<div className="clearfix"></div>
			</form>
		  </div>
			
			<div className="clearfix"> </div>
		</div>
        </div>

        </>
    )
}