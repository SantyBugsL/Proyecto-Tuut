<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
    use HasFactory;
    protected $table = "respuesta";

    protected $fillable = [
      'respuesta',
      'posicion',
      'opcion'
    ];

    public function preguntas(){
        return $this->belongsTo(Preguntas::class);
    }

    public function examen_generados(){
      return $this->belongsTo(Examen_generado::class);
  }
}
