<?php

use App\Http\Controllers\ImagenController;
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

Route::get('/muestras', function () {
    return Inertia::render('proyecto/Muestras');
})->middleware(['auth', 'verified'])->name('muestras');

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

<<<<<<< HEAD

Route::get('/sedes', [SedeController::class, 'getJson'])->name('sedes');
Route::get('/guardar', [SedeController::class, 'getJson'])->name('guardar');
Route::get('/eliminar', [SedeController::class, 'getJson'])->name('eliminar');


=======
>>>>>>> b1ae962be82de85272f9a968f3f3a08b22e862b1
Route::get('/test', function () {
    return Inertia::render('/Test');
})->middleware(['auth', 'verified'])->name('test');


require __DIR__.'/auth.php';
