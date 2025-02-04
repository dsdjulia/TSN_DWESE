<?php

namespace Database\Factories;

use App\Models\Interpretacion;
use App\Models\Muestra;
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
            'descripcion' =>fake()->text(),
            'idMuestra'=> Muestra::all()->random()->id,
            'idInterpretacion'=> Interpretacion::all()->random()->id,
        ];
    }
}
