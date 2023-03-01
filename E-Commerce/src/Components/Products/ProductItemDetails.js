import { faSpinner, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useProductItem from "../../hooks/useProductItem";

const ProductItemDetails = (props) => {
  const id = Number.parseInt(props.id);
  const { product, isLoading } = useProductItem(id);

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const increaseQuantityHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  if (isLoading) {
    return (
      <section className="flex justify-center p-4 scale-150 ">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      </section>
    );
  }
  return (
    <>
      {product && (
        <div className="container">
          <section className="flex my-10  ">
            <div className="w-1/2 h-full">
              <img src={product.image} alt={product.name} className="" />
            </div>
            <div className="w-1/2 ml-5 relative">
              <p className="text-gray-400 mb-7">{product.category}</p>
              <h1 className="font-black text-2xl mb-4">{product.name}</h1>
              <span className="flex space-x-1 items-center my-5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-theme-orange opacity-50 text-2xl"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-theme-orange opacity-50 text-2xl"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-theme-orange opacity-50 text-2xl"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-theme-orange opacity-50 text-2xl"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-gray-400 text-2xl"
                />
                <span className="text-theme-orange ">11 reviews</span>
              </span>
              <p className="w-full text-sm text-gray-400 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Vestibulum ultricies aliquam.
              </p>
              <span className="flex space-x-5 my-7 font-black">
                <span>
                  <h2 className="text-gray-600 mb-3">QUANTITY</h2>
                  <span className="flex">
                    <button
                      onClick={decreaseQuantityHandler}
                      className="hover:text-hover-orange"
                    >
                      -
                    </button>
                    <p className="mx-5">{quantity}</p>
                    <button
                      onClick={increaseQuantityHandler}
                      className="hover:text-hover-orange"
                    >
                      +
                    </button>
                  </span>
                </span>
                <span>
                  <h2 className="text-gray-600 mb-3">PRICE</h2>
                  <p>{product.price * quantity}$</p>
                </span>
              </span>
              <div className="flex space-x-2 w-full absolute bottom-0">
                <button className="w-1/2 p-3 px-5 text-theme-orange font-black border-[1px] border-theme-orange hover:bg-theme-orange hover:text-white transition ease-out ">
                  ADD TO CART
                </button>
                <button className="w-1/2 text-white bg-theme-orange py-4 px-7 font-bold hover:bg-hover-orange">
                  BUY NOW
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductItemDetails;
