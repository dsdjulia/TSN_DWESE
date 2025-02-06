<?php

namespace Database\Seeders;

use App\Models\Sede;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SedeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sedes = [
            ['nombre' => 'Albacete', 'codigo' => 'A'],
            ['nombre' => 'Alicante', 'codigo' => 'AL'],
            ['nombre' => 'Alicante II', 'codigo' => 'ALII'],
            ['nombre' => 'Almería', 'codigo' => 'I'],
            ['nombre' => 'Córdoba', 'codigo' => 'C'],
            ['nombre' => 'Leganés', 'codigo' => 'L'],
            ['nombre' => 'Granada', 'codigo' => 'G'],
            ['nombre' => 'Huelva', 'codigo' => 'H'],
            ['nombre' => 'Jerez', 'codigo' => 'J'],
            ['nombre' => 'Madrid', 'codigo' => 'M'],
            ['nombre' => 'Málaga', 'codigo' => 'MG'],
            ['nombre' => 'Murcia', 'codigo' => 'MU'],
            ['nombre' => 'Sevilla', 'codigo' => 'S'],
            ['nombre' => 'Valencia', 'codigo' => 'V'],
            ['nombre' => 'Zaragoza', 'codigo' => 'Z'],
        ];

        foreach ($sedes as $sede) {
            Sede::create($sede);
        }

        /*Sede::factory(10)->create();*/
    }
}
