import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hello world");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
};
