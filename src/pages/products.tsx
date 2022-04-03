import { Component } from "react";
import Breadcrumb from "../components/breadcrumbs"
import SidenavCategory from "../components/sidenav";
import {PageSort }from "../components/pagesort";
import {Pagination} from "../components/pagination";
import Product from "../components/product";

const products = [
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
  {
    name: "Sampann-Toor-Dal",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf9.png",
  },
  {
    name: "Parryss-Sugar",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf1.png",
  },
  {
    name: "Saffola-Gold",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf2.png",
  },
  {
    name: "Sampann-Toor-Dal",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf3.png",
  },
  {
    name: "Parryss-Sugar",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf4.png",
  },
  {
    name: "Saffola-Gold",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf5.png",
  },
  {
    name: "Sampann-Toor-Dal",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf6.png",
  },
  {
    name: "Parryss-Sugar",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf7.png",
  },
  {
    name: "Saffola-Gold",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf8.png",
  },
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

class Products extends Component {
  render() {
    return (
      <div>
        <Breadcrumb currentPage={"Products"} />

        {/* products */}
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <SidenavCategory />
            </div>
            <div className="col-md-8 products-right">
              <PageSort />
              <div className="agile_top_brands_grids">
                {products.map((prod, index) => {
                  return <Product {...prod} key={index} />;
                })}
                <div className="clearfix"> </div>
              </div>

              <Pagination />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
