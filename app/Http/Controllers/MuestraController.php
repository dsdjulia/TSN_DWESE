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
            // Request
            'codigo' => $request->input('codigo'),
            'tipoNaturaleza' => $request->input('tipoNaturaleza'),
            'idTipoNaturaleza' => $request->input('idTipoNaturaleza'), // hecho
            'idFormato' => $request->input('idFormato'),
            'idCalidad' => $request->input('idCalidad'),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => $request->input('organo'),
            'fecha' => $request->input('fecha'),
            
            // Local Storage
            'idUser' => $request->input('idUser'),
            'idSede' => $request->input('idSede'),
            'created_at' => date("Y-m-d"),
            'updated_at' => date("Y-m-d"),

        ];

        $validacion = $this->validatorMuestrasInsert($data);

        if($validacion->fails()){
            return response()->json(["error" => $validacion -> errors()]);
        }else{
            $muestra = Muestra::create($data);
            return response()->json(["message" => "Muestra creada con éxito", "muestra" => $muestra]);
        }

        $muestra = Muestra::create($data);

    }

    public function updateMuestra(Request $request , $idMuestra){
        $muestra = Muestra::find($idMuestra);

        if (!$muestra) {
            return response()->json(["error" => "Muestra no encontrada"]);
        }

        $data = [
            // Request
            'codigo' => $request->input('codigo'),
            'tipoNaturaleza' => $request->input('tipoNaturaleza'),
            'idTipoNaturaleza' => $request->input('idTipoNaturaleza'),
            'idFormato' => $request->input('idFormato'),
            'idCalidad' => $request->input('idCalidad'),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => $request->input('organo'),
            'fecha' => $request->input('fecha'),
            
            // Local Storage
            'idUser' => $request->input('idUser'),
            'idSede' => $request->input('idSede'),
            'updated_at' => date("Y-m-d"),
        ];

        $validator = $this->validatorMuestrasUpdate($data);

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

    public function validatorMuestrasInsert($datos){
        $validator = Validator::make($datos, [
            'codigo' => 'required|string|min:1|max:8',
            'idUser' => 'required|string',
            'idSede' => 'required|string',
            'tipoNaturaleza' => 'required|string',
            'idTipoNaturaleza' => 'required|string',
            'idFormato' => 'required|string',
            'idCalidad' => 'required|string',
            'descripcionCalidad' => 'required|string|max:50',
            'organo' => 'string',
            'fecha' => 'required|date_format:Y-m-d',
            'created_at' =>' date_format:Y-m-d',
            'updated_at' => 'date_format:Y-m-d',
        ],
        [
            'codigo.required' => 'El código es obligatorio.',
            'codigo.string' => 'El código debe ser una cadena de texto.',
            'codigo.min' => 'El código debe tener al menos 1 carácter.',
            'codigo.max' => 'El código no debe exceder los 8 caracteres.',
            
            'idUser.required' => 'El ID de usuario es obligatorio.',
            'idUser.string' => 'El ID de usuario debe ser una cadena de texto.',
            
            'idSede.required' => 'El ID de la sede es obligatorio.',
            'idSede.string' => 'El ID de la sede debe ser una cadena de texto.',
            
            'tipoNaturaleza.required' => 'El tipo de naturaleza es obligatorio.',
            'tipoNaturaleza.string' => 'El tipo de naturaleza debe ser una cadena de texto.',
            
            'idTipoNaturaleza.required' => 'El ID del tipo de naturaleza es obligatorio.',
            'idTipoNaturaleza.string' => 'El ID del tipo de naturaleza debe ser una cadena de texto.',
            
            'idFormato.required' => 'El ID del formato es obligatorio.',
            'idFormato.string' => 'El ID del formato debe ser una cadena de texto.',
            
            'idCalidad.required' => 'El ID de calidad es obligatorio.',
            'idCalidad.string' => 'El ID de calidad debe ser una cadena de texto.',
            
            'descripcionCalidad.required' => 'La descripción de calidad es obligatoria.',
            'descripcionCalidad.string' => 'La descripción de calidad debe ser una cadena de texto.',
            'descripcionCalidad.max' => 'La descripción de calidad no debe superar los 50 caracteres.',
            
            'organo.string' => 'El órgano debe ser una cadena de texto.',
            
            'fecha.required' => 'La fecha es obligatoria.',
            'fecha.date_format' => 'La fecha debe estar en el formato YYYY-MM-DD.',
            
            'created_at.date_format' => 'La fecha de creación debe estar en el formato YYYY-MM-DD.',
            'updated_at.date_format' => 'La fecha de actualización debe estar en el formato YYYY-MM-DD.',
        ]);
        
        return $validator;
    }

    public function validatorMuestrasUpdate($datos){
        $validator = Validator::make($datos, [
            'codigo' => 'string|min:1|max:8',
            'idUser' => 'string',
            'idSede' => 'string',
            'tipoNaturaleza' => 'string',
            'idTipoNaturaleza' => 'string',
            'idFormato' => 'string',
            'idCalidad' => 'string',
            'descripcionCalidad' => 'string|max:50',
            'organo' => 'string',
            'fecha' => 'date_format:Y-m-d',
            'created_at' =>' date_format:Y-m-d',
            'updated_at' => 'date_format:Y-m-d',
        ],
        [
            'codigo.string' => 'El código debe ser una cadena de texto.',
            'codigo.min' => 'El código debe tener al menos 1 carácter.',
            'codigo.max' => 'El código no debe exceder los 8 caracteres.',
            
            'idUser.string' => 'El ID de usuario debe ser una cadena de texto.',
            
            'idSede.string' => 'El ID de la sede debe ser una cadena de texto.',
            
            'tipoNaturaleza.string' => 'El tipo de naturaleza debe ser una cadena de texto.',
            
            'idTipoNaturaleza.string' => 'El ID del tipo de naturaleza debe ser una cadena de texto.',
            
            'idFormato.string' => 'El ID del formato debe ser una cadena de texto.',
            
            'idCalidad.string' => 'El ID de calidad debe ser una cadena de texto.',
            
            'descripcionCalidad.string' => 'La descripción de calidad debe ser una cadena de texto.',
            'descripcionCalidad.max' => 'La descripción de calidad no debe superar los 50 caracteres.',
            
            'organo.string' => 'El órgano debe ser una cadena de texto.',
            
            'fecha.date_format' => 'La fecha debe estar en el formato YYYY-MM-DD.',
            
            'created_at.date_format' => 'La fecha de creación debe estar en el formato YYYY-MM-DD.',
            'updated_at.date_format' => 'La fecha de actualización debe estar en el formato YYYY-MM-DD.',
            
        ]);
        
        return $validator;
    }
}
