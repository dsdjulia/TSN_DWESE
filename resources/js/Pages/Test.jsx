import React from "react";
import { showErrorAlert, showSuccessAlert, showModificableAlert } from "../Components/SweetAlerts";
import { buscarEstudio } from "@/Components/ListaIC";


const TestPage = () => {

  // console.log(buscarEstudio('CV'));
  
  return (
    <div>
      <h1>Esta es una página de prueba</h1>
      <button onClick={showErrorAlert}> Boton Alerta</button>
      <button onClick={showSuccessAlert}> Boton Success</button>
      
      <button onClick={() => showModificableAlert('Titulo ejemplo', 'texto ejemplo', 'success')}> Alerta Modificable</button> 
      {/* Si no usas () => Se ejecuta directamente */}

      
    </div>
  );
};

export default TestPage;
