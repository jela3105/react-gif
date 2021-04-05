import React, { useState } from "react";

export const GifExpertApp = () => {
  //const categories = ["Imagine Dragons", "Twenty One Pilots", "React"];
  const [categories, setCategories] = useState([
    "Imagine Dragons",
    "Twenty One Pilots",
    "React",
  ]);
  const handleAdd = () => {
    //setCategories([...categories, "NF"]);
    setCategories((oldCategories) => [...oldCategories, "NF"]);
  };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {categories}
    </div>
  );
};
