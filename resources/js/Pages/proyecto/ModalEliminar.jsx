import { Link, router } from "@inertiajs/react";
import React from "react";
import { showErrorAlert, showSuccessAlert, showModificableAlert } from "../../Components/SweetAlerts";


export default function ModalEliminar({ id, onClose }) {

    console.log(id);
    const deleteMuestra = () => {
        router.delete(`muestra/${id}`, {
            onSuccess: showModificableAlert('Muestra eliminada', 'Muestra eliminada con éxito', 'success'),
            onError: (error) => showModificableAlert('Error al eliminar la muesta', `Error: ${error}`, 'error')
        })
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"

        >
            <div className="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-1/6 shadow-gray-500 max-xl:w-1/2">
                <div className="space-y-4 text-center">
                    <h2 className="font-extrabold">¿Eliminar Muestra?</h2>

                    <div className="flex justify-around mt-4 max-xl:flex-col ">
                        <Link
                            className="px-4 py-2 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500 max-xl:w-full"
                            onClick={() => {deleteMuestra(); onClose();}}
                        >
                            Eliminar

                        </Link>
                        <button
                            className="text-red-700 hover:underline focus:outline-none"
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
