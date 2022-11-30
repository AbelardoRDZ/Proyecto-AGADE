<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unirvoly extends Model
{
    use HasFactory;

    protected $equiposBaseball = "unirvolies";

    public function obtenerData()
    {
        return Unirvoly::all();
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
