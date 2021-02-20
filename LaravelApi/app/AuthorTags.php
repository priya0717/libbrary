<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthorTags extends Model
{
    protected $fillable = [
        "author_id", "tag_id", "created_by", "created_at", "updated_at"
    ];
}
