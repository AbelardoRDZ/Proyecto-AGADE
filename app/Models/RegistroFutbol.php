<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroFutbol extends Model
{
    use HasFactory;

    protected $equiposFutbol = "registro_Futbols";
    
    public function obtenerData()
    {
        return RegistroFutbol::all();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'nombre',
        'creador'
    ];
}
