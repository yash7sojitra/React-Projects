import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("Products.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: responseData[key].id,
          name: responseData[key].name,
          price: responseData[key].price,
          category: responseData[key].category,
          image: responseData[key].image,
        });
      }

      setProducts(loadedProducts);

      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="flex justify-center p-4 scale-150 ">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      </section>
    );
  }

  if (error) {
    <section>
      <p>{error}</p>
    </section>;
  }

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      category={product.category}
      image={product.image}
    />
  ));

  return (
    <>
      <div className="container">
        <ul className="flex flex-wrap py-5">{productsList}</ul>
      </div>
    </>
  );
};

export default AvailableProducts;
