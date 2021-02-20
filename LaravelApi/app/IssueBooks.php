<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IssueBooks extends Model
{
    protected $fillable = [
        "issued_by", "issued_to", "book_id", "expected_return_at", "returned_at", "fine_amount", "find_paid", "created_by", "created_at", "updated_at"
    ];
}
