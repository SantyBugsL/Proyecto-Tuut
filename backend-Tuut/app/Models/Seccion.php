<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seccion extends Model
{
    use HasFactory;

    protected $table = "seccion";

    protected $fillable = [
      'seccion',
      'puntos_Maximos',
      'puntos_Minimos'
      
    ];

    public function preguntas(){
        return $this->hasMany(Preguntas::class);
    }
}
