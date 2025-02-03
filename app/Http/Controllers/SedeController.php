<?php

namespace App\Http\Controllers;

use App\Models\Sede;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SedeController extends Controller
{
    public function getJson(){
        $sedesJson =  response()->json(Sede::all());
        return Inertia::render('Welcome',['sedes' => $sedesJson]);
    }
}
