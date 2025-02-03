<?php

namespace App\Http\Controllers;

use App\Models\Calidad;
use Illuminate\Http\Request;

class CalidadController extends Controller
{
    //
    public function mostrar(){
        $calidades = Calidad::all();
        return view('welcome')->with(["calidades" => $calidades]);
    }
}
