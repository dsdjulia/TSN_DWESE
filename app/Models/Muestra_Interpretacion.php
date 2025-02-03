<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestra_Interpretacion extends Model
{
    use HasFactory;
    
    protected $table = "muestras_interpretaciones"; 

    protected $fillable = [
        'descripcion',
        'idMuestra',
        'idInterpretacion',
    ];
    

    public function muestra(){
        return $this->belongsTo(Muestra::class, 'idMuestra', 'id');
    }

    public function interpretacion(){
            return $this->belongsTo(Interpretacion::class, 'idInterpretacion', 'id');
    }
}
