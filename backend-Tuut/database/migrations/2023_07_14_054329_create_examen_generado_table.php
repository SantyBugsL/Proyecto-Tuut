<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examen_generado', function (Blueprint $table) {
            $table->id();
            $table->string('examen')->nullable();
            $table->unsignedBigInteger('evaluacion_id')->nullable();
            $table->foreign('evaluacion_id')->references('id')->on('evaluacion')->onDelete('set null');

            $table->unsignedBigInteger('pregunta_id')->nullable();
            $table->foreign('pregunta_id')->references('id')->on('preguntas')->onDelete('set null');

            $table->unsignedBigInteger('respuesta_id')->nullable();
            $table->foreign('respuesta_id')->references('id')->on('respuesta')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examen_generado');
    }
};
