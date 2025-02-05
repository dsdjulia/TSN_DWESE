<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getAllJson(){
        $users = User::all();
        return response()->json($users);
    }

    public function getUserJson($id){
        $user = User::find($id);
        return response()->json($user);
    }

    public function insertUser(Request $request){
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'idSede' => $request->input('sede') ,
        ];

        $validacion = $this->validatorUser($data);

        if($validacion->fails()){
            return response()->json(["error" => $validacion -> errors() -> first()],400);
        }else{
            $user = User::create($data);
            return response()->json(["message" => "Muestra creada con éxito", "muestra" => $user], 201);
        }
    }

    public function updateUser(Request $request, $idUser){
        $user = User::find($idUser);

        if (!$user) {
            return response()->json(["error" => "Usuario no encontrado"], 404);
        }

        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'idSede' => $request->input('sede') ,
        ];

        $validator = $this->validatorUser($data);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()->first()], 400);
        }

        $user->update($data);

        return response()->json(["message" => "Usuario actualizado con éxito", "user" => $user], 200);
    }

    public function deleteUser($idUser){
        $user = User::find($idUser);

        if(!$user){
            return response()->json(["error" => "Usuario no encontrado"], 404);
        }

        $user->delete();
        return response()->json(['message' => 'Usuario eliminado con éxito'],200);

    }


    public function validatorUser($datos){
        $validator = Validator::make($datos ,[
            'name' => 'required|max:255|string',
            'email' => 'required|email|unique:user',
            'password' => 'required|min:4|string',
            'idSede' => 'required|min:1|string',
        ],
        [
            'name.required' => 'El nombre es obligatorio.',
            'name.max' => 'El nombre no puede tener más de 255 caracteres.',
            'name.string' => 'El nombre debe ser un texto válido.',
        
            'email.required' => 'El correo electrónico es obligatorio.',
            'email.email' => 'El correo electrónico debe tener un formato válido.',
            'email.unique' => 'Este correo electrónico ya está registrado.',
        
            'password.required' => 'La contraseña es obligatoria.',
            'password.min' => 'La contraseña debe tener al menos 4 caracteres.',
            'password.string' => 'La contraseña debe ser un texto válido.',
        
            'idSede.required' => 'El ID de la sede es obligatorio.',
            'idSede.min' => 'El ID de la sede debe tener al menos 1 carácter.',
            'idSede.string' => 'El ID de la sede debe ser un texto válido.',
        ]);

        return $validator;
    }
}
