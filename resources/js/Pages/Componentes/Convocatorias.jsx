import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Head } from '@inertiajs/inertia-react';

function Convocatorias({ auth }) {

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
                            Torneo interno deportivo campus cd valles
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/Unirfutbol">Unirse a equipos</Card.Link>
                        <Card.Link href="/registroFutbol">Crear equipo</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', marginLeft: '0.8rem' }}>
                    <Card.Img variant="top" src="https://elcomercio.pe/resizer/5VIsmlVhGbqw7AdiAsUqcNxcw9Y=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YFIQC6XFONG7ZLAJQJZFA7PV5E.jpg" />
                    <Card.Body>
                        <Card.Title>Torneo Voly</Card.Title>
                        <Card.Text>
                            Torneo interno deportivo campus cd valles
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/Unirvoly">Unirse a equipos</Card.Link>
                        <Card.Link href="/registroVoly">Crear equipo</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', marginLeft: '0.8rem' }}>
                    <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2014/10/baloncesto-1-e1551134227999-800x400.jpg" />
                    <Card.Body>
                        <Card.Title>Torneo Basketball</Card.Title>
                        <Card.Text>
                            Torneo interno deportivo campus cd valles
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/UnirbaseBall">Unirse a equipos</Card.Link>
                        <Card.Link href="/registroBaseball">Crear equipo</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}

export default Convocatorias;