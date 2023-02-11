import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-600 ">
      <div className="container flex flex-col flex-wrap">
        {/* 1st section */}
        <div className="flex my-5 justify-between ">
          <div className="w-[40%]">
            <h2 className="text-white font-extrabold text-xl">
              Many desktop publishing
            </h2>
            <p className="my-2">
              Do you want to receive exclusive email offers? Subscribe to our
              newsletter! You will receive a unique promo code which gives you a
              20% discount on all our products in 10 minutes.
            </p>
          </div>
          <form className="flex content-between space-x-6 items-center ">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:outline-none p-4"
            />
            <button
              title="Subscribe"
              className="text-white bg-theme-orange py-4 px-7 font-bold hover:bg-hover-orange"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="bg-gray-600 h-0.5 w-[100%] my-5"></div>
        {/*2nd section */}
        <div className="my-5 flex space-x-2 justify-between items-start text-sm">
          <div className="text-white w-[40%] ">
            <h2 className="font-extrabold text-xl">FlatLogic.</h2>
            <p className="my-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <ul className="flex space-x-6 my-10">
              <li className="hover:text-hover-orange cursor-pointer scale-125">
                <FontAwesomeIcon icon={faGoogle} />
              </li>
              <li className="hover:text-hover-orange cursor-pointer scale-125">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="hover:text-hover-orange cursor-pointer scale-125">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li className="hover:text-hover-orange cursor-pointer scale-125">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-extrabold text-xl ">COMPANY</h2>
            <ul className="my-5 space-y-2">
              <Li>What We Do</Li>
              <Li>Available Services</Li>
              <Li>Latest Posts</Li>
              <Li>FAQs</Li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-extrabold text-xl">MY ACCOUNT</h2>
            <ul className="my-5 space-y-2">
              <Li>Sign In</Li>
              <Li>View Cart</Li>
              <Li>Order Tracking</Li>
              <Li>Help & Support</Li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-extrabold text-xl">
              CUSTOMER SERVICE
            </h2>
            <ul className="my-5 space-y-2">
              <Li>Help & Contact Us</Li>
              <Li>Returns & Refunds</Li>
              <Li>Online Stores</Li>
              <Li>Terms & Conditions</Li>
            </ul>
          </div>
        </div>

        {/* 3rd Section */}
        <div className="bg-gray-600 h-0.5 w-[100%] my-5"></div>
        <p className="mt-3 mb-8 text-left">
          © 2020-2023 powered by{" "}
          <span className="hover:text-white cursor-pointer">Flatlogic</span>
        </p>
      </div>
    </footer>
  );
};

const Li = (props) => {
  return <li className="hover:text-white cursor-pointer">{props.children}</li>;
};

export default Footer;
