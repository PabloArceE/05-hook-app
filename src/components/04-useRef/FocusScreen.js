import React, { useRef } from "react";

import "../../styles.css";

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={ inputRef } 
        className="form-control" 
        placeholder="Escriba algo aquí" 
      />

      <button 
        className="btn btn-outline-primary mt-5"
        onClick={ handleClick }
      >Focus</button>
    </div>
  );
};
