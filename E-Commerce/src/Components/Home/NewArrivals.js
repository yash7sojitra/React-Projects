import AvailableProducts from "../Products/AvailableProducts";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="container py-10">
      <h1 className="text-center text-2xl font-extrabold">New Arrivals</h1>
      <p className="text-gray-500 text-center">
        Check out our new furniture collection! Cozy sofa, fancy chair, wooden
        casket, and many more. The new collection brings an informal elegance to
        your home.
      </p>
      <section>
        <AvailableProducts />
      </section>
      <div className="container flex justify-center">
        <button className="p-3 px-5 text-theme-orange font-black border-[1px] border-theme-orange hover:bg-theme-orange hover:text-white transition ease-in ">
          <Link to="shop">VIEW MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
