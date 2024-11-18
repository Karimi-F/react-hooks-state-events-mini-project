import React from "react";
import Task from "./Task"

function TaskList({tasks, setTasks, selectedCategory="All"}) {


  //return only tasks list matching category 
  const displayedTasks = tasks.filter((task)=> {
    //Check if selectedCategory is All, return All, else return tasks with matching selectedCategory
    return selectedCategory ==="All" ? true : task.category === selectedCategory
  })
  
  //map through list to get data for each Task Component
  const tasksLi = displayedTasks.map((task)=>(
      <Task key={task.id} 
            category={task.category} 
            text={task.text} 
            onDelete={()=> handleDeleteTask(task.id)}
            />
    )
  )
 //function that deletes tasks
  function handleDeleteTask(id){
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  return (
    <div className="tasks">
      {tasksLi}
    </div>
  );
}

export default TaskList;
