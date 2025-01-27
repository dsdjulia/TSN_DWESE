<?php

namespace Database\Seeders;

use App\Models\Muestras;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MuestrasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Muestras::factory(100)->create();

    }
}
