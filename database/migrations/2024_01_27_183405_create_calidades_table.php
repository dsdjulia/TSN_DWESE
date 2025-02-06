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
        Schema::create('calidades', function (Blueprint $table) {
            $table->id();
            $table->String('codigo');
            $table->string('nombre');
            $table->timestamps();

            $table->unsignedBigInteger('idTipoEstudio');

            $table->foreign('idTipoEstudio')->references('id')->on('tipo_estudios');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calidades');
    }
};