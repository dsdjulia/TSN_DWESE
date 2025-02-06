import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { buscarEstudio } from "@/Components/ListaIC";
import { showErrorAlert, showSuccessAlert, showModificableAlert } from "../../Components/SweetAlerts";


export default function Insercion({ auth }) {

    const datos = {
        CV: {
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
        },
        EX: {
            calidad: {
                h1: 'Muestra válida para examen.',
                h2: 'Muestra válida para examen aunque limitada por lipemia.',
                h3: 'Muestra válida para examen aunque limitada por hemólisis.',
                h4: 'Muestra válida para examen aunque limitada por aglutinación.',
                h5: 'Muestra válida para examen aunque limitada por coagulación.',
                h6: 'Muestra válida para examen aunque limitada por...',
                h7: 'Muestra no valorable por desnaturalización de proteínas.',
                h8: 'Muestra no valorable por contaminación bacteriana.',
                h9: 'Muestra no valorable por...'
            },
            interpretacion: {
                "2.1": 'Predominio de eritrocitos normocíticos normocrómicos.',
                "2.2": 'Predominio de eritrocitos microcíticos hipocrómicos.',
                "2.3": 'Presencia de esferocitos.',
                "2.4": 'Presencia de dianocitos (células en forma de lágrima).',
                "2.5": 'Leucocitos con predominio de neutrófilos.',
                "2.6": 'Leucocitos con predominio de linfocitos.',
                "2.7": 'Presencia de células blásticas.',
                "2.8": 'Presencia de eosinófilos aumentados.',
                "2.9": 'Presencia de basófilos aumentados.',
                "2.10": 'Trombocitosis (aumento de plaquetas).',
                "2.11": 'Trombocitopenia (disminución de plaquetas).',
                "2.12": 'Anomalías en la morfología plaquetaria.',
                "2.13": 'Presencia de células atípicas sugestivas de neoplasia.',
                "2.14": 'Presencia de células inmaduras del linaje mieloide.',
                "2.15": 'Presencia de células inmaduras del linaje linfático.',
                "2.16": 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).',
                "2.17": 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).',
                "2.18": 'Presencia de cuerpos de Howell-Jolly.',
                "2.19": 'Células con inclusiones de hierro (cuerpos de Pappenheimer).',
                "2.20": 'Presencia de parásitos intraeritrocitarios.'
            }
        },
        O: {
            calidad: {
                u1: 'Muestra válida para examen.',
                u2: 'Muestra válida para examen aunque limitada por turbidez.',
                u3: 'Muestra válida para examen aunque limitada por coloración anormal.',
                u4: 'Muestra válida para examen aunque limitada por contaminación fecal.',
                u5: 'Muestra válida para examen aunque limitada por preservación inadecuada.',
                u6: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
                u7: 'Muestra no valorable por deterioro.',
                u8: 'Muestra no valorable por contaminación con agentes externos.',
                u9: 'Muestra no valorable por...'
            },
            interpretacion: {
                "3.1": 'pH normal.',
                "3.2": 'pH elevado.',
                "3.3": 'pH reducido.',
                "3.4": 'Presencia de proteínas.',
                "3.5": 'Negativo para proteínas.',
                "3.6": 'Glucosa presente.',
                "3.7": 'Negativo para la glucosa.',
                "3.8": 'Cetonas detectadas.',
                "3.9": 'Negativo para cetonas.',
                "3.10": 'Hemoglobina presente.',
                "3.11": 'Negativo para hemoglobina.',
                "3.12": 'Bilirrubina detectada.',
                "3.13": 'Negativo para bilirrubina.',
                "3.14": 'Urobilinógeno normal.',
                "3.15": 'Urobilinógeno elevado.',
                "3.16": 'Presencia de nitritos.',
                "3.17": 'Negativo para nitritos.',
                "3.18": 'Presencia de leucocitos.',
                "3.19": 'Ausencia de leucocitos.',
                "3.20": 'Presencia de eritrocitos.',
                "3.21": 'Ausencia de eritrocitos.',
                "3.22": 'Células epiteliales.',
                "3.23": 'Cilindros hialinos.',
                "3.24": 'Cilindros granulosos.',
                "3.25": 'Cristales (oxalato de calcio, ácido úrico, etc.).',
                "3.26": 'Bacterias.',
                "3.27": 'Levaduras.',
                "3.28": 'Parásitos.'
            }
        },
        E: {
            calidad: {
                e1: 'Muestra válida para examen.',
                e2: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
                e3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
                e4: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
                e5: 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales.',
                e6: 'Muestra válida para examen aunque limitada por presencia de alimentos.',
                e7: 'Muestra no valorable por descomposición.',
                e8: 'Muestra no valorable por...',
                e9: 'Muestra no valorable por...'
            },
            interpretacion: {
                "4.1": 'Presencia de células epiteliales escamosas.',
                "4.2": 'Presencia de células epiteliales columnares.',
                "4.3": 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).',
                "4.4": 'Presencia de células metaplásicas.',
                "4.5": 'Presencia de células malignas.',
                "4.6": 'Presencia de células atípicas sugestivas de neoplasia.',
                "4.7": 'Presencia de microorganismos (bacterias, hongos, micobacterias).',
                "4.8": 'Presencia de células sanguíneas (eritrocitos, plaquetas).',
                "4.9": 'Presencia de material mucoso o mucopurulento.',
                "4.10": 'Presencia de cristales (de colesterol, calcio, etc.).',
                "4.11": 'Ausencia de células significativas para el análisis.'
            }
        },
        CB: {
            calidad: {
                b1: 'Muestra válida para examen.',
                b2: 'Muestra válida para examen aunque limitada por cantidad insuficiente de células.',
                b3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
                b4: 'Muestra válida para examen aunque limitada por contaminación con alimentos.',
                b5: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
                b6: 'Muestra válida para examen aunque limitada por...',
                b7: 'Muestra no valorable por deshidratación.',
                b8: 'Muestra no valorable por contaminación con microorganismos.',
                b9: 'Muestra no valorable por...'
            },
            interpretacion: {
                "5.1": 'Presencia de células epiteliales escamosas.',
                "5.2": 'Presencia de células epiteliales cilíndricas.',
                "5.3": 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).',
                "5.4": 'Presencia de células glandulares.',
                "5.5": 'Presencia de células metaplásicas.',
                "5.6": 'Presencia de células atípicas sugestivas de neoplasia.',
                "5.7": 'Presencia de microorganismos (bacterias, hongos, levaduras).',
                "5.8": 'Presencia de células anormales con cambios citológicos.',
                "5.9": 'Ausencia de células significativas para el análisis.'
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

        if (clave === 'B'){
            setBiopsiaHidden('mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm')

        } else {
            setBiopsiaHidden('hidden')
            setCalidadSeleccionada(datos[clave].calidad)
            setInterpretacionSeleccionada(datos[clave].interpretacion)

        }

    }

    const handleCalidad = (seleccion) => {

        console.log(seleccion.target.value);
        const claveCalidad = seleccion.target.value
        claveCalidad.length

        if (claveCalidad === 'c6' || claveCalidad === 'c8' ||claveCalidad === 'c9'){ // Compruebo que el penultimo sea un punto
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
                                <option value="O">Orinas</option>
                                <option value="E">Esputos</option>
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
                            <select onChange={(e) => { handleSelect(e); handleData(e); }}//! AQUI
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
                                            <strong>{contenido}</strong>{" "}
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
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                                    X
                                </a>
                            </div>
                            <div className="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra2.png"
                                    alt="Imagen 2"
                                    className="w-auto h-32 object-cover rounded-lg"
                                />
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
                                    X
                                </a>
                            </div>
                            <div className="relative w-auto h-32 inline-block">
                                <img
                                    src="../public/muestra3.png"
                                    alt="Imagen 3"
                                    className="w-auto h-32 object-cover rounded-lg"
                                />
                                <a className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex flex-col align-middle justify-center cursor-pointer">
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
