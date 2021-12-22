import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonList,
  IonListHeader,
} from "@ionic/react";
import { gql, useQuery } from "@apollo/client";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { CATEGORIES } from "../services/query/index";
import { Link } from "react-router-dom";
import CategoryItem from "../components/Category";
interface Category {
  id: string;
  image: string;
  name: string;
  subCategories: Category[];
}
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { loading, error, data } = useQuery(CATEGORIES);
  useEffect(() => {
    if (data && data.getSubCategories) setCategories(data.getSubCategories);
  }, [data]);

  const showCategories = () => {
    return categories.map((category, index) => {
      return (
        <IonList key={index}>
          <IonListHeader className="mb-2 text-dark2c">
            {category.name}
          </IonListHeader>
          {category.subCategories.map((item, index) => {
            return (
              <Link to={`/products?getProductsId=${item.id}`} key={index}>
                <CategoryItem name={category.name} imgUrl={category.image} />
              </Link>
            );
          })}
        </IonList>
      );
    });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
  return (
    <IonPage>
      <Header name="Products" urlBack="/home" subTitle="" />
      <IonContent color="light">{showCategories()}</IonContent>
    </IonPage>
  );
};

export default Categories;
