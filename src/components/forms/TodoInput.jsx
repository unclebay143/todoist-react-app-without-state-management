import React from "react";

const TodoInput = ({ name, value, handleChange }) => {
  return (
    <input
      name={name}
      type='text'
      value={value}
      onChange={handleChange}
      id='todo-input'
      placeholder='Title...'
    />
  );
};

export default TodoInput;
