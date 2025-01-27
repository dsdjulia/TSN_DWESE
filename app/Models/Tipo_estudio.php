<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo_estudio extends Model
{
    use HasFactory;
    
    protected $table = "tipo_estudios"; 

    protected $fillable = [
        'nombre',
    ];

    public function calidad(){
        return $this->hasMany(Calidad::class, 'idTipoEstudio', 'id');
    }

    public function interpretacion(){
        return $this->hasMany(Interpretacion::class, 'idTipoEstudio', 'id');
    }
}
