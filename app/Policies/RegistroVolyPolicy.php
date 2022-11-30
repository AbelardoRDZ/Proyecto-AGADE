<?php

namespace App\Policies;

use App\Models\RegistroVoly;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegistroVolyPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, RegistroVoly $registroVoly)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, RegistroVoly $registroVoly)
    {
        //return $registroVoly->user()->is($user);
    }

    public function delete(User $user, RegistroVoly $registroVoly)
    {
        //return $post->user()->is($user);
        //return $this->update($user, $registroVoly);
    }

    public function restore(User $user, RegistroVoly $registroVoly)
    {
        //
    }

    public function forceDelete(User $user, RegistroVoly $registroVoly)
    {
        //
    }
}
