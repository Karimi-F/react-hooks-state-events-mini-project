import React from "react";

function CategoryFilter({categories, selectedCategory, onCategorySelect}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
        <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
