import React, { Component } from 'react';

// withRouter is so we can push states
import { withRouter } from 'react-router-dom'

import { Nav } from 'react-bootstrap';



class Navbar extends Component { 
    // moving token from localStorage
    // pushes URL to the / path
    logOut(event) {
        event.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`);
    }

    render() {
        // defining two types of links, one of for people who do not
        // need to log in and the other for people (like the admin)
        // who must log in to see private information
        const normalPeople = (
            <div className="navigation">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Customer">Customer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )

        const adminPeople = (
            <div className="navigation">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/employer">Employer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="" onClick={this.logOut.bind(this)}>Log Out</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )

        return (
            <div>
                {localStorage.usertoken ? adminPeople : normalPeople}
            </div>
        )
    }


}

export default withRouter(Navbar);