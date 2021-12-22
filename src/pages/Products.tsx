import { useHistory, useLocation } from "react-router";
import { useRef, useMemo, useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useQuery } from "@apollo/client";
import ProductCard from "../components/Product";
import { PRODUCTS } from "../services/query/index";

import Header from "../components/Header/index";
interface IProduct {
  code: string;
  fullName: string;
  brand: string;
  imageUrl: string;
  category: {
    name: string;
  };
}
const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState<IProduct[]>([]);
  function UQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = UQuery();

  const getProductsId: Number | string = query.get("getProductsId") || 0;
  const subCategoryName = query.get("subCategoryName") || "";

  const { loading, error, data } = useQuery(PRODUCTS, {
    variables: { getProductsId },
  });
  useEffect(() => {
    if (data && data.getProducts) setProducts(data.getProducts);
  }, [data]);
  console.log(data);

  const showProducts = () => {
    return products.map((product, index) => {
      return (
        <ProductCard
          key={index}
          name={product.fullName}
          imgUrl={product.imageUrl}
          brand={product.brand}
          handleOnClick={() => history.push(`/product/${product.code}`)}
        />
      );
    });
  };

  const product = products[0] || { category: { name: "" } };
  return (
    <IonPage>
      <Header
        subTitle={subCategoryName}
        name={product.category.name}
        urlBack="/categories"
      />
      <IonContent color="light">{showProducts()}</IonContent>
    </IonPage>
  );
};

export default Products;
