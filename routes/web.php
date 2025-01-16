<?php

use App\Http\Controllers\TipoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcoDme');
});

Route::get('/muestras', [TipoController::class, 'mostrar']);