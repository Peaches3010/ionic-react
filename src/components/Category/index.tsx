import { IonItem, IonThumbnail } from "@ionic/react";
import React from "react";

interface ICategoryItemProps {
  imgUrl: string;
  name: string;
}
const CategoryItem: React.FC<ICategoryItemProps> = ({ imgUrl, name }) => {
  return (
    <IonItem>
      <IonThumbnail slot="start" className="w-18 h-18">
        <img
          src={imgUrl}
          alt="category_image"
          className={`h-full w-full`}
        ></img>
      </IonThumbnail>
      <h2 className="text-dark2c">{name}</h2>
    </IonItem>
  );
};

export default CategoryItem;
