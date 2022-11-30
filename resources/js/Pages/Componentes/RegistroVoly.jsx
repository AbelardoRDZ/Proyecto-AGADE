import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/inertia-react'
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
import { Button } from 'react-bootstrap';
import Voly from '@/Components/Voly';


function RegistroVoly({ auth, registroVoly }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        nombre: '',
        creador: auth.user.name
    })

    const submit = (e) => {
        e.preventDefault()
        //console.log(data);
        post(route('registroVoly.store'), { onSuccess: () => reset() })
    }

    const [basicModal, setBasicModal] = useState(true);
    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Registro Voly' />
            <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>

                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Registrar Equipo</MDBModalTitle>
                                <MDBBtn href="/convocatorias" className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <form onSubmit={submit}>

                                    <label>Capitan</label>
                                    <input
                                        disabled='disabled'
                                        value={data.creador}
                                        onChange={e => setData('creador', e.target.value)}
                                        type='text'
                                        placeholder='Creador'
                                        autoFocus
                                        className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                    >
                                    </input>
                                    <InputError message={errors.creador} className='mt-2' />

                                    <input
                                        value={data.nombre}
                                        onChange={e => setData('nombre', e.target.value)}
                                        type='text'
                                        placeholder='Nombre del Equipo'
                                        autoFocus
                                        className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                                    >
                                    </input>
                                    <InputError message={errors.nombre} className='mt-2' />



                                    <Button
                                        onClick={submit}
                                        className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'
                                        discable={processing}
                                        href="/convocatorias"
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
                            </MDBModalBody>

                            <MDBModalFooter>

                            </MDBModalFooter>


                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
                
            </div>
        </AuthenticatedLayout>
    )
}

export default RegistroVoly;