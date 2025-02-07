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
        Muestra::create([
            'codigo' => 'EX2004',
            'idUser' => 1,
            'idSede' => 1,
            'idTipoNaturaleza' => 1,
            'idFormato' => 1,
            'idCalidad' => 1,
            'descripcionCalidad' => 'No tengo ni idea de qué se pone aquí',
            'organo' => 'corazon',
            'fecha' => '2025-01-05'
        ]);
    }
}
