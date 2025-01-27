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
        Tipo_naturaleza::factory()->create([
            'codigo' => 'B',
            'nombre' => 'Biopsia',
        ]);

        Tipo_naturaleza::factory(100)->create();
    }
}
