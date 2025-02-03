<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interpretacion extends Model
{
    use HasFactory;
    
    protected $table = "interpretaciones"; 

    protected $fillable = [
        'texto',
        'idTipoEstudio',
    ];

    public function tipoEstudio(){
        return $this->belongsTo(Tipo_estudio::class, 'idTipoEstudio', 'id');
    }

    public function muestras_interpretaciones(){
        return $this->hasMany(Muestra_Interpretacion::class, 'idInterpretacion', 'id');
    }
}
