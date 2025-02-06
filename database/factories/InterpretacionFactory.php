<?php

namespace Database\Factories;

use App\Models\Tipo_estudio;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Interpretacion>
 */
class InterpretacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'codigo' => fake()->name(),
            'texto' => fake()->text(),
            'idTipoEstudio'=> Tipo_estudio::all()->random()->id,
        ];
    }
}
