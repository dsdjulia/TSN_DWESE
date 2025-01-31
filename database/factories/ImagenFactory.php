<?php

namespace Database\Factories;

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
            'ruta' =>fake()->Str::random(20),
            'zoom' =>fake()->regexify('[x]{2, 4, 6}'),
            'idMuestra' =>fake()->numberBetween(1,10),
        ];
    }
}
