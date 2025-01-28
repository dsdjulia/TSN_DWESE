<?php

namespace App\Models;

use App\Models\Muestra;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Model
{
    use HasFactory;
    
    protected $table = "users"; 

    protected $fillable = [
        'email',
        'idSede',
    ];

    public function sede(){
        return $this->belongsTo(Sede::class, 'idSede', 'id');
    }

    public function muestras(){
        return $this->hasMany(Muestra::class, 'idUser', 'id');
    }

}
