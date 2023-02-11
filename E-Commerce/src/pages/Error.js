import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Error from "../Components/Error/Error";
import GoToTop from "../Components/Helpers/GoToTop";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Error />
      </main>
      <Footer />
      <GoToTop />
    </>
  );
};

export default ErrorPage;
