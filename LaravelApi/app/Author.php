<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = [
        "name", "description", "created_by", "created_at", "updated_at"
    ];

    public function CreatedBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get all of the tags for the post.
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable')->withPivot(['meta'])->withTimestamps();
    }
}
