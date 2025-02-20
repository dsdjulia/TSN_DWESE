<?php

namespace App\Http\Controllers;

use App\Models\Formato;
use App\Models\Imagen;
use App\Models\Interpretacion;
use App\Models\Muestra;
use App\Models\Muestra_Interpretacion;
use App\Models\Tipo_naturaleza;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Http\Request;

class ImprimirController extends Controller
{
    public function generarPDF($id){

        $muestra = Muestra::findOrFail($id);

        $formato = Formato::where("id", "=", $muestra->idFormato)->first();

        $naturaleza = Tipo_naturaleza::where("id", "=", $muestra->idTipoNaturaleza)->first();

        $interpretaciones = Muestra_Interpretacion::where("idMuestra", "=", $id)->get();
        $descripcion = $interpretaciones->pluck('descripcion');

        $imagen = Imagen::where("idMuestra", "=", $id)->get();


        $pdf = PDF::loadView('pdf.pdf', compact('muestra', 'formato', 'naturaleza', 'interpretaciones', 'imagen', 'descripcion'));

        return $pdf->stream("muestra_$id.pdf");
    }
}
