<?php

namespace Database\Seeders;

use App\Models\Tipo_naturaleza;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Tipo_naturalezaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* $tiposNaturaleza = [
            ['codigo' => 'B', 'nombre' => 'Biopsias'],
            ['codigo' => 'BV', 'nombre' => 'Biopsias veterinarias'],
            ['codigo' => 'CB', 'nombre' => 'Cavidad bucal'],
            ['codigo' => 'CV', 'nombre' => 'Citología vaginal'],
            ['codigo' => 'EX', 'nombre' => 'Extensión sanguínea'],
            ['codigo' => 'O', 'nombre' => 'Orinas'],
            ['codigo' => 'E', 'nombre' => 'Esputos'],
            ['codigo' => 'ES', 'nombre' => 'Semen'],
            ['codigo' => 'I', 'nombre' => 'Improntas'],
            ['codigo' => 'F', 'nombre' => 'Frotis'],
        ];

        foreach ($tiposNaturaleza as $tipo) {
            Tipo_naturaleza::create($tipo);
        } */

        Tipo_naturaleza::factory(10)->create();
    }
}
