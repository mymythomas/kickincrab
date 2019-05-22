import React from "react";
import { Table } from 'react-bootstrap';

function EmployerPage(props) {

    const reservationTime = props.reservations.map(data => {
        return (<tr key={data.reservationTime}>
            <td>{data.name}</td>
            <td>{data.reservationTime}</td>
            <td>{data.numInParty}</td>
            <td>{data.email}</td>
            <td><div class="deleteReserve" onClick={props.delete(data.reservationTime)}>X</div></td>
        </tr>)
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Party Size</th>
                        <th>Email</th>
                        <th>Remove Party</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationTime}
                    {/* <tr>
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
                    </tr> */}
                </tbody>
            </Table>;
        </div>
    );
}

export default EmployerPage;
