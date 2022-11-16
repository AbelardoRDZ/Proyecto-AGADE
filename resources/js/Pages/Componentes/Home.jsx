import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Accordion from 'react-bootstrap/Accordion';

export default function Home(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
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
