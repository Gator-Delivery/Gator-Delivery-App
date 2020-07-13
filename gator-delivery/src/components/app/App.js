import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import FireBase from '../firebase/firebase'
import {withFirebase} from '../firebase'

import * as ROUTES from '../../constants/routes';

import LandingPage from '../landing';
import SignUpPage from '../sign-up';
import SignInPage from '../sign-in';
import PasswordForgetPage from '../password-forgot';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import '../index.css';
import AddTask from '../add-task/AddTask';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import TaskList from "../tasklist/TaskList";
import CreateTask from "../createtask/CreateTask";
import Board from '../community/Board';
//npm install react-calendar or yarn add react-calendar
import Calendar from '../calendar/Calendar'
import {withAuthentication} from '../session';


const App = () => (
  <Router>
    <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={TaskList} />
      <Route path="/create" component={CreateTask} />
      <Route path="/community" component={Board} />
      <Route path="/calendar" component={Calendar} />
      <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />  
    </div>
  </Router>
);

export default withAuthentication(App);
