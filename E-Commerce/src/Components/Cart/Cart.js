import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <section className="container lg:flex">
      <div className="w-[70%] my-10 px-5">
        <h1 className="font-black text-3xl py-5">Shopping Cart</h1>
        <table className="table-auto w-full ">
          <thead>
            <tr className="border-b-[2px]">
              <th className="py-2 text-left">PRODUCT</th>
              <th className="py-2 text-left">QUANTITY</th>
              <th className="py-2 text-left">PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="mt-2">
              <td>
                <div className="flex items-center py-5">
                  <img
                    src="https://flatlogic-ecommerce-backend.herokuapp.com/images/products/2.png"
                    alt="test"
                    className="w-28"
                  />
                  <div className="px-5">
                    <p className="text-gray-500 text-sm">Decoration</p>
                    <p className="font-black text-xl">Cool Flower</p>
                  </div>
                </div>
              </td>
              <td>
                <span className="flex font-black py-5">
                  <button className="hover:text-hover-orange">-</button>
                  <p className="mx-5">1</p>
                  <button className="hover:text-hover-orange">+</button>
                </span>
              </td>
              <td className="font-black text-sm py-5">20$</td>
              <td className="text-left scale-125 py-5">
                <button>
                  <FontAwesomeIcon icon={faXmark} className="text-gray-600" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CartTotal />
    </section>
  );
};

export default Cart;
