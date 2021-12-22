import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, clipboard, cart } from "ionicons/icons";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Start from "./pages/Start";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/tailwind.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products" component={Products} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="product" href="/categories">
            <IonIcon icon={clipboard} />
            <IonLabel>Product</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cart} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route exact path="/start">
        <Start />
      </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;
