//-------Indexes---------------------------
import Index from "views/Index.js";
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

// --------After pull dev 10/09/2021
import AdvertisementInformation from "views/examples/AdvertisementInformation";
import CardPayment from "views/examples/CardPayment";
import DisplayedRequest from "views/examples/DisplayedRequest";
import CardPaymentMethod from "views/examples/CardPaymentMethod";
import BoostEvent from "views/examples/BoostEvent";
import BoostAdvertisement from "views/examples/BoostAdvertisement";
import UpdateAdvertisementInformation from "views/examples/UpdateAdvertisementInformation";
import AdvertisementDetails from "views/examples/AdvertisementDetails";
import ViewAdvertisement from "views/examples/ViewAdvertisement";

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
import CustomerProfileProvider from "views/examples/customer/CustomerProfileProvider";

var routes = [
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

	{
		path: "/customerProvider/:_id",
		component: CustomerProfileProvider,
		layout: "/serviceprovider",
	},

	// ================== Service Provider Routes =============
	// ========================= End  =========================

	{
		path: "/displayedrequest",
		name: "Displayed Request",
		icon: "ni ni-credit-card text-blue",
		component: DisplayedRequest,
		layout: "/admin",
	},
	{
		path: "/advertisementdetails",
		name: "Advertisement Details ",
		icon: "ni ni-credit-card text-blue",
		component: AdvertisementDetails,
		layout: "/admin",
	},
	{
		path: "/cardpayment",
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
		path: "/updateboostEvent",
		name: "Update Boost Event",
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
		path: "/viewadvertisement/:_id",
		name: "View Advertisement",
		icon: "ni ni-tv-2 text-pink",
		component: ViewAdvertisement,
		layout: "/admin",
	},
	{
		path: "/updateadvertisement/:_id",
		name: "Update Advertisement Information",
		icon: "ni ni-tv-2 text-pink",
		component: UpdateAdvertisementInformation,
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
		path: "/payment-method",
		name: "Card Payment Method",
		icon: "ni ni-single-02 text-yellow",
		component: CardPaymentMethod,
		layout: "/auth",
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
];

export default routes;
