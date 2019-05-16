import React from 'react';
import {
    Redirect,
    withRouter
  } from 'react-router-dom'

// Dummy object to mock our authentication service
// Do we need this both in the app.js and in login.js page?
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

  // This is the authentication 'button'
  const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
  ))

// The login process
class Login extends React.Component {
    state = {
      redirectToReferrer: false
    }
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }
    
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
  
      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }
  
      return (
        <div>
            <AuthButton />
          <p>You must log in to view the page</p>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }

  export default Login;