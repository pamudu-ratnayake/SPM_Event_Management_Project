import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Sponsorship_Request from "views/examples/Sponsorship_Request";
import Add_Sponsor from "views/examples/Add_Sponsor";
import Update_Sponsor from "views/examples/Update_Sponsor";
import SponsorList from "views/examples/SponsorList";
import Sponsorship_Documentation from "views/examples/Sponsorship_Documentation";
import My_Issue from "views/examples/My_Issue";
import Event_Support from "views/examples/Event_Support";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
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
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
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
    path: "/Sponsorship_Request",
    name: "Sponsors",
    icon: "ni ni-circle-08 text-pink",
    component: Sponsorship_Request,
    layout: "/admin",
  },
  {
    path: "/Add_Sponsor",
    name: "Add Sponsor",
    icon: "ni ni-circle-08 text-pink",
    component: Add_Sponsor,
    layout: "/admin",
  },
  {
    path: "/Update_Sponsor/:_id",
    name: "Update Sponsor",
    icon: "ni ni-circle-08 text-pink",
    component: Update_Sponsor,
    layout: "/admin",
  },
  {
    path: "/SponsorList",
    name: "Sponsor List",
    icon: "ni ni-bullet-list-67 text-red",
    component: SponsorList,
    layout: "/admin",
  },
  {
    path: "/Sponsorship_Documentation",
    name: "Sponsorship Documentation",
    icon: "ni ni-bullet-list-67 text-red",
    component: Sponsorship_Documentation,
    layout: "/admin",
  },
  {
    path: "/My_Issue",
    name: "My Issues",
    icon: "ni ni-bullet-list-67 text-red",
    component: My_Issue,
    layout: "/admin",
  },
  {
    path: "/Event_Support",
    name: "Event Support",
    icon: "ni ni-bullet-list-67 text-red",
    component: Event_Support,
    layout: "/admin",
  },
];
export default routes;
