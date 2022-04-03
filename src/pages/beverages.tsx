import { Component } from "react";


import Breadcrumb from "../components/breadcrumbs";
import SidenavCategory from "../components/sidenav";
import {PageSort} from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";

const beverageProducts = [
  {
    name: "Frooti",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv2.png",
  },
  {
    name: "Tropicana",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv3.png",
  },
  {
    name: "Tropicana",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv4.png",
  },
  {
    name: "Coca Cola",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv5.png",
  },
  {
    name: "Coca Cola",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv6.png",
  },
  {
    name: "Appy",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv7.png",
  },
  {
    name: "Real",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv8.png",
  },
  {
    name: "Red Bull",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv9.png",
  },
  {
    name: "Minute Maid",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv1.png",
  },
];

export default  class Beverages extends Component {
 

  render() {
    return (
      <>
        <Breadcrumb currentPage="Beverages" />
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <SidenavCategory />
            </div>
            <div className="col-md-8 products-right">
              <PageSort />
              <div className="agile_top_brands_grids">
                {beverageProducts.map((prod, index) => {
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
