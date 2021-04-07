import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
};
