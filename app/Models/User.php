<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function futbol(){
        return $this->hasMany(RegistroFutbol::class);
    }

    public function voly(){
        return $this->hasMany(RegistroVoly::class);
    }

    public function baseBall(){
        return $this->hasMany(RegistroBaseball::class);
    }
    public function unirfutbol(){
        return $this->hasMany(Unirfutbol::class);
    }
    public function unirvoly(){
        return $this->hasMany(Unirvoly::class);
    }
    public function unirbaseball(){
        return $this->hasMany(UnirbaseBall::class);
    }
    public function jugadores(){
        return $this->hasMany(Jugador::class);
    }
    

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
