import React from "react";
import carousel1 from "../../image/carousel1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <div
      style={{ backgroundImage: `url(${carousel1})` }}
      className="bg-cover bg-center h-screen"
    >
      <div className="container h-[100%] flex items-center">
        <div>
          <h1 className="text-theme-orange font-black pb-3">CHAIR</h1>
          <h1 className="text-3xl font-medium pb-2 ">get all</h1>
          <h1 className="text-3xl font-extrabold pb-5">THE GOOD STUFF</h1>
          <button className="p-3 px-5 text-theme-orange font-black border-[1px] border-theme-orange hover:bg-theme-orange hover:text-white transition ease-out ">
            <Link to="shop">
              VIEW MORE <FontAwesomeIcon icon={faArrowRight} className="px-2" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
