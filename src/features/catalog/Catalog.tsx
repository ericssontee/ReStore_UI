// import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
// import { useState, useEffect } from "react";
// import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
} from "./catalogSlice";
import { useEffect } from "react";

export default function Catalog() {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true);
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   agent.Catalog.list()
  //     .then((products) => setProducts(products))
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (status.includes("pending"))
    return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
