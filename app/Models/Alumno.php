<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    public $timestamps = false;

    use HasFactory;

    protected $alumnos = "alumnos";
    
    public function obtenerAlumnos()
    {
        return Alumno::all();
    }
    
}
