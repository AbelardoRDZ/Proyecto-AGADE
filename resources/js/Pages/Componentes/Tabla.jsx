import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Resultados({ nombres, alumnos, auth }) {

  return (
    <>
      <AuthenticatedLayout auth={auth}>
        <Head title="Tabla" />

        <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>
          <Table striped bordered hover>
            
            <thead>
            <caption>Alumnos</caption>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>apellido</th>
                <th>edad</th>
                <th>direccion</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map(alumno => (
                <tr key={alumno.id}>
                  <td>{alumno.id}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellido}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.direccion}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Table striped bordered hover>
          
            <thead>
            <caption>Equipos</caption>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {nombres.map(nombre => (
                <tr key={nombre.id}>
                  <td>{nombre.id}</td>
                  <td>{nombre.title}</td>
                  <td>{nombre.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </AuthenticatedLayout>
    </>
  );
}
