import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-wrapper mt-3">
      <input
        className="todo-input"
        placeholder="Add your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default TodoInput;
