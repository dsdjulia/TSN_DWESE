import React from 'react'
import Swal from 'sweetalert2'
// rafce para escribir la estructura

const SweetAlerts = () => {

    function error(){
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
  return (
    <div>
        {error()}
    </div>
  )
}

export default SweetAlerts