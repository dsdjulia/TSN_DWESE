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
            'idTipoNaturaleza' => intval($request->input('idTipoNaturaleza')),
            'idFormato' => intval($request->input('idFormato')),
            'idCalidad' => intval($request->input('idCalidad')),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => intval($request->input('organo')),
            'fecha' => $request->input('fecha'),
            
            // Local Storage
            'idUser' => intval($request->input('idUser')),
            'idSede' => intval($request->input('idSede')),
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
            'idTipoNaturaleza' => intval($request->input('idTipoNaturaleza')),
            'idFormato' => intval($request->input('idFormato')),
            'idCalidad' => intval($request->input('idCalidad')),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => intval($request->input('organo')),
            'fecha' => $request->input('fecha'),
            
            // Local Storage
            'idUser' => intval($request->input('idUser')),
            'idSede' => intval($request->input('idSede')),
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
            'idTipoNaturaleza' => 'required|integer',
            'idFormato' => 'required|integer',
            'idCalidad' => 'required|integer',
            'descripcionCalidad' => 'required|string|max:50',
            'organo' => 'nullable|integer',
            'fecha' => 'required|date_format:Y-m-d',

            'idUser' => 'required|integer',
            'idSede' => 'required|integer',
            'created_at' =>' date_format:Y-m-d',
            'updated_at' => 'date_format:Y-m-d',
        ]);
        
        return $validator;
    }

    public function validatorMuestrasUpdate($datos){
        $validator = Validator::make($datos, [
            'codigo' => 'required|string|min:1|max:8',
            'idTipoNaturaleza' => 'required|string',
            'idFormato' => 'required|string',
            'idCalidad' => 'required|string',
            'descripcionCalidad' => 'required|string|max:50',
            'organo' => 'string',
            'fecha' => 'required|date_format:Y-m-d',

            'idUser' => 'required|string',
            'idSede' => 'required|string',
            'updated_at' => 'date_format:Y-m-d',
        ]);
        
        return $validator;
    }
}
