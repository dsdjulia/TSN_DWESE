<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\proyectoController;
use App\Http\Controllers\TipoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

<<<<<<< HEAD
Route::get('/muestras', [MuestraController::class, 'mostrar'])->name('muestras');
Route::get('/getJsonMuestras', [MuestraController::class, 'getJson'])->name('muestras');



Route::get('/sedes', [SedeController::class, 'getJson'])->name('sedes');

=======
>>>>>>> ce3ae84fb99402323a7ccc25974aff7428f6270a

Route::get('/test', function () {
    return Inertia::render('Test');
});

require __DIR__.'/auth.php';
