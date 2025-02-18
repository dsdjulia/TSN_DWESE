<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Imagen extends Model
{
    use HasFactory;
    
    protected $table = "imagenes"; 

    protected $fillable = [
        'idMuestra',
        'idPublica',
        'ruta',
        'zoom',
    ];

    public function muestra(){
        return $this->belongsTo(Muestra::class, 'idMuestra', 'id');
    }
}
