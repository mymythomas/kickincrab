import React from 'react';
import EmployerPage from './../components/EmployerPage'
import { userService } from '../components/_services';

const axios = require("axios");

class Employer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            users: [],
            currentReservations: []
        };
    }
    
    componentWillMount = () => {
        axios.get('/api/allreservations').then(results => {
            this.setState({
                currentReservations: results.data
            })
            console.log(this.state.currentReservations)
        })

    }

    componentDidMount = () => {

        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="container">
                <a className="btn btn-primary" href="/login" role="button">Logout</a>
                <h1>Welcome Back {this.state.user.firstName},</h1>
                <p>Here is a list of reservation for {Date()}.</p>
                <EmployerPage reservations={this.state.currentReservations} />
            </div>
        );
    }
}

export default Employer;