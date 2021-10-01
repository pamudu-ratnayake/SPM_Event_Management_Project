import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import AdminLayout from "layouts/Admin.js";
import CustomerLayout from "layouts/Customer"
import AuthLayout from "layouts/Auth.js";
import AuthPayment from "layouts/AuthPayment";
import AuthServiceProvider from "layouts/AuthServiceProvider.js";
import ServiceProviderLayout from "layouts/ServiceProvider";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/customer" render={(props) => <CustomerLayout {...props} />} />
    <Route path="/serviceprovider" render={(props) => <ServiceProviderLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/authServiceProvider" render={(props) => <AuthServiceProvider {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
