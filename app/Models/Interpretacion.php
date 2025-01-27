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
    ];

    public function tipoEstudio(){
        return $this->belongsTo(Tipo_estudio::class, 'idTipoEstudio', 'id');
    }
}
