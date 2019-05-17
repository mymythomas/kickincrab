import React from 'react';
import { login } from '../components/UserFunction'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      // redirectToReferrer: false,
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // login = () => {
  //   mockAuth.authenticate(() => {
  //     this.setState(() => ({
  //       redirectToReferrer: true
  //     }))
  //   })
  // }


  // update the state
  onChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  onSubmit(event) {
    event.preventDefault()

    // declaring the object 'user'
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // passed thru the login method
    // pushed to the employer url thru the employer component
    login(user).then(res => {
      if (res) {
        this.props.history.push(`/employer`)
      }
    })
  }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    // const { redirectToReferrer } = this.state

    // if (redirectToReferrer === true) {
    //   return <Redirect to={from} />
    // }

    return (
      <div>
        <form noValidate onSubmit={this.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username Here"
            value={this.state.username}
            onChange={this.onChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password Here"
            value={this.state.password}
            onChange={this.onChange}
          />

          <p>You must log in to view the page</p>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}


export default Login;

// // import React, { Component } from 'react';

// // import {
// //   Redirect,
// //   withRouter
// // } from 'react-router-dom'


// // // The login process
// // class Login extends React.Component {

// //   render() {
// //     return (
// //       <div>
// //         <form>
// //           <label htmlFor="email">Email Address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             name="email"
// //             placeholder="Enter Email"
// //             // value={this.state.email}
// //             // onChange={this.onChange}
// //           />
// //           <label htmlFor="email">Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             name="password"
// //             placeholder="Enter Password"
// //             // value={this.state.password}
// //             // onChange={this.onChange}
// //           />
// //           {/* <button type="submit">Submit</button> */}


// //           <button
// //             // onClick={this.login}
// //             type="submit"
// //           >Log in</button>
// //         </form>
// //       </div>
// //     )
// //   }
// // }

// // export default Login;

// import React, { Component } from 'react';

// import {
//   Redirect,
//   withRouter
// } from 'react-router-dom'

// // Mock Authentication before we actually have a
// // working db with specific KC Stores
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

// const AuthButton = withRouter(({ history }) => (
//   mockAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         mockAuth.signout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//       <p>You are not logged in.</p>
//     )
// ))

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }
//   login = () => {
//     mockAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
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
//          <AuthButton />
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

// export default Login;