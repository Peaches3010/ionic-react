import React from "react";
import {
  IonToolbar,
  IonHeader,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonSearchbar,
} from "@ionic/react";

interface HomeProps {
  name: string;
  subTitle: string;
  handleOnChange?: () => void;
  urlBack?: string;
}

const Header: React.FC<HomeProps> = ({
  name,
  subTitle,
  urlBack,
  handleOnChange,
}) => {
  return (
    <IonHeader>
      <IonToolbar>
        {urlBack && (
          <IonButtons slot="start" className="ml-5">
            <IonBackButton defaultHref={urlBack} text="" />
          </IonButtons>
        )}
        <h4>{subTitle}</h4>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
      <IonSearchbar onChange={handleOnChange}></IonSearchbar>
    </IonHeader>
  );
};

export default Header;
