<?php

namespace App\Policies;

use App\Models\RegistroFutbol;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegistroFutbolPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, RegistroFutbol $registroFutbol)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, RegistroFutbol $registroFutbol)
    {
        return $registroFutbol->user()->is($user);
    }

    public function delete(User $user, RegistroFutbol $registroFutbol)
    {
        //return $post->user()->is($user);
        return $this->update($user, $registroFutbol);
    }

    public function restore(User $user, RegistroFutbol $registroFutbol)
    {
        //
    }

    public function forceDelete(User $user, RegistroFutbol $registroFutbol)
    {
        //
    }
}
