import Navbar from "./components/Nav";
import Header from "./components/Header";

import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Customer from './pages/Customer';
import Employer from './pages/Employer';
import Login from './pages/Login';

import { PrivateRoute } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <div style={{padding: "0 0 0 0", margin: "0 0 0 0"}} className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route exact path="/locations" component={Locations} />
              <PrivateRoute exact path="/employer" component={Employer} />
              <Route exact path="/customer" component={Customer} />
              <Route exact path="/login" component={Login} />
              <Route path="*" component={() => "404 PAGE NOT FOUND"} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }

export default App;