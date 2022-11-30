<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroBaseball extends Model
{
    use HasFactory;

    protected $equiposVoly = "registro_baseballs";
    
    public function obtenerData()
    {
        return RegistroBaseball::all();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'nombre',
        'creador'
    ];
}
