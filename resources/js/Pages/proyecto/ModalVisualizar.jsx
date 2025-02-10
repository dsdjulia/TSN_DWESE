import { Link } from "@inertiajs/react";
import React from "react";

export default function ModalVisualizar({ id, onClose, muestra }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/4 shadow-gray-500 relative">
                <button className="absolute w-10 h-10 top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 font-extrabold" onClick={onClose}>
                    ✕
                </button>
                <h2 className="text-lg font-semibold">Detalles de la Muestra</h2>
                <div className="flex gap-20">
                <div>
                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-700">Naturaleza de la muestra:</p>
                    <p className="text-gray-600">{/* {muestra.naturaleza} */}Biopsias</p>
                </div>
                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-700">Recibido en:</p>
                    <p className="text-gray-600">{/* muestra.formato */}Fresco</p>
                </div>
                </div>
                <div>
                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-700">Órgano biopsiado:</p>
                    <p className="text-gray-600">{/* muestra.organo */}Corazon</p>
                </div>


                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-700">Calidad de la muestra:</p>
                    <p className="text-gray-600">{/* muestra.calidad */}Muestra válida para examen</p>
                </div>
                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-700">Interpretación:</p>
                    <p className="text-gray-600">{/* muestra.interpretacion */}Presencia de células epiteliales escamosas</p>
                </div>
                </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <div>
                    <p className="text-sm font-semibold text-gray-700">Imágenes adjuntas:</p>
                     <div className="flex gap-4 mt-5">
                       {/*  {muestra.imagenes.map((imagen, index) => (
                            <div key={index} className="relative w-auto h-32 inline-block">
                                <img src={imagen} alt={`Imagen ${index + 1}`} className="w-auto h-32 object-cover rounded-lg" />
                            </div>
                        ))} */}
                    <img src="../public/muestra1.png" alt="imagen de ejemplo" className="w-auto h-32 object-cover rounded-lg" />
                    <img src="../public/muestra2.png" alt="imagen de ejemplo" className="w-auto h-32 object-cover rounded-lg" />
                    <img src="../public/muestra3.png" alt="imagen de ejemplo" className="w-auto h-32 object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
