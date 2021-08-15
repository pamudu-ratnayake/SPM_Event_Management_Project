import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Testing from "views/examples/Testing";
import ServiceProviderProfile from "views/service-provider/ServiceProviderProfile";
import RegisterServiceProvider from "views/service-provider/RegisterServiceProvider";

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
	{
		path: "/testing",
		name: "Test",
		icon: "ni ni-pin-3 text-orange",
		component: Testing,
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
		path: "/service-provider-profile",
		name: "Service Provider Profile",
		icon: "ni ni-single-02 text-yellow",
		component: ServiceProviderProfile,
		layout: "/admin",
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
	{
		path: "/registerServiceProvider",
		name: "Register Service Provider",
		icon: "ni ni-circle-08 text-pink",
		component: RegisterServiceProvider,
		layout: "/authServiceProvider",
	},
];
export default routes;
