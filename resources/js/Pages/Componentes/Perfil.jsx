import React from 'react';
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

class Perfil extends React.Component {
    render() {
        return (
            <>
                <Head title='Perfil' />
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

                <div>Estas en el perfil</div>



                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
                    <Card>
                        <Card.Header>Informacion General</Card.Header>
                        <Card.Body>


                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '425px' }}>
                                <Card style={{ width: '14rem', marginLeft: '0.8rem' }}>
                                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" />
                                    <Card.Body>
                                        <Card.Title>Nombre usuario</Card.Title>

                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Nombre</ListGroup.Item>
                                        <ListGroup.Item>No. Control</ListGroup.Item>
                                        <ListGroup.Item>Correo</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>Informacion Escolar</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>Informacion Escolar</Card.Header>
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
            </>
        );
    }

}

export default Perfil;