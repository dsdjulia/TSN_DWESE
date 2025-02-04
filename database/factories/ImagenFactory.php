<?php

namespace Database\Factories;

use App\Models\Muestra;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Imagen>
 */
class ImagenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ruta' =>fake()->text(),
            'zoom' =>fake()->regexify('[x]{2, 4, 6}'),
            'idMuestra' => Muestra::all()->random()->id,
        ];
    }
}
