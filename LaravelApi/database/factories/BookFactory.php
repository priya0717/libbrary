<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    $userids= App\User::all('id')->pluck('id');
    $authorids= App\Author::all('id')->pluck('id');
    $catids= App\Category::all('id')->pluck('id');
    return [
        "title" => $faker->name(),
        "author_id"=>$faker->randomElement($authorids),
        "category_id" => $faker->randomElement($catids),
        "isn_no" => $faker->asciify(str_repeat('*', 20)),
        "code" => $faker->asciify(str_repeat('*', 10)),
        "publication" => $faker->company,
        "published_at" => $faker->date(),
        "edtion" => $faker->randomElement(["1st edition", "2nd edition", "3rd edition"]),
        "location" => $faker->asciify('******'),
        "created_by" => $faker->randomElement($userids),
    ];
});
