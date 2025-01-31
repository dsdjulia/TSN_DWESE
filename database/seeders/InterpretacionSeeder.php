<?php

namespace Database\Seeders;

use App\Models\Interpretacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterpretacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Interpretacion::factory(100)->create();
    }
}
