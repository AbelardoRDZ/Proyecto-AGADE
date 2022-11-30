<?php

namespace App\Http\Controllers;

use App\Models\Jugador;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JugadorController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/RegistroFutbol');
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        
    }

    public function show(Jugador $jugador)
    {
        //
    }

    public function edit(Jugador $jugador)
    {
        //
    }

    public function update(Request $request, Jugador $jugador)
    {
        
    }

    public function destroy(Jugador $jugador)
    {
        //
    }
}
