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
            $table->unsignedBigInteger('idUser');
            $table->unsignedBigInteger('idFormato');
            $table->unsignedBigInteger('idSede');
            $table->unsignedBigInteger('idCalidad');

            $table->foreign('idTipoNaturaleza')->references('id')->on('tipo_naturalezas');
            $table->foreign('idUser')->references('id')->on('users');
            $table->foreign('idFormato')->references('id')->on('formatos');
            $table->foreign('idSede')->references('id')->on('sedes');
            $table->foreign('idCalidad')->references('id')->on('calidades');
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