import React, { useReducer } from "react";

import todoReducer from "./todoReducer";

import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Estado inicial",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-outline-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
            />

            <div class="d-grid gap-2">
              <button className="btn btn-outline-primary mt-1">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
