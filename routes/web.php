<?php

use App\Http\Controllers\TipoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/formato', function () {
    return view('formato');
});

Route::get('/muestras', [TipoController::class, 'mostrar']);
