import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Index({ auth }) {
    /* Esto nos permite acceder al controlador proyectos y al usuario autenticado */

    return (
        <AuthenticatedLayout
            user={auth.user} /* Comprobamos que este autenticado */
            header={'index'}
        >
            <Head title="Inicio" />
            <div className="flex items-center justify-center min-h-screen bg-[url('https://wallpapers.com/images/hd/laboratory-clear-liquid-turning-yellow-kvs7cdm2uo4ngc1l.jpg')] bg-cover bg-slate-50 max-sm:h-full">
                <div className="flex flex-col gap-10 items-center align-middle p-8 bg-white rounded-sm  font-bold w-1/2 h-80 text-center justify-center max-sm:w-full max-sm:h-full">
                    <h1 className="text-lg font-semibold text-blue-950">
                        ¡Hola de nuevo! Bienvenido al archivo de muestras MEDAC
                    </h1>
                    <div className="flex max-sm:w-full max-sm:flex-col gap-4">
                        <Link
                            href={route('muestras')}
                            className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494] max-sm:w-full"
                        >
                            Ver Muestras
                        </Link>
                        <Link
                            href={route('nuevaMuestra')}
                            className="px-4 py-2 bg-[#0057B8] text-white rounded-md shadow-md hover:bg-[#004494] max-sm:w-full"
                        >
                            Nueva Muestra
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </AuthenticatedLayout>
    );
}
