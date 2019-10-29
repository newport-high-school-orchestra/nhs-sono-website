/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import PerformancePage from "views/PerformancePage.jsx";
import CalendarPage from "views/CalendarView/CalendarPage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import UpdatesPage from "views/UpdatesPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/conductor" component={ProfilePage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/updates" component={UpdatesPage} />
      <Route path="/performance" component={PerformancePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/help" component={Components} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
