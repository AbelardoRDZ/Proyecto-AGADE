<?php

namespace App\Http\Controllers;

use App\Models\RegistroBaseball;
use App\Models\UnirbaseBall;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\RegistroFutbol;

class UnirbaseBallController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/UnirbaseBall', [
            'registrobaseBall' => RegistroBaseball::with('user:id,name')->latest()->get()
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

        $request->user()->unirbaseball()->create($validated);
        //return redirect(route('registroFutbol.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(UnirbaseBall $unirbaseBall)
    {
        //
    }

    public function edit(UnirbaseBall $unirbaseBall)
    {
        //
    }

    public function update(Request $request, UnirbaseBall $unirbaseBall)
    {
        //
    }

    public function destroy(UnirbaseBall $unirbaseBall)
    {
        //
    }
}
