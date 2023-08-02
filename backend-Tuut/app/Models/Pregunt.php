<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pregunt extends Model
{
    use HasFactory;
    protected $table = "preguntas";

    protected $fillable = [
      'pregunta',
      'complemento'
    ];

    public function respuestas(){
      return $this->hasMany(Respuestas::class);
  }

    public function seccion(){
      return $this->belongsTo(Seccion::class);
  }

  public function examen_generados(){
    return $this->belongsTo(Examen_generado::class);
}

public function respuestas_alumnos(){
  return $this->belongsTo(Respuestas_alumno::class);
}

}
