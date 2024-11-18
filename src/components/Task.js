import React from "react";

function Task({category, text, onDelete}) {
  return (
    <li className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </li>
  );
}

export default Task;
