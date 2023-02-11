import img1 from "../image/about1.png";
import img2 from "../image/about2.png";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="flex my-10">
        <div className="w-3/4 ">
          <h1 className="text-3xl font-black">About Us</h1>
          <div>
            <ul className="m-10">
              <li className="mb-10">
                <h3 className="text-sm font-black text-theme-orange mb-3">
                  TECHNOLOGY
                </h3>
                <h2 className="font-extrabold w-3/4 mb-5">
                  Sustainable Furniture Rocks This World! Check Out New
                  Minimalistic Wooden Collection
                </h2>
                <p className="text-gray-600">
                  There is no denying that eco-friendly materials can easily
                  conquer the market. But can we produce enough to fulfill the
                  growing demands? Can we create an astonishing look for the new
                  collection of eco-friendly furniture? That is a tough
                  question. But did make an effort!
                </p>
                <div className="bg-gray-400 h-[1px]  my-5">
                  <div className="bg-theme-orange w-1/4 h-1"></div>
                </div>
              </li>
              <li className="mb-10">
                <h3 className="text-sm font-black text-theme-orange mb-3">
                  INTERIOR
                </h3>
                <h2 className="font-extrabold w-3/4 mb-5">
                  Primary Palette Can Allow You To Be Bold! Give Your Interior
                  Artistic Edge
                </h2>
                <p className="text-gray-600">
                  Use this well-known tip for mixing two primary colors with a
                  trendy muted palette. Neutral spaces with wooden furniture can
                  be changed within a minutes using the right set of vibrant
                  colors. Such interior design helps you to stand out from
                  ordinary palettes.
                </p>
                <div className="bg-gray-400 h-[1px]  my-5">
                  <div className="bg-theme-orange w-1/4 h-1"></div>
                </div>
              </li>
              <li className="mb-10">
                <h3 className="text-sm font-black text-theme-orange mb-3">
                  DESIGN
                </h3>
                <h2 className="font-extrabold w-3/4 mb-5">
                  Check Out The Latest Design Trends! Minimalism, Stripes, and
                  Sculptural Furniture
                </h2>
                <p className="text-gray-600">
                  Let's mix stripes and checks - everyone's favorite patterns.
                  New-season colors add the right balance to this awesome mix.
                  Even in bedroom decor you can use this fun new trend along
                  with classic cushions and delicate color scheme or love
                  colorful decoration.
                </p>
                <div className="bg-gray-400 h-[1px]  my-5">
                  <div className="bg-theme-orange w-1/4 h-1"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img src={img1} alt="about1" />
          <img src={img2} alt="about2" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
