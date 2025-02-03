<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Formato extends Model
{
    use HasFactory;
    
    protected $table = "formatos"; 

    protected $fillable = [
        'codigo',
        'nombre',
    ];

    public function muestras(){
        return $this->hasMany(Muestra::class, 'idFormato', 'id');
    }
}
