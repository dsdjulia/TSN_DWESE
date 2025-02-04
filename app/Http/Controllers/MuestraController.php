<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
            'codigoMuestra' => $request->input('codigo_muestra'),
            'fecha' => $request->input('fecha'),
            'naturaleza' => $request->input('naturaleza_muestra'),
            'formato' => $request->input('formato'),
            'calidad' => $request->input('calidad_muestra'),
            'interpretacion' => $request->input('interpretacion')
        ];

        
    }

    function validatorMuestras($datos){
        $validator = Validator::make($datos,[
            'codigoMuestra' => 'required|between:1,8|string',
            'fecha' => 'required|date|date_format:d-m-Y',
            'naturaleza' => 'required|between:1,2|string',
            'formato' => 'required|string',
            'calidad' => 'required|string',
            'interpretacion' =>'required|string'
        ],
        [
            'codigoMuestra.required' => 'El código es obligatorio',
            'codigoMuestra.between' => 'El código debe tener entre 1 y 8 carácteres',
            'codigoMuestra.string' => 'El código debe ser una cadena de texto',

            'fecha.required' => 'La fecha es obligatoria',
            'fecha.date' => 'La fecha debe ser una fecha',
            'fecha.date_format' => 'La fecha debe estar en formato dd-mm-yyyy',
            
            'naturaleza.required' => 'La naturaleza es obligatoria',
            'naturaleza.between' => 'La naturaleza debe tener entre 1 y 2 carácteres',
            'naturaleza.string' => 'La naturaleza debe ser una cadena de texto',
            
            'formato.required' => 'El formato es obligatorio',
            'formato.string' => 'El formato debe ser una cadena de texto',
            
            'calidad.required' => 'La calidad es obligatoria',
            'calidad.string' => 'La calidad debe ser una cadena de texto',
            
            'interpretacion.required' => 'La interpretación es obligatoria',
            'interpretacion.string' => 'La interpretación debe ser una cadena de texto',
            
        ]);

        return $validator;
    }


    function updateMuestra(){

    }

    function deleteMuestra(){

    }
}
