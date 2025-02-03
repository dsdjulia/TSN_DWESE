import React from 'react';
import Swal from 'sweetalert2';

const AlertFailed = () => {
    function error() {
        Swal.fire({
            title: 'Error al enviar el formulario',
            text: 'Complete todos los campos',
            icon: 'error',
            confirmButtonText: 'Volver'
        });
    }

    return <>{error()}</>;
};

const AlertSuccess = () => {
    function success() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Su análisis ha sido guardado",
            showConfirmButton: false,
            timer: 2000,
        });
    }

    return <>{success()}</>;
};

// Crear un objeto para exportar
const SweetAlerts = {
    AlertSuccess,
    AlertFailed
};

export default SweetAlerts;