import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
