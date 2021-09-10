import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import ServiceProviderProfile from "views/service-provider/ServiceProviderProfile";
import RegisterServiceProvider from "views/service-provider/RegisterServiceProvider";
import AddEvent from "views/examples/AddEvent.js";
import EventDisplay from "views/examples/EventDisplay.js";
import CustomerProfile from "views/examples/CustomerProfile";
import MyEvents from "views/examples/MyEvents";
import UpdateEvent from "views/examples/UpdateEvent";
import ServiceProviders from "views/service-provider/ServiceProviders";

// After pull dev 10/09/2021
import AdvertisementInformation from "views/examples/AdvertisementInformation";
import CardPayment from "views/examples/CardPayment";
import DisplayedRequest from "views/examples/DisplayedRequest";
import CardPaymentMethod from "views/examples/CardPaymentMethod";
import BoostEvent from "views/examples/BoostEvent";
import BoostAdvertisement from "views/examples/BoostAdvertisement";
import UpdateAdvertisementInformation from "views/examples/UpdateAdvertisementInformation";
import AdvertisementDetails from "views/examples/AdvertisementDetails";
import ViewAdvertisement from "views/examples/ViewAdvertisement";

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
	{
		path: "/serviceProviders",
		name: "Service Providers",
		icon: "ni ni-pin-3 text-orange",
		component: ServiceProviders,
		layout: "/admin",
	},

	{
		path: "/service-provider-profile",
		name: "Service Provider Profile",
		icon: "ni ni-single-02 text-yellow",
		component: ServiceProviderProfile,
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
	{
		path: "/registerServiceProvider",
		name: "Register Service Provider",
		icon: "ni ni-circle-08 text-pink",
		component: RegisterServiceProvider,
		layout: "/authServiceProvider",
	},

	{
		path: "/add-event",
		name: "Publish An Event",
		icon: "ni ni-notification-70 text-orange",
		component: AddEvent,
		layout: "/admin",
	},
	{
		path: "/event-display/:_id",
		name: "Display Event",
		icon: "ni ni-notification-70 text-orange",
		component: EventDisplay,
		layout: "/admin",
	},
	{
		path: "/event-update/:_id",
		name: "Update Event",
		icon: "ni ni-notification-70 text-orange",
		component: UpdateEvent,
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
		icon: "ni ni-notification-70 text-orange",
		component: MyEvents,
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
		icon: "ni ni-paper-diploma text-pink",
		component: Sponsorship_Request,
		layout: "/admin",
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
		path: "/Sponsorship_Documentation",
		name: "Sponsorship Documentation",
		icon: "ni ni-collection text-info",
		component: Sponsorship_Documentation,
		layout: "/admin",
	},
	{
		path: "/My_Issue",
		name: "Take Help",
		icon: "ni ni-ungroup text-pink",
		component: My_Issue,
		layout: "/admin",
	},
	{
		path: "/Event_Support",
		name: "Event Consulting",
		icon: "ni ni-support-16 text-red",
		component: Event_Support,
		layout: "/admin",
	},
	{
		path: "/Update_Sponsor/:_id",
		// name: "Update Sponsor",
		// icon: "ni ni-circle-08 text-pink",
		component: Update_Sponsor,
		layout: "/admin",
	},
];
export default routes;
