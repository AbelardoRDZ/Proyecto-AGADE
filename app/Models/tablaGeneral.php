<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tablaGeneral extends Model
{
    use HasFactory;

    protected $resultados = "tabla_generals";

    public function obtenerData()
    {
        return tablaGeneral::all();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'nombre_equipo',
        'PJ',
        'PG',
        'PE',
        'PP'
    ];
}
