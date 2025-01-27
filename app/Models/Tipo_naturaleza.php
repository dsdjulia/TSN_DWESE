<?php

namespace App\Models;

use App\Models\Muestra;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tipo_naturaleza extends Model
{
    use HasFactory;
    
    protected $table = "tipo_naturalezas"; 

    protected $fillable = [
        'codigo',
        'nombre',
    ];

    public function muestras(){
        return $this->hasMany(Muestras::class, 'idTipoNaturaleza', 'id');
    }
}
