<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Calidad extends Model
{
    use HasFactory;
    
    protected $table = "calidades"; 

    protected $fillable = [
        'nombre',
        'idTipoEstudio'
    ];

    public function muestras(){
        return $this->hasMany(Muestra::class, 'idCalidad', 'id');
    }

    public function tipoEstudio(){
        return $this->belongsTo(Tipo_estudio::class, 'idTipoEstudio', 'id');
    }
}
