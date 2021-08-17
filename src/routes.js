import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Testing from "views/examples/Testing";
import AdvertisementInformation from "views/examples/AdvertisementInformation";
import CardPayment from "views/examples/CardPayment";
import DisplayedRequest from "views/examples/DisplayedRequest";
import CardPaymentMethod from "views/examples/CardPaymentMethod";
import BoostEvent from "views/examples/BoostEvent";
import BoostAdvertisement from "views/examples/BoostAdvertisement";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  // {
  //   path: "/testing",
  //   name: "Test",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Testing,
  //   layout: "/admin",
  // },
  {
    path: "/cardpayment",
    name: "Displayed Request",
    icon: "ni ni-credit-card text-blue",
    component: DisplayedRequest,
    layout: "/admin",
  },
  {
    path: "/displayedrequest",
    name: "Card Payments",
    icon: "ni ni-credit-card text-blue",
    component: CardPayment,
    layout: "/admin",
  },
  {
    path: "/boostEvent",
    name: "Boost Event",
    icon: "ni ni-credit-card text-blue",
    component: BoostEvent,
    layout: "/admin",
  },
  {
    path: "/advertisement",
    name: "Advertisement Information",
    icon: "ni ni-tv-2 text-pink",
    component: AdvertisementInformation,
    layout: "/admin",
  },
  {
    path: "/boostAdd",
    name: "Boost Advertisement",
    icon: "ni ni-tv-2 text-pink",
    component: BoostAdvertisement,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/payment-method",
    name: "Card Payment Method",
    icon: "ni ni-single-02 text-yellow",
    component: CardPaymentMethod,
    layout: "/auth",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
