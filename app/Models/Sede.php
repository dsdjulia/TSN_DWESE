<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sede extends Model
{
    use HasFactory;
    
    protected $table = "sedes"; 

    protected $fillable = [
        'codigo',
        'nombre',
    ];

    public function muestra(){
        return $this->hasMany(Muestra::class, 'idSede', 'id');
    }
}
