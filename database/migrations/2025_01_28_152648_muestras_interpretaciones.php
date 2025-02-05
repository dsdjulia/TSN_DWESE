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
        Schema::create('muestras_interpretaciones', function (Blueprint $table) {
            
            $table->id();
            $table->text('descripcion');
            $table->timestamps();

            $table->unsignedBigInteger('idMuestra');
            $table->unsignedBigInteger('idInterpretacion');

            $table->foreign('idMuestra')->references('id')->on('muestras')->onDelete('cascade');
            $table->foreign('idInterpretacion')->references('id')->on('interpretaciones')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
