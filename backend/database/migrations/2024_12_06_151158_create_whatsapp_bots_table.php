<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('whatsapp_bots', function (Blueprint $table) {
            $table->id();
            $table->string('phone_number')->unique();
            $table->string('pairing_code')->nullable();
            $table->string('status')->default('initializing');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('whatsapp_bots');
    }
};
