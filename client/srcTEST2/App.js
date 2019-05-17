// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';

// import Navbar from "./components/Nav";
// import Header from "./components/Header";

// // pages
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import Locations from './pages/Locations';
// import Employer from './pages/Employer';
// import Login from './pages/Login';
// import Customer from './pages/Customer';

import Navbar from "./components/Nav";
import Header from "./components/Header";

import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Customer from './pages/Customer';
import Employer from './pages/Employer';
import Login from './pages/Login';

import ProtectedRoute from './components/protected.route';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import decode from 'jwt-decode';

// const checkAuth = () => {
//   const token = localStorage.getItem('token');
//   const refreshToken = localStorage.getItem('refreshToken');

//   if (!token || !refreshToken) {
//     return false;
//   }

//   try {
//     const { exp } = decode(refreshToken);

//     console.log(exp)
//     console.log(new Date().getTime())
//     if (exp < new Date().getTime() / 1000) {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }

// }

// const AuthRoute = ({ component: Component, ...rest }) => (
//       <Route {...rest} render={props => (
//           checkAuth() ? (
//               <Component {...props} />
//           ) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//               )
//       )} />
// );


function App () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/locations" component={Locations} />
              <ProtectedRoute exact path="/employer" component={Employer} />
              <Route exact path="/customer" component={Customer} />
              <Route exact path="/login" component={Login} />
              {/* <Route path="*" component={() => "404 PAGE NOT FOUND"} /> */}
            </Switch>
          </div>

        </div>
      </Router>
    )
  }

export default App;