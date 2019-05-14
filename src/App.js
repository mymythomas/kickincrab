import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Employer from './pages/Employer';
import Customer from './pages/Customer';
import foods from './food.json';

class App extends React.Component {
  state = {
    foods
  };

  render() {
    return (
    <Router>
      <div>
        <Header />
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/employer" component={Employer} />
            <Route exact path="/customer" component={Customer} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
