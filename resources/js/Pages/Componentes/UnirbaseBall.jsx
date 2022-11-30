import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError';
import { useForm, Head } from '@inertiajs/inertia-react'
import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Futbol from '@/Components/Futbol';
import PrimaryButton from '@/Components/PrimaryButton';
import BaseBall from '@/Components/baseBall';


function RegistroFutbol({ auth, registrobaseBall }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        jugador: auth.user.name,
        equipo: '',
        creador: ''
    })

    const submit = (e) => {
        e.preventDefault()
        //console.log(data);
        post(route('UnirbaseBall.store'), { onSuccess: () => reset() })
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Registro Futbol' />
            <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>

                <form onSubmit={submit}>

                    <label>Nombre del jugador</label>
                    <input
                        value={data.jugador}
                        onChange={e => setData('jugador', e.target.value)}
                        type='text'
                        placeholder='Jugador'
                        autoFocus
                        disabled='disabled'
                        className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                    >
                    </input>
                    <InputError message={errors.jugador} className='mt-2' />

                    <label>Nombre del equipo a inscribirse</label><br />
                    <select
                        selected
                        value={data.equipo}
                        onChange={e => setData('equipo', e.target.value)}
                    >
                        {registrobaseBall.map(futbol => (
                            <option key={futbol.id}>{futbol.nombre}</option>
                        ))}
                    </select><br /><br />

                    <label>Nombre del capitan del equipo</label><br />
                    <select
                        selected
                        value={data.creador}
                        onChange={e => setData('creador', e.target.value)}
                    >
                        {registrobaseBall.map(futbol => (
                            <option key={futbol.id}>{futbol.creador}</option>
                        ))}
                    </select><br /><br />

                    <PrimaryButton
                        className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'
                        discable={processing}
                    >
                        Unirse
                    </PrimaryButton>

                </form>

                <div style={{ textAlign: "center" }}><h3>Equipos registrados</h3></div>
                <div className='mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg'>
                    {
                        registrobaseBall.map(baseBall =>
                            <BaseBall key={baseBall.id} baseBall={baseBall} />

                        )}

                </div>

            </div>
        </AuthenticatedLayout >
    )
}

export default RegistroFutbol;