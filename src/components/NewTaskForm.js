import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = React.useState({
    text:'',
    category: categories[1]
  });

  function handleOnChange(event) {
    const addedTask = { ...newTask, [event.target.name]: event.target.value };
    setNewTask(addedTask);

    console.log("Here is a new task:", addedTask);
  }

  function handleSubmit (event){
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({text:'',category:categories[1]});
  }
 
  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={newTask.text}
        onChange={handleOnChange} 
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={newTask.category}
        onChange={handleOnChange}
        >
          {categories.filter((category) => category !== "All") .map((category) => (
            <option key={category} value={category}>{category}</option>
          ))
           }
          {/* render <option> elements for each category here */}
        {/* <option value={"All"}> All</option>
        <option value={"Food"}>Food</option>
        <option value={"Code"}>Code</option>
        <option value={"Money"}>Money</option>
        <option value={"Misc"}>Misc</option> */}
        </select>
      </label>
      <input 
      type="submit" 
      value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
