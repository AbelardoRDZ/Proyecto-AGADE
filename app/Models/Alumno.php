<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    public $timestamps = false;
    use HasFactory;

    protected $table = "posts";

    protected $hidden = ['id'];

    public function obtenerAlumnos()
    {
        return Alumno::all();
    }
    
}
