<?php

use App\Http\Controllers\TipoController;
use Illuminate\Support\Facades\Route;


Route::get('/muestras', [TipoController::class, 'mostrar']);

Route::get('/',function (){
    return view('index');
});