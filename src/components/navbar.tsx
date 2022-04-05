

import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { useState, useEffect } from "react";
import { Root } from "../interfaces/categoryinterface";
import axios from "axios";
import { NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';

 export default function Navigation ():JSX.Element {
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
    return (
        <div>
            <div className="navigation-agileits">
		        <Container>
			        <Navbar aria-controls="navbar navbar-default"className="navbar-header nav_2">
			          		<Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="nav">
                          <Link className="nav-link " to="/">
                                      Home
                           </Link>
                              <Link className="nav-link " to="/products">
                                      All Products
                                    </Link>
                       
              {categories &&
                categories.data.map((category:any) => {
                  return category.subcategories ? (
                    <NavDropdown title={category.title[0]+ category.title.slice(1).toLowerCase()}>
                      <ul className="multi-column-dropdown ">
                        <Link to={`products/${category.slug}`}>
                          {category.title[0]+ category.title.slice(1).toLowerCase()}
                          
                        </Link>
                        
                        {category.subcategories.data.map((sub:any) => (
                          <NavDropdown.Item className="menus">{sub.title}</NavDropdown.Item>
                        ))}
                      </ul>
                    </NavDropdown>
                  ) : (
                    <Link
                      key={category.id}
                      className="nav-link "
                      to={"/" + category.title.toLowerCase()}
                    >
                      {category.title[0]+ category.title.slice(1).toLowerCase()}{" "}
                    </Link>
                  );
                })}
            
            </Nav>
          </Navbar.Collapse>

           </Navbar>
      
      </Container>
    </div>
  </div>
  );
}