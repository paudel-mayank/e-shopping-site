import React,{FC} from 'react';
import { Container,Nav,NavDropdown, Navbar } from 'react-bootstrap';
import '../assets/css/navbar.css';
export const Navigation :FC=()=>{
    return(
        <>
        <Navbar className="navElements" expand="lg" sticky="top">
           <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="navItems" >Home</Nav.Link>
        
        <NavDropdown title="Groceries" className="navItems">
     
          <NavDropdown.Item href="#action/3.4" className="titleDropdown">All Groceries</NavDropdown.Item>
                    <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" className='items'> Dals and Pulses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className='items'>Almonds</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className='items'>Cashews</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="items"> Dry Fruit</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items">Mukhwas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="items">Rice and Rice Products</NavDropdown.Item>
     
        </NavDropdown>
        <NavDropdown title="Household" className="navItems">
     
          <NavDropdown.Item href="#action/3.4" className="titleDropdown">All Household</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" className="items"> Cookware</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items">Scrubbers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="items">Dust Cloth</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"  className="items"> Mops</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Kitchenware</NavDropdown.Item>
  
     
        </NavDropdown>
        <NavDropdown title="PersonalCare" className="navItems">
     
          <NavDropdown.Item href="#action/3.4" className="titleDropdown">Baby care</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" className="items"> Baby Care Accessories</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items">Baby Oil and Shampoo </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="items">Baby Creams and Lotions</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"  className="items"> Baby Powder</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Diapers and Wipes</NavDropdown.Item>
  
     
        </NavDropdown>
        <NavDropdown title="Packaged Foods" className='navItems'>
     
          <NavDropdown.Item href="#action/3.4" className="titleDropdown"> All Accessories</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" className="items"> Baby Food</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items">Dessert Items </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="items">Biscuits</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"  className="items"> Breakfast Cereals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Canned Food</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Chocolates and Sweets</NavDropdown.Item>

     
        </NavDropdown>

        <NavDropdown title="Beverages" className='navItems'>
     
          <NavDropdown.Item href="#action/3.4" className="titleDropdown"> Tea and Coffee</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" className="items"> Green Tea</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items">Ground Coffee </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="items">Herbal tea</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"  className="items"> Instant Coffee</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Tea</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="items" >Tea Bags</NavDropdown.Item>

     
        </NavDropdown>
        <Nav.Link href="#home" className="navItems" >Gourmet</Nav.Link>
        <Nav.Link href="#home" className="navItems" >Offers</Nav.Link>
        <Nav.Link href="#home" className="navItems" >Contact</Nav.Link>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}