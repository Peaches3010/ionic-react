import { IonContent, IonPage, IonFooter, IonRow, IonCol } from "@ionic/react";
import Header from "../components/Header";

const Cart: React.FC = () => {
  const renderTotal = () => {
    return (
      <IonFooter className="pl-2.5 pr-3.5">
        <IonRow>
          <IonCol className="text-dark2c font-semibold text-lg">
            Total amount payable
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="text-dark2c font-semibold text-lg">
            Subtotal
          </IonCol>
          <IonCol className="text-dark2c font-semibold text-lg text-right">
            6,29
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="text-gray-400">
            <i>GST included in subtotal $5.48</i>
          </IonCol>
        </IonRow>
      </IonFooter>
    );
  };
  return (
    <IonPage>
      <IonContent fullscreen color="light"></IonContent>
      {renderTotal()}
    </IonPage>
  );
};

export default Cart;
