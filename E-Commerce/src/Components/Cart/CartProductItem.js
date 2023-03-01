import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slices";

const CartProductItem = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartAction.increaseCartQuantity(product));
  };

  const decreaseQuantityHandler = () => {
    if (product.quantity > 1) {
      dispatch(cartAction.decreaseCartQuantity(product));
    }
  };

  const deleteFromCartHandler = () => {
    dispatch(cartAction.removeProductFromCart(product.id));
  };

  return (
    <>
      <td>
        <div className="flex items-center py-5">
          <img src={product.image} alt="test" className="w-28" />
          <div className="px-5">
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="font-black text-xl">{product.name}</p>
          </div>
        </div>
      </td>
      <td>
        <span className="flex font-black py-5">
          <button
            onClick={decreaseQuantityHandler}
            className="hover:text-hover-orange"
          >
            -
          </button>
          <p className="mx-5">{product.quantity}</p>
          <button
            onClick={increaseQuantityHandler}
            className="hover:text-hover-orange"
          >
            +
          </button>
        </span>
      </td>
      <td className="font-black text-sm py-5">{product.price}$</td>
      <td className="text-left scale-125 py-5">
        <button onClick={deleteFromCartHandler}>
          <FontAwesomeIcon icon={faXmark} className="text-gray-600" />
        </button>
      </td>
    </>
  );
};

export default CartProductItem;
