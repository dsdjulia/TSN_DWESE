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
        Schema::create('muestras', function (Blueprint $table) {
            $table->id();
            $table->string('codigo');
            $table->string('descripcionCalidad');
            $table->date('fecha');
            $table->string('organo');
            $table->timestamps();

            
            $table->unsignedBigInteger('idTipoNaturaleza');

            $table->foreign('idTipoNaturaleza')->references('id')->on('tipo_naturalezas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('muestras');
    }
};