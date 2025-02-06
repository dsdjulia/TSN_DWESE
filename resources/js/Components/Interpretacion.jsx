import React from "react";

const Interpretacion = ({ id, onRemove }) => {
    return (
        <div className="mb-4">

            <div className="flex justify-center items-center h-">
                <select
                    id={`${id}`}
                    name={`interpretacion-${id}`}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                >
                    <option value="">Seleccione interpretación</option>
                    {/* Opciones dinámicas aquí */}
                    <option value="1">Interpretación 1</option>
                    <option value="2">Interpretación 2</option>
                </select>
                <button
                    onClick={() => onRemove(id)}
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 font-extrabold"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Interpretacion;
