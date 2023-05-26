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
      'complemento',
      'seccion'
    ];
}
