//-------Indexes---------------------------
import Index from "views/Index.js";
import AdminIndex from "views/AdminIndex";
import CustomerIndex from "views/customerIndex";
import ServiceProviderIndex from "views/serviceProviderIndex";
//--------------------------------------------

import AllSignUps from "views/auth/AllSignUps";
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";

//-------------Servive Providers Routes-------------------------------
import ServiceProviderProfile from "views/service-provider/ServiceProviderProfile";
import RegisterServiceProvider from "views/service-provider/RegisterServiceProvider";
import ServiceProviders from "views/service-provider/ServiceProviders";
import CreateQuotation from "views/service-provider/CreateQuotation";
import Events from "views/events/Events";
//-------------------------------------------------------------------

//----------customer & Event---------------------------
import AddEvent from "views/examples/customer/AddEvent.js";
import EventDisplay from "views/examples/customer/EventDisplay.js";
import CustomerProfile from "views/examples/customer/CustomerProfile";
import MyEvents from "views/examples/customer/MyEvents";
import UpdateEvent from "views/examples/customer/UpdateEvent";
import SelectServiceProvider from "views/examples/customer/SelectServiceProvider";
import ViewQuotation from "views/examples/customer/ViewQuotation";
//------------------------------------------------------

import MyPaymentListCustomer from "views/PaymentHandling/MyPaymentList";
import ViewMyPaymentCustomer from "views/PaymentHandling/ViewMyPayment";


// After pull dev 10/09/2021
import AdvertisementInformation from "views/AdvertisementHandling&Boosting/AdvertisementInformation";
import CardPayment from "views/PaymentHandling/CardPayment";
import AdvertisementList from "views/AdvertisementHandling&Boosting/AdvertisementList";
import CardPaymentMethod from "views/PaymentHandling/CardPaymentMethod";
import BoostEvent from "views/AdvertisementHandling&Boosting/BoostEvent";
import BoostAdvertisement from "views/AdvertisementHandling&Boosting/BoostAdvertisement";
import UpdateAdvertisementInformation from "views/AdvertisementHandling&Boosting/UpdateAdvertisementInformation";
import AdvertisementDetails from "views/AdvertisementHandling&Boosting/AdvertisementDetails";
import ViewAdvertisement from "views/AdvertisementHandling&Boosting/ViewAdvertisement";
import PaidList from "views/PaymentHandling/PaidList";
import MyAdvertisementList from "views/AdvertisementHandling&Boosting/MyAdvertisementList";
import ViewPayment from "views/PaymentHandling/ViewPayment";
import MyPaymentList from "views/PaymentHandling/MyPaymentList";
import ViewMyPayment from "views/PaymentHandling/ViewMyPayment";


import Sponsorship_Request from "views/examples/Sponsorship_Consulting_Management/Sponsorship_Request";
import Add_Sponsor from "views/examples/Sponsorship_Consulting_Management/Add_Sponsor";
import Update_Sponsor from "views/examples/Sponsorship_Consulting_Management/Update_Sponsor";
import SponsorList from "views/examples/Sponsorship_Consulting_Management/SponsorList";
import Requested_Sponsors from "views/examples/Sponsorship_Consulting_Management/Requested_Sponsors";
import Sponsorship_Documentation from "views/examples/Sponsorship_Consulting_Management/Sponsorship_Documentation";
import My_Issue from "views/examples/Sponsorship_Consulting_Management/My_Issue";
import Event_Support from "views/examples/Sponsorship_Consulting_Management/Event_Support";
import Send_Request from "views/examples/Sponsorship_Consulting_Management/Send_Request";
import EventDisplaySP from "views/events/EventDisplaySP";

var routes = [

  {
    path: "/adminindex",
    name: "Admin Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: AdminIndex,
    layout: "/admin",
  },

	//-----------Indexes-----------
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary",
		component: CustomerIndex,
		layout: "/customer",
	},
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary fs-5",
		component: ServiceProviderIndex,
		layout: "/serviceprovider",
	},

	//--------customer & Events -------------------

	{
		path: "/add-event",
		name: "Publish An Event",
		icon: "ni ni-notification-70 text-orange",
		component: AddEvent,
		layout: "/customer",
	},

	{
		path: "/customer-profile",
		name: "My Profile",
		icon: "ni ni-single-02 text-orange",
		component: CustomerProfile,
		layout: "/customer",
	},
	{
		path: "/my-event",
		name: "My Events",
		icon: "ni ni-book-bookmark text-purple",
		component: MyEvents,
		layout: "/customer",
	},
	{
		path: "/selectservice-proivider/:_id",
		name: "Select Service Provider",
		icon: "ni ni-book-bookmark text-purple",
		component: SelectServiceProvider,
		layout: "/customer",
	},
	{
		path: "/view-quotations/:_id",
		name: "View Quotations",
		icon: "ni ni-circle-08 text-pink",
		component: ViewQuotation,
		layout: "/customer",
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
	{
		path: "/register-all",
		name: "All Register",
		icon: "ni ni-circle-08 text-pink",
		component: AllSignUps,
		layout: "/auth",
		invisible: true,
	},
	{
		path: "/event-display/:_id",
		// name: "Display Event",
		// icon: "ni ni-notification-70 text-orange",
		component: EventDisplay,
		layout: "/customer",
		invisible: true,
	},
	{
		path: "/event-update/:_id",
		// name: "Update Event",
		//icon: "ni ni-notification-70 text-orange",
		component: UpdateEvent,
		layout: "/customer",
		invisible: true,
	},

	// ============== Service Provider Routes ==================

	{
		path: "/events",
		name: "Events",
		icon: "bx bx-movie-play text-primary fs-4",
		component: Events,
		layout: "/serviceprovider",
	},

	{
		path: "/registerServiceProvider",
		name: "Register Service Provider",
		icon: "ni ni-circle-08 text-pink",
		component: RegisterServiceProvider,
		layout: "/authServiceProvider",
	},

	{
		path: "/serviceProviders",
		name: "Service Providers",
		icon: "bx bxs-user-voice fs-4 text-primary",
		component: ServiceProviders,
		layout: "/serviceprovider",
	},

	{
		path: "/service-provider-profile",
		name: "Profile",
		icon: "bx bxs-user text-primary fs-4",
		component: ServiceProviderProfile,
		layout: "/serviceprovider",
	},

	{
		path: "/event-display-sp/:_id",
		component: EventDisplaySP,
		layout: "/serviceprovider",
	},

	{
		path: "/createQuotation/:_id",
		component: CreateQuotation,
		layout: "/serviceprovider",
	},

	// ================== Service Provider Routes =============
	// ========================= End  =========================

  {
    path: "/adverisementlist",
    name: "Advertisement List",
    icon: "ni ni-credit-card text-blue",
    component: AdvertisementList,
    layout: "/admin",
  },
 
  {
    path: "/myadverisementlist",
    name: "My Advertisement List",
    icon: "ni ni-credit-card text-blue",
    component: MyAdvertisementList,
    layout: "/serviceprovider",
  },

  {
    path: "/advertisementdetails/:_id",
    name: "Advertisement Details ",
    icon: "ni ni-credit-card text-blue",
    component: AdvertisementDetails,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/boostEvent/:_id",
    name: "Boost Event",
    icon: "ni ni-credit-card text-blue",
    component: BoostEvent,
    layout: "/customer",
    invisible: true,
  },

  {
    path: "/paidlist",
    name: "Paid List",
    icon: "ni ni-credit-card text-blue",
    component: PaidList,
    layout: "/admin",
  },

  {
    path: "/mypaymentlist",
    name: "My Payments",
    icon: "ni ni-credit-card text-blue",
    component: MyPaymentList,
    layout: "/serviceprovider",
  },
  {
    path: "/mypaymentlist",
    name: "My Payments",
    icon: "ni ni-credit-card text-blue",
    component: MyPaymentListCustomer,
    layout: "/customer",
  },
  
  {
    path: "/advertisement",
    name: "Add Advertisement",
    icon: "ni ni-tv-2 text-pink",
    component: AdvertisementInformation,
    layout: "/serviceprovider",
  },
  {
    path: "/viewadvertisement/:_id",
    name: "View Advertisement",
    icon: "ni ni-tv-2 text-pink",
    component: ViewAdvertisement,
    layout: "/serviceprovider",
    invisible: true,
  },

  {
    path: "/viewpayement/:_id",
    name: "View Payment",
    icon: "ni ni-tv-2 text-pink",
    component: ViewPayment,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/viewmypayement/:_id",
    name: "View My Payment",
    icon: "ni ni-tv-2 text-pink",
    component: ViewMyPayment,
    layout: "/serviceprovider",
    invisible: true,
  },
  {
    path: "/viewmypayement/:_id",
    name: "View My Payment",
    icon: "ni ni-tv-2 text-pink",
    component: ViewMyPaymentCustomer,
    layout: "/customer",
    invisible: true,
  },
  {
    path: "/updateadvertisement/:_id",
    name: "Update Advertisement Information",
    icon: "ni ni-tv-2 text-pink",
    component: UpdateAdvertisementInformation,
    layout: "/serviceprovider",
    invisible: true,
  },
  {
    path: "/boostAdd/:_id",
    name: "Boost Advertisement",
    icon: "ni ni-tv-2 text-pink",
    component: BoostAdvertisement,
    layout: "/serviceprovider",
    invisible: true,
  },

  

	// ================== Sponsorship Routes =============

	{
		path: "/Sponsorship_Request",
		name: "Sponsors",
		icon: "ni ni-paper-diploma text-pink",
		component: Sponsorship_Request,
		layout: "/customer",
	},
	{
		path: "/Add_Sponsor",
		name: "Add Sponsor",
		icon: "ni ni-single-copy-04 text-primary",
		component: Add_Sponsor,
		layout: "/admin",
	},
	{
		path: "/SponsorList",
		name: "Sponsor List",
		icon: "ni ni-active-40 text-yellow",
		component: SponsorList,
		layout: "/admin",
	},
	{
		path: "/Sponsorship_Documentation/:_id",
		name: "Sponsorship Documentation",
		icon: "ni ni-collection text-info",
		component: Sponsorship_Documentation,
		layout: "/customer",
		invisible: true,
	},
	{
		path: "/Requested_Sponsors",
		name: "Requested Sponsors",
		icon: "ni ni-support-16 text-red",
		component: Requested_Sponsors,
		layout: "/customer",
		invisible: true,
	},
	{
		path: "/Send_Request/:_id",
		name: "Send Request",
		icon: "ni ni-support-16 text-red",
		component: Send_Request,
		layout: "/customer",
		invisible: true,
	},
	{
		path: "/Update_Sponsor/:_id",
		name: "Update Sponsor",
		icon: "ni ni-circle-08 text-pink",
		component: Update_Sponsor,
		layout: "/admin",
		invisible: true,
	},

	// ================== Event Consulting Routes =============

  {
    path: "/My_Issue/:_id",
    name: "Take Help",
    icon: "ni ni-ungroup text-pink",
    component: My_Issue,
    layout: "/customer",
	invisible: true,
  },
  {
    path: "/Event_Support",
    name: "Event Consulting",
    icon: "ni ni-support-16 text-red",
    component: Event_Support,
    layout: "/customer",
  },
  {
    path: "/Event_Support",
    name: "Event Consulting",
    icon: "ni ni-support-16 text-red",
    component: Event_Support,
    layout: "/admin",
  },
  {
    path: "/Event_Support",
    name: "Event Consulting",
    icon: "ni ni-support-16 text-red",
    component: Event_Support,
    layout: "/serviceprovider",
  },
];

export default routes;
