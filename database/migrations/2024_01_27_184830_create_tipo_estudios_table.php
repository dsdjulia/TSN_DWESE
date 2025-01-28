<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tipo_estudios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();

            $table->unsignedBigInteger('idCalidad');

            $table->foreign('idCalidad')->references('id')->on('calidades');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipo_estudios');
    }
};
