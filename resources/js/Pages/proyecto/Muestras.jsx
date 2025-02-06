import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import ModalModificar from "./ModalModificar";
import ModalEliminar from "./ModalEliminar";

export default function Muestras({auth}) {
  const muestras = [
    { id: 1, tipo: 'Sangre', fecha: '2024-01-31' },
    { id: 2, tipo: 'Esputo', fecha: '2024-02-01' },
    { id: 3, tipo: 'Sangre', fecha: '2024-02-02' }
  ];
  const [modificarAbierto, setModificarAbierto] = useState(false);
  const [eliminarAbierto, setEliminarAbierto] = useState(false);

  return (
    <AuthenticatedLayout
                user={auth.user} /* Comprobamos que este autenticado */
                header={'muestras'}
            >

            <Head title="Muestras"/>

    <div className="flex flex-col items-center justify-start min-h-screen bg-[#e5eaf0]">
      <div className="p-8 bg-white rounded-md  text-center w-5/6 h-5/6 mt-10">
        <h1 className="text-lg font-semibold text-gray-700 mb-4">Archivo de Muestras</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">ID de Muestra</th>
              <th className="p-2">Tipo de Muestra</th>
              <th className="p-2">Fecha</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {muestras.map((muestra) => (
              <tr key={muestra.id} className="border-b">
                <td className="p-2">{muestra.id}</td>
                <td className="p-2">{muestra.tipo}</td>
                <td className="p-2">{muestra.fecha}</td>
                <td className="p-2 flex space-x-2 justify-center">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => setModificarAbierto(true)} >
                    <img className="w-8" src="../public/icono-editar.png" alt="editar" />
                  </button>
                  <button onClick={() => setEliminarAbierto(true)} className="text-red-500 hover:text-red-700" >
                    <img className="w-8" src="../public/icono-borrar.webp" alt="borrar" />

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start mt-4">
          <Link href="../nuevaMuestra" className="px-4 py-2 bg-[#0057B8] text-white rounded-lg shadow-md hover:bg-[#004494]">
            Nueva Muestra
          </Link>
        </div>
      </div>
      <div className="w-5/6 flex justify-end  mt-2 ">
            <div className="flex items-center justify-between bg-white rounded-md w-1/5 h-10 p-1"> {/* seccion paginacion */}
                <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                    <img className="" src="../public/primeraPag.png" alt="1" />
                </button>
                <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                    <img className="" src="../public/pagAtras.png" alt="1" />
                </button>

                <p className="text-gray-300"><span>1</span> ... <span>18</span></p>
                <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                    <img className="" src="../public/pagAlante.png" alt="1" />
                </button>
                <button className="bg-gray-100 rounded-md hover:bg-gray-200 font-bold text-gray-700 w-1/6 h-full flex align-middle justify-center items-center">
                    <img className="" src="../public/ultimaPag.png" alt="1" />
                </button>

            </div>
        </div>
    </div>
    {modificarAbierto && <ModalModificar onClose={() => setModificarAbierto(false)} />}
    {eliminarAbierto && <ModalEliminar onClose={() => setEliminarAbierto(false)} />}
    </AuthenticatedLayout>);
}
