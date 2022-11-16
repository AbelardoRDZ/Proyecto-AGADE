<?php

namespace App\Http\Controllers;

use App\Models\Convocatorias;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConvocatoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Componentes/Convocatorias');
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
     * @param  \App\Models\Convocatorias  $convocatorias
     * @return \Illuminate\Http\Response
     */
    public function show(Convocatorias $convocatorias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Convocatorias  $convocatorias
     * @return \Illuminate\Http\Response
     */
    public function edit(Convocatorias $convocatorias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Convocatorias  $convocatorias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Convocatorias $convocatorias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Convocatorias  $convocatorias
     * @return \Illuminate\Http\Response
     */
    public function destroy(Convocatorias $convocatorias)
    {
        //
    }
}
