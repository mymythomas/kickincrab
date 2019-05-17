import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from "./components/Nav";
import Header from "./components/Header";

// pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Employer from './pages/Employer';
import Login from './pages/Login';
import Customer from './pages/Customer';
// import NoMatch from "./pages/NoMatch";





// Mock Authentication before we actually have a
// working db with specific KC Stores
// const mockAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// class Login extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       redirectToReferrer: false,
//       username: '',
//       password: '',
//       errors: {}
//     }

//     this.onChange = this.onChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   // login = () => {
//   //   mockAuth.authenticate(() => {
//   //     this.setState(() => ({
//   //       redirectToReferrer: true
//   //     }))
//   //   })
//   // }

//   onChange(e) {
//     this.setState({ [e.target.value]: e.target.value })
//   }
//   onSubmit(e) {
//     e.preventDefault()

//     const user = {
//       username: this.state.username,
//       password: this.state.password
//     }

//     login(user).then(res => {
//       if (res) {
//         this.props.history.push(`/employer`)
//       }
//     })
//   }

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter Username Here"
//             value={this.state.username}
//             onChange={this.onChange}
//           />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password Here"
//             value={this.state.password}
//             onChange={this.onChange}
//           />

//           <p>You must log in to view the page</p>
//           <button
//           // onClick={this.login}
//           >Log in</button>
//         </form>
//       </div>
//     )
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     mockAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//   )} />
// )

// const AuthButton = withRouter(({ history }) => (
//   this.isAuthenticated ? (
//     <p>
//       Welcome!
//       {/* <button onClick={() => {
//         mockAuth.signout(() => history.push('/'))
//       }}>Sign out</button> */}
//       <button onClick={this.logOut.bind(this)}>Sign out</button>
//     </p>
//   ) : (
//       <p>You are not logged in.</p>
//     )
// ))

class App extends Component {
  render() {
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
              <Route exact path="/login" component={Login} />
              <Route exact path="/employer" component={Employer} />
              <Route exact path="/customer" component={Customer} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;