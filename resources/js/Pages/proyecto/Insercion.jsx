import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";


export default function Insercion({ auth }) {


    const citologicoCervicoVaginal = {

        calidad: {
            c1: 'Toma válida para examen.',
            c2: 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.',
            c3: 'Toma válida para examen aunque limitada por hemorragia.',
            c4: 'Toma válida para examen aunque limitada por escasez de células.',
            c5: 'Toma válida para examen aunque limitada por intensa citolisis.',
            c6: 'Toma válida para examen aunque limitada por...',
            c7: 'Toma no valorable por desecación.',
            c8: 'Toma no valorable por ausencia de células...',
            c9: 'Toma no valorable por...'
        },
        interpretacion: {
            "1.1": 'Predominio de células epiteliales escamosas superficiales.',
            "1.2": 'Predominio de células epiteliales escamosas intermedias.',
            "1.3": 'Predominio de células epiteliales escamosas parabasales.',
            "1.4": 'Polinucleares neutrófilos.',
            "1.5": 'Hematíes.',
            "1.6": 'Células endocervicales en exocervix.',
            "1.7": 'Células metaplásicas en exocérvix.',
            "1.8": 'Células metaplásicas inmaduras.',
            "1.9": 'Células reactivas.',
            "1.10": 'Células endometriales en mujer ≥ de 40 años.',
            "1.11": 'Alteraciones celulares sugerentes con HPV.',
            "1.12": 'Alteraciones celulares sugerentes de Herpes.',
            "1.13": 'Células neoplásicas.',
            "1.14": 'Células superficiales e intermedias con cambios atípicos.',
            "1.15": 'Células intermedias y parabasales con algunos cambios atípicos.',
            "1.16": 'Células parabasales con algunos cambios atípicos.',
            "1.17": 'Células escamosas de significado incierto.',
            "1.18": 'Células epiteliales glandulares de significado incierto.',
            "1.19": 'Estructuras micóticas correspondientes a Candida albicans.',
            "1.20": 'Estructuras micóticas correspondientes a Candida glabrata.',
            "1.21": 'Estructuras bacterianas con disposición característica de actinomyces.',
            "1.22": 'Estructuras bacterianas correspondiente de Gardnerella vaginalis.',
            "1.23": 'Estructuras bacterianas de naturaleza cocácea.',
            "1.24": 'Estructuras bacterianas sugerentes de Leptothrix.',
            "1.25": 'Estructuras correspondientes a Trichomonas vaginalis.',
            "1.26": 'Células histiocitarias multinucleadas.',
            "1.27": 'Células epiteliales de tipo escamoso con intensos cambios atípicos.',
            "1.28": 'Presencia de epitelio endometrial sin cambios atípicos.',
            "1.29": 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares.'
        }
    };

    // Ahora debo sacar esto del metodo

    const [calidadSeleccionada, setCalidadSeleccionada] = useState(citologicoCervicoVaginal.calidad) // Aquí modifico la selección
    const [interpretacionSeleccionada, setInterpretacionSeleccionada] = useState(citologicoCervicoVaginal.interpretacion) // Aquí modifico la selección

    const handleSelect = (seleccion) => {
        console.log(seleccion.target.value);
    }

    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Nueva Muestra
                </h2> /* heredamos el header e introducimos este texto */
            }
        >
            <Head title="Insercion" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#e5eaf0] pb-10">
                <div class="p-6  mx-auto space-y-6 bg-white border rounded-md shadow-lg w-2/3 m-10 mb-2">
                    <div class="space-y-4">
                        <div>
                            <label
                                for="codigo_muestra"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Código de muestra
                            </label>
                            <input
                                type="text"
                                id="codigo_muestra"
                                name="codigo_muestra"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                placeholder="Introduce el código de muestra"
                            ></input>
                        </div>
                        <div>
                            <label
                                for="fecha"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Fecha
                            </label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/3">
                    <div class="space-y-4">
                        <div>
                            <label
                                for="naturaleza_muestra"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Naturaleza de la muestra
                            </label>
                            <select onChange={handleSelect} //! SEGUN LO QUE SELECCIONEMOS AQUI
                                id="naturaleza_muestra"
                                name="naturaleza_muestra"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione un tipo de muestra
                                </option>
                                <option value="biopsias">Biopsias</option>
                                <option value="biopsias_veterinarias">
                                    Biopsias veterinarias
                                </option>
                                <option value="cavidad_bucal">
                                    Cavidad bucal
                                </option>
                                <option value="citologia_vaginal">
                                    Citología vaginal
                                </option>
                                <option value="extension_sanguinea">
                                    Extensión sanguínea
                                </option>
                                <option value="orinas">Orinas</option>
                                <option value="esputos">Esputos</option>
                                <option value="semen">Semen</option>
                                <option value="improntas">Improntas</option>
                                <option value="frotis">Frotis</option>
                            </select>
                        </div>

                        <div>
                            <label
                                for="formato"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Recibido en
                            </label>
                            <select
                                id="formato"
                                name="formato"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione el formato de recepción de la
                                    muestra
                                </option>
                                <option value="biopsia">Fresco</option>
                                <option value="esputo">Formol</option>
                                <option value="bucal">Etanol 70%</option>
                            </select>
                        </div>

                        <div class="hidden" id="organos_biopsiados">
                            <label
                                for="organo_biopsiado"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Órgano biopsiado
                            </label>
                            <select
                                id="organo_biopsiado"
                                name="organo_biopsiado"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione un órgano biopsiado
                                </option>
                                <option value="corazon">Corazón</option>
                                <option value="bazo">Bazo</option>
                                <option value="higado">Hígado</option>
                                <option value="feto">Feto</option>
                                <option value="estomago">Estómago</option>
                                <option value="cerebro">Cerebro</option>
                                <option value="rinon">Riñón</option>
                                <option value="lengua">Lengua</option>
                                <option value="utero">Útero</option>
                                <option value="ovario">Ovario</option>
                                <option value="intestino">Intestino</option>
                                <option value="trompa_falopio">
                                    Trompa de Falopio
                                </option>
                                <option value="esofago">Esófago</option>
                                <option value="pancreas">Páncreas</option>
                                <option value="testiculo">Testículo</option>
                                <option value="piel">Piel</option>
                                <option value="pulmon">Pulmón</option>
                            </select>
                        </div>

                        <div>
                            <label
                                for="calidad_muestra"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Calidad de la muestra
                            </label>
                            <select //! AQUI
                                id="calidad_muestra"
                                name="calidad_muestra"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione calidad de muestra
                                </option>

                                {Object.entries(calidadSeleccionada).map(
                                    ([key, contenido]) => (
                                        <option value={key}>
                                            <strong>{contenido}</strong>{" "}
                                            {/* si se selecciona alguna opcion de rellenar, debe aparecer un formulario de texto */}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div>
                            <label
                                for="interpretacion"
                                class="block text-sm font-semibold text-gray-700"
                            >
                                Interpretación
                            </label>
                            <select //! AQUI
                                id="interpretacion"
                                name="interpretacion"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm mb-6"
                            >
                                <option value="">
                                    Seleccione interpretación
                                </option>
                                {Object.entries(interpretacionSeleccionada).map(
                                    (
                                        [
                                            key,
                                            contenido,
                                        ] /* esto funciona en react como for(let key in Json) en javascript  */
                                    ) => (
                                        <option value={key}>
                                            <strong>{contenido}</strong>
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        <div>
                            <label
                                for="imagenes"
                                class="block text-sm font-semibold text-gray-700 mt-6"
                            >
                                Añadir imágenes
                            </label>
                            <input
                                type="file"
                                id="imagenes"
                                name="imagenes"
                                class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                multiple
                            />

                        </div>

                        <div className="mt-4 space-x-4 flex">
                            <div class="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra1.png"
                                    alt="Imagen 1"
                                    class="w-auto h-32 object-cover rounded-lg"
                                />
                                <a class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                                    X
                                </a>
                            </div>
                            <div class="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra2.png"
                                    alt="Imagen 2"
                                    class="w-auto h-32 object-cover rounded-lg"
                                />
                                <a class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                                    X
                                </a>
                            </div>
                            <div class="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra3.png"
                                    alt="Imagen 3"
                                    class="w-auto h-32 object-cover rounded-lg"
                                />
                                <a class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                                    X
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-start mt-4">
                            <Link href="../guardar" className="px-4 py-2 bg-[#0057B8] text-white rounded-lg shadow-md hover:bg-[#004494]">
                                Guardar Muestra
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
