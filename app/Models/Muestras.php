<?php

namespace App\Models;

use App\Models\Tipo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Muestras extends Model
{

    use HasFactory;
    protected $table = "muestras"; 

    protected $fillable = [
        'fecha',
        'idTipoNaturaleza',
    ];

    public function tipoNaturaleza(){
        return $this->belongsTo(Tipo_naturaleza::class, 'idTipoNaturaleza', 'id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'idUser', 'id');
    }

    public function imagenes(){
        return $this->hasMany(Imagenes::class, 'idMuestra', 'id');
    }
}