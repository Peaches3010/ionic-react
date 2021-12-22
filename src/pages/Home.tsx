import {
  IonContent,
  IonPage,
  IonCard,
  IonItem,
  IonLabel,
  IonFooter,
  IonRow,
  IonCol,
  IonButton,
  IonCardContent,
  IonThumbnail,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p className="m-4 text-gray-200 text-left text-xl">Home</p>
        <strong className="text-white m-3 mt-15 text-3xl">
          Good morning ,
        </strong>
        <br />
        <strong className="text-white m-3 mt-10 text-3xl">Test</strong>
        <p className="text-white m-3 text-xl"> Account settings</p>
        <hr className="border border-white mx-4" />
        <IonCard>
          <IonItem>
            <IonThumbnail className="card-img object-none h-20 w-20">
              <img src="../assets/images/dau.png" alt="image.png"></img>
            </IonThumbnail>
            <IonCardContent>
              <h2> Account 12345 </h2>
              <IonLabel>
                <p> The Leading Lorem</p>
                <p className="text-gray-300">Tap to scan your ID in-store</p>
              </IonLabel>
            </IonCardContent>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonThumbnail className="card-img object-none h-20 w-20">
              <img src="../assets/images/dau.png" alt="image.png"></img>
            </IonThumbnail>
            <IonCardContent>
              <h2>Taralgon</h2>
              <p className="text-red-600">
                Closed opens
                <span className="text-gray-500 pl-3">7:00 am </span>
              </p>
              <p className="text-gray-300">Tap to scan your ID in-store</p>
            </IonCardContent>
          </IonItem>
        </IonCard>
      </IonContent>
      <IonFooter>
        <div className="bg-white rounded-t-2xl">
          <IonRow>
            <IonCol>
              <IonButton fill="outline" expand="block">
                <span> Get Help</span>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block">Order</IonButton>
            </IonCol>
          </IonRow>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
