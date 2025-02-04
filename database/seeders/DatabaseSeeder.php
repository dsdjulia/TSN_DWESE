<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\MuestraSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $this->call([
            Tipo_estudioSeeder::class,
            Tipo_naturalezaSeeder::class,
            FormatoSeeder::class,
            SedeSeeder::class,
            CalidadSeeder::class,
            UserSeeder::class,
            MuestraSeeder::class,
            InterpretacionSeeder::class,
            Muestra_InterpretacionSeeder::class,
            ImagenSeeder::class,
        ]);
      
    }
}
