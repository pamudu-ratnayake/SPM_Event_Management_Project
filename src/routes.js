import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import AddEvent from "views/examples/AddEvent.js";
import EventDisplay from "views/examples/EventDisplay.js";
import CustomerProfile from "views/examples/CustomerProfile";
import MyEvents from "views/examples/MyEvents";
import UpdateEvent from "views/examples/UpdateEvent";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/add-event",
    name: "Publish An Event",
    icon: "ni ni-notification-70 text-orange",
    component: AddEvent,
    layout: "/admin",
  },

  {
    path: "/customer-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-orange",
    component: CustomerProfile,
    layout: "/admin",
  },
  {
    path: "/my-event",
    name: "My Events",
    icon: "ni ni-book-bookmark text-purple",
    component: MyEvents,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
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
  {
    path: "/event-display/:_id",
    // name: "Display Event",
    // icon: "ni ni-notification-70 text-orange",
    component: EventDisplay,
    layout: "/admin",
  },
  {
    path: "/event-update/:_id",
    // name: "Update Event",
    //icon: "ni ni-notification-70 text-orange",
    component: UpdateEvent,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/icons",
    // name: "Icons",
    //icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    // name: "Maps",
    // icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
];
export default routes;
