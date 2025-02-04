<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\TipoController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\proyectoController;

Route::get('/',[proyectoController::class, 'index']) -> name('proyecto.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/muestras',[proyectoController::class, 'muestras']) -> name('proyecto.muestras');
Route::get('/referencia',[proyectoController::class, 'referencia']) -> name('proyecto.referencia');
Route::get('/nuevaMuestra',[proyectoController::class, 'insercion']) -> name('proyecto.insercion');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/* Route::get('/muestras', [MuestraController::class, 'mostrar'])->name('muestras');
Route::get('/getJsonMuestras', [MuestraController::class, 'getJson'])->name('muestras'); */



Route::get('/sedes', [SedeController::class, 'getJson'])->name('sedes');


Route::get('/test', function () {
    return Inertia::render('Test');
});

require __DIR__.'/auth.php';
