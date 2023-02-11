import { Link } from "react-router-dom";
import chairImg from "./chair.jpg";

const Error = () => {
  return (
    <div className="container">
      <div
        style={{ backgroundImage: `url(${chairImg})`, backgroundSize: "cover" }}
        className="border-2 h-screen my-5 flex"
      >
        <div className="w-[50%]"></div>
        <div className="flex flex-col justify-center ">
          <h2 className="text-lg font-black mb-5 text-theme-orange">OOPS!</h2>
          <h2 className="text-lg font-black mb-5">Something's Missing</h2>
          <p className="w-[300px] mb-5">
            Unfortunately, we cannot find the page you are looking for. Thought,
            we tried...
          </p>
          <Link to={"/"}>
            <button className="p-4 px-5 text-theme-orange font-black border-[1px] border-theme-orange hover:bg-theme-orange hover:text-white transition ease-in">
              TAKE ME AWAY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
