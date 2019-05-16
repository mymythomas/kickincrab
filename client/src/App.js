import React from 'react';
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Employer from './pages/Employer';
import Login from './pages/Login';
import Customer from './pages/Customer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// Dummy object to mock our authentication service
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

// Three requirement for the Private Route component
// 1. It has the same API as <Route />.
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

// The routes/path, including the private route as well
// Must go into the Nav to get to the actual links
class App extends React.Component {
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
            <Route exact path="/Login" component={Login} />
            <PrivateRoute path='/Employer' component={Employer} />
            <Route exact path="/customer" component={Customer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
