import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className="w-1/4 h-auto py-5 group rounded-sm cursor-pointer ">
      <Link to={`products/${props.id}`}>
        <div className="  relative">
          <div className="flex items-center relative">
            <img
              src={props.image}
              alt={props.name}
              className="px-5 group-hover:scale-105 transition ease-in duration-300"
            />
            <div className="flex flex-col relative right-14 space-y-5  opacity-0  group-hover:opacity-100 transition-opacity ease-in duration-500">
              <button className="hover:text-theme-orange">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="hover:text-theme-orange">
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </button>
              <button className="hover:text-theme-orange">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 py-5">
          <p className="text-gray-400 ">{props.category}</p>
          <h1 className="font-black group-hover:text-theme-orange">
            {props.name}
          </h1>
          <h3>{price}</h3>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
