<?php

namespace Database\Seeders;

use App\Models\Muestra;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MuestraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $muestras = [
            ['codigo' => 'EX2001', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 3, 'idFormato' => 2, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra bien conservada.', 'organo' => 'hígado', 'fecha' => '2025-01-01'],
            ['codigo' => 'EX2002', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 7, 'idFormato' => 3, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra parcialmente degradada.', 'organo' => 'pulmón', 'fecha' => '2025-01-02'],
            ['codigo' => 'EX2003', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 1, 'idFormato' => 1, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra con signos de contaminación.', 'organo' => 'riñón', 'fecha' => '2025-01-03'],
            ['codigo' => 'EX2004', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteración en la morfología.', 'organo' => 'estómago', 'fecha' => '2025-01-04'],
            ['codigo' => 'EX2005', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 5, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra en condiciones óptimas.', 'organo' => 'bazo', 'fecha' => '2025-01-05'],
            ['codigo' => 'EX2006', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 2, 'idFormato' => 3, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra con células en degeneración.', 'organo' => 'páncreas', 'fecha' => '2025-01-06'],
            ['codigo' => 'EX2007', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 3, 'idFormato' => 2, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra con presencia de artefactos.', 'organo' => 'médula ósea', 'fecha' => '2025-01-07'],
            ['codigo' => 'EX2008', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 10, 'idFormato' => 3, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra con contaminación bacteriana.', 'organo' => 'vesícula biliar', 'fecha' => '2025-01-08'],
            ['codigo' => 'EX2009', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteraciones estructurales.', 'organo' => 'tiroides', 'fecha' => '2025-01-09'],
            ['codigo' => 'EX2010', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 5, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra con contenido hemorrágico.', 'organo' => 'cerebro', 'fecha' => '2025-01-10'],
            ['codigo' => 'EX2011', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 2, 'idFormato' => 3, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra con signos de autolisis.', 'organo' => 'intestino delgado', 'fecha' => '2025-01-11'],
            ['codigo' => 'EX2012', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 3, 'idFormato' => 1, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra con alteración en tinción.', 'organo' => 'piel', 'fecha' => '2025-01-12'],
            ['codigo' => 'EX2013', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 1, 'idFormato' => 2, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra bien preservada.', 'organo' => 'músculo', 'fecha' => '2025-01-13'],
            ['codigo' => 'EX2014', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteración estructural leve.', 'organo' => 'timo', 'fecha' => '2025-01-14'],
            ['codigo' => 'EX2015', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 8, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra con signos de degradación.', 'organo' => 'glándula suprarrenal', 'fecha' => '2025-01-15'],
            ['codigo' => 'EX2016', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 3, 'idFormato' => 2, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra bien conservada.', 'organo' => 'hígado', 'fecha' => '2025-01-01'],
            ['codigo' => 'EX2017', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 2, 'idFormato' => 3, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra parcialmente degradada.', 'organo' => 'pulmón', 'fecha' => '2025-01-02'],
            ['codigo' => 'EX2018', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 9, 'idFormato' => 3, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra con signos de contaminación.', 'organo' => 'riñón', 'fecha' => '2025-01-03'],
            ['codigo' => 'EX2019', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteración en la morfología.', 'organo' => 'estómago', 'fecha' => '2025-01-04'],
            ['codigo' => 'EX2020', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 5, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra en condiciones óptimas.', 'organo' => 'bazo', 'fecha' => '2025-01-05'],
            ['codigo' => 'EX2021', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 2, 'idFormato' => 3, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra con células en degeneración.', 'organo' => 'páncreas', 'fecha' => '2025-01-06'],
            ['codigo' => 'EX2022', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 3, 'idFormato' => 1, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra con presencia de artefactos.', 'organo' => 'médula ósea', 'fecha' => '2025-01-07'],
            ['codigo' => 'EX2023', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 1, 'idFormato' => 2, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra con contaminación bacteriana.', 'organo' => 'vesícula biliar', 'fecha' => '2025-01-08'],
            ['codigo' => 'EX2024', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteraciones estructurales.', 'organo' => 'tiroides', 'fecha' => '2025-01-09'],
            ['codigo' => 'EX2025', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 5, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra con contenido hemorrágico.', 'organo' => 'cerebro', 'fecha' => '2025-01-10'],
            ['codigo' => 'EX2026', 'idUser' => 1, 'idSede' => 1, 'idTipoNaturaleza' => 6, 'idFormato' => 3, 'idCalidad' => 4, 'descripcionCalidad' => 'Muestra con signos de autolisis.', 'organo' => 'intestino delgado', 'fecha' => '2025-01-11'],
            ['codigo' => 'EX2027', 'idUser' => 2, 'idSede' => 2, 'idTipoNaturaleza' => 3, 'idFormato' => 3, 'idCalidad' => 1, 'descripcionCalidad' => 'Muestra con alteración en tinción.', 'organo' => 'piel', 'fecha' => '2025-01-12'],
            ['codigo' => 'EX2028', 'idUser' => 3, 'idSede' => 3, 'idTipoNaturaleza' => 1, 'idFormato' => 1, 'idCalidad' => 3, 'descripcionCalidad' => 'Muestra bien preservada.', 'organo' => 'músculo', 'fecha' => '2025-01-13'],
            ['codigo' => 'EX2029', 'idUser' => 4, 'idSede' => 4, 'idTipoNaturaleza' => 4, 'idFormato' => 2, 'idCalidad' => 2, 'descripcionCalidad' => 'Muestra con alteración estructural leve.', 'organo' => 'timo', 'fecha' => '2025-01-14'],
            ['codigo' => 'EX2030', 'idUser' => 5, 'idSede' => 5, 'idTipoNaturaleza' => 5, 'idFormato' => 1, 'idCalidad' => 5, 'descripcionCalidad' => 'Muestra con signos de degradación.', 'organo' => 'glándula suprarrenal', 'fecha' => '2025-01-15'],
        ];

        foreach ($muestras as $muestra) {
            Muestra::create($muestra);
        }
    }
}
