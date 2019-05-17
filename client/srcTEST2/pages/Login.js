import React from 'react';
import auth from './../components/auth';

function Login (props) {
    return (
      <div>
        <h1>Enter your creditials to log in</h1>

        <form 
        // noValidate onSubmit={this.onSubmit}
>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username Here"
            // value={this.state.username}
            // onChange={this.onChange}
          />
<br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password Here"
            // value={this.state.password}
            // onChange={this.onChange}
          />

          <p>You must log in to view the page</p>

          <button onClick={
                () => {
                    auth.login(() => {
                        props.history.push('/employer')
                    })
                }
            }>Employer Log-In</button>

        </form>
      </div>
    )
  }


export default Login;