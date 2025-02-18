<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Imagen extends Model
{
    use HasFactory;
    
    protected $table = "imagenes"; 

    protected $fillable = [
        'idPublica',
        'ruta',
        'zoom',
        'idMuestra',
    ];

    public function muestra(){
        return $this->belongsTo(Muestra::class, 'idMuestra', 'id');
    }
}
