import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { buscarEstudio } from "@/Components/ListaIC";
import { showErrorAlert, showSuccessAlert, showModificableAlert } from "../../Components/SweetAlerts";
import Interpretacion from "@/Components/Interpretacion";
import Footer from "@/Components/Footer";


export default function Insercion({ auth }) {


    const datos = {
        1: {
            calidad: {
                1: "Toma válida para examen.",
                2: "Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.",
                3: "Toma válida para examen aunque limitada por hemorragia.",
                4: "Toma válida para examen aunque limitada por escasez de células.",
                5: "Toma válida para examen aunque limitada por intensa citolisis.",
                6: "Toma válida para examen aunque limitada por...",
                7: "Toma no valorable por desecación.",
                8: "Toma no valorable por ausencia de células...",
                9: "Toma no valorable por...",
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
        2: {
            calidad: {
                10: "Muestra válida para examen.",
                11: "Muestra válida para examen aunque limitada por lipemia.",
                12: "Muestra válida para examen aunque limitada por hemólisis.",
                13: "Muestra válida para examen aunque limitada por aglutinación.",
                14: "Muestra válida para examen aunque limitada por coagulación.",
                15: "Muestra válida para examen aunque limitada por...",
                16: "Muestra no valorable por desnaturalización de proteínas.",
                17: "Muestra no valorable por contaminación bacteriana.",
                18: "Muestra no valorable por...",
            },
            interpretacion: {
                30: 'Predominio de eritrocitos normocíticos normocrómicos.',
                31: 'Predominio de eritrocitos microcíticos hipocrómicos.',
                32: 'Presencia de esferocitos.',
                33: 'Presencia de dianocitos (células en forma de lágrima).',
                34: 'Leucocitos con predominio de neutrófilos.',
                35: 'Leucocitos con predominio de linfocitos.',
                36: 'Presencia de células blásticas.',
                37: 'Presencia de eosinófilos aumentados.',
                38: 'Presencia de basófilos aumentados.',
                39: 'Trombocitosis (aumento de plaquetas).',
                40: 'Trombocitopenia (disminución de plaquetas).',
                41: 'Anomalías en la morfología plaquetaria.',
                42: 'Presencia de células atípicas sugestivas de neoplasia.',
                43: 'Presencia de células inmaduras del linaje mieloide.',
                44: 'Presencia de células inmaduras del linaje linfático.',
                45: 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).',
                46: 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).',
                47: 'Presencia de cuerpos de Howell-Jolly.',
                48: 'Células con inclusiones de hierro (cuerpos de Pappenheimer).',
                49: 'Presencia de parásitos intraeritrocitarios.'
            }
        },
        3: {
            calidad: {
                19: "Muestra válida para examen.",
                20: "Muestra válida para examen aunque limitada por turbidez.",
                21: "Muestra válida para examen aunque limitada por coloración anormal.",
                22: "Muestra válida para examen aunque limitada por contaminación fecal.",
                23: "Muestra válida para examen aunque limitada por preservación inadecuada.",
                24: "Muestra válida para examen aunque limitada por volumen insuficiente.",
                25: "Muestra no valorable por deterioro.",
                26: "Muestra no valorable por contaminación con agentes externos.",
                27: "Muestra no valorable por...",
            },
            interpretacion: {
                50: "pH normal.",
                51: "pH elevado.",
                52: "pH reducido.",
                53: "Presencia de proteínas.",
                54: "Negativo para proteínas.",
                55: "Glucosa presente.",
                56: "Negativo para la glucosa.",
                57: "Cetonas detectadas.",
                58: "Negativo para cetonas.",
                59: "Hemoglobina presente.",
                60: "Negativo para hemoglobina.",
                61: "Bilirrubina detectada.",
                62: "Negativo para bilirrubina.",
                63: "Urobilinógeno normal.",
                64: "Urobilinógeno elevado.",
                65: "Presencia de nitritos.",
                66: "Negativo para nitritos.",
                67: "Presencia de leucocitos.",
                68: "Ausencia de leucocitos.",
                69: "Presencia de eritrocitos.",
                70: "Ausencia de eritrocitos.",
                71: "Células epiteliales.",
                72: "Cilindros hialinos.",
                73: "Cilindros granulosos.",
                74: "Cristales (oxalato de calcio, ácido úrico, etc.).",
                75: "Bacterias.",
                76: "Levaduras.",
                77: "Parásitos.",
            },
        },
        4: {
            calidad: {
                28: "Muestra válida para examen.",
                29: "Muestra válida para examen aunque limitada por volumen insuficiente.",
                30: "Muestra válida para examen aunque limitada por presencia de sangre.",
                31: "Muestra válida para examen aunque limitada por contaminación con saliva.",
                32: "Muestra válida para examen aunque limitada por contaminación con secreciones nasales.",
                33: "Muestra válida para examen aunque limitada por presencia de alimentos.",
                34: "Muestra no valorable por descomposición.",
                35: "Muestra no valorable por...",
                36: "Muestra no valorable por...",
            },
            interpretacion: {
                78: "Presencia de células epiteliales escamosas.",
                79: "Presencia de células epiteliales columnares.",
                80: "Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).",
                81: "Presencia de células metaplásicas.",
                82: "Presencia de células malignas.",
                83: "Presencia de células atípicas sugestivas de neoplasia.",
                84: "Presencia de microorganismos (bacterias, hongos, micobacterias).",
                85: "Presencia de células sanguíneas (eritrocitos, plaquetas).",
                86: "Presencia de material mucoso o mucopurulento.",
                87: "Presencia de cristales (de colesterol, calcio, etc.).",
                88: "Ausencia de células significativas para el análisis.",
            },
        },
        5: {
            calidad: {
                37: "Muestra válida para examen.",
                38: "Muestra válida para examen aunque limitada por cantidad insuficiente de células.",
                39: "Muestra válida para examen aunque limitada por presencia de sangre.",
                40: "Muestra válida para examen aunque limitada por contaminación con alimentos.",
                41: "Muestra válida para examen aunque limitada por contaminación con saliva.",
                42: "Muestra válida para examen aunque limitada por...",
                43: "Muestra no valorable por deshidratación.",
                44: "Muestra no valorable por contaminación con microorganismos.",
                45: "Muestra no valorable por...",
            },
            interpretacion: {
                89: "Presencia de células epiteliales escamosas.",
                90: "Presencia de células epiteliales cilíndricas.",
                91: "Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).",
                92: "Presencia de células glandulares.",
                93: "Presencia de células metaplásicas.",
                94: "Presencia de células atípicas sugestivas de neoplasia.",
                95: "Presencia de microorganismos (bacterias, hongos, levaduras).",
                96: "Presencia de células anormales con cambios citológicos.",
                97: "Ausencia de células significativas para el análisis.",
            },
        },
    }


    const [biopsiaHidden, setBiopsiaHidden] = useState('hidden') // Aquí modifico la selección
    const [calidadHidden, setCalidadHidden] = useState('hidden') // Aquí modifico la selección

    const [calidadSeleccionada, setCalidadSeleccionada] = useState('')
    const [interpretacionSeleccionada, setInterpretacionSeleccionada] = useState('')

    const [arrayImagenes, setArrayImagenes] = useState([])
    const [arrayImagenesUpload, setArrayImagenesUpload] = useState([])
    const [interpretaciones, setInterpretaciones] = useState([]);
    const [isReady, setIsReady] = useState(false);


    // const idSede = localStorage.getItem('usuarioActivo')
    // const idSedeObjeto = JSON.parse(idSede)

    const user = JSON.parse(localStorage.getItem('usuarioActivo'))
    const idUser = user['id']
    const idSede = user['idSede']

    const [form, setForm] = useState({
        codigoMuestra: "",
        fecha: "",
        tipoNaturaleza: "",
        organo: "",
        formato: "",
        calidad: "",
        descripcionCalidad: "",
        tipoEstudio: "",
        idUser: idUser,
        idSede: idSede,
        interpretacion: [],
        imagenes: [],
    });

    useEffect(() => {
        console.log(form);
    }, [form]);


    const handleData = (e) => {
        setForm({...form , [e.target.name]: [e.target.value]}) // uso ...form para no eliminar los demas datos al modificar
        // console.log(form);
    }

    const handleSelect = (seleccion) => {

        const clave = seleccion.target.value

        if(clave in datos){ // evaluamos si el valor seleccionado tiene calidad e interpretacion propias
            setCalidadSeleccionada(datos[clave].calidad)
            setInterpretacionSeleccionada(datos[clave].interpretacion)

        } else { // Si no tiene propiedades lo dejamos vacio
            setCalidadSeleccionada('')
            setInterpretacionSeleccionada('')
        }

    }


    const handleBiopsia = (seleccion) => {

        const clave = seleccion.target.value // Si la clave == 1 o 2 corresponde a biopsia

        if (clave == '1'|| clave == '2'){ // Evaluamos si es una biopsia
            setBiopsiaHidden('mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm')

        } else { // Si no tiene propiedades lo dejamos vacio
            setBiopsiaHidden('hidden')
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


    const handlePhotos = (photo) => { // Esto muestra las fotos subidas en la pagina
        const urlImagen = photo.target.files[0]
        setArrayImagenes([...arrayImagenes, {url: URL.createObjectURL(urlImagen), nombre: urlImagen.name}])

    }

    const handleUploadPhotos = (photo) => { // Con esto guardo cada foto que se suba
        const fotoSeleccionada = photo.target.files[0]
        setArrayImagenesUpload([...arrayImagenesUpload, fotoSeleccionada])
    }


    const handleUpload = async () => {

        if (arrayImagenesUpload.length !== 0) { // Comprobamos que haya alguna imagen para subir

            const formData = new FormData();
            const uploadToCloudinary = async (image) => {
                formData.append("file", image);
                formData.append("upload_preset", 'default'); // Preset de subida

                try {
                    const response = await fetch(`https://api.cloudinary.com/v1_1/dcdvxqsxn/image/upload`, {
                        method: "POST",
                        body: formData,
                    });

                    const data = await response.json();

                    if (response.ok) {
                        console.log("Imagenes subidas con exito:", [data,data.url,data.public_id,data.original_filename]);
                        return data; // Devolvemos los datos de la subida

                    } else {
                        console.error("Error al subir imagen:", data.error.message);
                    }
                } catch (error) {
                    console.error("Error al conectar con Cloudinary:", error);
                }
                return null;
            };

            // Subimos las imagenes
            const uploadPromises = arrayImagenesUpload.map((image) => uploadToCloudinary(image));
            // Esperamos a que se suban todas
            const publicIds = await Promise.all(uploadPromises);

            // Filtramos los id válidos por si falla alguna subida
            const validPublicIds = publicIds.filter((id) => id !== null);

            // Los agregamos al formulario
            setForm((prevForm) => ({
                ...prevForm,
                imagenes: validPublicIds,
            }));
        }
        setIsReady(true) // Una vez se hayan subido las fotos enviamos el form con los datos
    };



    const handleDeletePhoto = (seleccion) => {

        const nombreImagen = seleccion.target.parentElement.querySelector('img').name;
        const photoDeleted = seleccion.target.parentElement.querySelector('img').src

        setArrayImagenes((arrayImagenes) => arrayImagenes.filter((img) => img.url !== photoDeleted)); // quito del array la imagen eliminada
        setArrayImagenesUpload((arrayImagenesUpload) => arrayImagenesUpload.filter((img) => img.name !== nombreImagen)); // filtro la imagen por el nombre


    }

    const recogerInterpretaciones = () => {
        const interpretaciones = document.querySelectorAll("#interpretacionAdicional");

        const nuevasInterpretaciones = Array.from(interpretaciones).map((interpretacionAdicional) => ({
            id: interpretacionAdicional.value,
            descripcion: interpretacionAdicional.options[interpretacionAdicional.selectedIndex].text,
        }));

        setForm((prevForm) => ({
            ...prevForm,
            interpretacion: [...new Map([...prevForm.interpretacion, ...nuevasInterpretaciones].map(item => [item.id, item])).values()], // Filtra por si se añaden interpretaciones duplicadas
        }));
    };




    const agregarInterpretacion = () => {
        setInterpretaciones([...interpretaciones, { id: interpretaciones.length}]);
    };

    const eliminarInterpretacion = (id) => {
        setInterpretaciones(interpretaciones.filter(item => item.id !== id));
    };

    const validarFormulario = () => {
        if (form.codigoMuestra.length < 1){
            showModificableAlert('Rellene todos los campos', 'El código de muestra se encuentra vacío', 'error')
            return false

        } else if (form.fecha.length < 1){
            showModificableAlert('Rellene todos los campos', 'La fecha se encuentra vacía', 'error')
            return false

        } else if (form.tipoNaturaleza.length < 1){
            showModificableAlert('Rellene todos los campos', 'El tipo de naturaleza se encuentra vacía', 'error')
            return false

        } else if ((form.tipoNaturaleza == 1 || form.tipoNaturaleza == 2) && form.organo < 1 ){
            showModificableAlert('Rellene todos los campos', 'El organo biopsiado se encuentra vacío', 'error')
            return false

        } else if (form.tipoEstudio < 1){
            showModificableAlert('Rellene todos los campos', 'Debe indicar el tipo de estudio', 'error')
            return false

        } else if (form.formato < 1){
            showModificableAlert('Rellene todos los campos', 'Debe indicar el formato', 'error')
            return false

        } else if (form.calidad.length < 1){
            showModificableAlert('Rellene todos los campos', 'Debe indicar la calidad de la muestra', 'error')
            return false

        } else if (calidadHidden !== 'hidden' && form.descripcionCalidad.length < 1){
            showModificableAlert('Rellene todos los campos', 'La descripción de la calidad se encuentra vacía', 'error')
            return false

        }
        // else if (form.interpretacion.length < 1){
        //     showModificableAlert('Rellene todos los campos', 'La interpretación se encuentra vacía', 'error')
        //     return false

        // }


        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            handleUpload();
            recogerInterpretaciones();
            showSuccessAlert();
        }
    };

    // Enviar los datos solo cuando form haya actualizado los datos
    useEffect(() => {
            // console.log(form);
            if(isReady){ // Que solo se ejecute si es true
                router.post("muestra", form);
                setIsReady(false)
            }
    }, [isReady])



    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={'insercion'}
        >
            <Head title="Insercion" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#e5eaf0] pb-10 px-2">
                <div className="p-6  mx-auto space-y-6 bg-white border rounded-md shadow-lg w-2/3 m-10 mb-2 max-sm:w-full">
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
                                onBlur={handleData} // Esto hace que se ejecute cuando salga del campo
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
                <div className="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/3 max-sm:w-full ">
                    <div className="space-y-4">
                        <div>
                            <label
                                for="naturaleza_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Tipo de naturaleza
                            </label>
                            <select onChange={(e) => { handleData(e); handleBiopsia(e) }}
                                id="tipoNaturaleza"
                                name="tipoNaturaleza"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione un tipo de naturaleza
                                </option>
                                <option value="1">Biopsias</option>
                                <option value="2">Biopsias veterinarias</option>
                                <option value="3">Cavidad bucal</option>
                                <option value="4">Citología vaginal</option>
                                <option value="5">Extensión sanguínea</option>
                                <option value="6">Orinas</option>
                                <option value="7">Esputos</option>
                                <option value="8">Semen</option>
                                <option value="9">Improntas</option>
                                <option value="10">Frotis</option>
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
                                <option value="Corazón">Corazón</option>
                                <option value="Bazo">Bazo</option>
                                <option value="Hígado">Hígado</option>
                                <option value="Feto">Feto</option>
                                <option value="Estómago">Estómago</option>
                                <option value="Cerebro">Cerebro</option>
                                <option value="Riñón">Riñón</option>
                                <option value="Lengua">Lengua</option>
                                <option value="Útero">Útero</option>
                                <option value="Ovario">Ovario</option>
                                <option value="Intestino">Intestino</option>
                                <option value="Trompa de Falopio">Trompa de Falopio</option>
                                <option value="Esófago">Esófago</option>
                                <option value="Páncreas">Páncreas</option>
                                <option value="Testículo">Testículo</option>
                                <option value="Piel">Piel</option>
                                <option value="Pulmón">Pulmón</option>

                            </select>
                        </div>

                        <div>
                            <label
                                for="naturaleza_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Tipo de estudio
                            </label>
                            <select onChange={(e) => { handleSelect(e); handleData(e); }}
                                id="tipoEstudio"
                                name="tipoEstudio"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">
                                    Seleccione un tipo de estudio
                                </option>
                                <option value="1">Citológico cérvico - vaginal</option>
                                <option value="2">Hematológico completo</option>
                                <option value="3">Microscópico y químico de orina</option>
                                <option value="4">Citológico de esputo</option>
                                <option value="5">Citológico bucal</option>

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
                                <option value="1">Fresco</option>
                                <option value="2">Formol</option>
                                <option value="3">Etanol 70%</option>
                            </select>
                        </div>


                        <div>
                            <label
                                for="calidad_muestra"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Calidad de la muestra
                            </label>
                            <select onChange={(e) => { handleCalidad(e); handleData(e); }}
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
                                    Descripción de la calidad de la muestra
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
                            <select
                                id="interpretacionAdicional"
                                name="interpretacionAdicional"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm "
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
                        {interpretaciones.map(item => (
                            <Interpretacion
                                key={item.id}
                                id={item.id}
                                onRemove={eliminarInterpretacion}
                                interpretaciones={interpretacionSeleccionada}
                            />
                        ))}

                        <button className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 mb-6 font-bold text-gray-700" onClick={agregarInterpretacion}>Añadir interpretación</button>

                        <hr className="my-4 border-gray-300" />

                        <div>
                            <label
                                for="imagenes"
                                className="block text-sm font-semibold text-gray-700 mt-6"
                            >
                                Añadir imágenes
                            </label>
                            <input onChange={(e) => {handlePhotos(e), handleUploadPhotos(e)}}
                                type="file"
                                id="imagenes"
                                name="imagenes"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                                multiple
                            />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-4" id="containerImages">

                            <div className="mt-4 flex flex-wrap gap-4">
                                {/* Aqui voy añadiendo las nuevas fotos.*/}
                                {arrayImagenes.map((photo) => (
                                    <div className="relative w-auto h-32 inline-block">
                                        <img
                                            src={photo.url}
                                            name={photo.nombre}
                                            className="w-auto h-32 object-cover rounded-lg"
                                        />
                                        <button
                                            className="font-extrabold absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 w-6 h-6 text-center flex items-center justify-center cursor-pointer"
                                            onClick={handleDeletePhoto}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
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
            <Footer/>
        </AuthenticatedLayout>
);
}
