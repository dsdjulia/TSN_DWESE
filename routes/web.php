<?php

use App\Http\Controllers\ImagenController;
use App\Http\Controllers\ImprimirController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\TipoController;
use Illuminate\Container\Attributes\Auth;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\proyectoController;
use App\Http\Controllers\UserController;

/* Route::get('/',[proyectoController::class, 'index']) -> name('proyecto.index'); */

Route::get('/', function () {
    return Inertia::render('proyecto/Index');
})->middleware(['auth', 'verified'])->name('index');
Route::get('/index', function () {
    return Inertia::render('proyecto/Index');
})->middleware(['auth', 'verified'])->name('index');

Route::get('/nuevaMuestra', function () {
    return Inertia::render('proyecto/Insercion');
})->middleware(['auth', 'verified'])->name('nuevaMuestra');

Route::get('/referencia', function () {
    return Inertia::render('proyecto/Referencia');
})->middleware(['auth', 'verified'])->name('referencia');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test', function () {
    return Inertia::render('Test');
})->middleware(['auth', 'verified'])->name('test');

// CRUD redireccion Vistas
Route::get('/muestras', [MuestraController::class, 'getAllJson'])->middleware(['auth', 'verified'])->name('muestras');
Route::post('/muestra', [MuestraController::class, 'insertMuestra'])->middleware(['auth', 'verified'])->name('MuestrasController.insertarMuestra');
Route::put('/muestra/{id}', [MuestraController::class, 'updateMuestra'])->middleware(['auth', 'verified'])->name('MuestrasController.updateMuestra');

Route::delete('/muestra/{id}', [MuestraController::class, 'deleteMuestra'])->middleware(['auth', 'verified'])->name('MuestrasController.deleteMuestra');


// Cloudinary
Route::post('/subir-imagen', [ImagenController::class, 'subirImagen']);

//Imprimir
Route::get('/imprimir/{id}/pdf', [ImprimirController::class, 'generarPDF'])->name('imprimir');


require __DIR__.'/auth.php';

