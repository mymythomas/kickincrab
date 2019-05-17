import React from 'react';
import EmployerPage from './../components/EmployerPage'

import { userService } from '../components/_services';

class Employer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        return (
            <div>
                <a class="btn btn-primary" href="/login" role="button">Logout</a>
                <h1>Welcome Back {this.state.user.firstName},</h1>
                <p>Here is a list of reservation for {Date()}.</p>
                <EmployerPage />
            </div>
        );
    }
}

export default Employer;