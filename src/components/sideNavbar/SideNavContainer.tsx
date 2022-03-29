import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SideNavContainer = () => {
  return (
    <>
      <div className="sidenavcontainer">
        <div className="sidebar-header">
          <h3>Categories</h3>
        </div>
        <div className="sidebar-contents">
          <ul className="category">
            {/* Fruits & Vegetables */}
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content-header">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Fruits And Vegetables
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Cuts & Sprouts
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Flowers
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Fresh Herbs & Seasonings
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Fresh Vegetables
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                International Vegetables
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Organic Fruits & Vegetables
              </Link>
            </li>

            {/* Groceries */}
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content-header">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Grocery & Staples
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Dals & Pulses
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Dry Fruits
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Edible Oils & Ghee
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Flours & Sooji
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Masalas & Spices
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Organic Staples
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Rice & Rice Products
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Salt, Sugar & Jaggery
              </Link>
            </li>

            {/* Personal Care */}
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content-header">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Personal Care
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Baby Care
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Cosmetics
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Deos & Perfumes
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Skin Care
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Sanitary Needs
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Oral Care
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon= {faArrowRight} className="arrow-icon" />
                Personal Hygiene
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Products" className="sidebar-content">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                Shaving Needs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNavContainer;
