import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Resultados({ futbol, voly, baseball, auth, unirfutbol, unirvoly, unirbaseBall, post }) {

  return (
    <>
      <AuthenticatedLayout auth={auth}>
        <Head title="Tabla" />

        <div className='max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8'>
          <h3 style={{ textAlign: "center" }}>Equipos de futbol</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Capitan</th>
                <th>Nombre del equipo</th>
                <th>Jugadores</th>
              </tr>
            </thead>
            <tbody>
              {futbol.map(equiposFutbol => (
                <tr key={equiposFutbol.id}>
                  <td>{equiposFutbol.id}</td>
                  <td>{equiposFutbol.creador}</td>
                  <td>{equiposFutbol.nombre}</td>

                  <td>
                    {unirfutbol.map(unir => (
                      <td key={unir.id}>{equiposFutbol.creador == unir.creador &&
                        unir.jugador + ' / '}
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
                <th>Jugadores</th>
              </tr>
            </thead>
            <tbody>
              {voly.map(equiposVoly => (
                <tr key={equiposVoly.id}>
                  <td>{equiposVoly.id}</td>
                  <td>{equiposVoly.creador}</td>
                  <td>{equiposVoly.nombre}</td>

                  <td>
                    {unirvoly.map(unir => (
                      <td key={unir.id}>{equiposVoly.creador == unir.creador &&
                        unir.jugador + ' / '}
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
                <th>Jugadores</th>
              </tr>
            </thead>
            <tbody>
              {baseball.map(equiposBaseball => (
                <tr key={equiposBaseball.id}>
                  <td>{equiposBaseball.id}</td>
                  <td>{equiposBaseball.creador}</td>
                  <td>{equiposBaseball.nombre}</td>

                  <td>
                    {unirbaseBall.map(unir => (
                      <td key={unir.id}>{equiposBaseball.creador == unir.creador &&
                        unir.jugador + ' / '}
                      </td>))}
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </AuthenticatedLayout>
    </>
  );
}
