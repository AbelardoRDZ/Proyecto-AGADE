<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Post;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AlumnoController extends Controller
{
    protected $alumnos;
    
    public function __construct(Alumno $alumnos, Post $nombres)
    {
        $this->alumnos = $alumnos;
        $this->nombres = $nombres;
    }

    public function index()
    {
        $alumnos = $this->alumnos->obtenerAlumnos();
        $nombres = $this->nombres->obtenerNombres();
        
        return Inertia::render('Componentes/Tabla', ['alumnos' => $alumnos, 'nombres' => $nombres]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function show(Alumno $alumno)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function edit(Alumno $alumno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Alumno $alumno)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function destroy(Alumno $alumno)
    {
        //
    }
}
