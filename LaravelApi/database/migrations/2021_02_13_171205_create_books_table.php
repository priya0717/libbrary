<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('author_id');
            $table->string("isn_no");
            $table->string('code');
            $table->foreignId('category_id')->nullable();
            $table->string('publication')->nullable();
            $table->dateTime('published_at')->nullable();
            $table->string('edtion')->nullable();
            $table->string('location',20)->default('')->nullable();
            $table->foreignId("created_by");
            $table->timestamps();
            $table->foreign('created_by')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
