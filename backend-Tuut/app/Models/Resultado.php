<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultado extends Model
{
    use HasFactory;

    protected $table = "resultado";

    protected $fillable = [
      'matricula',
      'total_preguntas',
      'total_aciertos',
      'hora_cierre',
      'nivel'
    ];

    public function evaluacions(){
        return $this->hasMany(Evaluacion::class);
    }

    public function examen_generados(){
        return $this->hasMany(Examen_generado::class);
    }
}
