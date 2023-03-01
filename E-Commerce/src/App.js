import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/About";
import Error from "./Components/Error/Error";
import ShopPage from "./pages/Shop";
import ProductDetailsPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "billing",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
