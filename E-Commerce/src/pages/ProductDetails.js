import { useParams } from "react-router-dom";
import ProductItemDetails from "../Components/Products/ProductItemDetails";

const ProductDetailsPage = () => {
  const params = useParams();
  return <ProductItemDetails id={params.id} />;
};

export default ProductDetailsPage;
