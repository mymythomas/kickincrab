import React, { Component } from 'react';

// withRouter is so we can push states
import { withRouter } from 'react-router-dom'

import { Nav } from 'react-bootstrap';



class Navbar extends Component { 

    render() {
        return (
            <div className="navigation">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/locations">Locations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/customer">Customer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/employer">Log In</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }


}

export default withRouter(Navbar);