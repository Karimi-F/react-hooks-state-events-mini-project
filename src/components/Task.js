import React from "react";

function Task({task, onDeleteTask}) {
  if(!task){
    console.log("Task is undefined");
    return null;
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button 
      className="delete"
      onClick={()=>onDeleteTask (task.id)}
      >
      X</button>
    </div>
  );
}

export default Task;
