import React, { useReducer } from "react";

import todoReducer from "./todoReducer";

import "./styles.css";
import { useForm } from "../../hooks/useForm";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Estado inicial",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [{ description }, handleInputChange] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center fs-4">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-outline-danger ">X</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Ingresar tarea"
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
            />

            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-1" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
