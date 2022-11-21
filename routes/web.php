<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ConvocatoriasController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\RegistroFutbolController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('registroBaseball', RegistroFutbolController::class)
->only(['index', 'store', 'update', 'destroy'])
->middleware(['auth', 'verified']);

Route::resource('registroVoly', RegistroFutbolController::class)
->only(['index', 'store', 'update', 'destroy'])
->middleware(['auth', 'verified']);

Route::resource('registroFutbol', RegistroFutbolController::class)
->only(['index', 'store', 'update', 'destroy'])
->middleware(['auth', 'verified']);

Route::resource('perfil', PerfilController::class)
->only(['index'])
->middleware(['auth', 'verified']);

Route::resource('convocatorias', ConvocatoriasController::class)
->only(['index'])
->middleware(['auth', 'verified']);

Route::resource('tabla', AlumnoController::class)
->only(['index'])
->middleware(['auth', 'verified']);

Route::resource('home', HomeController::class)
->only(['index'])
->middleware(['auth', 'verified']);

Route::resource('posts', PostController::class)
->only(['index', 'store', 'update', 'destroy'])
->middleware(['auth']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
require __DIR__.'/auth.php';
