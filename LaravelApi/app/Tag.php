<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        "tagname", "created_by", "created_at", "updated_at"
    ];
}
