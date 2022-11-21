import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

import { Head } from '@inertiajs/inertia-react';

function Perfil({ auth }) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Perfil' />

            <div style={{ textAlign: "center" }}>Estas en el Perfil</div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card>
                    <Card.Header>Informacion General</Card.Header>
                    <Card.Body>


                        <div style={{ display: 'inline', justifyContent: 'center', alignItems: 'center' }}>

                            <Card>
                                <Card.Header>Informacion Escolar</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card><br/>

                            <Card>
                                <Card.Header>Informacion Personal</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>


                    </Card.Body>
                </Card>
            </div>
        </AuthenticatedLayout>
    );


}
export default Perfil;