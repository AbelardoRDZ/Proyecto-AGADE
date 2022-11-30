<?php

namespace App\Http\Controllers;

use App\Models\RegistroFutbol;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistroFutbolController extends Controller
{

    public function index()
    {
        return Inertia::render('Componentes/RegistroFutbol', [
            'registroFutbol' => RegistroFutbol::with('user:id,name')->latest()->get()
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //Validando los datos
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
            
        ]);

        $request->user()->futbol()->create($validated);
        //return redirect(route('registroFutbol.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(RegistroFutbol $registroFutbol)
    {
        //
    }

    public function edit(RegistroFutbol $registroFutbol)
    {
        //
    }

    public function update(Request $request, RegistroFutbol $registroFutbol)
    {
        //$this->authorize('update', $registroFutbol);
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
        ]);

        $registroFutbol->update($validated);
        return redirect(route('Unirfutbol.index'));
    }

    public function destroy(RegistroFutbol $registroFutbol)
    {
        //$this->authorize('delete', $registroFutbol);
        $registroFutbol->delete();
        return redirect(route('Unirfutbol.index'));
    }
}
