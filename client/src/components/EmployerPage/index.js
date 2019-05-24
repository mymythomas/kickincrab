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
                </tbody>
            </Table>
        </div>
    );
}

export default EmployerPage;
