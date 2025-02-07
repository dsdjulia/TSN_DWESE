<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImagenController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\Api\AuthController;


//Test Inertia();

// GetJsons por id
Route::get('/sede/{id}', [SedeController::class, 'getSedeJson'])->name('sedeJson');
Route::get('/imagen/{id}', [ImagenController::class, 'getImagenJson'])->name('imagenJson');


// CRUD Muestras
Route::get('/muestras', [MuestraController::class, 'getAllJson2'])->name('MuestrasController.getAllJson');
Route::get('/muestra/{id}', [MuestraController::class, 'getMuestraJson'])->name('MuestrasController.getMuestraJson');
Route::post('/muestra', [MuestraController::class, 'insertMuestra'])->name('MuestrasController.insertarMuestra');
Route::delete('/muestra/{id}', [MuestraController::class, 'deleteMuestra'])->name('MuestrasController.deleteMuestra');
Route::patch('/muestra/{id}', [MuestraController::class, 'updateMuestra'])->name('MuestrasController.updateMuestra');

// CRUD Usuarios
Route::get('/users', [UserController::class, 'getAllJson'])->name('UserController.getAllJson');
Route::get('/user/{id}', [UserController::class, 'getUserJson'])->name('UserController.getUserJson');
Route::post('/user', [UserController::class, 'insertUser'])->name('UserController.insertUser');
Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('UserController.deleteUser');
Route::patch('/user/{id}', [UserController::class, 'updateUser'])->name('UserController.updateUser');