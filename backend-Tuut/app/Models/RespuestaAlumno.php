<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RespuestaAlumno extends Model
{
    use HasFactory;

    protected $table = "respuestas_alumno";

    protected $fillable = [
      'matricula',
      'respuesta'
      
    ];

    public function examen_generados(){
        return $this->hasMany(Examen_generado::class);
    }

    public function evaluacions(){
        return $this->hasMany(Evaluacion::class);
    }

    public function preguntas(){
        return $this->hasMany(Pregunta::class);
    }
}
