<?php

namespace App\Http\Controllers;

use App\Models\Sede;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SedeController extends Controller
{
    public function getJson($id){
        $sede = Sede::find($id);
        return response()->json($sede);
    }
}
