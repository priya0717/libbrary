<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInwardBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inward_books', function (Blueprint $table) {
            $table->id();
            $table->string("inward_no")->nullable();
            $table->string("inwardType");
            $table->dateTime("inward_at");
            $table->foreignId("book_id");
            $table->integer("quantity");
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
        Schema::dropIfExists('inward_books');
    }
}
