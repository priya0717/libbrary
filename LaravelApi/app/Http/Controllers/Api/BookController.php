<?php

namespace App\Http\Controllers\Api;

use App\Book;
use App\Http\Controllers\Api\ApiController;

class BookController extends ApiController
{
    protected $model = Book::class;
}
