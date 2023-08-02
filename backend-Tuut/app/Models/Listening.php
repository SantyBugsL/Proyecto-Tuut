<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listening extends Model
{
    use HasFactory;
    protected $table = "preguntas_listening";

    protected $fillable = [
      'pregunta',
      'complemento',
      'respuestaA',
      'respuestaB',
      'respuestaC',
      'respuestaD',
      'seccion'
    ];
}
