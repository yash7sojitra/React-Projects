import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
// import classes from "./Navbar.module.css";

const Navbar = () => {
  const [pagesDropDownVisible, setPagesDropDownVisible] = useState(false);
  const [shopDropDownVisible, setShopDropDownVisible] = useState(false);
  const [blogDropDownVisible, setBlogDropDownVisible] = useState(false);

  return (
    <nav className="bg-white flex justify-center items-center shadow-xl sticky top-0 z-50">
      <div className="container flex justify-between items-center h-[10vh]">
        <span className="text-2xl font-extrabold ">
          <Link to="/">FlatLogic</Link>
        </span>
        <ul className="flex items-center space-x-6  text-gray-600 h-[10vh] ">
          <li className="hover:text-theme-orange cursor-pointer h-[100%] flex items-center">
            <Link to="/">Home</Link>
          </li>

          {/* Pages  */}
          <li
            className="cursor-pointer h-[100%] flex items-center"
            onClick={() => setPagesDropDownVisible(true)}
            onMouseEnter={() => setPagesDropDownVisible(true)}
            onMouseLeave={() => setPagesDropDownVisible(false)}
          >
            <div className="flex  hover:text-theme-orange cursor-pointer">
              Pages
              <FontAwesomeIcon icon={faCaretDown} size="sm" className="m-1" />
            </div>
            {pagesDropDownVisible && (
              <ul
                className="absolute top-[10.2vh] w-40  bg-white p-4 pt-0 border-2 "
                onMouseLeave={() => setPagesDropDownVisible(false)}
              >
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  <Link to="about">About Us</Link>
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  About Team
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Contact Us
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  FAQ
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  <Link to="error">404</Link>
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Wishlist
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Login
                </li>
              </ul>
            )}
          </li>

          {/* shop */}
          <li
            className="cursor-pointer h-[100%] flex items-center"
            onClick={() => setShopDropDownVisible(true)}
            onMouseEnter={() => setShopDropDownVisible(true)}
            onMouseLeave={() => setShopDropDownVisible(false)}
          >
            <div className="flex hover:text-theme-orange cursor-pointer">
              Shop
              <FontAwesomeIcon icon={faCaretDown} size="sm" className="m-1" />
            </div>
            {shopDropDownVisible && (
              <ul
                className="absolute top-[10.2vh] w-40  bg-white p-4 pt-0 border-2"
                onMouseLeave={() => setShopDropDownVisible(false)}
              >
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  <Link to="shop">Shop</Link>
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Categories
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Account
                </li>
              </ul>
            )}
          </li>

          {/* Blog  */}
          <li
            className="cursor-pointer h-[100%] flex items-center"
            onClick={() => setBlogDropDownVisible(true)}
            onMouseEnter={() => setBlogDropDownVisible(true)}
            onMouseLeave={() => setBlogDropDownVisible(false)}
          >
            <div className="flex hover:text-theme-orange cursor-pointer">
              Blog
              <FontAwesomeIcon icon={faCaretDown} size="sm" className="m-1" />
            </div>
            {blogDropDownVisible && (
              <ul
                className="absolute top-[10.2vh] w-40  bg-white p-4 pt-0 border-2"
                onMouseLeave={() => setBlogDropDownVisible(false)}
              >
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Blog
                </li>
                <li className="p-2 hover:text-theme-orange hover:scale-110 hover:font-bold">
                  Blog Articles
                </li>
              </ul>
            )}
          </li>
        </ul>

        <span>
          <ul className="flex space-x-6">
            <li className="hover:text-theme-orange cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className="hover:text-theme-orange cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </li>
            <Link to="cart">
              <li className="hover:text-theme-orange cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
            </Link>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
