<?php

namespace Database\Seeders;

use App\Models\Calidad;
use App\Models\Tipo_estudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CalidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Obtener los tipos de estudio en un array asociativo (codigo => id)
        $tipos = Tipo_estudio::pluck('id', 'codigo');

        if ($tipos->isEmpty()) {
            $this->command->warn('No hay registros en la tabla tipo_estudios. Agrega algunos antes de ejecutar este seeder.');
            return;
        }

        $calidades = [
            // Categoría C
            ['codigo' => 'C. 1.', 'nombre' => 'Toma válida para examen.'],
            ['codigo' => 'C. 2.', 'nombre' => 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.'],
            ['codigo' => 'C. 3.', 'nombre' => 'Toma válida para examen aunque limitada por hemorragia.'],
            ['codigo' => 'C. 4.', 'nombre' => 'Toma válida para examen aunque limitada por escasez de células.'],
            ['codigo' => 'C. 5.', 'nombre' => 'Toma válida para examen aunque limitada por intensa citolisis.'],
            ['codigo' => 'C. 6.', 'nombre' => 'Toma válida para examen aunque limitada por...'],
            ['codigo' => 'C. 7.', 'nombre' => 'Toma no valorable por desecación.'],
            ['codigo' => 'C. 8.', 'nombre' => 'Toma no valorable por ausencia de células...'],
            ['codigo' => 'C. 9.', 'nombre' => 'Toma no valorable por...'],

            // Categoría H
            ['codigo' => 'H. 1.', 'nombre' => 'Muestra válida para examen.'],
            ['codigo' => 'H. 2.', 'nombre' => 'Muestra válida para examen aunque limitada por lipemia.'],
            ['codigo' => 'H. 3.', 'nombre' => 'Muestra válida para examen aunque limitada por hemólisis.'],
            ['codigo' => 'H. 4.', 'nombre' => 'Muestra válida para examen aunque limitada por aglutinación.'],
            ['codigo' => 'H. 5.', 'nombre' => 'Muestra válida para examen aunque limitada por coagulación.'],
            ['codigo' => 'H. 6.', 'nombre' => 'Muestra válida para examen aunque limitada por...'],
            ['codigo' => 'H. 7.', 'nombre' => 'Muestra no valorable por desnaturalización de proteínas.'],
            ['codigo' => 'H. 8.', 'nombre' => 'Muestra no valorable por contaminación bacteriana.'],
            ['codigo' => 'H. 9.', 'nombre' => 'Muestra no valorable por...'],

            // Categoría U
            ['codigo' => 'U. 1.', 'nombre' => 'Muestra válida para examen.'],
            ['codigo' => 'U. 2.', 'nombre' => 'Muestra válida para examen aunque limitada por turbidez.'],
            ['codigo' => 'U. 3.', 'nombre' => 'Muestra válida para examen aunque limitada por coloración anormal.'],
            ['codigo' => 'U. 4.', 'nombre' => 'Muestra válida para examen aunque limitada por contaminación fecal.'],
            ['codigo' => 'U. 5.', 'nombre' => 'Muestra válida para examen aunque limitada por preservación inadecuada.'],
            ['codigo' => 'U. 6.', 'nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente.'],
            ['codigo' => 'U. 7.', 'nombre' => 'Muestra no valorable por deterioro.'],
            ['codigo' => 'U. 8.', 'nombre' => 'Muestra no valorable por contaminación con agentes externos.'],
            ['codigo' => 'U. 9.', 'nombre' => 'Muestra no valorable por...'],

            // Categoría E
            ['codigo' => 'E. 1.', 'nombre' => 'Muestra válida para examen.'],
            ['codigo' => 'E. 2.', 'nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente.'],
            ['codigo' => 'E. 3.', 'nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre.'],
            ['codigo' => 'E. 4.', 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva.'],
            ['codigo' => 'E. 5.', 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales.'],
            ['codigo' => 'E. 6.', 'nombre' => 'Muestra válida para examen aunque limitada por presencia de alimentos.'],
            ['codigo' => 'E. 7.', 'nombre' => 'Muestra no valorable por descomposición.'],
            ['codigo' => 'E. 8.', 'nombre' => 'Muestra no valorable por...'],
            ['codigo' => 'E. 9.', 'nombre' => 'Muestra no valorable por...'],

            // Categoría B
            ['codigo' => 'B. 1.', 'nombre' => 'Muestra válida para examen.'],
            ['codigo' => 'B. 2.', 'nombre' => 'Muestra válida para examen aunque limitada por cantidad insuficiente de células.'],
            ['codigo' => 'B. 3.', 'nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre.'],
            ['codigo' => 'B. 4.', 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con alimentos.'],
            ['codigo' => 'B. 5.', 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva.'],
            ['codigo' => 'B. 6.', 'nombre' => 'Muestra válida para examen aunque limitada por...'],
            ['codigo' => 'B. 7.', 'nombre' => 'Muestra no valorable por deshidratación.'],
            ['codigo' => 'B. 8.', 'nombre' => 'Muestra no valorable por contaminación con microorganismos.'],
            ['codigo' => 'B. 9.', 'nombre' => 'Muestra no valorable por...'],
        ];

        foreach ($calidades as $calidad) {
            $codigoTipoEstudio = substr($calidad['codigo'], 0, 1); // Extraer la primera letra del código de calidad para asignarle la idTipoEstudio correcta
            Calidad::create([
                'codigo' => $calidad['codigo'],
                'nombre' => $calidad['nombre'],
                'idTipoEstudio' => $tipos[$codigoTipoEstudio] ?? null, // Asignar el ID correcto
            ]);
        }

    }
}
