import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FormPage() {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit </Button>
            </Form>
        </div>
    )
}

export default FormPage;