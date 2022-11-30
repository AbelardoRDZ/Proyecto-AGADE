<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unirfutbol extends Model
{
    use HasFactory;

    protected $equiposBaseball = "unirfutbols";

    public function obtenerData()
    {
        return Unirfutbol::all();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'jugador',
        'equipo',
        'creador'
    ];
}
