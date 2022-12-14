<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $nombres = "posts";

    public function obtenerNombres()
    {
        return Post::all();
    }
    
    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'title',
        'body'
    ];
    
}
