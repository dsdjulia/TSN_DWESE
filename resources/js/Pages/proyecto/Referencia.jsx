import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";

export default function Muestras({ auth }) {

    const calidadesBucal = {
        B1: "Muestra válida para examen",
        B2: "Muestra válida para examen aunque limitada por cantidad insuficiente de células",
        B3: "Muestra válida para examen aunque limitada por presencia de sangre",
        B4: "Muestra válida para examen aunque limitada por contaminación con alimentos",
        B5: "Muestra válida para examen aunque limitada por contaminación con saliva",
        B6: "Muestra válida para examen aunque limitada por presencia de material extraño",
        B7: "Muestra no valorable por ...",
        B8: "Muestra no valorable por contaminación con microorganismos",
        B9: "Muestra no valorable por daño mecánico durante la toma",
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
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={'referencia'}
        >
            <Head title="Referencia" />

            <div className="flex flex-col items-center justify-center min-h-screen bg-[#e5eaf0]">
                <div className="p-8 bg-white rounded-md mt-10 text-center w-5/6">
                    <h1 className="text-lg font-semibold text-gray-700 mb-4">
                        Referencia Interpretaciones - Calidades
                    </h1>
                    <div class="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/3">
                        <div class="space-y-4">
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
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white rounded-md mt-2 text-center w-5/6 mb-10">
                    <table className="w-full border-collapse mt-10">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="text-start p-2 pl-10 w-1/6">
                                    Calidad
                                </th>
                                <th className="text-start p-2 pl-10 ">
                                    Descripción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(calidadesBucal).map(
                                ([key, contenido]) => (
                                    <tr>
                                        <td className="text-start p-2 pl-10 ">
                                            <strong>{key}</strong>
                                        </td>
                                        <td className="text-start p-2 pl-10 ">
                                            <strong>{contenido}</strong>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <table className="w-full border-collapse mt-10">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="text-start p-2 pl-10  w-1/6">
                                    Interpretación
                                </th>
                                <th className="text-start p-2 pl-10 ">
                                    Descripción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(interpretacionesBucal).map(
                                ([key, contenido]) => (
                                    <tr>
                                        <td className="text-start p-2 pl-10 ">
                                            <strong>{key}</strong>
                                        </td>
                                        <td className="text-start p-2 pl-10 ">
                                            <strong>{contenido}</strong>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
