import { Link } from "@inertiajs/react";
import React from "react";
import CloudinaryImage from "@/Components/CloudinaryImage";

export default function ModalVisualizar({ id, onClose, muestra }) {
    const tipoNaturaleza = {
        1: "Biopsias",
        2: "Biopsias veterinarias",
        3: "Cavidad bucal",
        4: "Citología vaginal",
        5: "Extensión sanguínea",
        6: "Orinas",
        7: "Esputos",
        8: "Semen",
        9: "Improntas",
        10: "Frotis",
    };

    const formato = {
        1: "Fresco",
        2: "Formol",
        3: "Etanol 70%",
    };

    console.log(muestra);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 mx-auto space-y-6 bg-white border rounded-lg shadow-lg w-2/4 shadow-gray-500 relative">
                <button
                    className="absolute w-10 h-10 top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 font-extrabold"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-lg font-semibold">
                    Detalles de la Muestra
                </h2>
                <div className="flex gap-20">
                    <div>
                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Naturaleza de la muestra:
                            </p>
                            <p className="text-gray-600">
                                {muestra.tipo_naturaleza.nombre}
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Recibido en:
                            </p>
                            <p className="text-gray-600">
                                {muestra.formato.nombre}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Órgano biopsiado:
                            </p>
                            <p className="text-gray-600">
                                {muestra.organo ?? " - "}
                            </p>{" "}
                            {/* Comprobamos si tenemos valor de organo biopsiado */}
                        </div>

                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Calidad de la muestra:
                            </p>
                            <p className="text-gray-600">
                                {muestra.calidad.nombre}
                            </p>
                        </div>

                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Descripción de la calidad de la muestra:
                            </p>
                            <p className="text-gray-600">
                                {muestra.descripcionCalidad ?? " - "}
                            </p>
                        </div>

                        <div className="mb-2">
                            <p className="text-sm font-semibold text-gray-700">
                                Interpretación:
                            </p>
                            {muestra.muestras_interpretaciones.map((interpretacion, index) => (
                            <p key={index} className="text-gray-600">
                            {interpretacion.descripcion}
                            </p>
                        ))}

                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Imágenes adjuntas:
                    </p>
                    <div className="flex gap-4 mt-5">
                        {/*  {muestra.imagenes.map((imagen, index) => (
                            <div key={index} className="relative w-auto h-32 inline-block">
                                <img src={imagen} alt={`Imagen ${index + 1}`} className="w-auto h-32 object-cover rounded-lg" />
                            </div>
                        ))} */}
                        {/* <img src="../public/muestra1.png" alt="imagen de ejemplo" className="w-auto h-24  max-lg:h-12 object-cover rounded-lg" />
                    <img src="../public/muestra2.png" alt="imagen de ejemplo" className="w-auto h-24  max-lg:h-12 object-cover rounded-lg" />
                    <img src="../public/muestra3.png" alt="imagen de ejemplo" className="w-auto h-24 max-lg:h-12  object-cover rounded-lg" /> */}
                        {/* el publicId tiene que llegar como parámetro de cada foto */}
                        <CloudinaryImage
                            publicId={"uztn1x4hdv8wy08qhkh2"}
                            height={100}
                            width={100}
                        ></CloudinaryImage>
                        <CloudinaryImage
                            publicId={"zaolz7gxbjugrjktkchk"}
                            height={100}
                            width={100}
                        ></CloudinaryImage>
                    </div>
                </div>
            </div>
        </div>
    );
}
