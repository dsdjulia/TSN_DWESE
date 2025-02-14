<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Http\Request;

class ImprimirController extends Controller
{
    public function generarPDF($id){


        $pdf = PDF::loadView('pdf.pdf');

        return $pdf->stream();
    }
}

/* return $pdf->with($id[])->stream(); */