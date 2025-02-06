<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImagenController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\Api\AuthController;


//GetJson all();

// GetJsons por id
Route::get('/sede/{id}', [SedeController::class, 'getSedeJson'])->name('sedeJson');
Route::get('/imagen/{id}', [ImagenController::class, 'getImagenJson'])->name('imagenJson');


// CRUD Muestras
Route::get('/allMuestras', [MuestraController::class, 'getAllJson'])->name('MuestrasController.getAllJson');
Route::get('/muestra/{id}', [MuestraController::class, 'getMuestraJson'])->name('MuestrasController.getMuestraJson');
Route::delete('/delete/{id}', [MuestraController::class, 'deleteMuestra'])->name('MuestrasController.deleteMuestra');
Route::post('/createMuestra', [MuestraController::class, 'insertMuestra'])->name('MuestrasController.insertarMuestra');
Route::patch('/updateMuestra/{id}', [MuestraController::class, 'updateMuestra'])->name('MuestrasController.updateMuestra');

// CRUD Usuarios
Route::get('/allUsers', [UserController::class, 'getAllJson'])->name('UserController.getAllJson');
Route::get('/user/{id}', [UserController::class, 'getUserJson'])->name('UserController.getUserJson');
Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('UserController.deleteUser');
Route::post('/createUser', [UserController::class, 'insertUser'])->name('UserController.insertUser');
Route::patch('/updateUser/{id}', [UserController::class, 'updateUser'])->name('UserController.updateUser');