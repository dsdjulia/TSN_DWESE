<?php

namespace Database\Factories;

use App\Models\Calidad;
use App\Models\Formato;
use App\Models\Sede;
use App\Models\Tipo_naturaleza;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MuestraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'codigo' => fake()->numberBetween(1,100),
            'descripcionCalidad' => fake()->text(),
            'fecha' => fake()->date(),
            'organo' => fake()->name(),
            'idTipoNaturaleza' => Tipo_naturaleza::all()->random()->id,
            'idUser' => User::all()->random()->id,
            'idFormato' => Formato::all()->random()->id,
            'idSede' => Sede::all()->random()->id,
            'idCalidad' => Calidad::all()->random()->id,
        ];
    }
}
