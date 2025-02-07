import { Link } from "@inertiajs/react";
import React from "react";

export default function ModalModificar({id, onClose}) {
    const calidadesBucal = {
        B1: "Muestra válida para examen",
        B2: "Muestra válida para examen aunque limitada por cantidad insuficiente de células",
        B3: "Muestra válida para examen aunque limitada por presencia de sangre",
        B4: "Muestra válida para examen aunque limitada por contaminación con alimentos",
        B5: "Muestra válida para examen aunque limitada por contaminación con saliva",
        B6: "Muestra válida para examen aunque limitada por presencia de material extraño",
        B7: "Muestra no valorable por ...",
        B8: "Muestra no valorable por contaminación con microorganismos",
        B9: "Muestra no valorable por ...",
        B10: "Muestra no valorable por daño mecánico durante la toma",
    };

    const interpretacionesBucal = {
        5.1: "Presencia de células epiteliales escamosas",
        5.2: "Presencia de células epiteliales cilíndricas",
        5.3: "Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos)",
        5.4: "Presencia de células glandulares",
        5.5: "Presencia de células metaplásicas",
        5.6: "Presencia de células atípicas sugestivas de neoplasia",
        5.7: "Presencia de microorganismos (bacterias, hongos, levaduras)",
        5.8: "Presencia de células anormales con cambios citológicos",
        5.9: "Ausencia de células significativas para el análisis",
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/3 shadow-gray-500 relative">
        <button className="absolute w-10 h-10 top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 font-extrabold" onClick={onClose}>
                    ✕
                </button>
            <div class="space-y-4">

                <h2>Modificar Muestra</h2>
                <div>
                    <label
                        for="naturaleza_muestra"
                        class="block text-sm font-semibold text-gray-700"
                    >
                        Naturaleza de la muestra
                    </label>
                    <select
                        id="naturaleza_muestra"
                        name="naturaleza_muestra"
                        class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Seleccione un tipo de muestra</option>
                        <option value="biopsias">Biopsias</option>
                        <option value="biopsias_veterinarias">
                            Biopsias veterinarias
                        </option>
                        <option value="cavidad_bucal">Cavidad bucal</option>
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
                            Seleccione el formato de recepción de la muestra
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
                        <option value="">Seleccione un órgano biopsiado</option>
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
                    <select
                        id="calidad_muestra"
                        name="calidad_muestra"
                        class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Seleccione calidad de muestra</option>

                        {Object.entries(calidadesBucal).map(
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
                    <select
                        id="interpretacion"
                        name="interpretacion"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Seleccione interpretación</option>
                        {Object.entries(interpretacionesBucal).map(
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


                <hr className="my-4 border-gray-300 mb-10 mt-10" />

                <div>
                    <label
                        for="imagenes"
                        class="block text-sm font-semibold text-gray-700"
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
                        <a class="font-extrabold absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                        ✕
                        </a>
                    </div>
                    <div class="relative w-auto h-32 inline-block">
                        <img
                            src="../public/muestra2.png"
                            alt="Imagen 2"
                            class="w-auto h-32 object-cover rounded-lg"
                        />
                        <a class="font-extrabold absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                        ✕
                        </a>
                    </div>
                    <div class="relative w-auto h-32 inline-block">
                        <img
                            src="../public/muestra3.png"
                            alt="Imagen 3"
                            class="w-auto h-32 object-cover rounded-lg"
                        />
                        <a class="font-extrabold absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                        ✕
                        </a>
                    </div>
                </div>
                <div className="flex justify-start gap-8 mt-4">
                    { <Link className="px-4 py-2 bg-[#0057B8] text-white rounded-lg shadow-md hover:bg-[#004494]" href={route('guardar')+"/"+id}>
                        Guardar Muestra
                    </Link> }
                    <button class="text-red-700 hover:underline focus:outline-none " onClick={onClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
        </div>

    );
}
