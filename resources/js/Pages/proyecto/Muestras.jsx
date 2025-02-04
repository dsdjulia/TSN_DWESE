import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";


export default function Muestras({auth}) {
  const muestras = [
    { id: 1, nombre: 'Juan Pérez', tipo: 'Sangre', fecha: '2024-01-31' },
    { id: 2, nombre: 'María López', tipo: 'Esputo', fecha: '2024-02-01' },
    { id: 3, nombre: 'Carlos Gómez', tipo: 'Sangre', fecha: '2024-02-02' }
  ];




  return (
    <AuthenticatedLayout
                user={auth.user} /* Comprobamos que este autenticado */
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Muestras
                    </h2> /* heredamos el header e introducimos este texto */
                }
            >

            <Head title="Muestras"/>

    <div className="flex items-center justify-center min-h-screen bg-[#e5eaf0]">
      <div className="p-8 bg-white rounded-md  text-center w-5/6 h-5/6">
        <h1 className="text-lg font-semibold text-gray-700 mb-4">Archivo de Muestras</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">ID de Muestra</th>
              <th className="p-2">Nombre del Paciente</th>
              <th className="p-2">Tipo de Muestra</th>
              <th className="p-2">Fecha</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {muestras.map((muestra) => (
              <tr key={muestra.id} className="border-b">
                <td className="p-2">{muestra.id}</td>
                <td className="p-2">{muestra.nombre}</td>
                <td className="p-2">{muestra.tipo}</td>
                <td className="p-2">{muestra.fecha}</td>
                <td className="p-2 flex space-x-2 justify-center">
                  <button className="text-blue-500 hover:text-blue-700" onClick>
                    <img className="w-8" src="../public/icono-editar.png" alt="editar" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <img className="w-8" src="/public/icono-borrar.webp" alt="borrar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start mt-4">
          <a href="/public/nuevaMuestra" className="px-4 py-2 bg-[#0057B8] text-white rounded-lg shadow-md hover:bg-[#004494]">
            Nueva Muestra
          </a>
        </div>
      </div>
    </div>

    </AuthenticatedLayout>);
}
