<?php

namespace App\Http\Controllers;

use App\Models\RegistroVoly;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class RegistroVolyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Componentes/RegistroVoly', [
            'posts' => Post::with('user:id,name')->latest()->get()
        ]);
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
     * @param  \App\Models\RegistroVoly  $registroVoly
     * @return \Illuminate\Http\Response
     */
    public function show(RegistroVoly $registroVoly)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RegistroVoly  $registroVoly
     * @return \Illuminate\Http\Response
     */
    public function edit(RegistroVoly $registroVoly)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RegistroVoly  $registroVoly
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RegistroVoly $registroVoly)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RegistroVoly  $registroVoly
     * @return \Illuminate\Http\Response
     */
    public function destroy(RegistroVoly $registroVoly)
    {
        //
    }
}
