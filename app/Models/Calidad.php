<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Calidad extends Model
{
    use HasFactory;

    protected $table = "calidades";

    protected $fillable = [
        'codigo',
        'nombre',  
        'idTipoEstudio'
    ];

    public function muestras(){
        return $this->hasMany(Muestra::class, 'idCalidad', 'id');
    }

    public function tipoEstudios(){
        return $this->hasMany(Calidad::class, 'idCalidad', 'id');
    }
}
