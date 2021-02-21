<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        "tagname", "created_by", "created_at", "updated_at"
    ];


    /**
     * Get all of the posts that are assigned this tag.
     */
    public function Books()
    {
        return $this->morphedByMany(Book::class, 'taggable')->withPivot(['meta']);
    }

    /**
     * Get all of the posts that are assigned this tag.
     */
    public function Authors()
    {
        return $this->morphedByMany(Author::class, 'taggable')->withPivot(['meta']);
    }

}
