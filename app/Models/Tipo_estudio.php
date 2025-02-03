<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tipo_estudio extends Model
{
    use HasFactory;
    
    protected $table = "tipo_estudios"; 

    protected $fillable = [
        'nombre',
    ];

    public function calidad(){
        return $this->belongsTo(Tipo_estudio::class, 'idCalidad', 'id');
    }

    public function interpretaciones(){
        return $this->hasMany(Interpretacion::class, 'idTipoEstudio', 'id');
    }
}
