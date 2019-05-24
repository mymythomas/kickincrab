import React from "react";
import './style.css';
import { Button, Card } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="app-footer row">
                            <hr />
            <div className="leftfooter col-8">
                <span>© Copyright 2019 TheKickinCrab.com | All Rights Reserved.</span>
                <br />

                <Button href="/employer" className="emp-btn"><i className="fas fa-sign-in-alt"></i> Employer Page</Button>
            </div>
            <div className="rightfooter col-4">
            <Card>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Find us here!</Card.Subtitle>
                <Card.Text>
                      Shoot us a message and we will get right back to ya with some hot deets.
                </Card.Text>
                <Card.Link href="#" className="social-btn"><i className="fab fa-facebook"></i><span> Facebook</span></Card.Link>
                 <Card.Link href="#" className="social-btn"><i className="fab fa-instagram"></i><span> Instagram</span></Card.Link>
                 </Card.Body>
            </Card>


            {/* <span>Find us here!</span> <br />
                <i className="fab fa-facebook"></i><span> Facebook</span>
                <br />
                <i className="fab fa-instagram"></i><span> Instagram</span>
                <br />
                <i className="fab fa-twitter"></i><span> Twitter</span>
                <br />  <br />
                <hr />
                <Button href="/login">Employer Log-In</Button>
 */}


            </div>
        </footer>
    )
}

export default Footer;