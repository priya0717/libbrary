<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OutwardBooks extends Model
{
    protected $fillable = [
        "outward_no", "outwardType", "outward_at", "book_id", "quantity", "created_by", "created_at", "updated_at"
    ];
}
