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
            ['codigo' => '1.19.', 'texto' => 'Estructuras micóticas correspondientes a Candida albicans.'],
            ['codigo' => '1.20.', 'texto' => 'Estructuras micóticas correspondientes a Candida glabrata.'],
            ['codigo' => '1.21.', 'texto' => 'Estructuras bacterianas con disposición característica de actinomyces.'],
            ['codigo' => '1.22.', 'texto' => 'Estructuras bacterianas correspondiente de Gardnerella vaginalis.'],
            ['codigo' => '1.23.', 'texto' => 'Estructuras bacterianas de naturaleza cocácea.'],
            ['codigo' => '1.24.', 'texto' => 'Estructuras bacterianas sugerentes de Leptothrix.'],
            ['codigo' => '1.25.', 'texto' => 'Estructuras correspondientes a Trichomonas vaginalis.'],
            ['codigo' => '1.26.', 'texto' => 'Células histiocitarias multinucleadas.'],
            ['codigo' => '1.27.', 'texto' => 'Células epiteliales de tipo escamoso con intensos cambios atípicos.'],
            ['codigo' => '1.28.', 'texto' => 'Presencia de epitelio endometrial sin cambios atípicos.'],
            ['codigo' => '1.29.', 'texto' => 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares.'],


            // Categoría 2 → H (ESTUDIO HEMATOLÓGICO COMPLETO)
            ['codigo' => '2.1.', 'texto' => 'Predominio de eritrocitos normocíticos normocrómicos.'],
            ['codigo' => '2.2.', 'texto' => 'Predominio de eritrocitos microcíticos hipocrómicos.'],
            ['codigo' => '2.3.', 'texto' => 'Presencia de esferocitos.'],
            ['codigo' => '2.4.', 'texto' => 'Presencia de dianocitos (células en forma de lágrima).'],
            ['codigo' => '2.5.', 'texto' => 'Leucocitos con predominio de neutrófilos.'],
            ['codigo' => '2.6.', 'texto' => 'Leucocitos con predominio de linfocitos.'],
            ['codigo' => '2.7.', 'texto' => 'Presencia de células blásticas.'],
            ['codigo' => '2.8.', 'texto' => 'Presencia de eosinófilos aumentados.'],
            ['codigo' => '2.9.', 'texto' => 'Presencia de basófilos aumentados.'],
            ['codigo' => '2.10.', 'texto' => 'Trombocitosis (aumento de plaquetas).'],
            ['codigo' => '2.11.', 'texto' => 'Trombocitopenia (disminución de plaquetas).'],
            ['codigo' => '2.12.', 'texto' => 'Anomalías en la morfología plaquetaria.'],
            ['codigo' => '2.13.', 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
            ['codigo' => '2.14.', 'texto' => 'Presencia de células inmaduras del linaje mieloide.'],
            ['codigo' => '2.15.', 'texto' => 'Presencia de células inmaduras del linaje linfático.'],
            ['codigo' => '2.16.', 'texto' => 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).'],
            ['codigo' => '2.17.', 'texto' => 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).'],
            ['codigo' => '2.18.', 'texto' => 'Presencia de cuerpos de Howell-Jolly.'],
            ['codigo' => '2.19.', 'texto' => 'Células con inclusiones de hierro (cuerpos de Pappenheimer).'],
            ['codigo' => '2.20.', 'texto' => 'Presencia de parásitos intraeritrocitarios.'],


            // Categoría 3 → U (ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA)
            ['codigo' => '3.1.', 'texto' => 'pH normal.'],
            ['codigo' => '3.2.', 'texto' => 'pH elevado.'],
            ['codigo' => '3.3.', 'texto' => 'pH reducido.'],
            ['codigo' => '3.4.', 'texto' => 'Presencia de proteínas.'],
            ['codigo' => '3.5.', 'texto' => 'Negativo para proteínas.'],
            ['codigo' => '3.6.', 'texto' => 'Glucosa presente.'],
            ['codigo' => '3.7.', 'texto' => 'Negativo para la glucosa.'],
            ['codigo' => '3.8.', 'texto' => 'Cetonas detectadas.'],
            ['codigo' => '3.9.', 'texto' => 'Negativo para cetonas.'],
            ['codigo' => '3.10.', 'texto' => 'Hemoglobina presente.'],
            ['codigo' => '3.11.', 'texto' => 'Negativo para hemoglobina.'],
            ['codigo' => '3.12.', 'texto' => 'Bilirrubina detectada.'],
            ['codigo' => '3.13.', 'texto' => 'Negativo para bilirrubina.'],
            ['codigo' => '3.14.', 'texto' => 'Urobilinógeno normal.'],
            ['codigo' => '3.15.', 'texto' => 'Urobilinógeno elevado.'],
            ['codigo' => '3.16.', 'texto' => 'Presencia de nitritos.'],
            ['codigo' => '3.17.', 'texto' => 'Negativo para nitritos.'],
            ['codigo' => '3.18.', 'texto' => 'Presencia de leucocitos.'],
            ['codigo' => '3.19.', 'texto' => 'Ausencia de leucocitos.'],
            ['codigo' => '3.20.', 'texto' => 'Presencia de eritrocitos.'],
            ['codigo' => '3.21.', 'texto' => 'Ausencia de eritrocitos.'],
            ['codigo' => '3.22.', 'texto' => 'Células epiteliales.'],
            ['codigo' => '3.23.', 'texto' => 'Cilindros hialinos.'],
            ['codigo' => '3.24.', 'texto' => 'Cilindros granulosos.'],
            ['codigo' => '3.25.', 'texto' => 'Cristales (oxalato de calcio, ácido úrico, etc.).'],
            ['codigo' => '3.26.', 'texto' => 'Bacterias.'],
            ['codigo' => '3.27.', 'texto' => 'Levaduras.'],
            ['codigo' => '3.28.', 'texto' => 'Parásitos.'],


            // Categoría 4 → E (ESTUDIO CITOLÓGICO DE ESPUTO)
            ['codigo' => '4.1.', 'texto' => 'Presencia de células epiteliales escamosas.'],
            ['codigo' => '4.2.', 'texto' => 'Presencia de células epiteliales columnares.'],
            ['codigo' => '4.3.', 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).'],
            ['codigo' => '4.4.', 'texto' => 'Presencia de células metaplásicas.'],
            ['codigo' => '4.5.', 'texto' => 'Presencia de células malignas.'],
            ['codigo' => '4.6.', 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
            ['codigo' => '4.7.', 'texto' => 'Presencia de microorganismos (bacterias, hongos, micobacterias).'],
            ['codigo' => '4.8.', 'texto' => 'Presencia de células sanguíneas (eritrocitos, plaquetas).'],
            ['codigo' => '4.9.', 'texto' => 'Presencia de material mucoso o mucopurulento.'],
            ['codigo' => '4.10.', 'texto' => 'Presencia de cristales (de colesterol, calcio, etc.).'],
            ['codigo' => '4.11.', 'texto' => 'Ausencia de células significativas para el análisis.'],


            // Categoría 5 → B (ESTUDIO CITOLÓGICO BUCCAL)
            ['codigo' => '5.1.', 'texto' => 'Presencia de células epiteliales escamosas.'],
            ['codigo' => '5.2.', 'texto' => 'Presencia de células epiteliales cilíndricas.'],
            ['codigo' => '5.3.', 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).'],
            ['codigo' => '5.4.', 'texto' => 'Presencia de células glandulares.'],
            ['codigo' => '5.5.', 'texto' => 'Presencia de células metaplásicas.'],
            ['codigo' => '5.6.', 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
            ['codigo' => '5.7.', 'texto' => 'Presencia de microorganismos (bacterias, hongos, levaduras).'],
            ['codigo' => '5.8.', 'texto' => 'Presencia de células anormales con cambios citológicos.'],
            ['codigo' => '5.9.', 'texto' => 'Ausencia de células significativas para el análisis.'],

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
