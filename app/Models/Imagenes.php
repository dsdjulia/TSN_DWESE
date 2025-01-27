<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagenes extends Model
{
    use HasFactory;
    
    protected $table = "imagenes"; 

    protected $fillable = [
        'ruta',
        'zoom',
        'idMuestra',
    ];

    public function muestras(){
        return $this->belongsTo(Tipo_naturaleza::class, 'idMuestra', 'id');
    }
}
