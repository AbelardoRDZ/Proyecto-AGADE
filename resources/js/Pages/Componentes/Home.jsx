import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react'
import Accordion from 'react-bootstrap/Accordion';

function Home({ auth}) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Home" />

            <div style={{ textAlign: "center" }}>Estas en el Home</div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                <Accordion defaultActiveKey="0" style={{ width: 660, height: 'auto' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¡Bienvenido a SCADE!</Accordion.Header>
                        <Accordion.Body>
                            Ten en cuenta las fechas de cierre de las convocatorias de los torneos para que
                            no pierdas la oportunidad de participar :D
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div >
        </AuthenticatedLayout>

    );
}
export default Home;