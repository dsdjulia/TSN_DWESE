import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import ModalModificar from "./ModalModificar";
import ModalEliminar from "./ModalEliminar";
import ModalVisualizar from "./ModalVisualizar";
import Footer from "@/Components/Footer";



export default function Muestras({ auth, data }) {
    const muestras = data; // * Debo manipular esta data para la paginacion



    const [modificarAbierto, setModificarAbierto] = useState(false);
    const [eliminarAbierto, setEliminarAbierto] = useState(false);
    const [VisualizarAbierto, setVisualizarAbierto] = useState(false);
    const [idMuestraSeleccionada, setidMuestraSeleccionada] = useState('')
    
    const [pagActual, setpagActual] = useState(1)
    const [cantPag, setcantPag] = useState(10)

    const handleModalEliminar = (e) => {
        setidMuestraSeleccionada(e.target.closest('tr').id)
        setEliminarAbierto(true)
    }
    const handleModalModificar = (e) => {
        setidMuestraSeleccionada(e.target.closest('tr').id)
        setModificarAbierto(true)
    }
    const handleModalVisualizar = (e) => {
        setidMuestraSeleccionada(e.target.closest('tr').id)
        setVisualizarAbierto(true)
    }


    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={"muestras"}
        >
            <Head title="Muestras" />

            <div className="flex flex-col items-center justify-start min-h-screen bg-[#e5eaf0]">
                <div className="p-8 bg-white rounded-md  text-center w-5/6 h-5/6 mt-10">
                    <h1 className="text-lg font-semibold text-gray-700 mb-4">
                        Archivo de Muestras
                    </h1>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Usuario</th>
                                <th className="p-2">Codigo Muestra</th>
                                <th className="p-2">Tipo de Muestra</th>
                                <th className="p-2">Formato</th>
                                <th className="p-2">Fecha</th>
                                <th className="p-2"></th>
                                <th className="p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {muestras.map((muestra) => (
                                <tr key={muestra.id} className="border-b" id={muestra.id}>
                                    <td className="p-2">{muestra.user.name}</td>
                                    <td className="p-2">{muestra.codigo}</td>
                                    <td className="p-2">
                                        {muestra.tipo_naturaleza.nombre}
                                    </td>
                                    <td className="p-2">
                                        {muestra.formato.nombre}
                                    </td>
                                    <td className="p-2">{muestra.fecha}</td>
                                    <td className="p-2 flex space-x-2 justify-center">
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={(e) =>
                                                handleModalVisualizar
                                                // setVisualizarAbierto(true)
                                            }
                                        >
                                            <img
                                                className="w-8"
                                                src="../public/info.png"
                                                alt="detallesMuestra"
                                            />
                                        </button>
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={(e) =>
                                                handleModalModificar
                                                // setModificarAbierto(true)
                                            }
                                        >
                                            <img
                                                className="w-8"
                                                src="../public/edit.png"
                                                alt="editar"
                                            />
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                handleModalEliminar(e)
                                                // setEliminarAbierto(true)
                                            }
                                        >
                                            <img
                                                className="w-8"
                                                src="../public/icono-borrar.png"
                                                alt="borrar"
                                            />
                                        </button>
                                    </td>
                                    <td className="p-2">
                                        <button className="ml-2">
                                            <img
                                                className="w-8"
                                                src="../public/print.png"
                                                alt="imprimir"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-start mt-4">
                        <Link
                            href="../nuevaMuestra"
                            className="px-4 py-2 bg-[#0057B8] text-white rounded-lg shadow-md hover:bg-[#004494]"
                        >
                            Nueva Muestra
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 flex justify-end  mt-2 ">
                    <div className="flex items-center justify-between bg-white rounded-md w-1/5 h-10 p-1">
                        {" "}
                        {/* seccion paginacion */}
                        <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                            <img
                                className=""
                                src="../public/primeraPag.png"
                                alt="1"
                            />
                        </button>
                        <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                            <img
                                className=""
                                src="../public/pagAtras.png"
                                alt="1"
                            />
                        </button>
                        <p className="text-gray-300">
                            <span >{pagActual}</span> ... <span>{cantPag}</span>
                        </p>
                        <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                            <img
                                className=""
                                src="../public/pagAlante.png"
                                alt="1"
                            />
                        </button>
                        <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                            <img
                                className=""
                                src="../public/ultimaPag.png"
                                alt="1"
                            />
                        </button>
                        
                    </div>
                </div>
            </div>
            {modificarAbierto && (
                <ModalModificar 
                    id={idMuestraSeleccionada}
                    onClose={() => setModificarAbierto(false)} />
            )}
            {eliminarAbierto && (
                <ModalEliminar 
                    id={idMuestraSeleccionada}
                    onClose={() => setEliminarAbierto(false)} />
            )}
            {VisualizarAbierto && (
                <ModalVisualizar 
                    id={idMuestraSeleccionada}
                    onClose={() => setVisualizarAbierto(false)} />
            )}
            <Footer />
        </AuthenticatedLayout>
    );
}
