import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Imagine Dragons",
    "Twenty One Pilots",
    "React",
  ]);
  const handleAdd = () => {
    setCategories((oldCategories) => [...oldCategories, "NF"]);
  };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};
