import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonThumbnail,
} from "@ionic/react";

interface IProductCardProps {
  imgUrl: string;
  name: string;
  brand: string;
  handleOnClick: () => void;
}
const ProductCard: React.FC<IProductCardProps> = (product) => {
  const { imgUrl, name, brand, handleOnClick } = product;
  return (
    <IonCard>
      <IonThumbnail>
        <img src={imgUrl} alt="image.png" />
      </IonThumbnail>
      <IonCardContent onClick={handleOnClick}>
        <IonCardSubtitle>{brand}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
