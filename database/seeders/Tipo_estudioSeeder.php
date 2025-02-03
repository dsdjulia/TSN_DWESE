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
        Tipo_estudio::factory(100)->create();
    }
}
