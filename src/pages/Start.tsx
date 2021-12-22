import React from "react";
import {
  IonPage,
  IonContent,
  IonFooter,
  IonItem,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
const Start = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Rausach</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonItem>
          <img src="./assets/images/background.png" alt="" />
        </IonItem>
        <IonCardContent>
          <IonCardTitle className="mt-1.5 pb-3 text-[#1b2053]">
            Mua rau sạch, dễ hơn bao giờ hết!
          </IonCardTitle>
          <IonLabel className="pb-3 pt-3">
            Rau củ không sử dụng chất bảo quản, được trồng trong môi trường hiện
            đại phù hợp với mọi gia đình Việt
          </IonLabel>
          <h2 className="text-[#1b2053] pb-3 pt-1.5 ">
            <strong> Giao hàng tận nơi, nhanh chóng</strong>
          </h2>
          <IonLabel>
            Chỉ với cú nhấp chuột, đơn hàng sẽ giao đến tay bạn trong vòng 2h
          </IonLabel>
          <h2 className="text-[#1b2053] pb-3 pt-1.5">
            <strong> Sản phẩm chất lượng</strong>
          </h2>
          <IonLabel>
            Chúng tôi đặt ta cho mình sứ mệnh dẫn dắt xã hội cùng sản xuất và
            tận hưởng giá trị nông sản tử tế.
            <br />
            Rau củ hữu cơ được áp dụng quy trình nghiêm ngặt nhằm đảm bảo sức
            khỏe cho người dùng, cộng đồng và môi trường.
          </IonLabel>
        </IonCardContent>
      </IonContent>
      <IonFooter>
        <div className="bg-white pt-3.5 rounded-t-2xl h-18">
          <IonButton href="/home" expand="block">
            Ok
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Start;
