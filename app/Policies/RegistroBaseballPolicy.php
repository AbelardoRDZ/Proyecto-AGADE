<?php

namespace App\Policies;

use App\Models\RegistroBaseball;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegistroBaseballPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, RegistroBaseball $registroBaseball)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, RegistroBaseball $registroBaseball)
    {
        return $registroBaseball->user()->is($user);
    }

    public function delete(User $user, RegistroBaseball $registroBaseball)
    {
        //return $post->user()->is($user);
        return $this->update($user, $registroBaseball);
    }

    public function restore(User $user, RegistroBaseball $registroBaseball)
    {
        //
    }

    public function forceDelete(User $user, RegistroBaseball $registroBaseball)
    {
        //
    }
}
