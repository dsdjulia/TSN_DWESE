<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class proyectoController extends Controller
{
    //

    public function index(){
        return inertia("proyecto/Index",[

        ]);
    }

    public function muestras(){
        return inertia("proyecto/Muestras",[

        ]);
    }
    public function insercion(){
        return inertia("proyecto/Insercion",[

        ]);
    }
}
