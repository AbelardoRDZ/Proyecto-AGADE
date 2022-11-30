<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnirbaseBall extends Model
{
    use HasFactory;

    protected $equiposBaseball = "unirbase_balls";

    public function obtenerData()
    {
        return UnirbaseBall::all();
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
