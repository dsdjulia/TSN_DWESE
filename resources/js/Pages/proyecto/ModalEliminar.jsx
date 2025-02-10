import { Link } from "@inertiajs/react";
import React from "react";

export default function ModalEliminar({ id, onClose }) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div class="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-1/6 shadow-gray-500">
                <div class="space-y-4 text-center">
                    <h2 className="font-extrabold">¿Eliminar Muestra?</h2>

                    <div className="flex justify-around mt-4">
                        <Link
                            href={route("eliminar")}
                            className="px-4 py-2 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500"
                        >
                            Eliminar
                        </Link>
                        <button
                            class="text-red-700 hover:underline focus:outline-none"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
