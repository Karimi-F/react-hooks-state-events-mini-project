import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const[tasks,setTasks] = React.useState(
    TASKS.map((task,index)=>({...task,id:index + 1})));

  const[selectedCategory, setSelectedCategory] = React.useState("All");

  const handleAddTask = (newTask) => {
    setTasks([...tasks,{id:tasks.length+1, ...newTask}]);
  };

  const handleDeleteTask = (taskId)=> {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = tasks.filter(
    (task) => selectedCategory === "All" || task.category === selectedCategory
  );

  console.log(filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
      tasks={filteredTasks}
      onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
