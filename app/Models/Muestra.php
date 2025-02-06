<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Muestra extends Model
{

    use HasFactory;
    protected $table = "muestras"; 

    protected $fillable = [
        'codigo',
        'fecha',
        'idTipoNaturaleza',
        'idUser',
        'idFormato',
        'idSede',
        'idCalidad',
    ];


    public function tipoNaturaleza(){
        return $this->belongsTo(Tipo_naturaleza::class, 'idTipoNaturaleza', 'id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'idUser', 'id');
    }

    public function formato(){
        return $this->belongsTo(Formato::class, 'idFormato', 'id');
    }

    public function sede(){
        return $this->belongsTo(Sede::class, 'idSede', 'id');
    }

    public function calidad(){
        return $this->belongsTo(Calidad::class, 'idCalidad', 'id');
    }



    public function imagenes(){
        return $this->hasMany(Imagen::class, 'idMuestra', 'id');
    }

    public function muestras_interpretaciones(){
        return $this->hasMany(Muestra_Interpretacion::class, 'idMuestra', 'id');
    }
}