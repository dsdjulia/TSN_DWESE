<?php

namespace Database\Seeders;

use App\Models\Muestra_Interpretacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Muestra_InterpretacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Muestra_Interpretacion::create([
            'descripcion' => 'de la 1',
            'idMuestra' => 1,
            'idInterpretacion' => 1
        ]);

        Muestra_Interpretacion::create([
            'descripcion' => 'de la 2',
            'idMuestra' => 2,
            'idInterpretacion' => 2
        ]);

        Muestra_Interpretacion::create([
            'descripcion' => 'de la 3',
            'idMuestra' => 3,
            'idInterpretacion' => 3
        ]);

        Muestra_Interpretacion::create([
            'descripcion' => 'de la 3.2',
            'idMuestra' => 3,
            'idInterpretacion' => 3
        ]);


        Muestra_Interpretacion::create([
            'descripcion' => 'de la 5',
            'idMuestra' => 5,
            'idInterpretacion' => 5
        ]);
    }
}
