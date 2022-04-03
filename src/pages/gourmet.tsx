import { Component } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";



const gourmetProducts = [
    {
      name: "Milk Caramel",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "gu1.png",
    },
    {
      name: "Gourmet",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "gu2.png",
    },
    {
      name: "Strawberry",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "gu3.png",
    },
    {
      name: "Miniatures",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "gu4.png",
    },
    {
      name: "Le-Gourmet",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "gu5.png",
    },
    {
      name: "Chocolate Bar",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "gu6.png",
    },
    {
      name: "Poultry Rub",
      discountedPrice: 35.99,
      markedPrice: 55.0,
      imgFile: "gu7.png",
    },
    {
      name: "Sandwich",
      discountedPrice: 30.99,
      markedPrice: 45.0,
      imgFile: "gu8.png",
    },
    {
      name: "Fruit Nut",
      discountedPrice: 80.99,
      markedPrice: 105.0,
      imgFile: "gu9.png",
    },
  ];
  
  class Gourmet extends Component {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <>
          <Breadcrumb currentPage="Gourmet" />
          <div className="products">
            <div className="container">
              <div className="col-md-4 products-left">
                <SidenavCategory />
              </div>
              <div className="col-md-8 products-right">
                <PageSort />
                <div className="agile_top_brands_grids">
                  {gourmetProducts.map((prod, index) => {
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
  
  export default Gourmet;
  