const CartTotal = (props) => {
  return (
    <div className="bg-gray-300 w-[30%] my-10 h-max">
      <h1 className="font-black text-3xl mb-6 p-5">Cart Total</h1>
      <span className="grid grid-cols-2 px-5 mb-16">
        <p className="text-sm font-black">Subtotal:</p>
        <p className="text-sm font-black">{props.totalPrice}$</p>
        <div className="h-[0.5px] bg-gray-500 opacity-50 my-2 col-span-2"></div>
        <p className="font-black">Shipping:</p>
        <span className="">
          <p className="font-black mb-3">Free Shipping</p>
          <p className="text-sm opacity-70">
            Shipping options will be updated during checkout.
          </p>
        </span>
        <div className="h-[0.5px] bg-gray-500 opacity-50 my-2 col-span-2"></div>
        <h2 className="font-black">Total:</h2>
        <p className="font-black">{props.totalPrice}$</p>
      </span>
      <button className=" w-full text-white bg-theme-orange py-4 px-7 font-bold hover:bg-hover-orange ">
        CHECK OUT
      </button>
    </div>
  );
};

export default CartTotal;
