<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIssueBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issue_books', function (Blueprint $table) {
            $table->id();
            $table->foreignId('issued_by');
            $table->foreignId('issued_to');
            $table->foreignId('book_id');
            $table->dateTime('expected_return_at');
            $table->dateTime('returned_at');
            $table->integer('fine_amount');
            $table->boolean('find_paid');
            $table->timestamps();
            $table->foreign('issued_by')->references('id')->on('users');
            $table->foreign('issued_to')->references('id')->on('users');
            $table->foreign('book_id')->references('id')->on('books');
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
        Schema::dropIfExists('issue_books');
    }
}
