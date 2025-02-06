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
Route::get('/user/{id}', [UserController::class, 'getUserJson'])->name('userJson');
Route::get('/imagen/{id}', [ImagenController::class, 'getImagenJson'])->name('imagenJson');

Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('UserController.deleteUser');
Route::post('/user', [UserController::class, 'insertUser'])->name('UserController.insertUser');

// CRUD Muestras
Route::get('/getAll', [MuestraController::class, 'getAllJson'])->name('muestraJson');
Route::get('/muestra/{id}', [MuestraController::class, 'getMuestraJson'])->name('muestraJson');
Route::delete('/delete/{id}', [MuestraController::class, 'deleteMuestra'])->name('MuestrasController.deleteMuestra');
Route::post('/create', [MuestraController::class, 'insertMuestra'])->name('MuestrasController.insertarMuestra');
Route::put('/update/{id}', [MuestraController::class, 'updateMuestra'])->name('MuestrasController.updateMuestra');

