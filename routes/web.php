<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\TipoController;
use Illuminate\Container\Attributes\Auth;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\proyectoController;

/* Route::get('/',[proyectoController::class, 'index']) -> name('proyecto.index'); */

Route::get('/', function () {
    return Inertia::render('proyecto/Index');
})->middleware(['auth', 'verified'])->name('index');
Route::get('/index', function () {
    return Inertia::render('proyecto/Index');
})->middleware(['auth', 'verified'])->name('index');


Route::get('/nuevaMuestra', function () {
    return Inertia::render('proyecto/Insercion');
})->middleware(['auth', 'verified'])->name('nuevamuestra');

Route::get('/muestras', function () {
    return Inertia::render('proyecto/Muestras');
})->middleware(['auth', 'verified'])->name('muestras');

Route::get('/referencia', function () {
    return Inertia::render('proyecto/Referencia');
})->middleware(['auth', 'verified'])->name('nuevamuestra');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/muestras', function () {
    return Inertia::render('proyecto/Muestras');
});

Route::get('/referencia', function () {
    return Inertia::render('proyecto/Referencia');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/sedes', [SedeController::class, 'getJson'])->name('sedes');


Route::get('/test', function () {
    return Inertia::render('Test');
});

require __DIR__.'/auth.php';
