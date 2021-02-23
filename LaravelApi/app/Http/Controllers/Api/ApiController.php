<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use Orion\Http\Controllers\Controller;

class ApiController extends Controller
{

    /**
     * Retrieves currently authenticated user based on the guard.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function resolveUser()
    {
        return Auth::guard('sanctum')->user();
    }

}
