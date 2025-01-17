<?php

use App\Http\Controllers\TipoController;
use Illuminate\Support\Facades\Route;


<<<<<<< HEAD
Route::get('/formato', function () {
    return view('formato');
});

Route::get('/muestras', [TipoController::class, 'mostrar']);
=======
Route::get('/muestras', [TipoController::class, 'mostrar']);

Route::get('/',function (){
    return view('index');
});
>>>>>>> c3240d0dd0a1708ba0db3b99e7ca7310646d05b4
