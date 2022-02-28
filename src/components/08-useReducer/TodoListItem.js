import React from "react";

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li key={todo.id} className="list-group-item list">
      <p
        className={`fs-4 ${todo.done && "completed"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-outline-danger "
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
};
