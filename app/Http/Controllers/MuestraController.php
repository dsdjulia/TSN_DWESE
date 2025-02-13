<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Muestra;
use Illuminate\Http\Request;
use Database\Seeders\MuestraSeeder;
use Illuminate\Support\Facades\Validator;

class MuestraController extends Controller
{

    public function getAllJson2(){
        $muestras = Muestra::with([
            'tipoNaturaleza:id,nombre',
            'user:id,name',
            'formato:id,nombre',
            'sede:id,nombre'
        ])->get();

        if ($muestras->isEmpty()) {
            return response()->json(["error" => "No hay muestras registradas"]);
        }

        return response()->json($muestras);
    }
    
    public function getAllJson(){
        $muestras = Muestra::with([
            'tipoNaturaleza:id,nombre',
            'user:id,name',
            'formato:id,nombre',
            'sede:id,nombre'
        ])->get();

        if ($muestras->isEmpty()) {
            return response()->json(["error" => "No hay muestras registradas"]);
        }
        
        return Inertia::render('proyecto/Muestras', ["data" => $muestras]);
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
            'codigo' => $request->input('codigoMuestra')[0], // Le pasaba un array con 1 solo valor
            'idTipoNaturaleza' => intval($request->input('tipoNaturaleza')),
            'idFormato' => intval($request->input('formato')),
            'idCalidad' => intval($request->input('calidad')),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => $request->input('organo'),
            'fecha' => $request->input('fecha')[0], // Le pasaba un array con 1 solo valor
            
            // Local Storage
            'idUser' => intval($request->input('idUser')),
            'idSede' => intval($request->input('idSede')),
            'created_at' => date("Y-m-d"),
            'updated_at' => date("Y-m-d"),

        ];

        $validacion = $this->validatorMuestras($data);

        if($validacion->fails()){
            return response()->json(["error" => $validacion -> errors()]);
        }else{

            $muestra = Muestra::create($data);

            $muestras = Muestra::with([
                'tipoNaturaleza:id,nombre',
                'user:id,name',
                'formato:id,nombre',
                'sede:id,nombre'
            ])->get();

            return redirect()->route('muestras',$muestras);         
        }
    }

    public function updateMuestra(Request $request , $idMuestra){
        $muestra = Muestra::find($idMuestra);

        if (!$muestra) {
            return response()->json(["error" => "Muestra no encontrada"]);
        }

        $data = [
            // Request
            'codigo' => $request->input('codigoMuestra')[0], // Le pasaba un array con 1 solo valor
            'idTipoNaturaleza' => intval($request->input('tipoNaturaleza')),
            'idFormato' => intval($request->input('formato')),
            'idCalidad' => intval($request->input('calidad')),
            'descripcionCalidad' => $request->input('descripcionCalidad'),
            'organo' => $request->input('organo'),
            'fecha' => $request->input('fecha')[0], // Le pasaba un array con 1 solo valor
            
            // Local Storage
            'idUser' => intval($request->input('idUser')),
            'idSede' => intval($request->input('idSede')),
            'updated_at' => date("Y-m-d"),
        ];

        $validator = $this->validatorMuestras($data);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()]);
        }

        $muestra->update($data);

        $muestras = Muestra::with([
            'tipoNaturaleza:id,nombre',
            'user:id,name',
            'formato:id,nombre',
            'sede:id,nombre'
        ])->get();

        return redirect()->route('muestras',$muestras);  
    }

    public function deleteMuestra($idMuestra){
        $muestra = Muestra::find($idMuestra);

        if(!$muestra){
            return response()->json(["error" => "Muestra no encontrada"]);
        }

        $muestra->delete();

        $muestras = Muestra::with([
            'tipoNaturaleza:id,nombre',
            'user:id,name',
            'formato:id,nombre',
            'sede:id,nombre'
        ])->get();

        return response()->json("data",$muestras);
    }

    public function validatorMuestras($datos){
        $validator = Validator::make($datos, [
            'codigo' => 'required|string|min:1|max:8',
            'idTipoNaturaleza' => 'required|integer|between:1,10',
            'idFormato' => 'required|integer|between:1,3',
            'idCalidad' => 'required|integer|between:1,45',
            'descripcionCalidad' => 'nullable|string|max:50',
            'organo' => 'nullable|string',
            'fecha' => 'required|date_format:Y-m-d',

            'idUser' => 'required|integer',
            'idSede' => 'required|integer|between:1,15',
            'created_at' =>' nullable|date_format:Y-m-d',
            'updated_at' => 'nullable|date_format:Y-m-d',
        ]);
        
        return $validator;
    }
}
