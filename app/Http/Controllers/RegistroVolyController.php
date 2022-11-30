<?php

namespace App\Http\Controllers;

use App\Models\RegistroVoly;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class RegistroVolyController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Componentes/RegistroVoly', [
            'registroVoly' => RegistroVoly::with('user:id,name')->latest()->get()
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

        $request->user()->voly()->create($validated);
        //return redirect(route('registroVoly.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(RegistroVoly $registroVoly)
    {
        //
    }

    public function edit(RegistroVoly $registroVoly)
    {
        //
    }

    public function update(Request $request, RegistroVoly $registroVoly)
    {
        //$this->authorize('update', $registroVoly);
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'creador' => 'required|string|max:100'
        ]);

        $registroVoly->update($validated);
        return redirect(route('Unirvoly.index'));
    }

    public function destroy(RegistroVoly $registroVoly)
    {
        //$this->authorize('delete', $registroVoly);
        $registroVoly->delete();
        return redirect(route('Unirvoly.index'));
    }
}
