import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 2) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };   

    handleAdd(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Ingresar tarea"
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />

        <div className="d-grid gap-2">
          <button className="btn btn-outline-primary mt-1" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
