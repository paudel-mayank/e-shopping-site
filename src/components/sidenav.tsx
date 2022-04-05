
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { Root } from "../interfaces/categoryinterface";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";
  

function  SidenavCategory ():JSX.Element {
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
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            {categories && categories.data.map((category:any)=>(
             <li className="category">
               <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' className="arrowIcon"></FontAwesomeIcon>
               <Link to={'/'+ category.title.toLowerCase()} className="category">
             {category.title[0]+category.title.slice(1).toLowerCase()}

             {category.subcategories.data.map((sub:any)=>(
               <li className="subCategories">
               <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' className="arrowIcon "></FontAwesomeIcon>
               <Link to={`/products/+${category.slug}`}>
                {sub.title[0]+sub.title.slice(1).toLowerCase()}
                 </Link>
                   </li>
             ))}
           
           </Link>

           
             </li>
              
            )
               
            )}
            </ul>
            </div>
      )
          
          
         
}
  export default SidenavCategory;
  