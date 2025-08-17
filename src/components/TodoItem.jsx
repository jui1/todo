import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newText) => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <TodoEdit
          initialValue={todo.text}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          {/* <span onClick={() => onToggle(todo.id)}>{todo.text}</span> */}

          <i
  className={`fas ${todo.completed ? 'fa-check-circle' : 'fa-circle'} text-success`}
  onClick={() => onToggle(todo.id)}
  title="Toggle Complete"
  style={{ marginRight: '12px', fontSize: '18px', cursor: 'pointer' }}
></i>
<span className="flex-grow-1">{todo.text}</span>

          <div className="todo-icons">
            <i className="fas fa-edit" onClick={() => setIsEditing(true)}></i>
            <i className="fas fa-trash-alt" onClick={() => onDelete(todo.id)}></i>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
