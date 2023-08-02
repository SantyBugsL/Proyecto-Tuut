<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Writing extends Model
{
    use HasFactory;
    protected $table = "preguntas_writing";

    protected $fillable = [
      'pregunta',
      'respuestaA',
      'respuestaB',
      'respuestaC',
      'respuestaD',
      'seccion'
    ];
}
