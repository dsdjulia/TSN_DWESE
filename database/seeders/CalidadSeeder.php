<?php

namespace Database\Seeders;

use App\Models\Calidad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CalidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* Calidad::create([
            'id' => '1',
            'nombre' => 'Toma válida para examen.',
            'idTipoEstudio' => 'C'
        ]);

        Calidad::create([
            'id' => '2',
            'nombre' => 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.',
            'idTipoEstudio' => 'C'
        ]); */

        Calidad::factory(10)->create();
    }
}
