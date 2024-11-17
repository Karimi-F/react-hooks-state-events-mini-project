import React from "react";
import Task from "./Task";

function TaskList({tasks, category, onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task)=>(
        <Task 
        key={task.id}
        task={task}
        category={category}
        onDeleteTask={onDeleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;
