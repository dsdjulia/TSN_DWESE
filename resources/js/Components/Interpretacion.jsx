import React from "react";

const Interpretacion = ({ id, onRemove, interpretaciones }) => {
    return (
        <div className="mb-4">

            <div className="flex justify-center items-center h-">
                <select
                    id={`interpretacionAdicional`}
                    name={`interpretacion-${id}`}
                    className="p-3 w-full border border-gray-300 rounded-md shadow-sm"
                >
                    <option value="">Seleccione interpretación</option>
                    {/* Opciones dinámicas aquí */}
                    {Object.entries(interpretaciones).map(
                                    (
                                        [
                                            key,
                                            contenido,
                                        ] /* esto funciona en react como for(let key in Json) en javascript  */
                                    ) => (
                                        <option value={key}>
                                            {contenido}
                                        </option>
                                    )
                                )}
                </select>
                <button
                    onClick={() => onRemove(id)}
                    className=" bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 font-extrabold"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Interpretacion;
