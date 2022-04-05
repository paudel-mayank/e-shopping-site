import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import EachProduct from "../components/product";

import axios from "axios";

import {Root as ProductDisplayInterface} from '../interfaces/productdisplayinterfaces';

const url="https://uat.ordering-dalle.ekbana.net/api/v4/product";
const apiKey="q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouse_id=1;

 function Products (){
const [products,setProducts] =useState<ProductDisplayInterface>();

useEffect(()=>{

const allProducts=async()=>{
  try{
    const config={
      headers:{
        "Api-key":apiKey,
        "Warehouse-Id":warehouse_id
      },
    };
      let ProductResponse= await axios.get(`${url}`,config);
       
      if(ProductResponse.status===200){
        setProducts(ProductResponse.data)
      }

    }
    catch(e){
      console.log("Error:", e)
    }
  };
  allProducts();
},[]);
return(
 <>
 <Breadcrumb currentPage="products"/>
 <div className="products">
 <div className="container">
     <div className="col-md-4 products-left">
             <SidenavCategory />
         </div>
          <div className="col-md-8 products-right">
            <PageSort />
           <div className="agile_top_brands_grids">
            
                  { products && 
                    products.data.map((product:any)=>(
                      <EachProduct offer={product.unitPrice[0].hasOffer}
                                    image={product.categoryBackgroundImage}
                                    title={product.title}
                                    sellingPrice={product.unitPrice[0].sellingPrice}
                                    markedPrice={product.unitPrice[0].markedPrice}
                        />
                    ))
                     }
                  </div>
       <Pagination/>
                <div className="clearfix"> </div>
              </div>


              <Pagination />
               </div>
</div>
 </>

)}

export default Products;

