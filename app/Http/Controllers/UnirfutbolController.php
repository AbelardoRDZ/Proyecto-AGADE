<?php

namespace App\Http\Controllers;

use App\Models\Unirfutbol;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\RegistroFutbol;

class UnirfutbolController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/Unirfutbol', [
            'registroFutbol' => RegistroFutbol::with('user:id,name')->latest()->get()
        ]);

        //return Inertia::render('Componentes/Unirfutbol');
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //Validando los datos
        $validated = $request->validate([
            'jugador' => 'required|string|max:100',
            'equipo' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
            
        ]);

        $request->user()->unirfutbol()->create($validated);
        //return redirect(route('registroFutbol.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(Unirfutbol $unirfutbol)
    {
        //
    }

    public function edit(Unirfutbol $unirfutbol)
    {
        //
    }

    public function update(Request $request, Unirfutbol $unirfutbol)
    {
        
    }

    public function destroy(Unirfutbol $unirfutbol)
    {
        
    }
}
