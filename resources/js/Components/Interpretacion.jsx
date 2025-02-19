import React from "react";

const Interpretacion = ({ id, onRemove, interpretaciones, idInterpretacionSeleccionada, descripcionInterpretacionSeleccionada }) => {
    return (
        <div className="mb-4">

            <div className="flex justify-center items-center h-">
                <select
                    id={`interpretacionAdicional`}
                    name={id}
                    className="p-3 w-full border border-gray-300 rounded-md shadow-sm"
                >
                    <option value={idInterpretacionSeleccionada ?? ''}>{descripcionInterpretacionSeleccionada ?? 'Seleccione una descripción'}</option>

                    {Array.isArray(interpretaciones) // Verifica si `interpretaciones` es un array
                        ? // Si es un array:
                            interpretaciones.map((item) => ( // Mapea cada elemento del array `interpretaciones`
                                <option key={item.id} value={item.id}> 
                                    {item.descripcion} {/* Muestra el valor de `descripcion` como el contenido visible de la opción */}
                                </option>
                            ))
                        : // Si no es un array, se asume que es un objeto:
                            Object.entries(interpretaciones).map(([key, contenido]) => ( 
                                // Convierte el objeto `interpretaciones` en un array de pares clave-valor y lo recorre
                                <option key={key} value={key}>
                                    {contenido} {/* Muestra el contenido asociado a la clave como el texto visible de la opción */}
                                </option>
                        ))}

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
