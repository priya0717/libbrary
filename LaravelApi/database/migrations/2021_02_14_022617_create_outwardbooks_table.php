<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOutwardbooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('outwardbooks', function (Blueprint $table) {
            $table->id();
            $table->string("outward_no")->nullable();
            $table->string("outwardType");
            $table->dateTime("outward_at");
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
        Schema::dropIfExists('outwardbooks');
    }
}
