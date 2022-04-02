import {Component} from "react";
import {Link} from "react-router-dom";
const categories = [
    {
      name: "Fruits And Vegetables",
      subcats: [
        { name: "Cuts & Sprouts" },
        { name: "Flowers" },
        { name: "Fresh Herbs & Seasonings" },
        { name: "Fresh Vegetables" },
        { name: "International Vegetables" },
        { name: "Organic Fruits & Vegetables" },
      ],
    },
    {
      name: "Grocery & Staples",
      subcats: [
        { name: "Dals & Pulses" },
        { name: "Dry Fruits" },
        { name: "Edible Oils & Ghee" },
        { name: "Flours & Sooji" },
        { name: "Masalas & Spices" },
        { name: "Organic Staples" },
        { name: "Rice & Rice Products" },
        { name: "Salt, Sugar & Jaggery" },
      ],
    },
    {
      name: "PersonalCare",
      subcats: [
        { name: "Baby Care" },
        { name: "Cosmetics" },
        { name: "Deos & Perfumes" },
        { name: "Skin Care" },
        { name: "Sanitary Needs" },
        { name: "Oral Care" },
        { name: "Personal Hygiene" },
        { name: "Saving Needs" },
      ],
    },
  ];
   export default class SidenavCategory extends Component {
    render() {
      return (
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            {categories.map((category, i) => {
              return (
                <div key={i}>
                  <li>
                    <Link to={"/products"}>
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      {category.name}
                    </Link>
                  </li>
                  <ul>
                    {category.subcats.map((subcat, i) => {
                      return (
                        <li key={i}>
                          <Link to={"/products"}>
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                            {subcat.name}
                          </Link>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  