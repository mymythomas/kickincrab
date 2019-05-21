import React, { Component } from 'react';

// withRouter is so we can push states
import { withRouter } from 'react-router-dom'
import { Nav } from 'react-bootstrap';



class Navbar extends Component {

    render() {
        return (
            <ul className="container nav nav-pills">
                <li className="nav-item">
                    <Nav.Link className={window.location.pathname === "/" ? "active" : ""} href="/">Home</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link className={window.location.pathname === "/menu" ? "active" : ""} href="/menu">Menu</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link className={window.location.pathname === "/locations" ? "active" : ""} href="/locations">Locations</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link className={window.location.pathname === "/reservation" ? "active" : ""} href="/reservation">Reservation</Nav.Link>
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