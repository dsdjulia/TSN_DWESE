<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use Illuminate\Http\Request;

class MuestraController extends Controller
{
    //
    function mostrar(){
        $muestras = Muestra::all();
        return view('welcome')->with(["muestras" => $muestras]);
    }
    
    function getJson(){
        $JsonMuestras = Muestra::all();
        return response()->json($JsonMuestras);
    }

    function createMuestra(Request $request){
        $data = [
            'fecha' => $request->input('fecha'),
            'idTipoNaturaleza'  => $request->input('naturaleza'),
            'idUser'  => $request->input('idUser'),
            'idFormato'  => $request->input('idFormato'),
            'idSede' => $request->input('idSede'),
            'idCalidad' => $request->input('idCalidad'),
        ];
    }

    function updateMuestra(){

    }

    function deleteMuestra(){

    }
}
