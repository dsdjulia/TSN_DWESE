<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use Database\Seeders\MuestraSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MuestraController extends Controller
{

    public function getAllJson(){
        $muestras = Muestra::all();
        if (!$muestras) {
            return response()->json(["error" => "No hay muestras registradas"]);
        }
        return response()->json($muestras);
    }

    public function getMuestraJson($id){
        $muestra = Muestra::find($id);

        if (!$muestra) {
            return response()->json(["error" => "Muestra no encontrada"]);
        }
        return response()->json($muestra);
    }

    public function insertMuestra(Request $request){
        $data = [
            'codigo' => $request->input(key: 'codigoMuestra'),
            'fecha' => $request->input('fecha'),
            'idTipoEstudio' => $request->input('tipoEstudio'),
            'organo' => $request->input('organo'),
            'idTipoNaturaleza' => $request->input('naturaleza'),
            'idFormato' => $request->input('formato'),
            'idCalidad' => $request->input('calidad'),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'interpretacion' => $request->input('interpretacion'),
        ];

        // $validacion = $this->validatorMuestras($data);

        // if($validacion->fails()){
        //     return response()->json(["error" => $validacion -> errors()]);
        // }else{
        //     $muestra = Muestra::create($data);
        //     return response()->json(["message" => "Muestra creada con éxito", "muestra" => $muestra]);
        // }

        $muestra = Muestra::create($data);

    }

    public function updateMuestra(Request $request , $idMuestra){
        $muestra = Muestra::find($idMuestra);

        if (!$muestra) {
            return response()->json(["error" => "Muestra no encontrada"]);
        }

        $data = [
            'codigo' => $request->input('codigo'),
            'organo' => $request->input('organo'),
            'fecha' => $request->input('fecha'),
            'naturaleza' => $request->input('naturaleza'),
            'formato' => $request->input('formato'),
            'calidad' => $request->input('calidad'),
            'interpretacion' => $request->input('interpretacion'),
            'descripcion' => $request->input('descripcion'),
        ];

        $validator = $this->validatorMuestras($data);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()]);
        }

        $muestra->update($data);

        return response()->json(["message" => "Muestra actualizada con éxito", "muestra" => $muestra]);

    }

    public function deleteMuestra($idMuestra){
        $muestra = Muestra::find($idMuestra);

        if(!$muestra){
            return response()->json(["error" => "Muestra no encontrada"]);
        }

        $muestra->delete();
        return response()->json(["message" => "Muestra eliminada con éxito"]);
    }

    public function validatorMuestras($datos){
        $validator = Validator::make($datos, [
            'codigo' => 'required|string|min:1|max:8',
            'organo' => 'string',
            'descripcion' => 'required|string|min:1|max:50',
            'fecha' => 'required|date_format:Y-m-d',
            'naturaleza' => 'required|string|min:1|max:2',
            'formato' => 'required|string',
            'calidad' => 'required|string',
            'interpretacion' => 'required|string'
        ],
        [
            'codigo.required' => 'El código es obligatorio',
            'codigo.min' => 'El código debe tener al menos 1 carácter.',
            'codigo.max' => 'El código no puede tener más de 8 caracteres.',
            'codigo.string' => 'El código debe ser una cadena de texto',
            
            'organo.string' => 'El código debe ser una cadena de texto',

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

            'descripcion.required' => 'La descripción es obligatoria',
            'descripcion.between' => 'La descripción debe tener entre 1 y 50 carácteres',
            'descripcion.string' => 'La descripción debe ser una cadena de texto',
            
        ]);
        
        return $validator;
    }
}
