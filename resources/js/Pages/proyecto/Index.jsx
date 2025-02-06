import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth }) {
    /* Esto nos permite acceder al controlador proyectos y al usuario autenticado */

    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white ">
                Inicio
            </h1>}
        >
            <Head title="Inicio" />
            <div className="flex items-center justify-center min-h-screen bg-[url('/public/fondo-inicio.jpg')] bg-cover bg-slate-50">
                <div className="flex flex-col gap-10 items-center align-middle p-8 bg-white rounded-sm  font-bold w-1/2 h-80 text-center justify-center">
                    <h1 className="text-lg font-semibold text-blue-950">
                        ¡Hola de nuevo! Bienvenido al archivo de muestras MEDAC
                    </h1>
                    <div className="flex space-x-4">
                        <Link
                            href={route('muestras')}
                            className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494]"
                        >
                            Ver Muestras
                        </Link>
                        <Link
                            href={route('nuevaMuestra')}
                            className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494]"
                        >
                            Nueva Muestra
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
