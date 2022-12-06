import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/inertia-react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputError from '@/Components/InputError';
import { first } from 'lodash';


export default function TablaGeneral({ resultado, futbol, auth }) {


    //Registro
    const { data, setData, post, processing, reset, errors, patch } = useForm({
        nombre_equipo: '',
        PJ: '',
        PG: '',
        PE: '',
        PP: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('tablaGeneral.store'), { onSuccess: () => reset() })
        //patch(route('tablaGeneral.update', resultado.id), { onSuccess: () => reset() })
    }
    //Ventana modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AuthenticatedLayout auth={auth}>
                <Head title="Tabla de Resultados" />

                <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>


                    <h3 style={{ textAlign: "center" }}>Equipos de Futbol</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Capitan</th>
                                <th>Nombre del equipo</th>
                                <th>Partidos jugados</th>
                                <th>Ganados</th>
                                <th>Empatados</th>
                                <th>Perdidos</th>
                                <th><Button variant="primary" onClick={handleShow}>Modificar</Button></th>
                            </tr>
                        </thead>
                        <tbody>

                            {futbol.map(equiposFutbol => (
                                <tr key={equiposFutbol.id}>
                                    <td>{equiposFutbol.id}</td>
                                    <td>{equiposFutbol.creador}</td>
                                    <td>{equiposFutbol.nombre}</td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{(equiposFutbol.nombre == resu.nombre_equipo) &&
                                                
                                                resu.PJ + ' / '
                                                }
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PG + ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PE + ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PP + ' / '}
                                            </td>))}
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    </Table>

                    <h3 style={{ textAlign: "center" }}>Equipos de Voly</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Capitan</th>
                                <th>Nombre del equipo</th>
                                <th>Partidos jugados</th>
                                <th>Ganados</th>
                                <th>Empatados</th>
                                <th>Perdidos</th>
                                <th><Button variant="primary" onClick={handleShow}>Modificar</Button></th>
                            </tr>
                        </thead>
                        <tbody>

                            {futbol.map(equiposFutbol => (
                                <tr key={equiposFutbol.id}>
                                    <td>{equiposFutbol.id}</td>
                                    <td>{equiposFutbol.creador}</td>
                                    <td>{equiposFutbol.nombre}</td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{(equiposFutbol.nombre == resu.nombre_equipo) &&
                                                
                                                resu.PJ+ ' / '
                                                }
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PG+ ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PE+ ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PP+ ' / '}
                                            </td>))}
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    </Table>

                    <h3 style={{ textAlign: "center" }}>Equipos de Basketball</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Capitan</th>
                                <th>Nombre del equipo</th>
                                <th>Partidos jugados</th>
                                <th>Ganados</th>
                                <th>Empatados</th>
                                <th>Perdidos</th>
                                <th><Button variant="primary" onClick={handleShow}>Modificar</Button></th>
                            </tr>
                        </thead>
                        <tbody>

                            {futbol.map(equiposFutbol => (
                                <tr key={equiposFutbol.id}>
                                    <td>{equiposFutbol.id}</td>
                                    <td>{equiposFutbol.creador}</td>
                                    <td>{equiposFutbol.nombre}</td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{(equiposFutbol.nombre == resu.nombre_equipo) &&
                                                
                                                resu.PJ+ ' / '
                                                }
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PG+ ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PE+ ' / '}
                                            </td>))}
                                    </td>
                                    <td>
                                        {resultado.map(resu => (
                                            <td key={resu.id}>{equiposFutbol.nombre == resu.nombre_equipo &&
                                                resu.PP+ ' / '}
                                            </td>))}
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    </Table>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Registrar Resultados</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>

                                <label>Equipo</label><br />

                                <select

                                    value={data.nombre_equipo}
                                    onChange={e => setData('nombre_equipo', e.target.value)}
                                >
                                    {futbol.map(nom => (
                                        <option selected key={nom.id}>{nom.nombre}</option>
                                    ))}
                                </select><br /><br />

                                <InputError message={errors.equipo} className='mt-2' />

                                <label>Partidos Jugados</label>
                                <input
                                    value={data.PJ}
                                    onChange={e => setData('PJ', e.target.value)}
                                    type='number'
                                    autoFocus
                                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                >
                                </input>
                                <InputError message={errors.PJ} className='mt-2' />

                                <label>Partidos Ganados</label>
                                <input
                                    value={data.PG}
                                    onChange={e => setData('PG', e.target.value)}
                                    type='number'
                                    autoFocus
                                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                >
                                </input>
                                <InputError message={errors.PG} className='mt-2' />

                                <label>Partidos Empatados</label>
                                <input
                                    value={data.PE}
                                    onChange={e => setData('PE', e.target.value)}
                                    type='number'
                                    autoFocus
                                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                >
                                </input>
                                <InputError message={errors.PE} className='mt-2' />

                                <label>Partidos Perdidos</label>
                                <input
                                    value={data.PP}
                                    onChange={e => setData('PP', e.target.value)}
                                    type='number'
                                    autoFocus
                                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                >
                                </input>
                                <InputError message={errors.PP} className='mt-2' />



                                <Button
                                    onClick={submit}
                                    className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'
                                    discable={processing}
                                    href="/tablaGeneral"
                                >
                                    Create
                                </Button>
                                <Button
                                    className='ml-4 mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'
                                    discable={processing}
                                    href="/convocatorias"
                                >
                                    Cancel
                                </Button>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </AuthenticatedLayout>
        </>
    );
}
