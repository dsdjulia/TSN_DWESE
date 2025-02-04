import { Link } from "@inertiajs/react";
import React from "react";

export default function ModalEliminar({ id }) {
    return (
        <div class="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-1/6 shadow-gray-500">
            <div class="space-y-4">
                <h2>¿Eliminar Muestra?</h2>

                <div className="flex justify-around mt-4">
                    <Link href="../eliminar" className="px-4 py-2 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500">
                        Eliminar
                    </Link>
                    <Link href="../cerrar" class="text-gray-700 hover:underline focus:outline-none">
                        Cancelar
                    </Link>
                </div>
            </div>
        </div>
    );
}
