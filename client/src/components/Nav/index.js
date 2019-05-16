import React from 'react';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <div>
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
        </Nav>
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/Employer">Employer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/customer">Customer</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default Navbar;