<?php

namespace App\Models;

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

    public function muestra(){
        return $this->hasMany(Muestra::class, 'idTipoNaturaleza', 'id');
    }
}
