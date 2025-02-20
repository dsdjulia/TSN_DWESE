<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Imagen;
use App\Models\Muestra;
use Illuminate\Http\Request;
use App\Models\Interpretacion;
use Database\Seeders\MuestraSeeder;
use App\Models\Muestra_Interpretacion;
use Illuminate\Support\Facades\Validator;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

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
            'sede:id,nombre',
            'calidad',
            'formato',
            'muestras_interpretaciones',
            'imagenes',
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

        //dd($request->all());
        $data = [
            // Request
            'codigo' => $request->input('codigoMuestra')[0], // Le pasaba un array con 1 solo valor
            'idTipoNaturaleza' => is_array($request->input('tipoNaturaleza')) // Controlamos si llega como array dependiendo su procedencia
                ? intval($request->input('tipoNaturaleza')[0]) 
                : intval($request->input('tipoNaturaleza')),

            'idFormato' => is_array($request->input('formato')) 
                ? intval($request->input('formato')[0]) 
                : intval($request->input('formato')),

            'idCalidad' => is_array($request->input('calidad')) 
                ? intval($request->input('calidad')[0]) 
                : intval($request->input('calidad')),

            'descripcionCalidad' => is_array($request->input('descripcionCalidad')) 
                ? ($request->input('descripcionCalidad')[0] ?? null) 
                : $request->input('descripcionCalidad'),

            'organo' => is_array($request->input('organo')) 
                ? ($request->input('organo')[0] ?? null) 
                : $request->input('organo'),

            'fecha' => is_array($request->input('fecha')) 
                ? ($request->input('fecha')[0] ?? null) 
                : $request->input('fecha'),

            
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
            $imgs = $request->input('imagenes');

            if (!empty($imgs)) {
                foreach ($imgs as $imagen) {
                    Imagen::create([
                        'idMuestra' => $muestra->id, 
                        'idPublica' => $imagen['public_id'],  
                        'ruta' => $imagen['secure_url'],  
                        'zoom' => "GG",
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }

            $muestras = Muestra::with([
                'tipoNaturaleza:id,nombre',
                'user:id,name',
                'formato:id,nombre',
                'sede:id,nombre'
            ])->get();
        
            $intepretaciones = $request->input('interpretacion');
            // dd($intepretaciones);

            foreach ($intepretaciones as $interpretacion) {
                $dataInterpretacion = [
                    'descripcion' => $interpretacion['descripcion'],
                    'idMuestra' => $muestra->id, // Le doy el id de la muestra creada
                    'idInterpretacion' => $interpretacion['id'],
                ];

                $muestraInterpretacion = Muestra_Interpretacion::create($dataInterpretacion);
                // dd($muestraInterpretacion);
            }

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
            'idTipoNaturaleza' => is_array($request->input('tipoNaturaleza')) // Controlamos si llega como array dependiendo su procedencia
                ? intval($request->input('tipoNaturaleza')[0]) 
                : intval($request->input('tipoNaturaleza')),

            'idFormato' => is_array($request->input('formato')) 
                ? intval($request->input('formato')[0]) 
                : intval($request->input('formato')),

            'idCalidad' => is_array($request->input('calidad')) 
                ? intval($request->input('calidad')[0]) 
                : intval($request->input('calidad')),

            'descripcionCalidad' => is_array($request->input('descripcionCalidad')) 
                ? ($request->input('descripcionCalidad')[0] ?? null) 
                : $request->input('descripcionCalidad'),

            'organo' => is_array($request->input('organo')) 
                ? ($request->input('organo')[0] ?? null) 
                : $request->input('organo'),

            'fecha' => is_array($request->input('fecha')) 
                ? ($request->input('fecha')[0] ?? null) 
                : $request->input('fecha'),

            
            // Local Storage
            'idUser' => intval($request->input('idUser')),
            'idSede' => intval($request->input('idSede')),
            'created_at' => date("Y-m-d"),
            'updated_at' => date("Y-m-d"),
        ];

        $validator = $this->validatorMuestras($data);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()]);
        }

        $muestra->update($data);

        $imgs = $request->input('imagenes');
        if ($imgs) {
            $imagenesAntiguas = Imagen::where('idMuestra', $muestra->id)->get();
            foreach ($imagenesAntiguas as $imagen) {
                Cloudinary::destroy(publicId: $imagen->public_id);
                $imagen->delete();
            }
                foreach ($imgs as $imagen) {
                Imagen::create([
                    'idMuestra' => $muestra->id, 
                    'idPublica' => $imagen['public_id'],  
                    'ruta' => $imagen['secure_url'],  
                    'zoom' => "GG",
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

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

        // Borrado de imagenes
        $imagenes = Imagen::where('idMuestra', $muestra->id)->get();

        if ($imagenes->isNotEmpty()) {
            foreach ($imagenes as $imagen) {
                Cloudinary::destroy($imagen->idPublica);
                $imagen->delete();
            }
        }

        // Borrar las interpretaciones asociadas a la muestra
        Muestra_Interpretacion::where('idMuestra', $muestra->id)->delete();

        $muestra->delete();

        $muestras = Muestra::with([
            'tipoNaturaleza:id,nombre',
            'user:id,name',
            'formato:id,nombre',
            'sede:id,nombre'
        ])->get();

        return response()->json([
            'message' => 'Muestra eliminada correctamente',
            'muestras' => $muestras
        ]);
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

            'imagenes' => '',
        ]);
        
        return $validator;
    }
}
