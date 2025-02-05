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
        /* Tipo_estudio::create([
            'id' => 'C',
            'nombre' => 'ESTUDIO CITOLÓGICO CÉRVICO-VAGINAL'
        ]);

        Tipo_estudio::create([
            'id' => 'H',
            'nombre' => 'ESTUDIO HEMATOLÓGICO COMPLETO'
        ]);

        Tipo_estudio::create([
            'id' => 'U',
            'nombre' => 'ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA'
        ]);

        Tipo_estudio::create([
            'id' => 'E',
            'nombre' => 'ESTUDIO CITOLÓGICO DE ESPUTO'
        ]);

        Tipo_estudio::create([
            'id' => 'B',
            'nombre' => 'ESTUDIO CITOLÓGICO BUCCAL'
        ]); */

        Tipo_estudio::factory(10)->create();
    }
}
