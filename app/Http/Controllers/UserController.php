<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getAllJson(){
        $users = User::all();
        if (!$users) {
            return response()->json(["error" => "No hay usuarios registrados"]);
        }
        return response()->json($users);
    }

    public function getUserJson($id){
        $user = User::find($id);
        if (!$user) {
            return response()->json(["error" => "Usuario no encontrado"]);
        }
        return response()->json($user);
    }

    public function insertUser(Request $request){
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'idSede' => intval($request->input('idSede')),
            'password' => Hash::make($request->input('password')),
            'created_at' => date("Y-m-d"),
            'updated_at' => date("Y-m-d"),
        ];

        $validacion = $this->validatorUser($data);

        if($validacion->fails()){
            return response()->json(["error" => $validacion -> errors()]);
        }else{
            $user = User::create($data);
            return response()->json(["message" => "Usuario creado con éxito", "user" => $user]);
        }
    }

    public function updateUser(Request $request, $idUser){
        $user = User::find($idUser);

        if (!$user) {
            return response()->json(["error" => "Usuario no encontrado"]);
        }

        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'idSede' => intval($request->input('idSede')),
            'updated_at' => date("Y-m-d"),
        ];

        $validator = $this->validatorUser($data);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()]);
        }

        $user->update($data);

        return response()->json(["message" => "Usuario actualizado con éxito", "user" => $user]);
    }

    public function deleteUser($idUser){
        $user = User::find($idUser);

        if(!$user){
            return response()->json(["error" => "Usuario no encontrado"]);
        }

        $user->delete();
        return response()->json(['message' => 'Usuario eliminado con éxito']);

    }


    public function validatorUser($datos){
        $validator = Validator::make($datos ,[
            'name' => 'required|max:255|string',
            'email' => 'required|email|unique:'.User::class,
            'password' => 'required|min:4|string',
            'idSede' => 'required|integer|between:1,15',
        ]);

        return $validator;
    }
}
