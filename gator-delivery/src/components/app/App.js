import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../session/withAuthentication";

import * as ROUTES from "../../constants/routes";

import LandingPage from "../../views/LandingPage/LandingPage.js";
import SignUpPage from "../sign-up";
import SignInPage from "../sign-in";
// import PasswordForgetPage from "../password-forgot";
import HomePage from "../home";
import AccountPage from "../account";
// import AdminPage from "../admin";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
// import TaskList from "../tasklist/TaskList";
import CreateTask from "../createtask/CreateTask";
import {CommunityBoard as CommunityBoard, PostBoard as PostBoard} from "../community/Board";
import Bored from "../reviews/Bored";
import faq from "../faq/faq";
//npm install react-calendar or yarn add react-calendar
import Calendar from "../calendar/Calendar";
import ViewJob from "../viewjob/ViewJob";
import path from "path";
import ViewPost from "../community/ViewPost";

const App = () => {
  return (
    <div className="page">
      <AuthProvider>
        <Router>
          <div className="c">
            <Navbar className="navbar-fixed-top" />

            <div className="body">
              <Route path={ROUTES.CREATE} component={CreateTask} />
              {/* <Route path={ROUTES.COMMUNITY} component={CommunityBoard} /> */}
              <Route path={ROUTES.CALENDAR} component={Calendar} />
              <Route path={ROUTES.FAQ} component={faq} />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.PROFILE_SETTINGS} component={AccountPage} />
              <Route path={path.join("/job", ":id?")} component={ViewJob} />
              <Route path={path.join("/post", ":id?")} component={PostBoard} />
              {/* <Route path={ROUTES.ADMIN} component={AdminPage} />   */}
            </div>
          </div>
        </Router>
      </AuthProvider>

      <footer className="site-footer">
        <div className="container">
          <h3>The page was made possible by Gator Delivery</h3>
        </div>
      </footer>
    </div>
  );
};
export default App;
