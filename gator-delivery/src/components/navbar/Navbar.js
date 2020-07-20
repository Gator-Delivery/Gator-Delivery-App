import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../sign-out';
import {AuthContext} from '../session/withAuthentication';
// import {AuthUserContext} from '../session'
// import { auth } from 'firebase';
import app from '../firebase/firebase'

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <div>
            {/* <AuthUserContext.Consumer>
                {authUser => authUser ? <NavAuth /> : <NavUnAuth />}
            </AuthUserContext.Consumer> */}
            {currentUser ? <NavAuth /> : <NavUnAuth />}
            {console.log(currentUser)}
        </div>
    );
};

const NavAuth = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home Order</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {/* <li className="navbar-item">
                    <Link to="/" className="nav-link">View Tasks</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Task</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/community" className="nav-link">Community Board</Link>
                </li>
                <li className="navbar-item">
					<Link to="/calendar" className="nav-link">Calendar</Link>
				</li> */}
                <div class="dropdown">
          <button class="dropbtn">Social</button>
            <div class="dropdown-content">
              <a href="/reviews">Volunteer Reviews</a>
              <a href="/community">Community Board</a>
              <a href="/faq">FAQ</a>
          </div>
            </div>
          <div class="dropdown">
          <button class="dropbtn">Tasks</button>
            <div class="dropdown-content">
              <a href="/create">Create Task</a>
              <a href="/">View Tasks</a>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">Calendar</button>
            <div class="dropdown-content">
              <a href="/calendar">Calendar</a>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">User Account</button>
            <div class="dropdown-content">
              <a href="/signin">Control Panel</a>
              <a href="/signup">Edit Profile</a>
            </div>
          </div>
                <li className="navbar-item">
                    <div><p>Hello, User!</p></div>
                    <SignOutButton />
                </li>
            </ul>
        </div>
    </nav>
);

const NavUnAuth = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home Order</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {/* <li className="navbar-item">
                    <Link to="/" className="nav-link">View Tasks</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Task</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/community" className="nav-link">Community Board</Link>
                </li>
                <li className="navbar-item">
					<Link to="/calendar" className="nav-link">Calendar</Link>
				</li>
                <li>
                    <Link to={ROUTES.SIGN_IN} className="nav-link">Login</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP} className="nav-link">Sign Up</Link>
                </li> */}
            <div class="dropdown">
                <button class="dropbtn">Social</button>
                <div class="dropdown-content">
                    <a href="/reviews">Volunteer Reviews</a>
                    <a href="/community">Community Board</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Tasks</button>
                <div class="dropdown-content">
                    <a href="/create">Create Task</a>
                    <a href="/">View Tasks</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Calendar</button>
                <div class="dropdown-content">
                    <a href="/calendar">Calendar</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Create Account</button>
                <div class="dropdown-content">
                    <a href="/signin">Sign-In</a>
                    <a href="/signup">Sign-Up</a>
                </div>
            </div>
            </ul>
        </div>
    </nav>
)


export default Navbar;        
