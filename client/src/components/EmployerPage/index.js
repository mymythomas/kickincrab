import React from "react";
import { Table } from 'react-bootstrap';

function EmployerPage({reservations}) {
    // if (reservations[0].name === undefined) {
    //     console.log(reservations);
    // }
    return (
        <div>
            <h1>{reservations.name}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Party Size</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>3:00 PM</td>
                        <td>4</td>
                        <td>mark@mark.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>7:00 PM</td>
                        <td>7</td>
                        <td>Jacob@Jacob.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Thomas</td>
                        <td>9:30 PM</td>
                        <td>250</td>
                        <td>Thomas@Thomas.com</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mymy</td>
                        <td>9:45 PM</td>
                        <td>1</td>
                        <td>Mymy@Mymy.com</td>
                    </tr>
                </tbody>
            </Table>;
        </div>
    );
}

export default EmployerPage;
