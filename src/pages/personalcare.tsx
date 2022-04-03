import { Component } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";

const careProducts = [
    {
      name: "Baby Lotion",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "pc1.png",
    },
    {
      name: "Rash Cream",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "pc2.png",
    },
    {
      name: "Rash Cream",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "pc3.png",
    },
    {
      name: "Rash Cream",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "pc4.png",
    },
    {
      name: "Baby Lotion",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "pc5.png",
    },
    {
      name: "Rash Cream",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "pc6.png",
    },
    {
      name: "Baby Lotion",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "pc7.png",
    },
    {
      name: "Wipes Gentle",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "pc8.png",
    },
    {
      name: "Rash Cream",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "pc9.jpg",
    },
  ];
  
  class PersonalCare extends Component {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <>
          <Breadcrumb currentPage="Personal Care" />
          <div className="products">
            <div className="container">
              <div className="col-md-4 products-left">
                <SidenavCategory />
              </div>
              <div className="col-md-8 products-right">
                <PageSort />
                <div className="agile_top_brands_grids">
                  {careProducts.map((prod, index) => {
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
  
  export default PersonalCare;
  