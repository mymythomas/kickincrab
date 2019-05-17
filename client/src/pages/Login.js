import React from 'react';

import { userService } from '../components/_services';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });

        // stop here if form is invalid
        if (!(this.state.username && this.state.password)) {
            return;
        }


        userService.login(this.state.username, this.state.password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/employer" } };
                    this.props.history.push(from);
                },
                error => this.setState({
                    error,
                    loading: false
                })
            );
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    {this.state.submitted && !this.state.username &&
                        <div className={'alert alert-danger'}>Username is required</div>
                    }
                    {this.state.submitted && !this.state.password &&
                        <div className={'alert alert-danger'}>Password is required</div>
                    }


                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter Username Here"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password Here"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    {this.state.error &&
                        <div className={'alert alert-danger'}>{this.state.error}</div>
                    }

                </form>
            </div>
        );
    }
}

export default LoginPage;