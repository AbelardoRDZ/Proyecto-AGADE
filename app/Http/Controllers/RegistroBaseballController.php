<?php

namespace App\Http\Controllers;

use App\Models\RegistroBaseball;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class RegistroBaseballController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/RegistroBaseball', [
            'registroBaseball' => RegistroBaseball::with('user:id,name')->latest()->get()
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

        $request->user()->baseBall()->create($validated);
        //return redirect(route('registroBaseball.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(RegistroBaseball $registroBaseball)
    {
        //
    }

    public function edit(RegistroBaseball $registroBaseball)
    {
        //
    }

    public function update(Request $request, RegistroBaseball $registroBaseball)
    {
        //$this->authorize('update', $registroBaseball);
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
        ]);

        $registroBaseball->update($validated);
        return redirect(route('UnirbaseBall.index'));
    }

    public function destroy(RegistroBaseball $registroBaseball)
    {
        //$this->authorize('delete', $registroBaseball);
        $registroBaseball->delete();
        return redirect(route('UnirbaseBall.index'));
    }
}
