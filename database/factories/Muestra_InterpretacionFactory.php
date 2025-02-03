<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Muestra_Interpretacion>
 */
class Muestra_InterpretacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion' =>fake()->Str::random(100),
            'idMuestra'=>fake()->numberBetween(1,10),
            'idInterpretacion'=>fake()->numberBetween(1,10),
        ];
    }
}
