import React, { Component } from 'react';

// withRouter is so we can push states
import { withRouter } from 'react-router-dom'

import { Nav } from 'react-bootstrap';



class Navbar extends Component {

    render() {
        return (

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <Nav.Link href="/">Home</Nav.Link>
                </li>
                <li class="nav-item">
                    <Nav.Link href="/menu">Menu</Nav.Link>
                </li>
                <li class="nav-item">
                    <Nav.Link href="/locations">Locations</Nav.Link>
                </li>
                <li class="nav-item">
                    <Nav.Link href="/customer">Customer</Nav.Link>
                </li>
            </ul>

            // <div className="navigation">
            //     <Nav className="justify-content-center">
            //         <Nav.Item>

            //         </Nav.Item>
            //         <Nav.Item>

            //         </Nav.Item>
            //         <Nav.Item>

            //         </Nav.Item>
            //         <Nav.Item>

            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link href="/employer">Log In</Nav.Link>
            //         </Nav.Item>
            //     </Nav>
            // </div>
        )
    }


}

export default withRouter(Navbar);