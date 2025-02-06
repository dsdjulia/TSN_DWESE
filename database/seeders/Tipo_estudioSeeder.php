<?php

namespace Database\Seeders;

use App\Models\Tipo_estudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Tipo_estudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipos_estudio = [
            ['codigo' => 'C', 'nombre' => 'ESTUDIO CITOLÓGICO CÉRVICO-VAGINAL'],
            ['codigo' => 'H', 'nombre' => 'ESTUDIO HEMATOLÓGICO COMPLETO'],
            ['codigo' => 'U', 'nombre' => 'ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA'],
            ['codigo' => 'E', 'nombre' => 'ESTUDIO CITOLÓGICO DE ESPUTO'],
            ['codigo' => 'B', 'nombre' => 'ESTUDIO CITOLÓGICO BUCCAL'],
        ];

        foreach ($tipos_estudio as $tipo) {
            Tipo_estudio::create($tipo);
        }

    }
}
