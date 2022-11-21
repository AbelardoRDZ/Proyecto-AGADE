<?php

namespace App\Http\Controllers;

use App\Models\RegistroBaseball;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class RegistroBaseballController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Componentes/RegistroBaseball', [
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
     * @param  \App\Models\RegistroBaseball  $registroBaseball
     * @return \Illuminate\Http\Response
     */
    public function show(RegistroBaseball $registroBaseball)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RegistroBaseball  $registroBaseball
     * @return \Illuminate\Http\Response
     */
    public function edit(RegistroBaseball $registroBaseball)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RegistroBaseball  $registroBaseball
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RegistroBaseball $registroBaseball)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RegistroBaseball  $registroBaseball
     * @return \Illuminate\Http\Response
     */
    public function destroy(RegistroBaseball $registroBaseball)
    {
        //
    }
}
