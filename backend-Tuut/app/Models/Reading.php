<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;
    protected $table = "preguntas_reading";

    protected $fillable = [
      'pregunta',
      'respuestaA',
      'respuestaB',
      'respuestaC',
      'respuestaD',
      'seccion'
    ];
}
