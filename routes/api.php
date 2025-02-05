<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImagenController;
use App\Http\Controllers\MuestraController;


//GetJson all();
Route::get('/muestrasJson', [MuestraController::class, 'getAllJson'])->name('muestraJson');

// GetJsons por id
Route::get('/muestra/{id}', [MuestraController::class, 'getMuestraJson'])->name('muestraJson');
Route::get('/sede/{id}', [SedeController::class, 'getSedeJson'])->name('sedeJson');
Route::get('/user/{id}', [UserController::class, 'getUserJson'])->name('userJson');
Route::get('/imagen/{id}', [ImagenController::class, 'getImagenJson'])->name('imagenJson');


// CRUD
Route::middleware('auth')->group(function () {
    Route::post('muestras', [MuestraController::class, 'insertMuestra'])->name('MuestrasController.insertarMuestra');
    Route::put('muestras/{id}', [MuestraController::class, 'updateMuestra'])->name('MuestrasController.updateMuestra');
    Route::delete('muestras/{id}', [MuestraController::class, 'deleteMuestra'])->name('MuestrasController.deleteMuestra');
});