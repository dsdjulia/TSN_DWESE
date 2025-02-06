import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { buscarEstudio } from "@/Components/ListaIC";
import { showErrorAlert, showSuccessAlert, showModificableAlert } from "../../Components/SweetAlerts";


export default function Insercion({ auth }) {

    const datos = {
        CV: {
            calidad: {
                1: 'Toma válida para examen.',
                2: 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.',
                3: 'Toma válida para examen aunque limitada por hemorragia.',
                4: 'Toma válida para examen aunque limitada por escasez de células.',
                5: 'Toma válida para examen aunque limitada por intensa citolisis.',
                6: 'Toma válida para examen aunque limitada por...',
                7: 'Toma no valorable por desecación.',
                8: 'Toma no valorable por ausencia de células...',
                9: 'Toma no valorable por...'
            },
            interpretacion: {
                1: 'Predominio de células epiteliales escamosas superficiales.',
                2: 'Predominio de células epiteliales escamosas intermedias.',
                3: 'Predominio de células epiteliales escamosas parabasales.',
                4: 'Polinucleares neutrófilos.',
                5: 'Hematíes.',
                6: 'Células endocervicales en exocervix.',
                7: 'Células metaplásicas en exocérvix.',
                8: 'Células metaplásicas inmaduras.',
                9: 'Células reactivas.',
                10: 'Células endometriales en mujer ≥ de 40 años.',
                11: 'Alteraciones celulares sugerentes con HPV.',
                12: 'Alteraciones celulares sugerentes de Herpes.',
                13: 'Células neoplásicas.',
                14: 'Células superficiales e intermedias con cambios atípicos.',
                15: 'Células intermedias y parabasales con algunos cambios atípicos.',
                16: 'Células parabasales con algunos cambios atípicos.',
                17: 'Células escamosas de significado incierto.',
                18: 'Células epiteliales glandulares de significado incierto.',
                19: 'Estructuras micóticas correspondientes a Candida albicans.',
                20: 'Estructuras micóticas correspondientes a Candida glabrata.',
                21: 'Estructuras bacterianas con disposición característica de actinomyces.',
                22: 'Estructuras bacterianas correspondiente de Gardnerella vaginalis.',
                23: 'Estructuras bacterianas de naturaleza cocácea.',
                24: 'Estructuras bacterianas sugerentes de Leptothrix.',
                25: 'Estructuras correspondientes a Trichomonas vaginalis.',
                26: 'Células histiocitarias multinucleadas.',
                27: 'Células epiteliales de tipo escamoso con intensos cambios atípicos.',
                28: 'Presencia de epitelio endometrial sin cambios atípicos.',
                29: 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares.'
            }
        },
        EX: {
            calidad: {
                1: 'Muestra válida para examen.',
                2: 'Muestra válida para examen aunque limitada por lipemia.',
                3: 'Muestra válida para examen aunque limitada por hemólisis.',
                4: 'Muestra válida para examen aunque limitada por aglutinación.',
                5: 'Muestra válida para examen aunque limitada por coagulación.',
                6: 'Muestra válida para examen aunque limitada por...',
                7: 'Muestra no valorable por desnaturalización de proteínas.',
                8: 'Muestra no valorable por contaminación bacteriana.',
                9: 'Muestra no valorable por...'
            },
            interpretacion: {
                1: 'Predominio de eritrocitos normocíticos normocrómicos.',
                2: 'Predominio de eritrocitos microcíticos hipocrómicos.',
                3: 'Presencia de esferocitos.',
                4: 'Presencia de dianocitos (células en forma de lágrima).',
                5: 'Leucocitos con predominio de neutrófilos.',
                6: 'Leucocitos con predominio de linfocitos.',
                7: 'Presencia de células blásticas.',
                8: 'Presencia de eosinófilos aumentados.',
                9: 'Presencia de basófilos aumentados.',
                10: 'Trombocitosis (aumento de plaquetas).',
                11: 'Trombocitopenia (disminución de plaquetas).',
                12: 'Anomalías en la morfología plaquetaria.',
                13: 'Presencia de células atípicas sugestivas de neoplasia.',
                14: 'Presencia de células inmaduras del linaje mieloide.',
                15: 'Presencia de células inmaduras del linaje linfático.',
                16: 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).',
                17: 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).',
                18: 'Presencia de cuerpos de Howell-Jolly.',
                19: 'Células con inclusiones de hierro (cuerpos de Pappenheimer).',
                20: 'Presencia de parásitos intraeritrocitarios.'
            }
        },
        O: {
            calidad: {
                1: 'Muestra válida para examen.',
                2: 'Muestra válida para examen aunque limitada por turbidez.',
                3: 'Muestra válida para examen aunque limitada por coloración anormal.',
                4: 'Muestra válida para examen aunque limitada por contaminación fecal.',
                5: 'Muestra válida para examen aunque limitada por preservación inadecuada.',
                6: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
                7: 'Muestra no valorable por deterioro.',
                8: 'Muestra no valorable por contaminación con agentes externos.',
                9: 'Muestra no valorable por...'
            },
            interpretacion: {
                1: 'pH normal.',
                2: 'pH elevado.',
                3: 'pH reducido.',
                4: 'Presencia de proteínas.',
                5: 'Negativo para proteínas.',
                6: 'Glucosa presente.',
                7: 'Negativo para la glucosa.',
                8: 'Cetonas detectadas.',
                9: 'Negativo para cetonas.',
                10: 'Hemoglobina presente.',
                11: 'Negativo para hemoglobina.',
                12: 'Bilirrubina detectada.',
                13: 'Negativo para bilirrubina.',
                14: 'Urobilinógeno normal.',
                15: 'Urobilinógeno elevado.',
                16: 'Presencia de nitritos.',
                17: 'Negativo para nitritos.',
                18: 'Presencia de leucocitos.',
                19: 'Ausencia de leucocitos.',
                20: 'Presencia de eritrocitos.',
                21: 'Ausencia de eritrocitos.',
                22: 'Células epiteliales.',
                23: 'Cilindros hialinos.',
                24: 'Cilindros granulosos.',
                25: 'Cristales (oxalato de calcio, ácido úrico, etc.).',
                26: 'Bacterias.',
                27: 'Levaduras.',
                28: 'Parásitos.'
            }
        },
        E: {
            calidad: {
                1: 'Muestra válida para examen.',
                2: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
                3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
                4: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
                5: 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales.',
                6: 'Muestra válida para examen aunque limitada por presencia de alimentos.',
                7: 'Muestra no valorable por descomposición.',
                8: 'Muestra no valorable por...',
                9: 'Muestra no valorable por...'
            },
            interpretacion: {
                1: 'Presencia de células epiteliales escamosas.',
                2: 'Presencia de células epiteliales columnares.',
                3: 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).',
                4: 'Presencia de células metaplásicas.',
                5: 'Presencia de células malignas.',
                6: 'Presencia de células atípicas sugestivas de neoplasia.',
                7: 'Presencia de microorganismos (bacterias, hongos, micobacterias).',
                8: 'Presencia de células sanguíneas (eritrocitos, plaquetas).',
                9: 'Presencia de material mucoso o mucopurulento.',
                10: 'Presencia de cristales (de colesterol, calcio, etc.).',
                11: 'Ausencia de células significativas para el análisis.'
            }
        },
        CB: {
            calidad: {
                1: 'Muestra válida para examen.',
                2: 'Muestra válida para examen aunque limitada por cantidad insuficiente de células.',
                3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
                4: 'Muestra válida para examen aunque limitada por contaminación con alimentos.',
                5: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
                6: 'Muestra válida para examen aunque limitada por...',
                7: 'Muestra no valorable por deshidratación.',
                8: 'Muestra no valorable por contaminación con microorganismos.',
                9: 'Muestra no valorable por...'
            },
            interpretacion: {
                1: 'Presencia de células epiteliales escamosas.',
                2: 'Presencia de células epiteliales cilíndricas.',
                3: 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).',
                4: 'Presencia de células glandulares.',
                5: 'Presencia de células metaplásicas.',
                6: 'Presencia de células atípicas sugestivas de neoplasia.',
                7: 'Presencia de microorganismos (bacterias, hongos, levaduras).',
                8: 'Presencia de células anormales con cambios citológicos.',
                9: 'Ausencia de células significativas para el análisis.'
            }
        }
    };
    



    // Ahora debo sacar esto del metodo

    const [biopsiaHidden, setBiopsiaHidden] = useState('hidden') // Aquí modifico la selección
    const [calidadHidden, setCalidadHidden] = useState('hidden') // Aquí modifico la selección

    const [calidadSeleccionada, setCalidadSeleccionada] = useState('') // Aquí modifico la selección
    const [interpretacionSeleccionada, setInterpretacionSeleccionada] = useState('') // Aquí modifico la selección

    const handleSelect = (seleccion) => {
        const clave = seleccion.target.value
        console.log(clave);

        if (clave == 'B'|| clave == 'BV'){
            setBiopsiaHidden('mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm')

        } else {
            setBiopsiaHidden('hidden')
            setCalidadSeleccionada(datos[clave].calidad)
            setInterpretacionSeleccionada(datos[clave].interpretacion)

        }

    }

    const handleCalidad = (seleccion) => {

        const textoCalidad = seleccion.target.options[seleccion.target.selectedIndex].text

        if (textoCalidad[textoCalidad.length - 2] === '.'){ // Compruebo que el penultimo sea un punto
            setCalidadHidden('mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm')

        } else {
            setCalidadHidden('hidden')
        }
    }


    const [form, setForm] = useState({
        codigoMuestra: "",
        fecha: "",
        tipoEstudio: "",
        organo: "",
        naturaleza: "",
        formato: "",
        calidad: "",
        descripcionCalidad: "",
        interpretacion: "",
        descripcion: "",
    });

    const handleData = (e) => {
        setForm({...form , [e.target.name]: e.target.value}) // uso ...form para no eliminar los demas datos al modificar
        console.log(form);
    }

    const handlePhoto = (seleccion) => {
        seleccion.target.parentElement.remove();
    }   

    const handleSubmit = () => {
        console.log(form);
        router.post('api/createMuestra', form)
        showSuccessAlert()

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
                <div className="p-6  mx-auto space-y-6 bg-white border rounded-md shadow-lg w-2/3 m-10 mb-2">
                    <div className="space-y-4">
                        <div>
                            <label
                                for="codigo_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Código de muestra
                            </label>
                            <input
                                type="text"
                                id="codigoMuestra"
                                name="codigoMuestra"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                placeholder="Introduce el código de muestra"
                                onChange={handleData}
                            ></input>
                        </div>
                        <div>
                            <label
                                for="fecha"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Fecha
                            </label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                onChange={handleData}
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/3">
                    <div className="space-y-4">
                        <div>
                            <label
                                for="naturaleza_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Tipo de estudio
                            </label>
                            <select onChange={(e) => { handleSelect(e); handleData(e); }} //! SEGUN LO QUE SELECCIONEMOS AQUI
                                id="tipoEstudio"
                                name="tipoEstudio"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione un tipo de estudio
                                </option>
                                <option value="B">Biopsias</option>
                                <option value="BV">Biopsias veterinarias</option>
                                <option value="CB">Cavidad bucal</option>
                                <option value="CV">Citología vaginal</option>
                                <option value="EX">Extensión sanguínea</option>
                                <option value="O">Orinas</option>
                                <option value="E">Esputos</option>

                            </select>
                        </div>
                        <div className={biopsiaHidden} id="organos_biopsiados">
                            <label
                                for="organo_biopsiado"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Órgano biopsiado
                            </label>
                            <select
                                id="organo"
                                name="organo"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                onChange={handleData}
                            >
                                <option value="">
                                    Seleccione un órgano biopsiado
                                </option>
                                <option value="BC">Corazón</option>
                                <option value="BB">Bazo</option>
                                <option value="BH">Hígado</option>
                                <option value="BF">Feto</option>
                                <option value="BES">Estómago</option>
                                <option value="BCB">Cerebro</option>
                                <option value="BR">Riñón</option>
                                <option value="BL">Lengua</option>
                                <option value="BU">Útero</option>
                                <option value="BO">Ovario</option>
                                <option value="BI">Intestino</option>
                                <option value="BTF">
                                    Trompa de Falopio
                                </option>
                                <option value="BEF">Esófago</option>
                                <option value="BPA">Páncreas</option>
                                <option value="BT">Testículo</option>
                                <option value="BPI">Piel</option>
                                <option value="BP">Pulmón</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="naturaleza_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Naturaleza de la muestra
                            </label>
                            <select //! SEGUN LO QUE SELECCIONEMOS AQUI
                                id="naturaleza"
                                name="naturaleza"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                onChange={handleData}
                            >
                                <option value="">
                                    Seleccione la naturaleza de la muestra
                                </option>

                                <option value="ES">Semen</option>
                                <option value="I">Improntas</option>
                                <option value="F">Frotis</option>
                            </select>
                        </div>

                        <div>
                            <label
                                for="formato"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Recibido en
                            </label>
                            <select
                                id="formato"
                                name="formato"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                onChange={handleData}
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


                        <div>
                            <label
                                for="calidad_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Calidad de la muestra
                            </label>
                            <select onChange={(e) => { handleCalidad(e); handleData(e); }}//! AQUI
                                id="calidad"
                                name="calidad"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione calidad de muestra
                                </option>

                                {Object.entries(calidadSeleccionada).map(
                                    ([key, contenido]) => (
                                        <option value={key}>
                                            {contenido}{" "}
                                            {/* si se selecciona alguna opcion de rellenar, debe aparecer un formulario de texto */}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div className={calidadHidden}>
                            <label
                                    for="detalles_calidad_muestra"
                                    className="block text-sm font-semibold text-gray-700"
                                    >
                                    Calidad de la muestra
                                </label>
                            <input type="text" className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm" name="descripcionCalidad" onChange={handleData}></input>
                        </div>

                        <div>
                            <label
                                for="interpretacion"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Interpretación
                            </label>
                            <select //! AQUI
                                id="interpretacion"
                                name="interpretacion"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm mb-6"
                                onChange={handleData}
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
                                            {contenido}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        <div>
                            <label
                                for="imagenes"
                                className="block text-sm font-semibold text-gray-700 mt-6"
                            >
                                Añadir imágenes
                            </label>
                            <input //! AQUI FALTA CONTROLAR LAS IMAGENES
                                type="file"
                                id="imagenes"
                                name="imagenes"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                multiple
                            />
                        </div>

                        <div className="mt-4 space-x-4 flex">
                            <div className="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra1.png"
                                    alt="Imagen 1"
                                    className="w-auto h-32 object-cover rounded-lg"
                                />
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer" onClick={handlePhoto}>
                                    X
                                </a>
                            </div>
                            <div className="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra2.png"
                                    alt="Imagen 2"
                                    className="w-auto h-32 object-cover rounded-lg"
                                />
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer" onClick={handlePhoto}>
                                    X
                                </a>
                            </div>
                            <div className="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra3.png"
                                    alt="Imagen 3"
                                    className="w-auto h-32 object-cover rounded-lg"
                                />
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer" onClick={handlePhoto}>
                                    X
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-start mt-4">
                            <Link
                                method="post"
                                href={route("MuestrasController.insertarMuestra")}
                                className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494]"
                                onClick={handleSubmit}
                            >
                                Guardar muestra
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
