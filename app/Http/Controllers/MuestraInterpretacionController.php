<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Muestra_Interpretacion;

class MuestraInterpretacionController extends Controller
{

    public function getJson(){
        $interpretaciones = Muestra_Interpretacion::all();
        return response()->json($interpretaciones);
    }
}
