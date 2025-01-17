<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestra extends Model
{

    use HasFactory;
    protected $table = "muestras"; 

    protected $fillable = [
        'fecha',
        'idTipo',
    ];

    public function tipo(){
        return $this->belongsTo(Tipo::class, 'idTipo', 'id');
    }
}
