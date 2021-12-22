import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  useIonPicker,
} from "@ionic/react";
import Header from "../components/Header";
import { RouteComponentProps, useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { PRODUCT_DETAILS } from "../services/query/index";
interface IProps extends RouteComponentProps<{ code: string }> {}
interface IProductDetail {
  brand: string;
  fullName: string;
  description: string;
  imageUrl: string;
  weight: {
    price: number;
    stock: number;
    weight: string;
  }[];
}
interface Weight {
  value: string;
  text: string;
}
const getQuantity = (stock: number) => {
  const listQuantity = [];
  for (let i = 1; i <= stock; i++) {
    listQuantity.push({
      text: i.toString(),
      value: i,
    });
  }
  return listQuantity;
};

const ProductDetail: React.FC<IProps> = (param) => {
  const history = useHistory();
  const [product, setProduct] = useState<IProductDetail>();
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [listWeight, setListWeight] = useState<Weight[]>([]);
  const code: string = param.match.params.code;
  const { loading, error, data } = useQuery(PRODUCT_DETAILS, {
    variables: { code },
  });
  useEffect(() => {
    if (data && data.getProductDetail) {
      setProduct(data.getProductDetail);
      setWeight(data.getProductDetail.weight[0].weight);
      const weight = data.getProductDetail.weight;
      const list: Weight[] = [];
      for (let i = 0; i < weight.length; i++) {
        list.push({
          text: weight[i].weight,
          value: weight[i].weight,
        });
      }
      setListWeight(list);
    }
  }, [data]);
  const getStock = (weight: string): number => {
    return product?.weight.find((item) => item.weight === weight)?.stock || 0;
  };

  const getPrice = (weight: string): number => {
    return product?.weight.find((item) => item.weight === weight)?.price || 0;
  };
  const [present] = useIonPicker();

  const changeNumber = () => {
    present({
      buttons: [
        {
          text: "Confirm",
          handler: (selected) => {
            setQuantity(selected.number.value);
          },
        },
        {
          text: "Cancel",
          handler: (selected) => {
            console.log(selected.number.value);
          },
        },
      ],
      columns: [
        {
          name: "number",
          options: getQuantity(getStock(weight)),
        },
      ],
    });
  };

  const changeType = () => {
    present({
      buttons: [
        {
          text: "Confirm",
          handler: (selected) => {
            setWeight(selected.number.value);
            setQuantity(1);
          },
        },
        {
          text: "Cancel",
          handler: (selected) => {
            console.log(selected.number.value);
          },
        },
      ],
      columns: [
        {
          name: "number",
          options: listWeight,
        },
      ],
    });
  };
  return (
    <IonPage>
      <Header name="" subTitle="" urlBack="/categories" />
      <IonContent>
        <IonImg src="" className="h-70 object-fill mb-4"></IonImg>{" "}
        <IonText>
          <p className="px-4 text-lg">{product?.description}</p>
        </IonText>
        <IonGrid className="px-5 mt-3 ">
          <IonRow className="justify-between">
            <IonCol
              onClick={changeType}
              size="5.8"
              className="flex rounded-lg bg-gray-100 items-center px-2 justify-between"
            >
              <h2>Size: </h2>
              <p className="mr-8 font-semibold text-lg text-dark2c">{weight}</p>
            </IonCol>
            <IonCol
              onClick={changeNumber}
              size="5.8"
              className="flex rounded-lg bg-gray-100 items-center px-2 justify-between h-12"
            >
              <h2>Qty:</h2>
              <p className="mr-8 font-semibold text-lg text-dark2c">
                {quantity}
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <div className="bg-white rounded-t-2xl">
          <IonButton expand="block">Add to cart</IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default ProductDetail;
