import React, { useState } from 'react';
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

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function Convocatorias({ auth }) {

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Convocatorias' />

            <div style={{ textAlign: "center" }}>Estas Convocatorias</div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '425px' }}>
                <Card style={{ width: '18rem', marginLeft: '0.8rem' }}>
                    <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg" />
                    <Card.Body>
                        <Card.Title>Torneo Futbol</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="EquiposFutbol">Unirse a equipos</Card.Link>
                        <Card.Link onClick={toggleShow}>Crear equipo</Card.Link>

                        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                            <MDBModalDialog>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>Registrar Equipo</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>No. Control</Form.Label>
                                                <Form.Control type="number" placeholder="No. Control" />

                                                <Form.Label>Nombre del Alumno</Form.Label>
                                                <Form.Control type="name" placeholder="Nombre del Alumno" />

                                                <Form.Label>Nombre del Equipo</Form.Label>
                                                <Form.Control type="name" placeholder="Nombre del Equipo" />
                                            </Form.Group>

                                        </Form>
                                    </MDBModalBody>

                                    <MDBModalFooter>
                                        <MDBBtn color='secondary' onClick={toggleShow}>
                                            Close
                                        </MDBBtn>
                                        <MDBBtn>Crear</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', marginLeft: '0.8rem' }}>
                    <Card.Img variant="top" src="https://elcomercio.pe/resizer/5VIsmlVhGbqw7AdiAsUqcNxcw9Y=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YFIQC6XFONG7ZLAJQJZFA7PV5E.jpg" />
                    <Card.Body>
                        <Card.Title>Torneo Voly</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', marginLeft: '0.8rem' }}>
                    <Card.Img variant="top" src="https://media.npr.org/assets/img/2022/10/04/gettyimages-1243732454_wide-690d350f9c1742d507001ad56b963a7ed9cffd16-s1400-c100.jpg" />
                    <Card.Body>
                        <Card.Title>Torneo Baseball</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}

export default Convocatorias;