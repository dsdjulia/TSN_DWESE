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
        Muestra_Interpretacion::factory(100)->create();
    }
}
