<?php
namespace App\Http\Controllers\Api;

use App\Author;
use App\Http\Controllers\Api\ApiController;

class AuthorController extends ApiController
{
    protected $model = Author::class;
}
