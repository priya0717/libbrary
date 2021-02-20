<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookTag extends Model
{
    protected $fillable = [
        "book_id", "tag_id", "created_by", "created_at", "updated_at"
    ];
}
