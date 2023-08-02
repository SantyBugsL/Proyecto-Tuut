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
    /*
    public function up()
    
   {
        Schema::create('preguntas', function (Blueprint $table) {
            $table->id();
            $table->string('pregunta')->nullable();
            $table->string('complemento')->nullable();
            $table->unsignedBigInteger('seccion_id')->nullable();
            $table->foreign('seccion_id')->references('id')->on('seccion')->onDelete('set null');
            $table->timestamps();
        });
    }
    */

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    /*
    public function down()
    
    {
       Schema::dropIfExists('preguntas');
    
}
*/
};
