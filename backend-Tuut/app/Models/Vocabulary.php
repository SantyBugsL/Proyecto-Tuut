<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vocabulary extends Model
{
    use HasFactory;
    protected $table = "preguntas_vocabulary";

    protected $fillable = [
      'pregunta',
      'respuestaA',
      'respuestaB',
      'respuestaC',
      'respuestaD',
      'seccion'
    ];
}
