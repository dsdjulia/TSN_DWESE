<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{

    public function getImagenJson($id){
        $imagen = Imagen::find($id);
        return response()->json($imagen);
    }
}
