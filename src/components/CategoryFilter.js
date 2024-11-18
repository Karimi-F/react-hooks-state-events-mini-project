import React from "react";

function CategoryFilter({categories, selectedCategory, handleCategoryChange}) {
  const buttonsCategory = categories.map((category)=>
    (
        <button key={category} 
                onClick={()=>handleCategoryChange(category)}
                className={selectedCategory === category ? "selected" : "" }>{category}</button>
    )
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsCategory}
    </div>
  );
}

export default CategoryFilter;