import { Component } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";



const householdProducts = [
    {
      name: "Fry Pan",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "hh1.png",
    },
    {
      name: "Cookware",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "hh2.png",
    },
    {
      name: "Dosa Tawa",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "hh3.png",
    },
    {
      name: "Flask",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "hh4.png",
    },
    {
      name: "Kadai Idly",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "hh5.png",
    },
    {
      name: "Breakfast Pan",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "hh6.png",
    },
    {
      name: "Elite Set",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "hh7.png",
    },
    {
      name: "Coated Pan",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "hh8.png",
    },
    {
      name: "Tadka Pan",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "hh9.png",
    },
  ];
  
  export default class Household extends Component {
    // constructor(props: any) {
    //   super(props);
    // }
  
    render() {
      return (
        <>
          <Breadcrumb currentPage="Household" />
          <div className="products">
            <div className="container">
              <div className="col-md-4 products-left">
                <SidenavCategory />
              </div>
              <div className="col-md-8 products-right">
                <PageSort />
                <div className="agile_top_brands_grids">
                  {householdProducts.map((prod, index) => {
                    return <Product {...prod} key={index} />;
                  })}
                  <div className="clearfix"> </div>
                </div>
                <Pagination />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </>
      );
    }
  }
  
