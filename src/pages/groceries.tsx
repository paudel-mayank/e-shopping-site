import { Component } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";

const groceriesProducts = [
    {
      name: "Toor Dal",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "14.png",
    },
    {
      name: "Moong Dal",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "15.png",
    },
    {
      name: "Channa",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "16.png",
    },
    {
      name: "Arhar Dal",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "17.png",
    },
    {
      name: "Toor Dal",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "14.png",
    },
    {
      name: "Moong Dal",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "15.png",
    },
    {
      name: "Channa",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "16.png",
    },
    {
      name: "Arhar Dal",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "17.png",
    },
    {
      name: "Toor Dal",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "14.png",
    },
  ];
  
  class Groceries extends Component {
    constructor(props: any) {
      super(props);
    }
    render() {
      return (
        <>
          <Breadcrumb currentPage="Groceries" />
          <div className="products">
            <div className="container">
              <div className="col-md-4 products-left">
                <SidenavCategory />
              </div>
              <div className="col-md-8 products-right">
                <PageSort />
                <div className="agile_top_brands_grids">
                  {groceriesProducts.map((prod, index) => {
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
  export default Groceries;
  