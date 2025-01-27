<?php

namespace App\Models;

use App\Models\Tipo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
