<?php

namespace App\Http\Controllers;

use App\Models\tablaGeneral;
use App\Models\RegistroFutbol;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TablaGeneralController extends Controller
{

    public function __construct(RegistroFutbol $futbol, tablaGeneral $resultado)
    {
        $this->futbol = $futbol;
        $this->resultado = $resultado;
    }
    
    public function index()
    {
        $futbol = $this->futbol->obtenerData();
        $resultado = $this->resultado->obtenerData();

        //return Inertia::render('Componentes/TablaGeneral', ['futbol' => $futbol]);
        return Inertia::render('Componentes/TablaGeneral',
        ['tablaGeneral' => tablaGeneral::with('user:id,name')->latest()->get(), 'futbol' => $futbol, 'resultado' => $resultado]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //Validando los datos
        $validated = $request->validate([
            'nombre_equipo' => 'required|string|max:100',
            'PJ' => 'required|string|max:100',
            'PG' => 'required|string|max:100',
            'PE' => 'required|string|max:100',
            'PP' => 'required|string|max:100'
            
        ]);

        $request->user()->resultado_fut()->create($validated);
        //return redirect(route('registroFutbol.index'));
        return Inertia::render('Componentes/Convocatorias');
    }

    public function show(tablaGeneral $tablaGeneral)
    {
        //
    }

    public function edit(tablaGeneral $tablaGeneral)
    {
        //
    }

    public function update(Request $request, tablaGeneral $tablaGeneral)
    {
        //$this->authorize('update', $registroFutbol);
        $validated = $request->validate([
            'nombre_equipo' => 'required|string|max:100',
            'PJ' => 'required|string|max:100',
            'PG' => 'required|string|max:100',
            'PE' => 'required|string|max:100',
            'PP' => 'required|string|max:100'
        ]);

        $tablaGeneral->update($validated);
        return redirect(route('tablaGeneral.index'));
    }

    public function destroy(tablaGeneral $tablaGeneral)
    {
        //
    }
}
