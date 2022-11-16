import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Post from '@/Components/Post';


export default function Resultados({ alumnos }) {

  return (
    <>
      <Head title="Tabla" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.title}</td>
              <td>{alumno.body}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </>
  );
}
