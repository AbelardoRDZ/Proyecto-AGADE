<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class Postpolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, Post $post)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Post $post)
    {
        return $post->user()->is($user);
    }

    public function delete(User $user, Post $post)
    {
        //
    }

    public function restore(User $user, Post $post)
    {
        //
    }

    public function forceDelete(User $user, Post $post)
    {
        //
    }
}
