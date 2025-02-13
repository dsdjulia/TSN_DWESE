<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Http\Request;

class ImprimirController extends Controller
{
    public function nose(){
        $pdf = PDF::loadHTML('<h1>Hola</h1>');


       // $pdf->loadView('pdf.pdf');

        return $pdf->stream();
    }
}
