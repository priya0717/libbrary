<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InwardBooks extends Model
{
    protected $fillable = [
        "inward_no", "inwardType", "inward_at", "book_id", "quantity", "created_by", "created_at", "updated_at"
    ];
}
