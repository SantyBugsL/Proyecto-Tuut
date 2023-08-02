<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamenGenerado extends Model
{
    use HasFactory;
    protected $table = "examen_generado";

    protected $fillable = [
      'evaluacion',
      'fecha',
      'hora_cierre',
      'aula'
      
    ];

    public function evaluacions(){
        return $this->hasMany(Evaluacion::class);
    }

    public function preguntas(){
        return $this->hasMany(Pregunta::class);
    }

    public function respuestas(){
        return $this->hasMany(Respuesta::class);
    }

    public function respuestas_alumnos(){
        return $this->belongsTo(Respuestas_alumno::class);
    }
    
    public function resultados(){
        return $this->belongsTo(Resultado::class);
      }
}
