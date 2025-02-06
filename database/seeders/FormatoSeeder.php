<?php

namespace Database\Seeders;

use App\Models\Formato;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formatos= [
            ['codigo' => 'Fr', 'nombre' => 'Fresco'],
            ['codigo' => 'Fo', 'nombre' => 'Formol'],
            ['codigo' => 'Et', 'nombre' => 'Etanol 70%']
        ];

        foreach($formatos as $formato){
            Formato::create([
                'codigo' => $formato['codigo'],
                'nombre' => $formato['nombre']
            ]);
        }
    }
}
