import Navbar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Reservation from './pages/Reservation';
import Employer from './pages/Employer';
import Login from './pages/Login';

import { PrivateRoute } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "react-web-tabs/dist/react-web-tabs.css";


function App () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <hr />
          <div style={{padding: "0 0 0 0", margin: "0 0 0 0"}} className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route exact path="/locations" component={Locations} />
              <PrivateRoute exact path="/employer" component={Employer} />
              <Route exact path="/reservation" component={Reservation} />
              <Route exact path="/login" component={Login} />
              <Route path="*" component={() => "404 PAGE NOT FOUND"} />
            </Switch>
          </div>
          <hr />
        <Footer />
        </div>
      </Router>
    )
  }

export default App;