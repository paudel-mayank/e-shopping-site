import React,{FC} from 'react';
import {Link} from "react-router-dom";
//bootstrap
import {Container} from '@mui/material';
 

//css file
import '../assets/css/header.css';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown as Cart } from '@fortawesome/free-solid-svg-icons';

export const Header : FC = ()=>{
    return(
        <>
        <div className="header">
      <Container>
        <div className="header-elements">
          <div className="offer">
            <p className="offer-text">
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <Link className="links offer-link" to="/products">
                SHOP NOW
              </Link>
            </p>
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li>
                <Link className="links menu-items" to="/registered">
                  Create Account
                </Link>
              </li>
              <li>
                <Link className="links menu-items" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="links menu-items" to="/contact">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="links cart-icon" to="/cart">
              <FontAwesomeIcon icon={Cart} />
            </Link>
          </div>
        </div>
      </Container>
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