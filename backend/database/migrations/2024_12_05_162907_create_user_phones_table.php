<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPhonesTable extends Migration
{
    public function up()
    {
        Schema::create('user_phones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // Relación con el usuario
            $table->string('phone_number'); // Número de teléfono
            $table->timestamps();

            // Foreign key para la relación con usuarios
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_phones');
    }
}
