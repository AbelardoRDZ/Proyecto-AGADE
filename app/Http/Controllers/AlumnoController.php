<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Alumno;
use App\Models\RegistroBaseball;
use App\Models\RegistroFutbol;
use App\Models\RegistroVoly;
use App\Models\UnirbaseBall;
use App\Models\Unirfutbol;
use App\Models\Unirvoly;
use Illuminate\Http\Request;



class AlumnoController extends Controller
{
    protected $alumnos;
    
    public function __construct(RegistroFutbol $futbol, RegistroVoly $voly, RegistroBaseball $baseball, 
                                Unirfutbol $unirfutbol, Unirvoly $unirvoly, UnirbaseBall $unirbaseBall)
    {
        $this->futbol = $futbol;
        $this->voly = $voly;
        $this->baseball = $baseball;
        $this->unirfutbol = $unirfutbol;
        $this->unirvoly = $unirvoly;
        $this->unirbaseBall = $unirbaseBall;
    }

    public function index()
    {
        $futbol = $this->futbol->obtenerData();
        $voly = $this->voly->obtenerData();
        $baseball = $this->baseball->obtenerData();
        $unirfutbol = $this->unirfutbol->obtenerData();
        $unirvoly = $this->unirvoly->obtenerData();
        $unirbaseBall = $this->unirbaseBall->obtenerData();
        
        return Inertia::render('Componentes/Tabla', ['futbol' => $futbol, 'voly' => $voly, 'baseball' => $baseball, 'unirfutbol' => $unirfutbol, 'unirvoly' => $unirvoly, 'unirbaseBall' => $unirbaseBall]);
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
