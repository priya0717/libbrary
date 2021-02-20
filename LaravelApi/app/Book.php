<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        "title", "author_id", "isn_no", "code", "category_id", "publication", "published_at", "edtion", "location", "created_by", "created_at", "updated_at"
    ];
}
