import React from "react";
import SweetAlerts from "@/Components/SweetAlerts";

const TestPage = () => {
  return (
    <div>
      <h1>Esta es una página de prueba</h1>
      <button onClick={<SweetAlerts></SweetAlerts>}> Boton ejemplo</button>
    </div>
  );
};

export default TestPage;
