import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);   
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });    
  };

  return [values, handleInputChange, reset];
};

// Este custom hook sirve para cambiar el valor del un campo en un formulario
// Recibe un objeto con el nombre del campo y modifica su valor
// devolviendo un array con el nuevo state y el handler para modificar el valor del campo
