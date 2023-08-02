<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluacion extends Model
{
    use HasFactory;
    protected $table = "evaluacion";

    protected $fillable = [
      'evaluacion',
      'fecha',
      'hora_cierre',
      'aula'
      
    ];

    public function examen_generados(){
      return $this->belongsTo(Examen_generado::class);
  }

  public function respuestas_alumnos(){
    return $this->belongsTo(Respuestas_alumno::class);
}

public function resultados(){
  return $this->belongsTo(Resultado::class);
}

}
