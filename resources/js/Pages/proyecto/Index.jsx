import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";




export default function Index({ auth}) {
    /* Esto nos permite acceder al controlador proyectos y al usuario autenticado */

    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Inicio
                </h2> /* heredamos el header e introducimos este texto */
            }
        >
            <Head title="Inicio" />
            <div className="flex items-center justify-center min-h-screen bg-[url('/public/fondo-inicio.jpg')] bg-cover bg-slate-50">
                <div className="flex flex-col gap-10 items-center align-middle p-8 bg-white rounded-sm  font-bold w-1/2 h-80 text-center justify-center">
                    <h1 className="text-lg font-semibold text-blue-950">
                        ¡Hola de nuevo! Bienvenido al archivo de muestras MEDAC
                    </h1>
                    <div className="flex space-x-4">
                        <a href="/public/muestras" className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494]"
                        >
                            Ver Muestras
                        </a>
                        <a href="/public/nuevaMuestra" className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494]"
                        >
                            Nueva Muestra
                        </a>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
