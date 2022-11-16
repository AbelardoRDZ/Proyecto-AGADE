import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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

function Convocatorias() {

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <>
            <Head title='Convocatorias' />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">SCADE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="Perfil">Perfil</Nav.Link>
                        <Nav.Link href="Convocatorias">Convocatorias</Nav.Link>
                        <Nav.Link href="Resultados">Resultados</Nav.Link>
                        <Nav.Link href="EquiposFutbol">EquiposFutbol</Nav.Link>
                        <Nav.Link href="EquiposVoly">EquiposVoly</Nav.Link>
                        <Nav.Link href="EquiposBaseball">EquiposBaseball</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="Home">Sistema de control interno para actividades deportivas TEC Valles</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    SCADE
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="Home">Home</Nav.Link>
                                    <Nav.Link href="Perfil">Perfil</Nav.Link>
                                    <Nav.Link href="Convocatorias">Convocatorias</Nav.Link>

                                    <NavDropdown title="Resultados" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="Resultados">Futbol</NavDropdown.Item>
                                        <NavDropdown.Item href="Resultados">Voly</NavDropdown.Item>
                                        <NavDropdown.Item href="Resultados">Baseball</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <div>Estas en las convocatorias</div>

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
        </>
    );
}

export default Convocatorias;