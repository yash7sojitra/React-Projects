import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import GoToTop from "../Components/Helpers/GoToTop";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <GoToTop />
    </>
  );
};

export default RootLayout;
