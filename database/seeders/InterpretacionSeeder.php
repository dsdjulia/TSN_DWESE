<?php

namespace Database\Seeders;

use App\Models\Interpretacion;
use App\Models\Tipo_estudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterpretacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Obtener los tipos de estudio en un array asociativo (codigo => id)
        $tipos = Tipo_estudio::pluck('id', 'codigo');

        $mapaTipos = [
            '1' => 'C', // 1 → ESTUDIO CITOLÓGICO CÉRVICO-VAGINAL
            '2' => 'H', // 2 → ESTUDIO HEMATOLÓGICO COMPLETO
            '3' => 'U', // 3 → ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA
            '4' => 'E', // 4 → ESTUDIO CITOLÓGICO DE ESPUTO
            '5' => 'B'  // 5 → ESTUDIO CITOLÓGICO BUCCAL
        ];

        if ($tipos->isEmpty()) {
            $this->command->warn('No hay registros en la tabla tipo_estudios. Agrega algunos antes de ejecutar este seeder.');
            return;
        }

        $interpretaciones = [
            // Categoría 1 → C (ESTUDIO CITOLÓGICO CÉRVICO-VAGINAL)
            ['codigo' => '1.1.', 'texto' => 'Predominio de células epiteliales escamosas superficiales.'],
            ['codigo' => '1.2.', 'texto' => 'Predominio de células epiteliales escamosas intermedias.'],
            ['codigo' => '1.3.', 'texto' => 'Predominio de células epiteliales escamosas parabasales.'],
            ['codigo' => '1.4.', 'texto' => 'Polinucleares neutrófilos.'],
            ['codigo' => '1.5.', 'texto' => 'Hematíes.'],
            ['codigo' => '1.6.', 'texto' => 'Células endocervicales en exocervix.'],
            ['codigo' => '1.7.', 'texto' => 'Células metaplásicas en exocérvix.'],
            ['codigo' => '1.8.', 'texto' => 'Células metaplásicas inmaduras.'],
            ['codigo' => '1.9.', 'texto' => 'Células reactivas.'],
            ['codigo' => '1.10.', 'texto' => 'Células endometriales en mujer ≥ de 40 años.'],
            ['codigo' => '1.11.', 'texto' => 'Alteraciones celulares sugerentes con HPV.'],
            ['codigo' => '1.12.', 'texto' => 'Alteraciones celulares sugerentes de Herpes.'],
            ['codigo' => '1.13.', 'texto' => 'Células neoplásicas.'],
            ['codigo' => '1.14.', 'texto' => 'Células superficiales e intermedias con cambios atípicos.'],
            ['codigo' => '1.15.', 'texto' => 'Células intermedias y parabasales con algunos cambios atípicos.'],
            ['codigo' => '1.16.', 'texto' => 'Células parabasales con algunos cambios atípicos.'],
            ['codigo' => '1.17.', 'texto' => 'Células escamosas de significado incierto.'],
            ['codigo' => '1.18.', 'texto' => 'Células epiteliales glandulares de significado incierto.'],

            // Categoría 2 → H (ESTUDIO HEMATOLÓGICO COMPLETO)
            ['codigo' => '2.1.', 'texto' => 'Predominio de eritrocitos normocíticos normocrómicos.'],
            ['codigo' => '2.2.', 'texto' => 'Predominio de eritrocitos microcíticos hipocrómicos.'],
            ['codigo' => '2.3.', 'texto' => 'Presencia de esferocitos.'],
            ['codigo' => '2.4.', 'texto' => 'Presencia de dianocitos (células en forma de lágrima).'],
            ['codigo' => '2.5.', 'texto' => 'Leucocitos con predominio de neutrófilos.'],
            ['codigo' => '2.6.', 'texto' => 'Leucocitos con predominio de linfocitos.'],

            // Categoría 3 → U (ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA)
            ['codigo' => '3.1.', 'texto' => 'pH normal.'],
            ['codigo' => '3.2.', 'texto' => 'pH elevado.'],
            ['codigo' => '3.3.', 'texto' => 'pH reducido.'],
            ['codigo' => '3.4.', 'texto' => 'Presencia de proteínas.'],
            ['codigo' => '3.5.', 'texto' => 'Negativo para proteínas.'],
            ['codigo' => '3.6.', 'texto' => 'Glucosa presente.'],

            // Categoría 4 → E (ESTUDIO CITOLÓGICO DE ESPUTO)
            ['codigo' => '4.1.', 'texto' => 'Presencia de células epiteliales escamosas.'],
            ['codigo' => '4.2.', 'texto' => 'Presencia de células epiteliales columnares.'],
            ['codigo' => '4.3.', 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).'],
            ['codigo' => '4.4.', 'texto' => 'Presencia de células metaplásicas.'],

            // Categoría 5 → B (ESTUDIO CITOLÓGICO BUCCAL)
            ['codigo' => '5.1.', 'texto' => 'Presencia de células epiteliales escamosas.'],
            ['codigo' => '5.2.', 'texto' => 'Presencia de células epiteliales cilíndricas.'],
            ['codigo' => '5.3.', 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).'],
            ['codigo' => '5.4.', 'texto' => 'Presencia de células glandulares.'],
        ];

        foreach ($interpretaciones as $interpretacion) {
            $numeroTipo = substr($interpretacion['codigo'], 0, 1); // Extraer el primer número
            $codigoTipo = $mapaTipos[$numeroTipo] ?? null; // Convertirlo a 'C', 'H', etc.
            $idTipoEstudio = $tipos[$codigoTipo] ?? null; // Obtener el ID correcto


            Interpretacion::create([
                'codigo' => $interpretacion['codigo'],
                'texto' => $interpretacion['texto'],
                'idTipoEstudio' => $idTipoEstudio
            ]);
        }

        /*Interpretacion::factory(10)->create();*/
    }
}
