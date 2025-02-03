<?php

namespace App\Http\Controllers;

use App\Models\Sede;
use Illuminate\Http\Request;

class SedeController extends Controller
{
    //
    public function mostrar(){
        $sedes = Sede::all();
        return view('welcome')->with(["sedes" => $sedes]);
    }
}
