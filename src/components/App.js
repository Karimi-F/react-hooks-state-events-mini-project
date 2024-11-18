import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks ,setTasks] = useState(TASKS)
  const [categories ] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  // function that sets category and is accessible to both CategoryFilter and TaskList
  function handleCategoryChange(category){
    setSelectedCategory(category)
    
  }
  //function that updates form 
  function onTaskFormSubmit(newTask){
    setTasks((prevTasks)=> [...prevTasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} 
                      selectedCategory={selectedCategory}
                      handleCategoryChange={handleCategoryChange}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories}/>
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory}/>
    </div>
  )
}

export default App;