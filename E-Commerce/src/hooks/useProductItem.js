import { useEffect, useState } from "react";

const useProductItem = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const response = await fetch("/Products.json");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedProduct = responseData.find((p) => p.id === productId);

      setProduct(loadedProduct);
      setIsLoading(false);
    };

    fetchProduct().catch((error) => {
      console.log("error");
    });
  }, [productId]);

  return { product, isLoading };
};

export default useProductItem;
