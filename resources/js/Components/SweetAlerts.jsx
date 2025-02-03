import React from 'react'

const AlertFailed = () => {

    function error(){
        Swal.fire({
            title: 'Error al enviar el formulario',
            text: 'Complete todos los campos',
            icon: 'error',
            confirmButtonText: 'Volver'
        })
    }

  return (
    <div>
        {error()}
    </div>
  )
}

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

    return (
        <div>
            {success()}
        </div>
    );
};

SweetAlerts.AlertSuccess = AlertSuccess;
SweetAlerts.AlertFailed = AlertFailed;


export default SweetAlerts