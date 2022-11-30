<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroVoly extends Model
{
    use HasFactory;

    protected $equiposBaseball = "registro_volies";
    
    public function obtenerData()
    {
        return RegistroVoly::all();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'nombre',
        'creador'
    ];
}
