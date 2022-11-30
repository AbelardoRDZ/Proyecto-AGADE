<?php

namespace App\Http\Controllers;

use App\Models\Unirvoly;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\RegistroVoly;

class UnirvolyController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/Unirvoly', [
            'registrovoly' => RegistroVoly::with('user:id,name')->latest()->get()
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
            'jugador' => 'required|string|max:100',
            'equipo' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
            
        ]);

        $request->user()->unirvoly()->create($validated);
        //return redirect(route('registroFutbol.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(Unirvoly $unirvoly)
    {
        //
    }

    public function edit(Unirvoly $unirvoly)
    {
        //
    }

    public function update(Request $request, Unirvoly $unirvoly)
    {
        //
    }

    public function destroy(Unirvoly $unirvoly)
    {
        //
    }
}
